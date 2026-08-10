import React from 'react';
import Link from 'next/link';
import { Post } from '@/lib/posts';

interface MarkdownPostProps {
  post: Post;
  siteUrl?: string;
}

export default function MarkdownPost({ post, siteUrl = 'https://deedpolluk.uk' }: MarkdownPostProps) {
  const fullUrl = `${siteUrl}${post.urlPath}`;

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.ogImage ? `${siteUrl}${post.ogImage}` : `${siteUrl}/og-image.jpg`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Organization',
      name: post.author || 'Deed Poll UK Editorial Team',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deed Poll UK',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    inLanguage: 'en-GB',
  };

  // FAQPage JSON-LD Schema (if faqs exist)
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // BreadcrumbList JSON-LD Schema
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ];

  if (post.category) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: post.category.charAt(0).toUpperCase() + post.category.slice(1),
      item: `${siteUrl}/${post.category}`,
    });
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: post.title,
      item: fullUrl,
    });
  } else {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: post.title,
      item: fullUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <article className="min-h-screen bg-white text-[#0b0c0c]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* HERO SECTION */}
      <section className="bg-[#1d70b8] text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100 font-medium">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:underline underline-offset-2 hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none text-blue-200">
                ›
              </li>
              {post.category && (
                <>
                  <li className="capitalize">
                    <span className="text-blue-100 font-semibold">
                      {post.category}
                    </span>
                  </li>
                  <li aria-hidden="true" className="select-none text-blue-200">
                    ›
                  </li>
                </>
              )}
              <li className="text-white font-bold truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Hero Titles */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
            {post.heroTitle || post.title}
          </h1>

          {post.heroSubtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed mb-6 font-normal">
              {post.heroSubtitle}
            </p>
          )}

          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100 pt-2 border-t border-blue-400/50">
            {post.author && (
              <div className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Published {post.datePublished}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Callout box for quick action */}
        <div className="bg-[#f3f2f1] border-l-[6px] border-[#00703c] p-5 mb-10 rounded-r-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg text-[#0b0c0c]">Ready to Change Your Name?</h3>
            <p className="text-sm text-gray-700">Create your official UK Deed Poll online in 2 minutes.</p>
          </div>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-flex items-center justify-center bg-[#00703c] hover:bg-[#005a30] text-white font-bold px-5 py-2.5 rounded transition-colors text-sm whitespace-nowrap"
          >
            Get Free Deed Poll →
          </Link>
        </div>

        {/* PROSE RENDERED MARKDOWN HTML */}
        <div
          className="prose prose-lg max-w-none text-[#0b0c0c] leading-relaxed
            [&>h1]:text-3xl [&>h1]:sm:text-4xl [&>h1]:font-extrabold [&>h1]:mt-10 [&>h1]:mb-4 [&>h1]:tracking-tight
            [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-[#0b0c0c] [&>h2]:border-b [&>h2]:border-gray-200 [&>h2]:pb-2
            [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-[#1d70b8]
            [&>p]:mb-5 [&>p]:text-base [&>p]:sm:text-lg [&>p]:text-gray-800
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6 [&>ul]:text-base [&>ul]:sm:text-lg
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6 [&>ol]:text-base [&>ol]:sm:text-lg
            [&>blockquote]:border-l-4 [&>blockquote]:border-[#1d70b8] [&>blockquote]:bg-[#f3f2f1] [&>blockquote]:px-5 [&>blockquote]:py-4 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-gray-800
            [&>a]:text-[#1d70b8] [&>a]:underline [&>a]:underline-offset-4 [&>a]:font-medium hover:[&>a]:text-[#003078]
            [&>table]:w-full [&>table]:my-8 [&>table]:border-collapse [&>table]:border [&>table]:border-gray-300 [&>table]:text-left
            [&>table_th]:bg-[#f3f2f1] [&>table_th]:p-3 [&>table_th]:font-bold [&>table_th]:border [&>table_th]:border-gray-300 [&>table_th]:text-sm [&>table_th]:sm:text-base
            [&>table_td]:p-3 [&>table_td]:border [&>table_td]:border-gray-300 [&>table_td]:text-sm [&>table_td]:sm:text-base
            [&>hr]:my-10 [&>hr]:border-gray-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* FAQ ACCORDION SECTION (IF FAQS DEFINED) */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-14 pt-10 border-t-2 border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0b0c0c]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#f3f2f1] border-l-4 border-[#1d70b8] p-5 rounded-r-md [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-lg text-[#0b0c0c] cursor-pointer list-none">
                    <span>{faq.question}</span>
                    <span className="ml-2 transition-transform duration-200 group-open:rotate-180 text-[#1d70b8]">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-base text-gray-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA CARD */}
        <div className="mt-16 bg-[#1d70b8] text-white p-8 md:p-10 text-center rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Change Your Name Legally in Minutes
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            100% Free, legally valid across the UK. Accepted by Passport Office, DVLA, HMRC, and all banks.
          </p>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="inline-flex items-center justify-center bg-[#ffdd00] hover:bg-yellow-400 text-[#0b0c0c] font-extrabold text-lg px-8 py-3.5 rounded shadow transition-all active:translate-y-0.5"
          >
            Create Your Free Deed Poll Now →
          </Link>
        </div>
      </div>
    </article>
  );
}
