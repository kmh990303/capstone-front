/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com', 'https://localens-image.s3.ap-northeast-2.amazonaws.com'],
    },
};

export default nextConfig;
