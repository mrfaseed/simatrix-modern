const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, 'frontend', '.next', 'standalone');
const staticSrc = path.join(rootDir, 'frontend', '.next', 'static');
const staticDest = path.join(standaloneDir, '.next', 'static');
const publicSrc = path.join(rootDir, 'frontend', 'public');
const publicDest = path.join(standaloneDir, 'public');

if (fs.existsSync(standaloneDir)) {
  console.log('[Build] Preparing standalone assets for production...');

  // Copy .next/static -> .next/standalone/.next/static
  if (fs.existsSync(staticSrc)) {
    fs.mkdirSync(path.dirname(staticDest), { recursive: true });
    fs.cpSync(staticSrc, staticDest, { recursive: true, force: true });
    console.log('[Build] Copied .next/static to standalone bundle.');
  }

  // Copy public -> .next/standalone/public
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, publicDest, { recursive: true, force: true });
    console.log('[Build] Copied public assets to standalone bundle.');
  }
}
