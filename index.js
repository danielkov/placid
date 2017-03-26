// This is the entry point of the application. HTTP Server one-liner
require('http').createServer((q, s) => {s.end('Hello, World!')}).listen(3000)
