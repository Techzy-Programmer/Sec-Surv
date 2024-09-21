/** @type {import('next').NextConfig} */

const nextConfig = {
  // ...other configuration
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default nextConfig;
