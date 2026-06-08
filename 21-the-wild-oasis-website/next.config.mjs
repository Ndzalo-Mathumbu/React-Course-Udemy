/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ywucaamsuyzalyxdhjlv.supabase.co",
        pathname: "/storage/v1/object/public/cabin-img/**",
      },
    ],
  },
};

export default nextConfig;
