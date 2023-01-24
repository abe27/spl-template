/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    API_PUBLISH: process.env.API_HOST,
    API_HOST: `${process.env.API_HOST}/api/v1`,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
};

module.exports = nextConfig;
