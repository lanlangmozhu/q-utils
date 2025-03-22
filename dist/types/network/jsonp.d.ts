/**
 * 发送JSONP请求，用于跨域获取数据
 *
 * @param url - 请求URL
 * @param options - 配置选项
 * @param options.callbackParam - 回调参数名，默认为'callback'
 * @param options.callbackName - 自定义回调函数名，默认为自动生成
 * @param options.timeout - 超时时间（毫秒），默认为10000ms
 * @returns 返回Promise，resolve为响应数据，超时或错误则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * jsonp('https://api.example.com/data')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 自定义参数
 * jsonp('https://api.example.com/data', {
 *   callbackParam: 'jsonpCallback',
 *   timeout: 5000
 * })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
export declare function jsonp<T = any>(url: string, options?: {
    callbackParam?: string;
    callbackName?: string;
    timeout?: number;
}): Promise<T>;
//# sourceMappingURL=jsonp.d.ts.map