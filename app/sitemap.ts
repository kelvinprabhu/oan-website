import type { MetadataRoute } from 'next';
import { navItems } from '@/components/layout/navItems';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...navItems.map((item) => item.href)].map((path) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
  }));
}
