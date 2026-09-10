import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const indexHtml = new URL("../out/index.html", import.meta.url);

test("static build contains production metadata and current brand", async () => {
  const html = await readFile(indexHtml, "utf8");

  assert.match(html, /<html[^>]*lang=["']ru["']/i);
  assert.match(html, /Александр Благов/);
  assert.match(html, /Развивать себя\. Создавать вместе\./);
  assert.match(html, /name=["']robots["'][^>]*content=["']index, follow["']/i);
  assert.match(html, /rel=["']canonical["']/i);
  assert.match(html, /social-preview-20260909\.jpg/);
  assert.doesNotMatch(html, /signin-with-chatgpt/i);
  assert.doesNotMatch(html, /codex-preview/i);
});
