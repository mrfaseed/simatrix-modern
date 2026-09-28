# Simatrix Academy Backend Service (PHP)

Native REST API backend for Simatrix Academy running on LiteSpeed / Apache PHP 8.x.

## Features
- **Zero background daemons:** Runs natively via PHP-FPM without PM2 or node processes.
- **Certificate Verification Engine:** `GET /api/v1/certificates/{id}` & `POST /api/v1/certificates`
- **Workshop Registration API:** `POST /api/v1/workshops`
- **Health Check:** `GET /health`

## File Structure
- `index.php`: Main REST API router and controllers
- `.htaccess`: Apache / LiteSpeed endpoint rewrite rules
- `data/certificates.json`: Persistent certificate database
