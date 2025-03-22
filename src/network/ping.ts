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
export function ping(
  url: string,
  options: {
    timeout?: number;
    method?: 'HEAD' | 'GET';
  } = {}
): Promise<number> {
  // 设置默认选项
  const { 
    timeout = 5000,
    method = 'HEAD'
  } = options;

  return new Promise<number>((resolve, reject) => {
    // 记录开始时间
    const startTime = Date.now();
    
    // 创建 AbortController 用于超时处理
    const controller = new AbortController();
    const { signal } = controller;
    
    // 设置超时
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    // 发送请求
    fetch(url, {
      method,
      mode: 'no-cors', // 允许ping不同源的URL
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      signal
    })
      .then(() => {
        // 计算响应时间
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        // 清除超时
        clearTimeout(timeoutId);
        
        // 返回响应时间
        resolve(responseTime);
      })
      .catch(error => {
        // 清除超时
        clearTimeout(timeoutId);
        
        // 处理超时错误
        if (error.name === 'AbortError') {
          reject(new Error(`Ping to ${url} timed out after ${timeout}ms`));
        } else {
          reject(error);
        }
      });
  });
} 