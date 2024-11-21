/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/kev-castor-website/" : "",
  basePath: isProd ? "/kev-castor-website" : "",
  output: "export",
};

export default nextConfig;
