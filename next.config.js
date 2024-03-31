/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  swcMinify: false,
  compiler: {
    removeConsole: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
