const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

server.listen(port);
