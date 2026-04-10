<?php
require_once __DIR__ . '/../bootstrap.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/' || $uri === '/index.php') {
    require dirname(__DIR__) . '/views/index.php';
} elseif ($uri === '/functions') {
    require dirname(__DIR__) . '/views/functions.php';
} elseif ($uri === '/playground') {
    require dirname(__DIR__) . '/views/playground.php';
} else {
    http_response_code(404);
    echo "404 Not Found";
}
