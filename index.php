<?php
/**
 * Simatrix Academy - Native PHP Gateway & Reverse Proxy
 * Bridges LiteSpeed Web Server directly to Next.js on port 4000
 * Bypasses all shared hosting LiteSpeed [P] proxy restrictions with 100% native execution
 */

$requestUri = $_SERVER['REQUEST_URI'] ?? '/';

// 1. Direct handling for Health Check & Backend APIs (Zero overhead)
if (preg_match('#^/(?:health|api/|backend/)#', $requestUri)) {
    require __DIR__ . '/backend/index.php';
    exit();
}

// 2. Next.js Frontend Proxy Target
$targetBase = 'http://89.116.133.58:4000';
$targetUrl = $targetBase . $requestUri;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

// Request Method
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);

// Forward Headers
$forwardHeaders = [];
if (function_exists('getallheaders')) {
    foreach (getallheaders() as $name => $value) {
        if (strcasecmp($name, 'Host') === 0) continue;
        if (strcasecmp($name, 'Content-Length') === 0) continue;
        $forwardHeaders[] = "{$name}: {$value}";
    }
}
$forwardHeaders[] = 'X-Forwarded-For: ' . ($_SERVER['REMOTE_ADDR'] ?? '');
$forwardHeaders[] = 'X-Forwarded-Proto: https';
curl_setopt($ch, CURLOPT_HTTPHEADER, $forwardHeaders);

// Forward Body for POST/PUT/PATCH
if (in_array($method, ['POST', 'PUT', 'PATCH', 'DELETE'])) {
    $body = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

$response = curl_exec($ch);

if ($response === false) {
    http_response_code(502);
    header('Content-Type: text/html');
    echo '<h1>Simatrix Academy - Starting Up</h1><p>The application server is warming up. Please refresh in 5 seconds.</p>';
    curl_close($ch);
    exit();
}

$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$headerContent = substr($response, 0, $headerSize);
$bodyContent = substr($response, $headerSize);

http_response_code($httpCode);

// Forward Headers back to client
foreach (explode("\r\n", $headerContent) as $headerLine) {
    if (stripos($headerLine, 'Transfer-Encoding:') === 0) continue;
    if (stripos($headerLine, 'Content-Length:') === 0) continue;
    if (stripos($headerLine, 'HTTP/') === 0) continue;
    if (!empty($headerLine)) {
        header($headerLine, false);
    }
}

echo $bodyContent;
