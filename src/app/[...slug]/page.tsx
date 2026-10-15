export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CATEGORY_INFO,
  getAllCategories,
  getAllPosts,
  getCategoryLabel,
  getPostBySlug,
  getPostsByCategory,
  getRelatedPosts,
} from '@/lib/posts';
import MarkdownPost from '@/components/MarkdownPost';

const siteUrl = 'https://deedpolluk.uk';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const postParams = posts.map((post) => {
    if (post.category) {
      return { slug: [post.category, post.slug] };
    }
    return { slug: [post.slug] };
  });
  const categoryParams = categories.map((c) => ({ slug: [c.name] }));
  return [...postParams, ...categoryParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugArray } = await params;
  if (!slugArray || slugArray.length === 0 || slugArray.length > 2) {
    return { title: 'Page Not Found' };
  }

  const category = slugArray.length === 2 ? slugArray[0] : '';
  const slug = slugArray.length === 2 ? slugArray[1] : slugArray[0];

  const post = await getPostBySlug(slug, category);

  if (!post) {
    if (slugArray.length === 1) {
      const categoryPosts = await getPostsByCategory(slug);
      if (categoryPosts.length > 0) {
        const label = getCategoryLabel(slug);
        const description = CATEGORY_INFO[slug]?.description || `${label} for UK residents.`;
        const canonicalUrl = `${siteUrl}/${slug}`;
        return {
          title: `${label} | Deed Poll UK`,
          description,
          alternates: { canonical: canonicalUrl },
          openGraph: { title: label, description, url: canonicalUrl, type: 'website', locale: 'en_GB' },
        };
      }
    }
    return {
      title: 'Page Not Found',
    };
  }

  const canonicalUrl = post.canonical || `${siteUrl}${post.urlPath}`;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-GB': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      type: 'article',
      locale: 'en_GB',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: post.ogImage || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      images: [post.ogImage || '/og-image.jpg'],
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'United Kingdom',
      'content-language': 'en-GB',
    },
  };
}

export default async function CatchAllSlugPage({ params }: Props) {
  const { slug: slugArray } = await params;
  if (!slugArray || slugArray.length === 0 || slugArray.length > 2) {
    notFound();
  }

  const category = slugArray.length === 2 ? slugArray[0] : '';
  const slug = slugArray.length === 2 ? slugArray[1] : slugArray[0];

  const post = await getPostBySlug(slug, category);

  if (!post) {
    if (slugArray.length === 1) {
      const categoryPosts = await getPostsByCategory(slug);
      if (categoryPosts.length > 0) {
        return <CategoryHub category={slug} posts={categoryPosts} />;
      }
    }
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);
  return <MarkdownPost post={post} relatedPosts={relatedPosts} />;
}

function CategoryHub({
  category,
  posts,
}: {
  category: string;
  posts: Awaited<ReturnType<typeof getPostsByCategory>>;
}) {
  const label = getCategoryLabel(category);
  const description = CATEGORY_INFO[category]?.description;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: label,
    description,
    url: `${siteUrl}/${category}`,
    inLanguage: 'en-GB',
    hasPart: posts.map((p) => ({
      '@type': 'Article',
      headline: p.title,
      url: `${siteUrl}${p.urlPath}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#0b0c0c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <section className="bg-[#1d70b8] text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100 font-medium">
            <Link href="/" className="hover:underline underline-offset-2 hover:text-white">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2 text-blue-200">
              ›
            </span>
            <span className="text-white font-bold">{label}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {label}
          </h1>
          {description && <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">{description}</p>}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <ul className="space-y-5">
          {posts.map((p) => (
            <li key={p.urlPath}>
              <Link
                href={p.urlPath}
                className="block border border-gray-300 rounded-md p-6 hover:border-[#1d70b8] hover:bg-[#f3f2f1] transition-colors"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d70b8] mb-2">{p.title}</h2>
                <p className="text-gray-800 mb-3">{p.metaDescription}</p>
                <p className="text-sm text-gray-600">
                  {p.readingTime} min read · Updated {p.dateModified || p.datePublished}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
