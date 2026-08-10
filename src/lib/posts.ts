import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PostFrontmatter {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  heroTitle?: string;
  heroSubtitle?: string;
  category?: string;
  slug?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  ogImage?: string;
  canonical?: string;
  published?: boolean;
  faqs?: FAQItem[];
  keywords?: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  category: string;
  urlPath: string; // e.g. /hello or /guides/hello
  contentHtml: string;
  rawContent: string;
  readingTime: number;
}

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export async function getPostBySlug(slug: string, category?: string): Promise<Post | null> {
  const allPosts = await getAllPosts();
  const targetCategory = (category || '').toLowerCase().trim();
  const targetSlug = slug.toLowerCase().trim();

  const post = allPosts.find((p) => {
    const postSlug = p.slug.toLowerCase().trim();
    const postCat = p.category.toLowerCase().trim();
    return postSlug === targetSlug && postCat === targetCategory;
  });

  return post || null;
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse YAML frontmatter
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    if (frontmatter.published === false) {
      continue;
    }

    // Determine slug and category from frontmatter or filename
    const defaultSlug = fileName.replace(/\.md$/, '');
    const slug = (frontmatter.slug || defaultSlug).replace(/^\//, '').trim();
    const category = (frontmatter.category || '').replace(/^\//, '').replace(/\/$/, '').trim();

    // Determine URL path: /hello or /category_name/hello
    const urlPath = category ? `/${category}/${slug}` : `/${slug}`;

    // Convert markdown content to HTML using remark + remark-gfm
    const processedContent = await remark()
      .use(gfm)
      .use(html, { sanitize: false })
      .process(content);

    const contentHtml = processedContent.toString();
    const readingTime = calculateReadingTime(content);

    posts.push({
      ...frontmatter,
      title: frontmatter.title || 'Untitled Post',
      metaDescription: frontmatter.metaDescription || '',
      datePublished: frontmatter.datePublished || new Date().toISOString().split('T')[0],
      slug,
      category,
      urlPath,
      contentHtml,
      rawContent: content,
      readingTime,
    });
  }

  // Sort posts by publication date descending
  return posts.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const targetCategory = category.toLowerCase().trim();
  return allPosts.filter((p) => p.category.toLowerCase().trim() === targetCategory);
}

export async function getAllCategories(): Promise<{ name: string; count: number }[]> {
  const allPosts = await getAllPosts();
  const categoryMap = new Map<string, number>();

  allPosts.forEach((post) => {
    if (post.category) {
      const cat = post.category;
      categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
    }
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
}

export async function getRootPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((p) => !p.category);
}

export async function getCategorizedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((p) => Boolean(p.category));
}
