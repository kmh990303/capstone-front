/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com', 'localens-image.s3.ap-northeast-2.amazonaws.com'],
    },
    output: 'standalone',
};

export default nextConfig;
