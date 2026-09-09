import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "alexblagov";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPages ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath,
  assetPrefix: basePath,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: isStaticExport ? "./tsconfig.pages.json" : "./tsconfig.json",
  },
};

export default nextConfig;
