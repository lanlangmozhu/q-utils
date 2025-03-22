/**
 * 单位转换相关函数
 * @packageDocumentation
 */
/**
 * 像素转rem
 * @param px - 像素值
 * @param baseFontSize - 基准字体大小
 * @returns rem值
 * @example
 * px2rem(16) // 1
 */
export declare const px2rem: (px: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * rem转像素
 * @param rem - rem值
 * @param baseFontSize - 基准字体大小
 * @returns 像素值
 * @example
 * rem2px(1) // 16
 */
export declare const rem2px: (rem: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * 像素转vw
 * @param px - 像素值
 * @param viewportWidth - 视口宽度
 * @returns vw值
 * @example
 * px2vw(100) // 10
 */
export declare const px2vw: (px: number | null | undefined, viewportWidth?: number | null | undefined) => number;
/**
 * vw转像素
 * @param vw - vw值
 * @param viewportWidth - 视口宽度
 * @returns 像素值
 * @example
 * vw2px(10) // 100
 */
export declare const vw2px: (vw: number | null | undefined, viewportWidth?: number | null | undefined) => number;
/**
 * 像素转em
 * @param px - 像素值
 * @param baseFontSize - 基准字体大小
 * @returns em值
 * @example
 * px2em(16) // 1
 */
export declare const px2em: (px: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * em转像素
 * @param em - em值
 * @param baseFontSize - 基准字体大小
 * @returns 像素值
 * @example
 * em2px(1) // 16
 */
export declare const em2px: (em: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * 角度转弧度
 * @param degree - 角度
 * @returns 弧度
 * @example
 * degree2radian(180) // Math.PI
 */
export declare const degree2radian: (degree: number | null | undefined) => number;
/**
 * 弧度转角度
 * @param radian - 弧度
 * @returns 角度
 * @example
 * radian2degree(Math.PI) // 180
 */
export declare const radian2degree: (radian: number | null | undefined) => number;
/**
 * 字节转可读大小
 * @param bytes - 字节数
 * @param precision - 精度
 * @returns 可读大小
 * @example
 * byte2size(1024) // "1.00 KB"
 */
export declare const byte2size: (bytes: number | null | undefined, precision?: number | null | undefined) => string;
/**
 * 可读大小转字节
 * @param size - 可读大小
 * @returns 字节数
 * @example
 * size2byte("1 KB") // 1024
 */
export declare const size2byte: (size: string | null | undefined) => number;
/**
 * 摄氏度转华氏度
 * @param celsius - 摄氏度
 * @returns 华氏度
 * @example
 * celsius2fahrenheit(0) // 32
 */
export declare const celsius2fahrenheit: (celsius: number | null | undefined) => number;
/**
 * 华氏度转摄氏度
 * @param fahrenheit - 华氏度
 * @returns 摄氏度
 * @example
 * fahrenheit2celsius(32) // 0
 */
export declare const fahrenheit2celsius: (fahrenheit: number | null | undefined) => number;
/**
 * 千克转磅
 * @param kg - 千克
 * @returns 磅
 * @example
 * kg2lb(1) // 2.20462
 */
export declare const kg2lb: (kg: number | null | undefined) => number;
/**
 * 磅转千克
 * @param lb - 磅
 * @returns 千克
 * @example
 * lb2kg(1) // 0.453592
 */
export declare const lb2kg: (lb: number | null | undefined) => number;
/**
 * 公里转英里
 * @param km - 公里
 * @returns 英里
 * @example
 * km2mile(1) // 0.621371
 */
export declare const km2mile: (km: number | null | undefined) => number;
/**
 * 英里转公里
 * @param mile - 英里
 * @returns 公里
 * @example
 * mile2km(1) // 1.60934
 */
export declare const mile2km: (mile: number | null | undefined) => number;
//# sourceMappingURL=unit.d.ts.map