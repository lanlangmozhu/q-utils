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
export async function request<T = any>(
  url: string,
  options: {
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
    credentials?: RequestCredentials;
  } = {}
): Promise<T> {
  const {
    method = 'GET',
    headers = {},
    data = null,
    timeout = 30000,
    credentials = 'same-origin'
  } = options;

  // 创建 AbortController 用于超时处理
  const controller = new AbortController();
  const { signal } = controller;

  // 设置超时
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    // 构建请求配置
    const config: RequestInit = {
      method,
      headers: {
        ...headers
      },
      credentials,
      signal
    };

    // 处理请求体
    if (data !== null) {
      if (method !== 'GET' && method !== 'HEAD') {
        if (headers['Content-Type'] === 'application/json' || !headers['Content-Type']) {
          config.body = typeof data === 'string' ? data : JSON.stringify(data);
          // 如果没有设置Content-Type，默认设置为application/json
          if (!headers['Content-Type']) {
            (config.headers as Record<string, string>)['Content-Type'] = 'application/json';
          }
        } else if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
          // 处理表单数据
          const formData = new URLSearchParams();
          for (const key in data) {
            formData.append(key, data[key]);
          }
          config.body = formData.toString();
        } else if (data instanceof FormData) {
          // 如果是FormData对象直接使用
          config.body = data;
        }
      } else if (method === 'GET' && data) {
        // 对于GET请求，将data转换为URL参数
        const queryParams = new URLSearchParams();
        for (const key in data) {
          queryParams.append(key, String(data[key]));
        }
        const queryString = queryParams.toString();
        url = url + (url.includes('?') ? '&' : '?') + queryString;
      }
    }

    // 发送请求
    const response = await fetch(url, config);

    // 清除超时
    clearTimeout(timeoutId);

    // 处理响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 获取响应内容类型
    const contentType = response.headers.get('content-type');

    // 根据内容类型解析响应
    if (contentType && contentType.includes('application/json')) {
      return await response.json() as T;
    } else if (contentType && contentType.includes('text/')) {
      return await response.text() as unknown as T;
    } else {
      // 对于其他类型，可以根据需要处理
      // 例如：blob, arrayBuffer 等
      return await response.blob() as unknown as T;
    }
  } catch (error) {
    // 清除超时
    clearTimeout(timeoutId);

    if ((error as Error).name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    
    throw error;
  }
} 