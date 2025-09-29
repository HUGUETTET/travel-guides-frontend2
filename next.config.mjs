/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "cdn.sanity.io",
    //     }
    //   ],
    domains: ["cdn.sanity.io"], // 👈 aquí agregas el dominio de Sanity
    }
  }
  export default nextConfig;