/**
 * 获取文件的扩展名
 * 
 * @param filename - 文件名或文件路径
 * @param options - 选项
 * @param options.toLowerCase - 是否将扩展名转为小写，默认为true
 * @param options.includeDot - 是否包含点号，默认为false
 * @returns 文件的扩展名，如果没有扩展名则返回空字符串
 * 
 * @example
 * ```ts
 * // 基本用法
 * getFileExtension('document.pdf'); // 'pdf'
 * getFileExtension('image.JPG'); // 'jpg' (默认转为小写)
 * 
 * // 包含点号
 * getFileExtension('script.js', { includeDot: true }); // '.js'
 * 
 * // 保留原始大小写
 * getFileExtension('LICENSE.TXT', { toLowerCase: false }); // 'TXT'
 * 
 * // 处理路径
 * getFileExtension('/path/to/file.tar.gz'); // 'gz'
 * 
 * // 处理URL
 * getFileExtension('https://example.com/downloads/report.xlsx'); // 'xlsx'
 * 
 * // 处理没有扩展名的文件
 * getFileExtension('README'); // ''
 * ```
 */
export function getFileExtension(
  filename: string,
  options: {
    toLowerCase?: boolean;
    includeDot?: boolean;
  } = {}
): string {
  // 设置默认选项
  const { toLowerCase = true, includeDot = false } = options;
  
  // 提取文件名部分（去除路径和查询参数）
  let basename = filename;
  
  // 处理URL或路径
  // 先去除查询参数和哈希
  basename = basename.split(/[?#]/)[0];
  
  // 提取文件名（去除路径）
  const lastSlashIndex = basename.lastIndexOf('/');
  if (lastSlashIndex !== -1) {
    basename = basename.slice(lastSlashIndex + 1);
  }
  
  // 获取最后一个点号的位置
  const lastDotIndex = basename.lastIndexOf('.');
  
  // 如果没有点号或点号在开头（如.gitignore），则返回空字符串
  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return '';
  }
  
  // 提取扩展名
  let extension = basename.slice(lastDotIndex + (includeDot ? 0 : 1));
  
  // 转换为小写（如果需要）
  if (toLowerCase) {
    extension = extension.toLowerCase();
  }
  
  return extension;
} 