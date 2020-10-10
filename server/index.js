const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

// Nav Bar Endpoints
app.use('/nav', createProxyMiddleware({ target: 'http://54.67.110.197:3001', changeOrigin: true }));

// Reviews Endpoints
app.use('/reviews', createProxyMiddleware({ target: 'http://54.67.110.197:3004', changeOrigin: true }));

let port = 3000;
app.listen(port, () => console.log(`Connected and listening on port ${port}`));
