/**
 * 动画计算相关函数
 * @packageDocumentation
 */
/**
 * 线性插值计算（使用 range.ts 中的实现）
 */
/**
 * 缓动函数
 * @param t - 时间（0-1）
 * @param type - 缓动类型
 * @returns 缓动后的值
 * @example
 * ease(0.5, 'linear') // 0.5
 * ease(0.5, 'easeIn') // 0.25
 */
export declare function ease(t: number, type?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'): number;
/**
 * 弹簧动画
 * @param t - 时间（0-1）
 * @param options - 弹簧选项
 * @param options.tension - 张力，默认为170
 * @param options.friction - 摩擦力，默认为26
 * @returns 弹簧动画值
 * @example
 * spring(0.5) // 0.5
 * spring(0.5, { tension: 200, friction: 20 }) // 0.5
 */
export declare function spring(t: number, options?: {
    tension?: number;
    friction?: number;
}): number;
/**
 * 贝塞尔曲线
 * @param t - 时间（0-1）
 * @param p0 - 起点
 * @param p1 - 控制点1
 * @param p2 - 控制点2
 * @param p3 - 终点
 * @returns 贝塞尔曲线上的点
 * @example
 * bezier(0.5, 0, 0.5, 0.5, 1) // 0.5
 */
export declare function bezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
/**
 * 映射范围（使用 range.ts 中的实现）
 */ 
//# sourceMappingURL=animation.d.ts.map