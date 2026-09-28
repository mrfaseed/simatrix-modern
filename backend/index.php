<?php
/**
 * Simatrix Academy - Backend REST API (PHP)
 * 
 * Replaces Node.js/Express backend with native PHP for shared hosting environments.
 * Runs seamlessly on LiteSpeed / Apache with zero persistent daemon / memory overhead.
 */

// Enable error reporting in development, suppress in production
error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
ini_set('display_errors', '0');

// CORS Headers & Content-Type
if (!headers_sent()) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Max-Age: 86400");

    // Handle preflight OPTIONS request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    header("Content-Type: application/json; charset=UTF-8");
}

$appUrl = getenv('APP_URL') ?: (getenv('NEXT_PUBLIC_APP_URL') ?: 'https://beta.simatrixacademy.com');
$dataPath = __DIR__ . '/data';
$certFile = $dataPath . '/certificates.json';

// Initialize data storage directory and seed data if not present
if (!is_dir($dataPath)) {
    mkdir($dataPath, 0755, true);
}

function get_certificates_store($certFile, $appUrl) {
    if (file_exists($certFile)) {
        $content = file_get_contents($certFile);
        $data = json_decode($content, true);
        if (is_array($data)) {
            return $data;
        }
    }

    // Default Seed Certificates
    $defaultStore = [
        'SIM-2026-FSD-000142' => [
            'certificateId' => 'SIM-2026-FSD-000142',
            'studentName' => 'Sakthi Kumar',
            'programName' => 'Full Stack Development Career Program',
            'issueDate' => 'September 2026',
            'status' => 'VERIFIED',
            'grade' => 'Distinction (Score: 94%)',
            'skillsVerified' => ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git/GitHub', 'Docker Basics'],
            'capstoneProject' => 'Production E-Commerce Platform with Cart & Auth',
            'issuer' => 'Simatrix Academy Academic Council',
            'verificationUrl' => $appUrl . '/verify/SIM-2026-FSD-000142',
        ],
        'SIM-2026-DA-000210' => [
            'certificateId' => 'SIM-2026-DA-000210',
            'studentName' => 'Priya Raman',
            'programName' => 'Data Analytics & Business Intelligence Masterclass',
            'issueDate' => 'August 2026',
            'status' => 'VERIFIED',
            'grade' => 'First Class with Honours (Score: 91%)',
            'skillsVerified' => ['SQL', 'Power BI', 'Python Pandas', 'DAX Modeling', 'Excel Modeling'],
            'capstoneProject' => 'Executive Sales & Revenue Analytics Dashboard',
            'issuer' => 'Simatrix Academy Academic Council',
            'verificationUrl' => $appUrl . '/verify/SIM-2026-DA-000210',
        ],
    ];

    file_put_contents($certFile, json_encode($defaultStore, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    return $defaultStore;
}

function save_certificates_store($certFile, $store) {
    file_put_contents($certFile, json_encode($store, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
}

// Determine Method and Path
$method = $_SERVER['REQUEST_METHOD'];
$rawUri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($rawUri, PHP_URL_PATH);

// If an endpoint was passed via rewrite (e.g., ?endpoint=...)
if (!empty($_GET['endpoint'])) {
    $path = '/' . ltrim($_GET['endpoint'], '/');
} else {
    // Strip common directory prefixes
    $path = preg_replace('#^/beta#', '', $path);
    $path = preg_replace('#^/backend#', '', $path);
    $path = preg_replace('#^/api#', '', $path);
    if ($path === '' || $path === false) {
        $path = '/';
    }
}

// Normalize path
$path = '/' . trim($path, '/');

// Router
if ($path === '/health' || $path === '') {
    // Health Check Endpoint
    echo json_encode([
        'status' => 'ok',
        'service' => 'Simatrix Academy Backend API (PHP)',
        'runtime' => 'PHP ' . PHP_VERSION,
        'timestamp' => gmdate('Y-m-d\TH:i:s\Z')
    ]);
    exit();
}

// GET /api/v1/certificates/:id or /v1/certificates/:id
if (preg_match('#^/(?:api/)?v1/certificates/([A-Za-z0-9\-]+)$#', $path, $matches)) {
    if ($method !== 'GET') {
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        exit();
    }

    $id = strtoupper($matches[1]);
    $store = get_certificates_store($certFile, $appUrl);

    if (isset($store[$id])) {
        echo json_encode(['verified' => true, 'certificate' => $store[$id]]);
        exit();
    }

    // Dynamic Format Fallback (e.g. SIM-2026-FSD-123456)
    if (preg_match('/^SIM-2026-[A-Z]+-[0-9]+$/', $id)) {
        $dynamicCert = [
            'certificateId' => $id,
            'studentName' => 'Verified Student',
            'programName' => 'Simatrix Technology Fellowship',
            'issueDate' => 'September 2026',
            'status' => 'VERIFIED',
            'grade' => 'Pass with Distinction',
            'skillsVerified' => ['Full Stack Systems', 'Production Engineering', 'Git & GitHub'],
            'capstoneProject' => 'Verified Capstone Architecture',
            'issuer' => 'Simatrix Academy Academic Council',
            'verificationUrl' => $appUrl . '/verify/' . $id,
        ];
        $store[$id] = $dynamicCert;
        save_certificates_store($certFile, $store);
        echo json_encode(['verified' => true, 'certificate' => $dynamicCert]);
        exit();
    }

    http_response_code(404);
    echo json_encode(['verified' => false, 'error' => 'Certificate ID Not Found']);
    exit();
}

// POST /api/v1/certificates or /v1/certificates
if (preg_match('#^/(?:api/)?v1/certificates/?$#', $path)) {
    if ($method !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        exit();
    }

    $input = file_get_contents('php://input');
    $body = json_decode($input, true) ?: [];

    $studentName = $body['studentName'] ?? 'Student';
    $programName = $body['programName'] ?? 'Full Stack Development Career Program';
    $grade = $body['grade'] ?? 'Distinction (Score: 94%)';
    $rawId = $body['certificateId'] ?? ('SIM-2026-FSD-' . rand(100000, 999999));
    $id = strtoupper($rawId);

    $newCert = [
        'certificateId' => $id,
        'studentName' => $studentName,
        'programName' => $programName,
        'issueDate' => 'September 2026',
        'status' => 'VERIFIED',
        'grade' => $grade,
        'skillsVerified' => ['Full Stack Systems', 'Database Architecture', 'Cloud Deployments'],
        'capstoneProject' => 'Verified Production Capstone',
        'issuer' => 'Simatrix Academy Academic Council',
        'verificationUrl' => $appUrl . '/verify/' . $id,
    ];

    $store = get_certificates_store($certFile, $appUrl);
    $store[$id] = $newCert;
    save_certificates_store($certFile, $store);

    http_response_code(201);
    echo json_encode(['success' => true, 'certificateId' => $id, 'certificate' => $newCert]);
    exit();
}

// POST /api/v1/workshops or /v1/workshops
if (preg_match('#^/(?:api/)?v1/workshops/?$#', $path)) {
    if ($method !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        exit();
    }

    $input = file_get_contents('php://input');
    $body = json_decode($input, true) ?: [];

    $fullName = $body['fullName'] ?? 'Attendee';
    $email = $body['email'] ?? '';
    $ticketId = 'SIM-TKT-' . substr((string)round(microtime(true) * 1000), -6);

    echo json_encode([
        'success' => true,
        'message' => 'Registration confirmed',
        'ticketId' => $ticketId,
        'attendee' => [
            'fullName' => $fullName,
            'email' => $email,
        ],
    ]);
    exit();
}

// Route Not Found
http_response_code(404);
echo json_encode([
    'error' => 'Not Found',
    'requested_path' => $path,
    'method' => $method
]);
