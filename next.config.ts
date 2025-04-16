/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← 静的エクスポートモードにする！
  trailingSlash: true, // ← ページのURLを「/」で終わらせる
  images: {
    unoptimized: true, // ← imageコンポーネント使うなら必要
  },
  basePath: "/my-portfolio",
};

module.exports = nextConfig;
