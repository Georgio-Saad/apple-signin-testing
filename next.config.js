/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/apple-app-site-association/:file',
        destination: '/api/.well-known/apple-app-site-association/:file',
        permanent: false,
      },
    ];
  },
  images: { domains: ['lh3.googleusercontent.com'] },
};

module.exports = nextConfig;
