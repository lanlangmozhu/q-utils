/**
 * 检测URL的可用性和响应时间
 *
 * @param url - 要检测的URL
 * @param options - 配置选项
 * @param options.timeout - 超时时间（毫秒），默认为5000ms
 * @param options.method - 使用的HTTP方法，默认为'HEAD'
 * @returns 返回Promise，resolve为响应时间（毫秒），失败则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * ping('https://example.com')
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 *
 * // 设置更短的超时
 * ping('https://example.com', { timeout: 2000 })
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 *
 * // 使用GET方法代替HEAD
 * ping('https://example.com', { method: 'GET' })
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 * ```
 */
export declare function ping(url: string, options?: {
    timeout?: number;
    method?: 'HEAD' | 'GET';
}): Promise<number>;
//# sourceMappingURL=ping.d.ts.map