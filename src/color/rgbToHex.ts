/**
 * 将RGB颜色值转换为十六进制颜色代码
 * 
 * @param r - 红色通道值（0-255）或包含RGB值的对象或数组
 * @param g - 绿色通道值（0-255），如果第一个参数是对象或数组则忽略
 * @param b - 蓝色通道值（0-255），如果第一个参数是对象或数组则忽略
 * @param options - 配置选项
 * @param options.prefix - 是否包含#前缀，默认为true
 * @param options.alpha - alpha通道值（0-1），用于生成RGBA颜色
 * @returns 十六进制颜色代码
 * @example
 * ```ts
 * // 基本用法
 * rgbToHex(255, 0, 0); // 返回: "#ff0000"
 * 
 * // 不带#前缀
 * rgbToHex(255, 0, 0, { prefix: false }); // 返回: "ff0000"
 * 
 * // 使用对象
 * rgbToHex({ r: 255, g: 0, b: 0 }); // 返回: "#ff0000"
 * 
 * // 使用数组
 * rgbToHex([255, 0, 0]); // 返回: "#ff0000"
 * 
 * // 包含alpha通道
 * rgbToHex(255, 0, 0, { alpha: 0.5 }); // 返回: "#ff0000" (alpha值在十六进制表示中被忽略)
 * ```
 */
export function rgbToHex(
  r: number | { r: number; g: number; b: number } | number[],
  g?: number,
  b?: number,
  options: { prefix?: boolean; alpha?: number } = {}
): string {
  let red: number;
  let green: number;
  let blue: number;
  
  // 设置默认选项
  const { prefix = true } = options;
  
  // 解析输入参数
  if (typeof r === 'object') {
    if (Array.isArray(r)) {
      // 如果是数组
      red = Math.round(r[0] || 0);
      green = Math.round(r[1] || 0);
      blue = Math.round(r[2] || 0);
    } else {
      // 如果是对象
      red = Math.round(r.r || 0);
      green = Math.round(r.g || 0);
      blue = Math.round(r.b || 0);
    }
  } else {
    // 如果是分开的RGB值
    red = Math.round(r || 0);
    green = Math.round(g || 0);
    blue = Math.round(b || 0);
  }
  
  // 确保值在0-255范围内
  red = Math.max(0, Math.min(255, red));
  green = Math.max(0, Math.min(255, green));
  blue = Math.max(0, Math.min(255, blue));
  
  // 转换为十六进制字符串
  const hexR = red.toString(16).padStart(2, '0');
  const hexG = green.toString(16).padStart(2, '0');
  const hexB = blue.toString(16).padStart(2, '0');
  
  // 拼接结果
  return `${prefix ? '#' : ''}${hexR}${hexG}${hexB}`;
} 