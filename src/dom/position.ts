/**
 * 获取元素尺寸
 * @param element - DOM元素
 * @returns 元素尺寸对象
 */
export function getElementSize(element: HTMLElement): { width: number; height: number } {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  };
}

/**
 * 获取元素位置
 * @param element - DOM元素
 * @returns 元素位置对象
 */
export function getElementPosition(element: HTMLElement): { top: number; left: number } {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
}

/**
 * 获取元素视口位置
 * @param element - DOM元素
 * @returns 元素视口位置对象
 */
export function getElementViewportPosition(element: HTMLElement): { top: number; left: number } {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left
  };
}

/**
 * 检查元素是否在视口中
 * @param element - DOM元素
 * @param threshold - 阈值（0-1之间）
 * @returns 是否在视口中
 */
export function isElementInViewport(
  element: HTMLElement,
  threshold: number = 0
): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  
  const elementHeight = rect.height;
  const elementWidth = rect.width;
  
  return (
    visibleHeight / elementHeight >= threshold &&
    visibleWidth / elementWidth >= threshold
  );
}

/**
 * 获取元素滚动位置
 * @param element - DOM元素
 * @returns 滚动位置对象
 */
export function getElementScrollPosition(element: HTMLElement): { top: number; left: number } {
  return {
    top: element.scrollTop,
    left: element.scrollLeft
  };
}

/**
 * 设置元素滚动位置
 * @param element - DOM元素
 * @param position - 滚动位置对象
 */
export function setElementScrollPosition(
  element: HTMLElement,
  position: { top?: number; left?: number }
): void {
  if (position.top !== undefined) {
    element.scrollTop = position.top;
  }
  if (position.left !== undefined) {
    element.scrollLeft = position.left;
  }
}

/**
 * 获取元素内容尺寸
 * @param element - DOM元素
 * @returns 内容尺寸对象
 */
export function getElementContentSize(element: HTMLElement): { width: number; height: number } {
  return {
    width: element.scrollWidth,
    height: element.scrollHeight
  };
}

/**
 * 获取元素内边距尺寸
 * @param element - DOM元素
 * @returns 内边距尺寸对象
 */
export function getElementPaddingSize(element: HTMLElement): { width: number; height: number } {
  const style = window.getComputedStyle(element);
  return {
    width: parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
    height: parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
  };
}

/**
 * 获取元素边框尺寸
 * @param element - DOM元素
 * @returns 边框尺寸对象
 */
export function getElementBorderSize(element: HTMLElement): { width: number; height: number } {
  const style = window.getComputedStyle(element);
  return {
    width: parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth),
    height: parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)
  };
} 