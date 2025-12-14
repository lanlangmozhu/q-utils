# 网络工具函数

## 目录结构

```
src/network/
├── index.ts
├── request.ts
├── fetchWithTimeout.ts
├── jsonp.ts
├── ping.ts
├── downloadFile.ts
└── url.ts
```

## 功能描述

网络工具函数提供了一系列用于处理网络请求、URL 操作、文件下载等功能的工具函数。

### 请求相关

- `request`: 通用请求函数，支持 GET 和 POST 等常见请求方法
- `fetchWithTimeout`: 带超时功能的 fetch 函数
- `jsonp`: 发送 JSONP 请求，用于跨域获取数据
- `ping`: 检测 URL 的可用性和响应时间
- `downloadFile`: 从 URL 下载文件并保存到本地

### URL 操作

- `parseURLParams`: 解析 URL 参数为对象
- `buildURL`: 构建 URL，将参数对象添加到基础 URL
- `getURLPath`: 获取 URL 的相对路径
- `getURLDomain`: 获取 URL 的域名部分
- `isHTTPS`: 判断当前页面是否使用 HTTPS 协议
- `getFileNameFromURL`: 从 URL 中提取文件名
- `isAbsoluteURL`: 检查 URL 是否为绝对 URL
- `joinURL`: 合并相对 URL 和基础 URL

## 使用示例

```typescript
import { 
  request,
  fetchWithTimeout,
  jsonp,
  ping,
  downloadFile,
  parseURLParams,
  buildURL,
  getURLPath,
  getURLDomain,
  isHTTPS,
  getFileNameFromURL,
  isAbsoluteURL,
  joinURL
} from '@qh5-utils/network';

// 请求相关
// 基本 GET 请求
request('https://api.example.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST 请求发送 JSON 数据
request('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  data: { name: 'John', age: 30 }
}).then(response => console.log(response));

// 带超时的请求
fetchWithTimeout('https://api.example.com/data', {}, 5000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// JSONP 请求
jsonp('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 检测 URL 可用性
ping('https://example.com')
  .then(time => console.log(`响应时间: ${time}ms`))
  .catch(error => console.error('Ping失败:', error));

// 下载文件
downloadFile('https://example.com/document.pdf', { 
  filename: '我的文档.pdf' 
});

// URL 操作
// 解析 URL 参数
const params = parseURLParams('https://example.com?name=张三&age=25');
console.log(params.name); // '张三'
console.log(params.age);  // '25'

// 构建 URL
const url = buildURL('https://example.com', { 
  name: '张三', 
  age: '25' 
});
console.log(url); // 'https://example.com?name=%E5%BC%A0%E4%B8%89&age=25'

// 获取 URL 路径
console.log(getURLPath('https://example.com/products/123')); // '/products/123'

// 获取 URL 域名
console.log(getURLDomain('https://api.example.org/v1/data')); // 'api.example.org'

// 检查 HTTPS
console.log(isHTTPS('https://example.com')); // true
console.log(isHTTPS('http://example.com'));  // false

// 获取文件名
console.log(getFileNameFromURL('https://example.com/documents/report.pdf')); // 'report.pdf'

// 检查绝对 URL
console.log(isAbsoluteURL('https://example.com/page')); // true
console.log(isAbsoluteURL('/page'));                    // false

// 合并 URL
console.log(joinURL('https://example.com', '/api/users')); // 'https://example.com/api/users'
```

## 注意事项

1. 请求相关：
   - `request` 函数支持自动处理 JSON 数据和表单数据
   - `fetchWithTimeout` 默认超时时间为 10 秒
   - `jsonp` 支持自定义回调参数名和超时时间
   - `ping` 默认使用 HEAD 方法，可以切换到 GET 方法
   - `downloadFile` 支持自定义文件名和请求头

2. URL 操作：
   - `parseURLParams` 会自动处理 URL 编码
   - `buildURL` 支持相对路径和绝对路径
   - `getURLPath` 和 `getURLDomain` 默认使用当前页面 URL
   - `isHTTPS` 检查协议是否为 HTTPS
   - `getFileNameFromURL` 会处理带查询参数的 URL
   - `isAbsoluteURL` 支持协议相对 URL（以 // 开头）
   - `joinURL` 会自动处理路径分隔符

## 更新记录

- 2024-03-21: 初始版本
  - 添加请求相关函数
  - 添加 URL 操作函数 