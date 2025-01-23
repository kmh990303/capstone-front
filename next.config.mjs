/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com', 'localens-image.s3.ap-northeast-2.amazonaws.com', 'your-s3-bucket.s3.region.amazonaws.com'],
    },
};

export default nextConfig;
