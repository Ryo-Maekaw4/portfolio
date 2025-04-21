const nextConfig = {
  output: "export",
  basePath: "/portfolio", // ← リポジトリ名に合わせてここを修正！
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;