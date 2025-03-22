/**
 * 创建元素
 * @param tag - 标签名
 * @param attributes - 属性对象
 * @param children - 子元素数组
 * @returns 创建的元素
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Record<string, string>,
  children?: (string | HTMLElement)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  
  if (children) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }
  
  return element;
}

/**
 * 在目标元素前插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
export function insertBefore(newElement: HTMLElement, targetElement: HTMLElement): void {
  targetElement.parentNode?.insertBefore(newElement, targetElement);
}

/**
 * 在目标元素后插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
export function insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void {
  targetElement.parentNode?.insertBefore(newElement, targetElement.nextSibling);
}

/**
 * 设置多个属性
 * @param element - DOM元素
 * @param attributes - 属性对象
 */
export function setAttributes(element: HTMLElement, attributes: Record<string, string>): void {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

/**
 * 获取数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @returns 数据属性值
 */
export function getData(element: HTMLElement, key: string): string | null {
  return element.dataset[key] || null;
}

/**
 * 设置数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @param value - 数据属性值
 */
export function setData(element: HTMLElement, key: string, value: string): void {
  element.dataset[key] = value;
} 