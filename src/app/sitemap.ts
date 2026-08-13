export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://deedpolluk.uk';
  const currentDate = new Date();

  // Core pages
  const corePages = [
    '',
    '/change-name-in-uk-by-deedpoll',
    '/before-you-start',
    '/checklist',
    '/faq',
    '/my-deed-poll-was-rejected',
    '/video',
    '/contact-us',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Guide pages & tools
  const guidePages = [
    '/national-insurance-and-tax-calculator-uk',
    '/after-tax-pay-calculator-uk',
    '/calculate-stamp-duty-england',
    '/uk-mortgage-affordability-calculator',
    '/uk-working-days-calculator',
    '/how-to-change-your-name-uk',
    '/how-to-legally-change-your-name-uk',
    '/how-to-change-name-after-marriage-uk',
    '/how-to-change-surname-uk',
    '/how-much-does-it-cost-to-change-your-name-uk',
    '/how-to-change-childs-surname-uk',
    '/how-to-change-name-on-passport-uk',
    '/how-to-change-name-on-birth-certificate-uk',
    '/how-to-change-company-name-uk',
    '/how-to-change-first-name-uk',
    '/how-to-change-last-name-uk',
    '/how-to-change-name-by-deed-poll-uk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Markdown CMS Posts
  const markdownPosts = await getAllPosts();
  const cmsPostEntries = markdownPosts.map((post) => ({
    url: `${baseUrl}${post.urlPath}`,
    lastModified: post.dateModified ? new Date(post.dateModified) : new Date(post.datePublished),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...corePages, ...guidePages, ...cmsPostEntries];
}
