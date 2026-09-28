/**
 * Simatrix Academy - Production Next.js Server
 * (Backend runs natively via PHP 8.x under LiteSpeed)
 */
process.env.PORT = process.env.PORT || '4000';
process.env.HOSTNAME = '0.0.0.0';
process.env.NODE_ENV = 'production';

const path = require('path');
const fs = require('fs');

const standalone = path.join(__dirname, 'frontend', '.next', 'standalone', 'server.js');

if (fs.existsSync(standalone)) {
  console.log(`[Frontend] Launching Next.js standalone on port ${process.env.PORT} (${process.env.HOSTNAME})...`);
  require(standalone);
} else {
  console.error('[Frontend Error] Standalone server not found at:', standalone);
  process.exit(1);
}
