/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const directusHost = process.env.NEXT_PUBLIC_DIRECTUS_URL || ''
    if (!directusHost) return []

    // Proxy all Directus API calls through Next.js to avoid CORS in the browser
    return [
      {
        source: '/directus/:path*',
        destination: `${directusHost}/:path*`,
      },
    ]
  },
};

export default nextConfig;
