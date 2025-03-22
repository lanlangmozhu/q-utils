/**
 * 添加事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export function on(element: HTMLElement, eventType: string, handler: (event: Event) => void): void {
  element.addEventListener(eventType, handler);
}

/**
 * 移除事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export function off(element: HTMLElement, eventType: string, handler: (event: Event) => void): void {
  element.removeEventListener(eventType, handler);
}

/**
 * 添加一次性事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
export function once(element: HTMLElement, eventType: string, handler: (event: Event) => void): void {
  const onceHandler = (event: Event) => {
    handler(event);
    off(element, eventType, onceHandler);
  };
  on(element, eventType, onceHandler);
}

/**
 * 事件委托
 * @param element - 委托元素
 * @param eventType - 事件类型
 * @param selector - 选择器
 * @param handler - 事件处理函数
 */
export function delegate(
  element: HTMLElement,
  eventType: string,
  selector: string,
  handler: (event: Event) => void
): void {
  element.addEventListener(eventType, (event: Event) => {
    const target = event.target as HTMLElement;
    const matched = target.closest(selector);
    if (matched) {
      handler.call(matched, event);
    }
  });
} 