/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mrqexlsyjusnkvogusgj.supabase.co",
        pathname: "/storage/v1/object/public/chicanodev/assets/**",
      },
    ],
  },
};
