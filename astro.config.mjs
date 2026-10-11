// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function githubPagesPathFix() {
  let currentBase = '/';

  return {
    name: 'github-pages-path-fix',
    hooks: {
      'astro:config:done': ({ config }) => {
        currentBase = config.base || '/';
      },
      'astro:build:done': async ({ dir }) => {
        if (!currentBase || currentBase === '/') return;
        const outDir = fileURLToPath(dir);
        const cleanBase = currentBase.replace(/\/$/, '');
        const repoPrefix = cleanBase.replace(/^\//, '') + '/';

        function processDir(currentDir) {
          const entries = fs.readdirSync(currentDir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              processDir(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
              let html = fs.readFileSync(fullPath, 'utf8');
              const hrefRegex = new RegExp(`href="\\/(?!${repoPrefix}|\\/|#|mailto:|tel:)`, 'g');
              html = html.replace(hrefRegex, `href="${cleanBase}/`);
              const srcRegex = new RegExp(`src="\\/(?!${repoPrefix}|\\/)`, 'g');
              html = html.replace(srcRegex, `src="${cleanBase}/`);
              const srcsetRegex = new RegExp(`srcset="\\/(?!${repoPrefix}|\\/)`, 'g');
              html = html.replace(srcsetRegex, `srcset="${cleanBase}/`);
              fs.writeFileSync(fullPath, html, 'utf8');
            }
          }
        }

        processDir(outDir);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://tastruken.github.io',
  integrations: [githubPagesPathFix()],
  vite: {
    plugins: [tailwindcss()]
  }
});