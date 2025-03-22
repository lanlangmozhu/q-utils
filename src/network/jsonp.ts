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
export function jsonp<T = any>(
  url: string,
  options: {
    callbackParam?: string;
    callbackName?: string;
    timeout?: number;
  } = {}
): Promise<T> {
  // 设置默认选项
  const { 
    callbackParam = 'callback', 
    callbackName = `jsonpCallback_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    timeout = 10000 
  } = options;

  return new Promise<T>((resolve, reject) => {
    // 创建script元素
    const script = document.createElement('script');
    
    // 存储原始的window对象，以便后续清理
    const originalWindow = window as any;
    
    // 超时计时器
    let timeoutId: number | null = null;
    
    // 清理函数
    const cleanup = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      
      // 删除全局回调函数
      delete originalWindow[callbackName];
      
      // 从DOM中移除script标签
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    
    // 设置超时处理
    timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`JSONP request to ${url} timed out after ${timeout}ms`));
    }, timeout);
    
    // 设置全局回调函数
    originalWindow[callbackName] = (data: T) => {
      cleanup();
      resolve(data);
    };
    
    // 构建包含回调参数的URL
    const separator = url.includes('?') ? '&' : '?';
    const jsonpUrl = `${url}${separator}${callbackParam}=${callbackName}`;
    
    // 设置script标签错误处理
    script.onerror = () => {
      cleanup();
      reject(new Error(`JSONP request to ${url} failed`));
    };
    
    // 设置script标签的src并添加到DOM
    script.src = jsonpUrl;
    document.head.appendChild(script);
  });
} 