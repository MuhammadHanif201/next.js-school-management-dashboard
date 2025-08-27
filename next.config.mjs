/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true, // Set to false if you want temporary redirect
      },
    ];
  },
};

export default nextConfig;
