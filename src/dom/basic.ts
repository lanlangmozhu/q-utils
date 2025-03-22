/**
 * 元素查找
 */

/**
 * 查找元素
 * @param selector - CSS选择器
 * @returns 找到的元素或null
 */
export function querySelector(selector: string): Element | null {
  return document.querySelector(selector);
}

/**
 * 判断元素是否包含指定类名
 * @param element - DOM元素
 * @param className - 类名
 * @returns 是否包含类名
 */
export function hasClass(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * 判断元素是否匹配选择器
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 是否匹配
 */
export function matches(element: HTMLElement, selector: string): boolean {
  return element.matches(selector);
}

/**
 * 获取最近的匹配选择器的祖先元素
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 匹配的祖先元素或null
 */
export function closest(element: HTMLElement, selector: string): HTMLElement | null {
  return element.closest(selector);
}

/**
 * 类名操作
 */

/**
 * 添加类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
export function addClass(element: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    element.classList.add(...className);
  } else {
    element.classList.add(className);
  }
}

/**
 * 移除类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
export function removeClass(element: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    element.classList.remove(...className);
  } else {
    element.classList.remove(className);
  }
}

/**
 * 切换类名
 * @param element - DOM元素
 * @param className - 类名
 */
export function toggleClass(element: HTMLElement, className: string): void {
  element.classList.toggle(className);
}

/**
 * 样式操作
 */

/**
 * 设置样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @param value - 样式值
 */
export function setStyle(element: HTMLElement, property: string, value: string | number): void {
  element.style[property as any] = value.toString();
}

/**
 * 获取样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 样式值
 */
export function getStyle(element: HTMLElement, property: string): string | null {
  return element.style[property as any] || null;
}

/**
 * 设置多个样式
 * @param element - DOM元素
 * @param styles - 样式对象
 */
export function setStyles(element: HTMLElement, styles: Record<string, string | number>): void {
  Object.entries(styles).forEach(([property, value]) => {
    setStyle(element, property, value);
  });
} 