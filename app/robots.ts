import type { MetadataRoute } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production';

// Search and retrieval crawlers that power AI assistant answers.
const searchBots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Claude-SearchBot', 'Claude-User'];

// Training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended) are not listed: policy pending a decision by the lead.
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: { userAgent: '*', disallow: '/' } };

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: searchBots, allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
