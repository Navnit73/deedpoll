import fs from 'fs';
import https from 'https';
import path from 'path';

async function submitToIndexNow() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: public/sitemap.xml not found.');
    process.exit(1);
  }

  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  console.log(`Found ${urls.length} URLs in sitemap.xml to submit to IndexNow.`);

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
    console.log(`STATUS: ${res.statusCode} ${res.statusCode === 202 ? '(Accepted)' : ''}`);
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
