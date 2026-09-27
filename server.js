const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const FRONTEND_DIR = path.join(__dirname, 'frontend');
const BACKEND_DIR = path.join(__dirname, 'backend');

const PORT = process.env.PORT || 3000;
const BACKEND_PORT = process.env.BACKEND_PORT || 5000;

console.log('==============================================');
console.log('   Simatrix Academy - Production Supervisor   ');
console.log('==============================================');

// 1. Launch Express Backend Service
console.log(`[Backend] Launching Express API on internal port ${BACKEND_PORT}...`);
const backendServerScript = path.join(BACKEND_DIR, 'src', 'server.js');

const backendProcess = spawn(
  process.execPath,
  [backendServerScript],
  {
    cwd: BACKEND_DIR,
    env: {
      ...process.env,
      PORT: BACKEND_PORT.toString(),
      BACKEND_PORT: BACKEND_PORT.toString(),
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${PORT}`,
      NODE_ENV: process.env.NODE_ENV || 'production',
    },
    stdio: 'inherit',
  }
);

backendProcess.on('error', (err) => {
  console.error('[Backend Error]:', err.message);
});

backendProcess.on('exit', (code, signal) => {
  console.log(`[Backend] Exited (code: ${code}, signal: ${signal})`);
});

// 2. Launch Next.js Frontend Service
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
        PORT: PORT.toString(),
        BACKEND_URL: process.env.BACKEND_URL || `http://127.0.0.1:${BACKEND_PORT}`,
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
        PORT: PORT.toString(),
        BACKEND_URL: process.env.BACKEND_URL || `http://127.0.0.1:${BACKEND_PORT}`,
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
  // If frontend exits, shutdown backend and master
  if (backendProcess && !backendProcess.killed) {
    backendProcess.kill('SIGTERM');
  }
  process.exit(code || 0);
});

// Graceful signal handling
const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down Simatrix services gracefully...`);
  if (frontendProcess && !frontendProcess.killed) frontendProcess.kill(signal);
  if (backendProcess && !backendProcess.killed) backendProcess.kill(signal);
  setTimeout(() => process.exit(0), 1000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
