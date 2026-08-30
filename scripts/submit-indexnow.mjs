import fs from 'fs';
import https from 'https';
import path from 'path';

const FALLBACK_URLS = [
  'https://deedpolluk.uk/',
  'https://deedpolluk.uk/change-name-in-uk-by-deedpoll',
  'https://deedpolluk.uk/name-change-letters-generator',
  'https://deedpolluk.uk/free-deed-poll-template-uk',
  'https://deedpolluk.uk/checklist',
  'https://deedpolluk.uk/child-deed-poll-uk',
  'https://deedpolluk.uk/change-name-on-driving-licence-dvla-uk',
  'https://deedpolluk.uk/deed-poll-vs-statutory-declaration-uk',
  'https://deedpolluk.uk/faq',
  'https://deedpolluk.uk/how-to-change-your-name-uk',
  'https://deedpolluk.uk/how-to-legally-change-your-name-uk',
  'https://deedpolluk.uk/how-to-change-name-on-passport-uk',
  'https://deedpolluk.uk/how-to-change-name-after-marriage-uk',
  'https://deedpolluk.uk/how-to-change-surname-uk',
  'https://deedpolluk.uk/how-much-does-it-cost-to-change-your-name-uk',
  'https://deedpolluk.uk/how-to-change-childs-surname-uk',
  'https://deedpolluk.uk/how-to-change-name-on-birth-certificate-uk',
  'https://deedpolluk.uk/how-to-change-first-name-uk',
  'https://deedpolluk.uk/how-to-change-last-name-uk',
  'https://deedpolluk.uk/how-to-change-name-by-deed-poll-uk',
  'https://deedpolluk.uk/how-to-change-company-name-uk',
  'https://deedpolluk.uk/before-you-start',
  'https://deedpolluk.uk/my-deed-poll-was-rejected',
  'https://deedpolluk.uk/calculate-stamp-duty-england',
  'https://deedpolluk.uk/after-tax-pay-calculator-uk',
  'https://deedpolluk.uk/national-insurance-and-tax-calculator-uk',
  'https://deedpolluk.uk/uk-mortgage-affordability-calculator',
  'https://deedpolluk.uk/uk-working-days-calculator',
  'https://deedpolluk.uk/how-to-check-your-income-tax-uk',
  'https://deedpolluk.uk/how-to-contact-hmrc-and-claim-a-tax-refund'
];

async function submitToIndexNow() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  let urls = FALLBACK_URLS;
  
  if (fs.existsSync(sitemapPath)) {
    try {
      const xml = fs.readFileSync(sitemapPath, 'utf8');
      const parsedUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
      if (parsedUrls.length > 0) {
        urls = Array.from(new Set([...urls, ...parsedUrls]));
      }
    } catch (e) {
      console.warn('Could not parse sitemap.xml, using fallback list');
    }
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow for immediate search engine indexing...`);

  const payload = JSON.stringify({
    host: 'deedpolluk.uk',
    key: 'fb2ffe0022a7482d935b5872964b5dd5',
    keyLocation: 'https://deedpolluk.uk/fb2ffe0022a7482d935b5872964b5dd5.txt',
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode} ${res.statusCode === 202 ? '(Accepted by IndexNow / Bing / Yandex)' : ''}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.write(payload);
  req.end();
}

submitToIndexNow();
