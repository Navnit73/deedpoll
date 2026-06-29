export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deedpolluk.uk';


  // Core pages
  const corePages = [
    '',
    '/change-name-in-uk-by-deedpoll',
    '/before-you-start',
    '/checklist',
    '/faq',
    '/my-deed-poll-was-rejected',
    '/video'
  ].map((route) => ({
    url: `${baseUrl}${route}`,

    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Guide pages
  const guidePages = [
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
    '/how-to-change-name-by-deed-poll-uk'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
  
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...corePages, ...guidePages];
}
