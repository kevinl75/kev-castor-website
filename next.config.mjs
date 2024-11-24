/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/kev-castor-website",
  assetPrefix: "/kev-castor-website/",
  output: "export",
};
export default nextConfig;
