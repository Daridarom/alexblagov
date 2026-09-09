import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const destination = resolve(projectRoot, "outputs/alexblagov.ru");
const build = spawnSync(process.execPath, [resolve(projectRoot, "node_modules/next/dist/bin/next"), "build"], {
  cwd: projectRoot,
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "false",
    STATIC_EXPORT: "true",
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_SITE_URL: "https://alexblagov.ru/",
  },
});

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

// Only replace this reproducible build directory, never the live site.
rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });
cpSync(resolve(projectRoot, "out"), destination, { recursive: true });
console.log(`Domain build ready: ${destination}`);
