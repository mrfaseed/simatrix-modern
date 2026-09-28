const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const FRONTEND_DIR = path.join(__dirname, 'frontend');
const PORT = process.env.PORT || 4000;
process.env.HOSTNAME = '0.0.0.0';

console.log('==============================================');
console.log('   Simatrix Academy - Frontend Supervisor     ');
console.log('   (Backend runs natively via PHP/LiteSpeed)  ');
console.log('==============================================');

// Launch Next.js Frontend Service
const standaloneServer = path.join(FRONTEND_DIR, '.next', 'standalone', 'server.js');
let frontendProcess;

if (fs.existsSync(standaloneServer)) {
  console.log(`[Frontend] Starting standalone Next.js server on port ${PORT}...`);
  frontendProcess = spawn(
    process.execPath,
    [standaloneServer],
    {
      cwd: path.join(FRONTEND_DIR, '.next', 'standalone'),
      env: {
        ...process.env,
        HOSTNAME: '0.0.0.0',
        PORT: PORT.toString(),
        NODE_ENV: 'production',
      },
      stdio: 'inherit',
    }
  );
} else {
  console.log(`[Frontend] Standalone not found. Starting with Next.js CLI on port ${PORT}...`);
  const nextCli = path.join(FRONTEND_DIR, 'node_modules', 'next', 'dist', 'bin', 'next');
  frontendProcess = spawn(
    process.execPath,
    [nextCli, 'start', '-p', PORT.toString()],
    {
      cwd: FRONTEND_DIR,
      env: {
        ...process.env,
        HOSTNAME: '0.0.0.0',
        PORT: PORT.toString(),
        NODE_ENV: 'production',
      },
      stdio: 'inherit',
    }
  );
}

frontendProcess.on('error', (err) => {
  console.error('[Frontend Error]:', err.message);
});

frontendProcess.on('exit', (code, signal) => {
  console.log(`[Frontend] Exited (code: ${code}, signal: ${signal})`);
  process.exit(code || 0);
});

const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down Next.js service gracefully...`);
  if (frontendProcess && !frontendProcess.killed) frontendProcess.kill(signal);
  setTimeout(() => process.exit(0), 1000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
