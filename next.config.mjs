/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tours',
        destination: '/hotels/avari-lahore',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
