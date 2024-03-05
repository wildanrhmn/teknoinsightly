/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: () => [
    {
      source: "/",
      destination: "/home",
      permanent: false,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
