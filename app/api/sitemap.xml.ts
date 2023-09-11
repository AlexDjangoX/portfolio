import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const routes = [
    {
      url: 'https://portfolio-alexander.vercel.app/',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://portfolio-alexander.vercel.app/case-studies',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://portfolio-alexander.vercel.app/contact',
      lastModified: new Date().toISOString(),
    },
  ];

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
                <loc>${route.url}</loc>
                <lastmod>${route.lastModified}</lastmod>
            </url>
        `;
        })
        .join('')}
    </urlset>
  `;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
