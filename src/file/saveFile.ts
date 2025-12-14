/**
 * 将内容保存为文件并下载到本地
 * 
 * @param content - 要保存的内容，可以是字符串、Blob、ArrayBuffer等
 * @param filename - 保存的文件名
 * @param options - 保存选项
 * @param options.type - 文件MIME类型，默认根据扩展名推断
 * @param options.encoding - 当content为字符串时的编码，默认为'utf-8'
 * @returns 无返回值
 * 
 * @example
 * ```ts
 * // 保存文本内容为文件
 * saveFile('Hello, World!', 'hello.txt');
 * 
 * // 保存JSON数据
 * const data = { name: 'John', age: 30 };
 * saveFile(JSON.stringify(data, null, 2), 'data.json');
 * 
 * // 保存CSV数据
 * const csvContent = 'Name,Age\nJohn,30\nJane,25';
 * saveFile(csvContent, 'users.csv', { type: 'text/csv' });
 * 
 * // 保存ArrayBuffer为二进制文件
 * const buffer = new ArrayBuffer(8);
 * const view = new Uint8Array(buffer);
 * view.set([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x21, 0x0d, 0x0a]); // "Hello!\r\n"
 * saveFile(buffer, 'binary.bin', { type: 'application/octet-stream' });
 * ```
 */
export function saveFile(
  content: string | Blob | ArrayBuffer | ArrayBufferView<ArrayBuffer>,
  filename: string,
  options: {
    type?: string;
    encoding?: string;
  } = {}
): void {
  let blob: Blob;
  
  // 获取文件MIME类型
  let type = options.type;
  if (!type) {
    // 如果未提供type，尝试根据文件扩展名推断
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
  
  // 根据content类型创建Blob
  if (content instanceof Blob) {
    // 如果content已经是Blob，但类型不匹配，则创建新的Blob
    if (content.type !== type) {
      blob = new Blob([content], { type });
    } else {
      blob = content;
    }
  } else if (typeof content === 'string') {
    // 字符串内容
    blob = new Blob([content], { type, endings: 'native' });
  } else if (content instanceof ArrayBuffer || ArrayBuffer.isView(content)) {
    // ArrayBuffer或TypedArray
    blob = new Blob([content], { type });
  } else {
    throw new Error('不支持的内容类型');
  }
  
  // 创建下载链接并触发下载
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  
  // 清理
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  }, 100);
} 