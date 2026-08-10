export const dynamic = 'force-static';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import MarkdownPost from '@/components/MarkdownPost';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => {
    if (post.category) {
      return { slug: [post.category, post.slug] };
    }
    return { slug: [post.slug] };
  });
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
    return {
      title: 'Page Not Found',
    };
  }

  const siteUrl = 'https://deedpolluk.uk';
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
    notFound();
  }

  return <MarkdownPost post={post} />;
}
