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
export declare function parseURLParams(url?: string): Record<string, string>;
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
export declare function buildURL(baseUrl: string, params: Record<string, string>): string;
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
export declare function getURLPath(url?: string): string;
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
export declare function getURLDomain(url?: string): string;
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
export declare function isHTTPS(url?: string): boolean;
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
export declare function getFileNameFromURL(url: string): string;
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
export declare function isAbsoluteURL(url: string): boolean;
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
export declare function joinURL(baseURL: string, relativeURL: string): string;
//# sourceMappingURL=url.d.ts.map