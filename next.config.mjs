/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 's3.ap-south-2.amazonaws.com',
        hostname: 'd12t7i0duidj85.cloudfront.net',
        
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
