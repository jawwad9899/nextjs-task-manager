/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    turbo: {
      loaders: {
        // Option format
        ".md": [
          {
            loader: "@mdx-js/loader",
            options: {
              format: "md",
            },
          },
        ],
      },
    },
  },
};

module.exports = nextConfig;
