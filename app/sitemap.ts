import { MetadataRoute } from 'next';
import { translations } from './utils/translations';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cvtlogistics.com';

    // Static Routes
    const routes = [
        '',
        '/about',
        '/services',
        '/services/road',
        '/services/sea',
        '/services/air',
        '/services/rail',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Routes
    const blogPosts = translations.en.blog.posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(), // Ideally this would be the post date
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogPosts];
}
