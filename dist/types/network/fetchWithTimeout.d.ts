/**
 * 带超时功能的fetch函数
 *
 * @param url - 请求的URL
 * @param options - fetch选项
 * @param timeout - 超时时间（毫秒），默认为10000ms
 * @returns 返回Promise，resolve为Response对象，超时则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * fetchWithTimeout('https://api.example.com/data')
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 自定义超时时间
 * fetchWithTimeout('https://api.example.com/data', {}, 5000)
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 发送POST请求
 * fetchWithTimeout('https://api.example.com/users', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ name: 'John', age: 30 })
 * })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
export declare function fetchWithTimeout(url: string, options?: RequestInit, timeout?: number): Promise<Response>;
//# sourceMappingURL=fetchWithTimeout.d.ts.map