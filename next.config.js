/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
// const nextConfig = {
//   reactStrictMode: true,
// }
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: false,
    dest: 'public',

  }
})

module.exports = nextConfig
