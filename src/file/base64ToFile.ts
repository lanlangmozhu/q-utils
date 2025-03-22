/**
 * 将Base64编码字符串转换为文件对象
 * 
 * @param base64 - Base64编码的字符串，可以是纯Base64或Data URL格式
 * @param filename - 生成的文件名
 * @param options - 转换选项
 * @param options.type - 文件MIME类型，默认根据Data URL或文件扩展名推断
 * @returns 转换后的File对象
 * 
 * @example
 * ```ts
 * // 从纯Base64创建文件
 * const pdfBase64 = 'JVBERi0xLjcKJeLjz9MKNSAwIG...'; // PDF文件的Base64编码
 * const pdfFile = base64ToFile(pdfBase64, 'document.pdf');
 * console.log(pdfFile.size, pdfFile.type); // File对象的大小和类型
 * 
 * // 从Data URL创建文件
 * const imgDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAA...';
 * const imgFile = base64ToFile(imgDataUrl, 'image.png');
 * 
 * // 指定文件类型
 * const textBase64 = btoa('Hello, World!');
 * const textFile = base64ToFile(textBase64, 'hello.txt', { type: 'text/plain' });
 * ```
 */
export function base64ToFile(
  base64: string,
  filename: string,
  options: {
    type?: string;
  } = {}
): File {
  let type = options.type;
  let binaryString: string;
  
  // 检查是否是Data URL格式
  if (base64.startsWith('data:')) {
    // 从Data URL中提取MIME类型和Base64数据
    const matches = base64.match(/^data:([^;]+);base64,(.+)$/);
    if (matches && matches.length === 3) {
      // 如果未指定类型，使用Data URL中的类型
      if (!type) {
        type = matches[1];
      }
      // 获取实际的Base64数据
      base64 = matches[2];
    }
  }
  
  // 如果仍未确定类型，尝试从文件名推断
  if (!type) {
    const extension = filename.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'txt':
        type = 'text/plain';
        break;
      case 'html':
      case 'htm':
        type = 'text/html';
        break;
      case 'json':
        type = 'application/json';
        break;
      case 'csv':
        type = 'text/csv';
        break;
      case 'js':
        type = 'application/javascript';
        break;
      case 'css':
        type = 'text/css';
        break;
      case 'png':
        type = 'image/png';
        break;
      case 'jpg':
      case 'jpeg':
        type = 'image/jpeg';
        break;
      case 'gif':
        type = 'image/gif';
        break;
      case 'pdf':
        type = 'application/pdf';
        break;
      case 'xml':
        type = 'application/xml';
        break;
      default:
        type = 'application/octet-stream'; // 默认二进制类型
    }
  }
  
  // 将Base64解码为二进制字符串
  try {
    binaryString = atob(base64);
  } catch (e) {
    throw new Error('无效的Base64编码');
  }
  
  // 将二进制字符串转换为Uint8Array
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  // 创建Blob对象
  const blob = new Blob([bytes], { type });
  
  // 创建File对象
  return new File([blob], filename, { type, lastModified: new Date().getTime() });
} 