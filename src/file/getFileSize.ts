/**
 * 获取文件大小，并可选择格式化为人类可读的形式
 * 
 * @param file - 文件对象
 * @param options - 选项
 * @param options.formatted - 是否格式化为人类可读的形式，默认为true
 * @param options.precision - 保留的小数位数，默认为2
 * @param options.locale - 使用的语言环境，默认为undefined（使用浏览器默认语言）
 * @returns 如果formatted为true，返回格式化后的字符串（如"1.25 MB"）；否则返回字节数
 * 
 * @example
 * ```ts
 * // 基本用法
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', () => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     const size = getFileSize(file);
 *     console.log(`文件大小: ${size}`); // 如 "文件大小: 1.25 MB"
 *   }
 * });
 * 
 * // 获取原始字节数
 * const rawSize = getFileSize(file, { formatted: false });
 * console.log(`文件大小: ${rawSize} 字节`);
 * 
 * // 自定义格式化
 * const customSize = getFileSize(file, { precision: 1 });
 * console.log(`文件大小: ${customSize}`); // 如 "文件大小: 1.3 MB"
 * 
 * // 特定语言环境
 * const frSize = getFileSize(file, { locale: 'fr-FR' });
 * console.log(`Taille du fichier: ${frSize}`); // 使用法语数字格式
 * ```
 */
export function getFileSize(
  file: File,
  options: {
    formatted?: boolean;
    precision?: number;
    locale?: string | string[];
  } = {}
): string | number {
  // 获取文件大小（字节）
  const bytes = file.size;
  
  // 设置默认选项
  const { 
    formatted = true, 
    precision = 2,
    locale = undefined
  } = options;
  
  // 如果不需要格式化，直接返回字节数
  if (!formatted) {
    return bytes;
  }
  
  // 定义单位和对应的字节数
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  // 如果文件大小为0，直接返回
  if (bytes === 0) {
    return '0 B';
  }
  
  // 计算单位的索引
  // Math.floor(Math.log(bytes) / Math.log(1024)) 决定使用哪个单位
  const unitIndex = Math.floor(Math.log(bytes) / Math.log(1024));
  
  // 确保索引不超出单位数组范围
  const safeUnitIndex = Math.min(unitIndex, units.length - 1);
  
  // 计算格式化后的数值
  // 1024^unitIndex 将字节转换为对应单位的值
  const size = bytes / Math.pow(1024, safeUnitIndex);
  
  // 格式化数字，添加千分位分隔符
  const formattedSize = size.toLocaleString(locale, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  });
  
  // 返回格式化后的字符串：数值 + 空格 + 单位
  return `${formattedSize} ${units[safeUnitIndex]}`;
} 