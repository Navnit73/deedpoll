import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import StructuredData from '@/components/StructuredData';
import ShareWidget from '@/components/ShareWidget';
import DeedPollForm from '@/components/DeedPollForm';

const siteUrl = 'https://deedpolluk.uk';

export type GuideFaq = { q: string; a: string };
export type GuideLink = { href: string; title: string; note?: string };

export function guideMetadata(slug: string, title: string, description: string): Metadata {
  const path = `/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { 'en-GB': path, 'x-default': path },
    },
    openGraph: { title, description, url: `${siteUrl}${path}`, type: 'article', locale: 'en_GB' },
    twitter: { title, description },
  };
}

export function GuideSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export function Callout({ tone = 'info', children }: { tone?: 'info' | 'warn' | 'tip'; children: ReactNode }) {
  const styles = {
    info: 'border-[#1d70b8] bg-blue-50 text-gray-800',
    warn: 'border-amber-500 bg-amber-50 text-amber-900',
    tip: 'border-[#00703c] bg-green-50 text-gray-800',
  }[tone];
  return <div className={`border-l-4 px-5 py-4 rounded-r-md text-sm sm:text-base ${styles}`}>{children}</div>;
}

export function GuideTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-[#1d70b8] text-white">
            {head.map((h) => (
              <th key={h} className="text-left p-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`p-3 border-b border-gray-200 align-top ${cIdx === 0 ? 'font-semibold text-gray-900' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type GuideArticleProps = {
  slug: string;
  breadcrumb: string;
  h1: string;
  description: string;
  readMinutes: number;
  quickAnswer: ReactNode;
  toc: [string, string][];
  faqs: GuideFaq[];
  related: GuideLink[];
  formHeading: string;
  formIntro: ReactNode;
  children: ReactNode;
};

export default function GuideArticle({
  slug, breadcrumb, h1, description, readMinutes, quickAnswer, toc, faqs, related, formHeading, formIntro, children,
}: GuideArticleProps) {
  const pageUrl = `${siteUrl}/${slug}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-[#1d70b8] underline underline-offset-2">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><Link href="/name-change" className="hover:text-[#1d70b8] underline underline-offset-2">Name Change</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-gray-700 font-medium">{breadcrumb}</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">{h1}</h1>

        <div className="text-sm text-gray-500 mb-8 flex flex-col gap-1">
          <p><strong>Written by</strong> Deed Poll UK Editorial Team</p>
          <p><strong>Reviewed</strong> October 2026 · {readMinutes}-minute read</p>
        </div>

        <div className="border-l-4 border-[#1d70b8] bg-blue-50 px-5 py-4 mb-6 rounded-r-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1d70b8] mb-2">Quick answer</p>
          <div className="text-base sm:text-lg leading-relaxed text-gray-800">{quickAnswer}</div>
        </div>

        <a
          href="#create-deed-poll"
          className="inline-block mb-10 bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-6 rounded shadow-[0_3px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all"
        >
          Skip to: create your deed poll ↓
        </a>

        <nav aria-label="On this page" className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm sm:text-base text-[#1d70b8] list-decimal pl-5">
            {[...toc, ['create-deed-poll', 'Create your deed poll'], ['faq', 'Frequently asked questions']].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline underline-offset-2">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {children}

        <section className="mb-14 bg-[#f3f2f1] border border-gray-300 rounded-xl p-5 sm:p-8">
          <DeedPollForm embedded heading={formHeading} intro={formIntro} />
        </section>

        <section id="faq" className="mb-14 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-2 border-gray-100 pb-3">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-lg p-5 open:bg-gray-50">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between gap-4">
                  {q}
                  <span className="text-[#1d70b8] group-open:rotate-45 transition-transform select-none" aria-hidden="true">+</span>
                </summary>
                <p className="text-gray-700 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-14 border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-6">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(({ href, title, note }) => (
              <Link key={href} href={href} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#1d70b8] transition-colors group">
                <h3 className="font-bold text-gray-900 group-hover:text-[#1d70b8] transition-colors">{title}</h3>
                {note && <p className="text-sm text-gray-600 mt-1">{note}</p>}
                <span className="text-[#1d70b8] text-sm mt-3 inline-block font-medium">Read guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <ShareWidget title={h1} description={description} />

        <StructuredData
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: h1,
              description,
              author: { '@type': 'Organization', name: 'Deed Poll UK Editorial Team' },
              publisher: {
                '@type': 'Organization',
                name: 'Deed Poll UK',
                logo: { '@type': 'ImageObject', url: `${siteUrl}/og-image.jpg` },
              },
              image: `${siteUrl}/og-image.jpg`,
              datePublished: '2026-10-17T08:00:00+00:00',
              dateModified: '2026-10-17T08:00:00+00:00',
              mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Name Change', item: `${siteUrl}/name-change` },
                { '@type': 'ListItem', position: 3, name: breadcrumb, item: pageUrl },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ]}
        />
      </div>
    </main>
  );
}
