import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    const routes = ['services', 'portfolio', 'plugins', 'about', 'contact'];

    for (const route of routes) {
      const routeDir = path.join(distDir, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
      console.log(`Generated static route directory: /${route}/index.html`);
    }

    // Also write 404.html as a copy of index.html for SPA fallback
    fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);
    console.log('Generated dist/404.html SPA fallback');
  }
}
