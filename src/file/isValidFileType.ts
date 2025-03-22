/**
 * 检查文件类型是否符合指定的允许类型
 * 
 * @param file - 要检查的文件对象或文件名
 * @param allowedTypes - 允许的MIME类型或文件扩展名数组
 * @returns 如果文件类型符合允许列表则返回true，否则返回false
 * 
 * @example
 * ```ts
 * // 检查文件对象
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', () => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     // 检查是否为图片
 *     const isImage = isValidFileType(file, ['image/jpeg', 'image/png', 'image/gif']);
 *     console.log('是否为允许的图片格式:', isImage);
 *   }
 * });
 * 
 * // 根据文件名检查
 * const isValidDocument = isValidFileType('report.pdf', ['.pdf', '.doc', '.docx']);
 * console.log('是否为有效文档:', isValidDocument); // true
 * 
 * // 混合类型和扩展名检查
 * const isValid = isValidFileType('data.xlsx', ['application/pdf', '.xlsx', '.csv']);
 * console.log('是否为有效文件类型:', isValid); // true
 * ```
 */
export function isValidFileType(
  file: File | string,
  allowedTypes: string[]
): boolean {
  // 如果文件是字符串（文件名），处理方式不同
  if (typeof file === 'string') {
    const filename = file.toLowerCase();
    
    // 检查文件名是否匹配允许的扩展名
    return allowedTypes.some(type => {
      // 如果类型以点号开头，则将其视为文件扩展名（如 .pdf）
      if (type.startsWith('.')) {
        return filename.endsWith(type.toLowerCase());
      }
      
      // 如果类型包含斜杠，则将其视为MIME类型
      if (type.includes('/')) {
        // 尝试根据文件扩展名推断MIME类型
        const extension = filename.split('.').pop() || '';
        const mimeType = getMimeTypeFromExtension(extension);
        return mimeType === type.toLowerCase();
      }
      
      // 否则，将其视为不带点号的扩展名
      return filename.endsWith(`.${type.toLowerCase()}`);
    });
  }
  
  // 处理File对象
  return allowedTypes.some(type => {
    // 如果类型以点号开头，则将其视为文件扩展名（如 .pdf）
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type.toLowerCase());
    }
    
    // 如果类型包含斜杠，则将其视为MIME类型（如 image/jpeg）
    if (type.includes('/')) {
      return file.type.toLowerCase() === type.toLowerCase();
    }
    
    // 否则，将其视为不带点号的扩展名
    return file.name.toLowerCase().endsWith(`.${type.toLowerCase()}`);
  });
}

/**
 * 根据文件扩展名获取MIME类型
 * 
 * @param extension - 文件扩展名（不含点号）
 * @returns 对应的MIME类型，如果未知则返回''
 */
function getMimeTypeFromExtension(extension: string): string {
  const mimeTypes: Record<string, string> = {
    // 文本文件
    'txt': 'text/plain',
    'html': 'text/html',
    'htm': 'text/html',
    'css': 'text/css',
    'csv': 'text/csv',
    
    // 应用程序文件
    'pdf': 'application/pdf',
    'json': 'application/json',
    'js': 'application/javascript',
    'xml': 'application/xml',
    'zip': 'application/zip',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    
    // 图像文件
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'bmp': 'image/bmp',
    'ico': 'image/x-icon',
    
    // 音频文件
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    'flac': 'audio/flac',
    'm4a': 'audio/m4a',
    
    // 视频文件
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'avi': 'video/x-msvideo',
    'mov': 'video/quicktime',
    'wmv': 'video/x-ms-wmv',
    'flv': 'video/x-flv',
    
    // 字体文件
    'ttf': 'font/ttf',
    'otf': 'font/otf',
    'woff': 'font/woff',
    'woff2': 'font/woff2'
  };
  
  return mimeTypes[extension.toLowerCase()] || '';
} 