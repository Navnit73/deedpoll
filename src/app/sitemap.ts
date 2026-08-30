export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://deedpolluk.uk';
  const currentDate = new Date();

  // Core pages & primary interactive tools (High Priority)
  const corePages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/change-name-in-uk-by-deedpoll', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/name-change-letters-generator', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/free-deed-poll-template-uk', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/checklist', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/faq', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/before-you-start', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/my-deed-poll-was-rejected', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/video', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/contact-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/terms-and-conditions', priority: 0.5, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  // Guide pages & tools
  const guidePages = [
    { route: '/change-name-on-driving-licence-dvla-uk', priority: 0.9 },
    { route: '/child-deed-poll-uk', priority: 0.9 },
    { route: '/deed-poll-vs-statutory-declaration-uk', priority: 0.9 },
    { route: '/how-to-change-your-name-uk', priority: 0.9 },
    { route: '/how-to-legally-change-your-name-uk', priority: 0.9 },
    { route: '/how-to-change-name-on-passport-uk', priority: 0.9 },
    { route: '/how-to-change-name-after-marriage-uk', priority: 0.9 },
    { route: '/how-to-change-surname-uk', priority: 0.8 },
    { route: '/how-much-does-it-cost-to-change-your-name-uk', priority: 0.8 },
    { route: '/how-to-change-childs-surname-uk', priority: 0.8 },
    { route: '/how-to-change-name-on-birth-certificate-uk', priority: 0.8 },
    { route: '/how-to-change-first-name-uk', priority: 0.8 },
    { route: '/how-to-change-last-name-uk', priority: 0.8 },
    { route: '/how-to-change-name-by-deed-poll-uk', priority: 0.8 },
    { route: '/how-to-change-company-name-uk', priority: 0.8 },
    { route: '/calculate-stamp-duty-england', priority: 0.8 },
    { route: '/after-tax-pay-calculator-uk', priority: 0.8 },
    { route: '/national-insurance-and-tax-calculator-uk', priority: 0.8 },
    { route: '/uk-mortgage-affordability-calculator', priority: 0.8 },
    { route: '/uk-working-days-calculator', priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
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
