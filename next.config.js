/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logoipsum.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thispersondoesnotexist.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
