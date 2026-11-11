/**
 * Local Founder Hub Server (Zero Dependencies)
 *
 * Run with: `node server.js` inside the `founder-hub` folder.
 * Opens http://localhost:3000 and writes checkbox ticks and notes
 * directly into `data/roadmap.json` on your hard drive!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;
const ROADMAP_PATH = path.join(ROOT, 'data', 'roadmap.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // Handle reading & writing progress directly to data/roadmap.json
  if (urlPath === '/api/progress') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ overrides: null, mode: 'Direct JSON File Sync' }));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body);
          if (payload && payload.fullRoadmap) {
            payload.fullRoadmap.lastUpdated = new Date().toISOString().slice(0, 10);
            fs.writeFileSync(
              ROADMAP_PATH,
              JSON.stringify(payload.fullRoadmap, null, 2),
              'utf8'
            );
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, mode: 'Saved to data/roadmap.json' }));
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: err.message }));
        }
      });
      return;
    }
  }

  // Serve static files
  const safePath = urlPath === '/' ? '/index.html' : urlPath;
  const filePath = path.join(ROOT, safePath);

  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`ABE Founder Hub running at http://localhost:${PORT}`);
  console.log(`Interactive Master Plan at http://localhost:${PORT}/concept.html`);
});
