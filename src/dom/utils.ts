/**
 * DOM 操作工具函数
 */

/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns Promise<void>
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // 降级处理
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

/**
 * 获取元素的计算样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 计算后的样式值
 */
export function getComputedStyleValue(
  element: HTMLElement,
  property: string
): string {
  return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * 检查元素是否可见
 * @param element - DOM元素
 * @returns 是否可见
 */
export function isVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

/**
 * 检查元素是否可聚焦
 * @param element - DOM元素
 * @returns 是否可聚焦
 */
export function isFocusable(element: HTMLElement): boolean {
  const tabIndex = element.getAttribute('tabindex');
  const isTabIndex = tabIndex !== null && parseInt(tabIndex, 10) >= 0;
  
  return (
    isTabIndex ||
    element.tagName === 'BUTTON' ||
    element.tagName === 'INPUT' ||
    element.tagName === 'SELECT' ||
    element.tagName === 'TEXTAREA' ||
    element.tagName === 'A' ||
    element.tagName === 'AREA'
  );
}

/**
 * 获取元素的文本内容
 * @param element - DOM元素
 * @returns 文本内容
 */
export function getTextContent(element: HTMLElement): string {
  return element.textContent || '';
}

/**
 * 设置元素的文本内容
 * @param element - DOM元素
 * @param text - 文本内容
 */
export function setTextContent(element: HTMLElement, text: string): void {
  element.textContent = text;
}

/**
 * 获取元素的HTML内容
 * @param element - DOM元素
 * @returns HTML内容
 */
export function getInnerHTML(element: HTMLElement): string {
  return element.innerHTML;
}

/**
 * 设置元素的HTML内容
 * @param element - DOM元素
 * @param html - HTML内容
 */
export function setInnerHTML(element: HTMLElement, html: string): void {
  element.innerHTML = html;
} 