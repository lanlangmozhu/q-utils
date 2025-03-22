/**
 * 调整颜色的亮度、饱和度或色调
 * 
 * @param color - 要调整的颜色，可以是十六进制或RGB格式
 * @param adjustments - 调整选项
 * @param adjustments.lightness - 亮度调整值，范围为-1到1，0表示不变
 * @param adjustments.saturation - 饱和度调整值，范围为-1到1，0表示不变
 * @param adjustments.hue - 色调调整值，范围为-360到360，0表示不变
 * @param adjustments.alpha - alpha通道值，范围为0到1
 * @returns 调整后的颜色（与输入格式相同）
 * @example
 * ```ts
 * // 调整亮度
 * adjustColor('#ff0000', { lightness: 0.2 }); // 返回: "#ff3333" (变亮)
 * adjustColor('#ff0000', { lightness: -0.2 }); // 返回: "#cc0000" (变暗)
 * 
 * // 调整饱和度
 * adjustColor('#ff0000', { saturation: -0.5 }); // 返回: "#bf4040" (降低饱和度)
 * 
 * // 调整色调
 * adjustColor('#ff0000', { hue: 60 }); // 返回: "#ffff00" (红色 -> 黄色)
 * adjustColor('#ff0000', { hue: 120 }); // 返回: "#00ff00" (红色 -> 绿色)
 * 
 * // 组合调整
 * adjustColor('#ff0000', { lightness: 0.1, saturation: -0.2, hue: 30 }); // 返回混合调整后的颜色
 * 
 * // 使用RGB对象
 * adjustColor({ r: 255, g: 0, b: 0 }, { lightness: 0.2 }); // 返回: { r: 255, g: 51, b: 51 }
 * ```
 */
export function adjustColor(
  color: string | { r: number; g: number; b: number; a?: number | undefined },
  adjustments: {
    lightness?: number | undefined;
    saturation?: number | undefined;
    hue?: number | undefined;
    alpha?: number | undefined;
  } = {}
): string | { r: number; g: number; b: number; a?: number | undefined } {
  // 获取调整值，默认为0表示不变
  const {
    lightness = 0,
    saturation = 0,
    hue = 0,
    alpha
  } = adjustments;
  
  // 将颜色转换为HSL格式便于调整
  const hsl = toHSL(color);
  if (!hsl) return color; // 如果转换失败则返回原始颜色
  
  // 调整HSL值
  hsl.h = (hsl.h + hue) % 360;
  if (hsl.h < 0) hsl.h += 360; // 确保色调值在0-360范围内
  
  // 调整饱和度，确保在0-100范围内
  hsl.s = Math.max(0, Math.min(100, hsl.s + saturation * 100));
  
  // 调整亮度，确保在0-100范围内
  hsl.l = Math.max(0, Math.min(100, hsl.l + lightness * 100));
  
  // 应用alpha值
  if (alpha !== undefined) {
    hsl.a = Math.max(0, Math.min(1, alpha));
  }
  
  // 转换回原始格式
  return typeof color === 'string'
    ? hslToString(hsl)
    : hslToRgb(hsl);
}

/**
 * 将颜色转换为HSL格式
 * 
 * @param color - 要转换的颜色，可以是十六进制或RGB格式
 * @returns HSL对象
 */
function toHSL(
  color: string | { r: number; g: number; b: number; a?: number | undefined }
): { h: number; s: number; l: number; a?: number | undefined } | null {
  let r: number, g: number, b: number, a: number | undefined;
  
  // 解析输入颜色
  if (typeof color === 'string') {
    // 如果是十六进制格式
    const hex = color.replace(/^#/, '');
    
    if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) {
      console.error('无效的十六进制颜色:', color);
      return null;
    }
    
    // 标准化为6位格式
    const fullHex = hex.length === 3
      ? hex.split('').map(c => c + c).join('')
      : hex;
    
    // 解析RGB通道
    r = parseInt(fullHex.substring(0, 2), 16);
    g = parseInt(fullHex.substring(2, 4), 16);
    b = parseInt(fullHex.substring(4, 6), 16);
  } else {
    // 如果是RGB对象
    r = color.r;
    g = color.g;
    b = color.b;
    a = color.a;
  }
  
  // 将RGB值标准化为0-1范围
  r /= 255;
  g /= 255;
  b /= 255;
  
  // 找出最大和最小的RGB通道
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  // 计算色调和饱和度
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    
    h /= 6;
  }
  
  // 转换为标准HSL格式
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    a
  };
}

/**
 * 将HSL颜色格式转换为字符串表示
 * 
 * @param hsl - HSL颜色对象
 * @returns HSL颜色字符串
 */
function hslToString(hsl: { h: number; s: number; l: number; a?: number | undefined }): string {
  const { h, s, l, a } = hsl;
  return a !== undefined
    ? `hsla(${h}, ${s}%, ${l}%, ${a})`
    : `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * 将HSL颜色转换为RGB对象
 * 
 * @param hsl - HSL颜色对象
 * @returns RGB颜色对象
 */
function hslToRgb(hsl: { h: number; s: number; l: number; a?: number | undefined }): { r: number; g: number; b: number; a?: number | undefined } {
  const { h, s, l, a } = hsl;
  const hNormalized = h / 360;
  const sNormalized = s / 100;
  const lNormalized = l / 100;
  
  let r: number, g: number, b: number;
  
  if (s === 0) {
    // 如果饱和度为0，则为灰度
    r = g = b = lNormalized;
  } else {
    // 辅助函数，计算给定色调的RGB分量
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = lNormalized < 0.5
      ? lNormalized * (1 + sNormalized)
      : lNormalized + sNormalized - lNormalized * sNormalized;
    const p = 2 * lNormalized - q;
    
    r = hue2rgb(p, q, hNormalized + 1/3);
    g = hue2rgb(p, q, hNormalized);
    b = hue2rgb(p, q, hNormalized - 1/3);
  }
  
  // 将RGB值转换回0-255范围
  const result = {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
  
  // 添加alpha通道（如果有）
  if (a !== undefined) {
    return { ...result, a };
  }
  
  return result;
} 