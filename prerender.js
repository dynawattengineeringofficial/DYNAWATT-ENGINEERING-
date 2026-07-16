import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  console.log('--- Starting Prerendering Process ---');
  
  // 1. Read App.tsx to extract routes
  const appPath = path.join(__dirname, 'App.tsx');
  if (!fs.existsSync(appPath)) {
    console.error('Error: App.tsx not found!');
    process.exit(1);
  }
  
  const appContent = fs.readFileSync(appPath, 'utf-8');
  const routeRegex = /case\s+['"`]([^'"`]+)['"`]\s*:/g;
  const routes = [];
  let match;
  while ((match = routeRegex.exec(appContent)) !== null) {
    const r = match[1];
    if (r.startsWith('/')) {
      routes.push(r);
    }
  }
  
  const uniqueRoutes = [...new Set(routes)];
  // Move '/' to the very end of uniqueRoutes to keep dist/index.html unchanged until the end
  const homeIndex = uniqueRoutes.indexOf('/');
  if (homeIndex > -1) {
    uniqueRoutes.splice(homeIndex, 1);
  }
  uniqueRoutes.push('/');
  
  console.log(`Found ${uniqueRoutes.length} routes to prerender:`, uniqueRoutes);
  
  // 2. Start Express server to serve dist/
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('Error: dist directory does not exist. Run build first!');
    process.exit(1);
  }
  
  const app = express();
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  
  const port = 4567;
  const server = app.listen(port, '127.0.0.1', async () => {
    console.log(`Prerender server running internally at http://127.0.0.1:${port}`);
    
    let browser;
    try {
      // 3. Launch Puppeteer
      browser = await puppeteer.launch({
        headless: 'new',
        args: [
          '--no-sandbox', 
          '--disable-setuid-sandbox', 
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-software-rasterizer'
        ]
      });
      
      const page = await browser.newPage();
      
      // Set viewport for standard rendering
      await page.setViewport({ width: 1200, height: 800 });
      
      for (const route of uniqueRoutes) {
        const url = `http://127.0.0.1:${port}${route}`;
        console.log(`Prerendering: ${route}`);
        
        try {
          await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
          
          // Wait briefly for react-helmet-async to finish updating the DOM head
          await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
          
          const html = await page.content();
          
          // Determine output path
          let outputPath;
          if (route === '/') {
            outputPath = path.join(distPath, 'index.html');
          } else {
            const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
            const routeDir = path.join(distPath, cleanRoute);
            fs.mkdirSync(routeDir, { recursive: true });
            outputPath = path.join(routeDir, 'index.html');
          }
          
          fs.writeFileSync(outputPath, html, 'utf-8');
          console.log(`  ✓ Saved to ${outputPath}`);
        } catch (routeErr) {
          console.error(`  ✗ Error prerendering route ${route}:`, routeErr);
        }
      }
      
      console.log('--- Prerendering Complete! ---');
    } catch (err) {
      console.error('Prerendering failed:', err);
    } finally {
      if (browser) {
        await browser.close();
      }
      server.close(() => {
        console.log('Prerender server stopped.');
        process.exit(0);
      });
    }
  });
}

run();
