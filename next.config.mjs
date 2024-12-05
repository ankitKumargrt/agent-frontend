/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.softwaresuggest.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "markovate.com",
      },
      {
        protocol: "https",
        hostname: "eduemailshop.com",
      },
      {
        protocol: "https",
        hostname: "partner.zoom.us",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "mitto.ch",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "onomatic.com",
      },
      {
        protocol: "https",
        hostname: "notifyme.tech",
      },
      {
        protocol: "https",
        hostname: "simplea.com",
      },
      {
        protocol: "https",
        hostname: "simplycontact.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
