/**
 * DOM 操作工具函数
 */
/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns Promise<void>
 */
export declare function copyToClipboard(text: string): Promise<void>;
/**
 * 获取元素的计算样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 计算后的样式值
 */
export declare function getComputedStyleValue(element: HTMLElement, property: string): string;
/**
 * 检查元素是否可见
 * @param element - DOM元素
 * @returns 是否可见
 */
export declare function isVisible(element: HTMLElement): boolean;
/**
 * 检查元素是否可聚焦
 * @param element - DOM元素
 * @returns 是否可聚焦
 */
export declare function isFocusable(element: HTMLElement): boolean;
/**
 * 获取元素的文本内容
 * @param element - DOM元素
 * @returns 文本内容
 */
export declare function getTextContent(element: HTMLElement): string;
/**
 * 设置元素的文本内容
 * @param element - DOM元素
 * @param text - 文本内容
 */
export declare function setTextContent(element: HTMLElement, text: string): void;
/**
 * 获取元素的HTML内容
 * @param element - DOM元素
 * @returns HTML内容
 */
export declare function getInnerHTML(element: HTMLElement): string;
/**
 * 设置元素的HTML内容
 * @param element - DOM元素
 * @param html - HTML内容
 */
export declare function setInnerHTML(element: HTMLElement, html: string): void;
//# sourceMappingURL=utils.d.ts.map