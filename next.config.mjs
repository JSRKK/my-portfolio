/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/my-portfolio" : "",
  output: "export",
};

export default nextConfig;
