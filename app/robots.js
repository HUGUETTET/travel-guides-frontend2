export default function robots() {
    const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
    return {
        rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/studio',
        },
        sitemap: FRONTEND_URL + '/sitemap.xml',
    }
}