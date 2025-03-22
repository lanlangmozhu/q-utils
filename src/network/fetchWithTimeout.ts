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
export function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 10000
): Promise<Response> {
  // 创建 AbortController 以便可以取消请求
  const controller = new AbortController();
  const { signal } = controller;

  // 创建超时计时器
  const timeoutId = setTimeout(() => {
    controller.abort(); // 超时后取消请求
  }, timeout);

  // 将信号添加到 fetch 选项中
  const fetchOptions: RequestInit = {
    ...options,
    signal
  };

  // 发送请求并处理超时
  return fetch(url, fetchOptions)
    .then(response => {
      // 请求成功，清除超时定时器
      clearTimeout(timeoutId);
      return response;
    })
    .catch(error => {
      // 清除超时定时器
      clearTimeout(timeoutId);
      
      // 如果是超时错误，提供更友好的错误消息
      if (error.name === 'AbortError') {
        throw new Error(`Request timeout after ${timeout}ms`);
      }
      
      // 其他错误直接抛出
      throw error;
    });
} 