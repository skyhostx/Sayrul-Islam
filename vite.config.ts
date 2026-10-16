import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const savePortraitPlugin = (): Plugin => ({
  name: 'save-portrait-plugin',
  configureServer(server) {
    server.middlewares.use('/api/save-portrait', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const { dataUrl } = JSON.parse(body);
            if (dataUrl && dataUrl.includes('base64,')) {
              const base64Data = dataUrl.split('base64,')[1];
              const buffer = Buffer.from(base64Data, 'base64');

              // Ensure directories exist
              const publicDir = path.resolve(__dirname, 'public');
              const imagesDir = path.resolve(__dirname, 'src/assets/images');
              if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
              if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

              // Save to public
              fs.writeFileSync(path.resolve(publicDir, 'Sayrul Islam.png'), buffer);
              fs.writeFileSync(path.resolve(publicDir, 'sayrul-portrait.png'), buffer);

              // Also overwrite the primary assets used in portfolioData
              fs.writeFileSync(path.resolve(imagesDir, 'sayrul_hero_portrait_1790833108022.jpg'), buffer);
              fs.writeFileSync(path.resolve(imagesDir, 'sayrul_portrait_1790832651445.jpg'), buffer);
              fs.writeFileSync(path.resolve(imagesDir, 'sayrul_islam_portrait_1787109025432.jpg'), buffer);
              fs.writeFileSync(path.resolve(imagesDir, 'sayrul_about_portrait_1790833120904.jpg'), buffer);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
              return;
            }
          } catch (e) {
            console.error('Failed to save portrait:', e);
          }
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Failed to save portrait' }));
        });
      } else {
        res.statusCode = 405;
        res.end();
      }
    });
  },
});

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), savePortraitPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
