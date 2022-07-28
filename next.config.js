/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['developers.kakao.com'],
  },
  env: {
    GA: process.env.GA,
    KAKAO_DEVELOPERS_JAVASCRIPT_KEY:
      process.env.KAKAO_DEVELOPERS_JAVASCRIPT_KEY,
  },
};

module.exports = nextConfig;
