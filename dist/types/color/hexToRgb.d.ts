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
export declare function hexToRgb(hex: string, options?: {
    alpha?: number;
    format?: 'object' | 'array' | 'string';
}): {
    r: number;
    g: number;
    b: number;
    a?: number;
} | number[] | string | null;
//# sourceMappingURL=hexToRgb.d.ts.map