/**
 * 添加事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export declare function on(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 移除事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export declare function off(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 添加一次性事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export declare function once(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 事件委托
 * @param element - 委托元素
 * @param eventType - 事件类型
 * @param selector - 选择器
 * @param handler - 事件处理函数
 */
export declare function delegate(element: HTMLElement, eventType: string, selector: string, handler: (event: Event) => void): void;
//# sourceMappingURL=event.d.ts.map