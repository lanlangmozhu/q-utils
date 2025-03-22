/**
 * 将十六进制颜色代码转换为RGB颜色值
 * 
 * @param hex - 十六进制颜色代码，支持3位(#RGB)和6位(#RRGGBB)格式，可选带#前缀
 * @param options - 配置选项
 * @param options.alpha - 是否返回包含alpha通道的RGBA值，默认为false
 * @param options.format - 返回格式，可以是'object'、'array'或'string'，默认为'object'
 * @returns 转换后的RGB颜色值，格式由options.format决定
 * @example
 * ```ts
 * // 基本用法
 * hexToRgb('#ff0000'); // 返回: { r: 255, g: 0, b: 0 }
 * 
 * // 缩写形式
 * hexToRgb('#f00'); // 返回: { r: 255, g: 0, b: 0 }
 * 
 * // 不带#前缀
 * hexToRgb('ff0000'); // 返回: { r: 255, g: 0, b: 0 }
 * 
 * // 返回数组格式
 * hexToRgb('#ff0000', { format: 'array' }); // 返回: [255, 0, 0]
 * 
 * // 返回字符串格式
 * hexToRgb('#ff0000', { format: 'string' }); // 返回: "rgb(255, 0, 0)"
 * 
 * // 包含alpha值
 * hexToRgb('#ff0000', { alpha: 0.5, format: 'string' }); // 返回: "rgba(255, 0, 0, 0.5)"
 * ```
 */
export function hexToRgb(
  hex: string,
  options: { 
    alpha?: number; 
    format?: 'object' | 'array' | 'string'
  } = {}
): { r: number; g: number; b: number; a?: number } | number[] | string | null {
  // 设置默认选项
  const { 
    alpha = undefined, 
    format = 'object'
  } = options;
  
  // 移除#前缀并统一转为小写
  const cleanHex = hex.replace(/^#/, '').toLowerCase();
  
  // 验证十六进制格式
  // 支持3位(#RGB)和6位(#RRGGBB)格式
  const isValidHex = /^([0-9a-f]{3}|[0-9a-f]{6})$/.test(cleanHex);
  
  if (!isValidHex) {
    console.error('无效的十六进制颜色代码:', hex);
    return null;
  }
  
  // 如果是3位格式，转换为6位格式
  let fullHex = cleanHex;
  if (cleanHex.length === 3) {
    fullHex = cleanHex
      .split('')
      .map(char => char + char)
      .join('');
  }
  
  // 分别解析RGB值
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);
  
  // 根据指定格式返回结果
  switch (format) {
    case 'object':
      return alpha !== undefined
        ? { r, g, b, a: alpha }
        : { r, g, b };
      
    case 'array':
      return alpha !== undefined
        ? [r, g, b, alpha]
        : [r, g, b];
      
    case 'string':
      return alpha !== undefined
        ? `rgba(${r}, ${g}, ${b}, ${alpha})`
        : `rgb(${r}, ${g}, ${b})`;
      
    default:
      return { r, g, b };
  }
}