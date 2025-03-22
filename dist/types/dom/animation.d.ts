/**
 * 淡入效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export declare function fadeIn(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 淡出效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export declare function fadeOut(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 滑动显示
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export declare function slideDown(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 滑动隐藏
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export declare function slideUp(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 添加过渡效果
 * @param element - DOM元素
 * @param properties - 需要添加过渡效果的属性
 * @param duration - 过渡持续时间（毫秒）
 * @param timing - 过渡时间函数
 */
export declare function addTransition(element: HTMLElement, properties: string | string[], duration?: number, timing?: string): void;
/**
 * 移除过渡效果
 * @param element - DOM元素
 */
export declare function removeTransition(element: HTMLElement): void;
//# sourceMappingURL=animation.d.ts.map