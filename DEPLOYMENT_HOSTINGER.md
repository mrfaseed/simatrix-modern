# Hostinger Deployment Guide for Simatrix Academy

This guide provides complete, step-by-step instructions for deploying the Simatrix Academy platform to **Hostinger** (Shared / Cloud Hosting with hPanel) using **GitHub Actions**.

---

## 🏛️ Platform Architecture on Hostinger

Simatrix is a monorepo consisting of:
- **Frontend**: Next.js 16 (App Router with dynamic server APIs & SSR) listening on public web port (default `3000`).
- **Backend**: Express API server listening on internal port (default `5000`).
- **Supervisor (`server.js`)**: A production coordinator that starts both the backend API and the Next.js standalone frontend simultaneously, with graceful process management and error recovery.
- **Process Manager**: PM2 via `ecosystem.config.js` to ensure 24/7 uptime, auto-restart upon reboot, and memory protection.

---

## 📋 Prerequisites on Hostinger

1. **Hostinger Plan**: Business Web Hosting, Cloud Startup, Cloud Professional, or Cloud Enterprise (plans with **SSH Access** and **Node.js** support).
2. **Domain**: Domain connected and pointed to your Hostinger hosting account with SSL (Let's Encrypt) active.
3. **SSH Access Enabled**:
   - In Hostinger hPanel, go to **Advanced** → **SSH Access**.
   - Note down:
     - **SSH IP / Host** (e.g. `185.xxx.xxx.xxx` or `connect.hostinger.com`)
     - **SSH Username** (e.g. `u123456789`)
     - **SSH Port** (Hostinger shared/cloud hosting uses **`65002`**)
     - **SSH Password** (or generate/add an SSH Public Key)

---

## 🔐 Step 1: Configure GitHub Repository Secrets

In your GitHub repository ([mrfaseed/simatrix-modern](https://github.com/mrfaseed/simatrix-modern)):

1. Go to **Settings** → **Secrets and variables** → **Actions**.
2. Click **New repository secret** and add the following:

| Secret Name | Description | Example / Default |
| :--- | :--- | :--- |
| `HOSTINGER_SSH_HOST` | Hostinger SSH host or IP | `185.123.45.67` or `connect.hostinger.com` |
| `HOSTINGER_SSH_USER` | Hostinger SSH username | `u123456789` |
| `HOSTINGER_SSH_PORT` | Hostinger SSH port | `65002` *(shared hosting default)* |
| `HOSTINGER_SSH_PASSWORD` | Your Hostinger SSH account password | `YourPassword123` |
| `HOSTINGER_SSH_KEY` | *(Optional if using SSH key instead of password)* | Private key content (`-----BEGIN OPENSSH...`) |
| `HOSTINGER_TARGET_DIR` | Absolute path to your app directory on Hostinger | `/home/u123456789/domains/yourdomain.com/public_html` |
| `NEXT_PUBLIC_APP_URL` | Your public production domain | `https://yourdomain.com` |

> [!NOTE]
> If you are using SSH key authentication, paste the private key into `HOSTINGER_SSH_KEY`. If using password authentication, fill in `HOSTINGER_SSH_PASSWORD`. The GitHub Action supports both!

---

## 🚀 Step 2: First-Time Setup on Hostinger (One-Time Only)

Before the very first automated push deploy, initialize your app directory on Hostinger once via SSH:

### 1. Connect to Hostinger via SSH
Open your terminal and connect:
```bash
ssh -p 65002 u123456789@your-hostinger-ip
```

### 2. Navigate to your domain directory and clone
```bash
cd domains/yourdomain.com/public_html
# (Optional) If folder is not empty, back it up or clear placeholder default.php
rm -rf default.php

# Clone repository
git clone https://github.com/mrfaseed/simatrix-modern.git .
```

### 3. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 4. Install Dependencies & Build
```bash
# Install root, backend, and frontend dependencies
npm run install:all

# Build Next.js with standalone production bundle
npm run build
```

### 5. Start the Application with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

Verify that the process is running:
```bash
pm2 status
pm2 logs simatrix-app
```

---

## ⚡ Step 3: Automated Deployments with GitHub Actions

Whenever you push commits to the `main` branch, the GitHub Action (`.github/workflows/deploy.yml`) will automatically:

1. **Verify & Build**: Run `npm install` and `npm run build` on GitHub's fast runners to test for compilation errors.
2. **Connect via SSH**: Authenticate with Hostinger using port `65002`.
3. **Pull & Update**: Fetch the latest code (`git fetch && git reset --hard origin/main`).
4. **Build & Sync Assets**: Update dependencies and recompile Next.js standalone assets.
5. **Zero-Downtime Reload**: Execute `pm2 restart ecosystem.config.js`.

### Manual Trigger
You can also trigger a deployment at any time from GitHub:
- Go to the **Actions** tab in GitHub.
- Select **Deploy to Hostinger** on the left.
- Click **Run workflow** → select branch `main` → **Run workflow**.

---

## 🖥️ Alternative: Deploying via Hostinger hPanel "Node.js Web App" UI

If you prefer using Hostinger's managed Web UI instead of SSH/PM2:

1. In **hPanel**, go to **Websites** → **Add Website** or **Manage**.
2. Select **Node.js Web App**.
3. Under **Deployment Method**, select **Import Git Repository** and connect `mrfaseed/simatrix-modern`.
4. Configure the settings:
   - **Node.js Version**: `20.x`
   - **Application Root**: `/`
   - **Application Startup File**: `server.js`
   - **Build Command**: `npm run build`
   - **Start Command**: `node server.js`
5. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_APP_URL`: `https://yourdomain.com`
   - `APP_URL`: `https://yourdomain.com`
6. Click **Deploy**. Hostinger will automatically build and serve the application.

---

## 🛠️ Handy Hostinger Commands

| Task | Command |
| :--- | :--- |
| Check running processes | `pm2 status` |
| View live logs | `pm2 logs simatrix-app` |
| Restart manually | `pm2 restart ecosystem.config.js` |
| Stop application | `pm2 stop ecosystem.config.js` |
| Check memory & CPU usage | `pm2 monit` |
| Test backend health | `curl http://localhost:5000/health` |
| Test certificate API | `curl http://localhost:3000/api/verify?id=SIM-2026-FSD-000142` |

---

## 🔍 Troubleshooting

### 1. `Error: Port 3000 is already in use`
Check what process is holding port 3000:
```bash
lsof -i :3000
# or kill lingering node processes
killall -9 node
pm2 restart ecosystem.config.js
```

### 2. Low RAM during `npm run build` on Server
Hostinger shared hosting plans may cap process memory to 512MB-1GB. If `npm run build` fails with an out-of-memory error:
- Use our pre-built rsync workflow: `.github/workflows/deploy-rsync.yml`.
- This builds Next.js on GitHub's 7GB runner and syncs the pre-compiled files directly to Hostinger over SSH.

### 3. Permission Denied on SSH
Ensure your public key is added to `~/.ssh/authorized_keys` in Hostinger, or verify that your `HOSTINGER_SSH_PASSWORD` secret in GitHub is typed correctly and `HOSTINGER_SSH_PORT` is set to `65002`.
