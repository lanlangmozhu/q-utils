#!/usr/bin/env node

/**
 * 简单的本地 HTTP 服务器
 * 用于运行示例文件，解决 CORS 问题
 * 
 * 使用方法：
 * node examples/server.js
 * 或
 * pnpm serve:examples
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT_DIR = path.join(__dirname, '..');

// MIME 类型映射
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
};

const server = http.createServer((req, res) => {
  // 解析请求路径
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  // 默认访问 index.html
  if (pathname === '/') {
    pathname = '/examples/index.html';
  }

  // 构建文件路径
  const filePath = path.join(ROOT_DIR, pathname);

  // 检查文件是否存在
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    // 读取文件
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      // 获取文件扩展名
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      // 设置响应头
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 本地服务器已启动！`);
  console.log(`📝 访问地址: http://localhost:${PORT}/examples/index.html`);
  console.log(`📝 数组示例: http://localhost:${PORT}/examples/array.html`);
  console.log(`\n按 Ctrl+C 停止服务器\n`);
});

