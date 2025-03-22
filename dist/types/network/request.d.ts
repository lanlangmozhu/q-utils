/**
 * 通用请求函数，支持GET和POST等常见请求方法
 *
 * @param url - 请求URL
 * @param options - 请求配置选项
 * @param options.method - 请求方法，默认为'GET'
 * @param options.headers - 请求头
 * @param options.data - 请求数据，用于POST、PUT等方法
 * @param options.timeout - 超时时间（毫秒）
 * @param options.credentials - 是否携带凭证，默认为'same-origin'
 * @returns 返回Promise，resolve为响应数据，reject为错误信息
 *
 * @example
 * ```ts
 * // 基本GET请求
 * request('https://api.example.com/users')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // POST请求发送JSON数据
 * request('https://api.example.com/users', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   data: { name: 'John', age: 30 }
 * }).then(response => console.log(response));
 *
 * // 设置超时
 * request('https://api.example.com/users', { timeout: 5000 })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
export declare function request<T = any>(url: string, options?: {
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
    credentials?: RequestCredentials;
}): Promise<T>;
//# sourceMappingURL=request.d.ts.map