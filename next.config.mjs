/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-south-2.amazonaws.com',
        
      },
    ],
  },
};


export default nextConfig;
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 's3.ap-south-2.amazonaws.com',
        
//       },
//     ],
//   },
// }
