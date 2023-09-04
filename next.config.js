/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/:file',
        destination: '/api/.well-known/:file',
        permanent: false,
      },
    ];
  },
  images: { domains: ['lh3.googleusercontent.com'] },
};

module.exports = nextConfig;
