/**
 * URL 操作相关工具函数
 * @packageDocumentation
 */

/**
 * 解析 URL 参数为对象
 * 
 * @param url - 要解析的 URL，默认为当前页面的 URL
 * @returns 包含 URL 参数的对象
 * @example
 * ```ts
 * // 假设 URL 是 https://example.com?name=张三&age=25
 * const params = parseURLParams();
 * console.log(params.name); // '张三'
 * console.log(params.age);  // '25'
 * 
 * // 解析指定 URL
 * const params2 = parseURLParams('https://example.com?id=123&type=product');
 * console.log(params2.id);   // '123'
 * console.log(params2.type); // 'product'
 * ```
 */
export function parseURLParams(url?: string): Record<string, string> {
  const urlToParse = url ? url : window.location.href;
  const params: Record<string, string> = {};
  
  // 查找 URL 中的查询字符串部分
  const queryIndex = urlToParse.indexOf('?');
  if (queryIndex === -1) {
    return params;
  }
  
  // 提取查询字符串并处理 hash 部分
  let queryString = urlToParse.slice(queryIndex + 1);
  const hashIndex = queryString.indexOf('#');
  if (hashIndex !== -1) {
    queryString = queryString.slice(0, hashIndex);
  }
  
  // 分割并解析每个参数
  const pairs = queryString.split('&');
  for (const pair of pairs) {
    if (!pair) continue;
    
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
    }
  }
  
  return params;
}

/**
 * 构建 URL，将参数对象添加到基础 URL
 * 
 * @param baseUrl - 基础 URL
 * @param params - 参数对象
 * @returns 组合后的 URL
 * @example
 * ```ts
 * // 基本用法
 * const url = buildURL('https://example.com', { 
 *   name: '张三', 
 *   age: '25' 
 * });
 * console.log(url); // 'https://example.com?name=%E5%BC%A0%E4%B8%89&age=25'
 * 
 * // 带有已有参数的 URL
 * const url2 = buildURL('https://example.com?sort=desc', { 
 *   page: '1',
 *   limit: '10'
 * });
 * console.log(url2); // 'https://example.com?sort=desc&page=1&limit=10'
 * 
 * // 相对路径 URL
 * const url3 = buildURL('/api/users', { id: '123' });
 * console.log(url3); // '/api/users?id=123'
 * ```
 */
export function buildURL(baseUrl: string, params: Record<string, string>): string {
  try {
    // 尝试创建 URL 对象
    const url = new URL(baseUrl);
    
    // 添加新参数
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    
    return url.toString();
  } catch (e) {
    // 处理相对路径或无效 URL
    let result = baseUrl;
    
    // 检查 URL 是否已包含查询参数
    const hasParams = baseUrl.includes('?');
    
    // 添加参数
    const paramEntries = Object.entries(params);
    if (paramEntries.length > 0) {
      for (let i = 0; i < paramEntries.length; i++) {
        const [key, value] = paramEntries[i];
        const prefix = i === 0 && !hasParams ? '?' : '&';
        result += `${prefix}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    }
    
    return result;
  }
}

/**
 * 获取 URL 的相对路径
 * 
 * @param url - 要处理的 URL，默认为当前页面的 URL
 * @returns URL 的相对路径
 * @example
 * ```ts
 * // 假设当前页面为 https://example.com/products/123?sort=desc
 * console.log(getURLPath()); // '/products/123'
 * 
 * // 处理指定 URL
 * console.log(getURLPath('https://example.com/about/team?id=5')); // '/about/team'
 * ```
 */
export function getURLPath(url?: string): string {
  const urlObj = url ? new URL(url) : new URL(window.location.href);
  return urlObj.pathname;
}

/**
 * 获取 URL 的域名部分
 * 
 * @param url - 要处理的 URL，默认为当前页面的 URL
 * @returns URL 的域名
 * @example
 * ```ts
 * // 假设当前页面为 https://sub.example.com/products
 * console.log(getURLDomain()); // 'sub.example.com'
 * 
 * // 处理指定 URL
 * console.log(getURLDomain('https://api.example.org/v1/data')); // 'api.example.org'
 * ```
 */
export function getURLDomain(url?: string): string {
  const urlObj = url ? new URL(url) : new URL(window.location.href);
  return urlObj.hostname;
}

/**
 * 判断当前页面是否使用 HTTPS 协议
 * 
 * @param url - 要检查的 URL，默认为当前页面的 URL
 * @returns 如果是 HTTPS 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isHTTPS()) {
 *   console.log('当前页面是安全连接');
 * } else {
 *   console.log('当前页面是非安全连接');
 * }
 * 
 * // 检查指定 URL
 * console.log(isHTTPS('https://example.com')); // true
 * console.log(isHTTPS('http://example.com'));  // false
 * ```
 */
export function isHTTPS(url?: string): boolean {
  const urlObj = url ? new URL(url) : new URL(window.location.href);
  return urlObj.protocol === 'https:';
}

/**
 * 从 URL 中提取文件名
 * 
 * @param url - 要处理的 URL
 * @returns URL 中的文件名
 * @example
 * ```ts
 * console.log(getFileNameFromURL('https://example.com/documents/report.pdf')); 
 * // 'report.pdf'
 * 
 * console.log(getFileNameFromURL('https://example.com/images/photo.jpg?size=large')); 
 * // 'photo.jpg'
 * ```
 */
export function getFileNameFromURL(url: string): string {
  try {
    // 创建 URL 对象
    const urlObj = new URL(url);
    
    // 获取路径部分
    const pathname = urlObj.pathname;
    
    // 从路径中提取文件名
    const segments = pathname.split('/');
    return segments.pop() || '';
  } catch (e) {
    // 如果 URL 解析失败，使用正则表达式作为后备
    const match = url.match(/\/([^\/?#]+)[^\/]*$/);
    return match ? match[1] : '';
  }
}

/**
 * 检查 URL 是否为绝对 URL
 * 
 * @param url - 要检查的 URL
 * @returns 如果是绝对 URL 则返回 true，否则返回 false
 * @example
 * ```ts
 * console.log(isAbsoluteURL('https://example.com/page')); // true
 * console.log(isAbsoluteURL('//example.com/page'));       // true
 * console.log(isAbsoluteURL('/page'));                    // false
 * console.log(isAbsoluteURL('page'));                     // false
 * ```
 */
export function isAbsoluteURL(url: string): boolean {
  // 检查是否以协议开头（如 http:, https:, ftp: 等）
  if (/^[a-z][a-z\d+\-.]*:/.test(url)) {
    return true;
  }
  
  // 检查是否以 // 开头（协议相对 URL）
  if (url.substring(0, 2) === '//') {
    return true;
  }
  
  return false;
}

/**
 * 合并相对 URL 和基础 URL
 * 
 * @param baseURL - 基础 URL
 * @param relativeURL - 相对 URL
 * @returns 合并后的绝对 URL
 * @example
 * ```ts
 * console.log(joinURL('https://example.com', '/api/users')); 
 * // 'https://example.com/api/users'
 * 
 * console.log(joinURL('https://example.com/api', 'users'));
 * // 'https://example.com/api/users'
 * 
 * console.log(joinURL('https://example.com/api/', '/users'));
 * // 'https://example.com/api/users'
 * ```
 */
export function joinURL(baseURL: string, relativeURL: string): string {
  try {
    // 使用 URL 构造函数自动处理路径合并
    return new URL(relativeURL, baseURL).toString();
  } catch (e) {
    // 作为后备，手动合并
    // 确保基础 URL 结尾没有斜杠（除非是根路径）
    if (baseURL.endsWith('/') && baseURL !== '/') {
      baseURL = baseURL.slice(0, -1);
    }
    
    // 确保相对 URL 开头有斜杠
    if (!relativeURL.startsWith('/') && relativeURL !== '') {
      relativeURL = '/' + relativeURL;
    }
    
    return baseURL + relativeURL;
  }
} 