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
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
