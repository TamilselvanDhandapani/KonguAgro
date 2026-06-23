import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';



async function generateSitemap() {
  // 1. Define your core static pages
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/products', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/request-quote', changefreq: 'monthly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
    { url: '/terms-conditions', changefreq: 'yearly', priority: 0.5 }
  ];

  
  try {
    // 3. Create a stream pointing to your live domain
    const stream = new SitemapStream({ hostname: 'https://www.kongunaduagro.com' });
    
    // 4. Generate the XML string
    const sitemapData = await streamToPromise(Readable.from(links).pipe(stream));
    
    // 5. Write directly to the "dist" folder so it gets deployed with your SSG build
    const distPath = resolve(process.cwd(), 'dist');
    if (!existsSync(distPath)) {
      mkdirSync(distPath, { recursive: true });
    }
    
    writeFileSync(resolve(distPath, 'sitemap.xml'), sitemapData.toString());
    
    console.log(`✅ KAPS Sitemap successfully generated with ${links.length} URLs!`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

generateSitemap();