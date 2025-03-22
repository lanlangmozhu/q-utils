/**
 * 元素查找
 */
/**
 * 查找元素
 * @param selector - CSS选择器
 * @returns 找到的元素或null
 */
export declare function querySelector(selector: string): Element | null;
/**
 * 判断元素是否包含指定类名
 * @param element - DOM元素
 * @param className - 类名
 * @returns 是否包含类名
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * 判断元素是否匹配选择器
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 是否匹配
 */
export declare function matches(element: HTMLElement, selector: string): boolean;
/**
 * 获取最近的匹配选择器的祖先元素
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 匹配的祖先元素或null
 */
export declare function closest(element: HTMLElement, selector: string): HTMLElement | null;
/**
 * 类名操作
 */
/**
 * 添加类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
export declare function addClass(element: HTMLElement, className: string | string[]): void;
/**
 * 移除类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
export declare function removeClass(element: HTMLElement, className: string | string[]): void;
/**
 * 切换类名
 * @param element - DOM元素
 * @param className - 类名
 */
export declare function toggleClass(element: HTMLElement, className: string): void;
/**
 * 样式操作
 */
/**
 * 设置样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @param value - 样式值
 */
export declare function setStyle(element: HTMLElement, property: string, value: string | number): void;
/**
 * 获取样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 样式值
 */
export declare function getStyle(element: HTMLElement, property: string): string | null;
/**
 * 设置多个样式
 * @param element - DOM元素
 * @param styles - 样式对象
 */
export declare function setStyles(element: HTMLElement, styles: Record<string, string | number>): void;
//# sourceMappingURL=basic.d.ts.map