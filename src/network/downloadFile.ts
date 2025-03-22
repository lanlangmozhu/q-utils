/**
 * 从URL下载文件并保存到本地
 * 
 * @param url - 文件URL
 * @param options - 下载选项
 * @param options.filename - 下载后的文件名，默认从URL中提取
 * @param options.forceDownload - 是否强制下载而不是在浏览器中打开，默认为true
 * @param options.headers - 请求头
 * @returns 返回Promise，成功时resolve，失败时reject
 * 
 * @example
 * ```ts
 * // 基本用法
 * downloadFile('https://example.com/document.pdf')
 *   .then(() => console.log('下载成功'))
 *   .catch(error => console.error('下载失败:', error));
 * 
 * // 指定文件名
 * downloadFile('https://example.com/document.pdf', { 
 *   filename: '我的文档.pdf' 
 * });
 * 
 * // 添加请求头
 * downloadFile('https://api.example.com/files/123', {
 *   headers: { 'Authorization': 'Bearer token123' },
 *   filename: '报告.xlsx'
 * });
 * ```
 */
export async function downloadFile(
  url: string,
  options: {
    filename?: string;
    forceDownload?: boolean;
    headers?: Record<string, string>;
  } = {}
): Promise<void> {
  try {
    // 设置默认选项
    const { 
      forceDownload = true,
      headers = {} 
    } = options;
    
    // 发送请求获取文件
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...headers
      }
    });
    
    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 将响应转换为blob
    const blob = await response.blob();
    
    // 获取文件名
    let filename = options.filename;
    if (!filename) {
      // 尝试从Content-Disposition获取文件名
      const contentDisposition = response.headers.get('Content-Disposition');
      if (contentDisposition) {
        const filenameMatch = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].replace(/['"]/g, '');
        }
      }
      
      // 如果未能从响应头中获取文件名，则从URL中提取
      if (!filename) {
        // 从URL中提取文件名
        const urlParts = url.split('/');
        filename = urlParts[urlParts.length - 1];
        
        // 移除URL参数
        filename = filename.split('?')[0];
        
        // 如果还是没有文件名，使用默认值
        if (!filename) {
          filename = 'download';
        }
      }
    }
    
    // 创建一个blob URL
    const blobUrl = window.URL.createObjectURL(blob);
    
    // 创建一个a标签用于下载
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    
    // 如果强制下载，隐藏链接并添加到DOM
    if (forceDownload) {
      link.style.display = 'none';
      document.body.appendChild(link);
    }
    
    // 触发点击事件
    link.click();
    
    // 删除链接和blob URL
    if (forceDownload) {
      // 给浏览器一些时间来启动下载
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } else {
      // 如果不是强制下载，立即释放blob URL
      window.URL.revokeObjectURL(blobUrl);
    }
  } catch (error) {
    throw new Error(`文件下载失败: ${(error as Error).message}`);
  }
} 