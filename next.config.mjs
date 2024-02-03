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
};

export default nextConfig;
