/**
 * 创建元素
 * @param tag - 标签名
 * @param attributes - 属性对象
 * @param children - 子元素数组
 * @returns 创建的元素
 */
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, attributes?: Record<string, string>, children?: (string | HTMLElement)[]): HTMLElementTagNameMap[K];
/**
 * 在目标元素前插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
export declare function insertBefore(newElement: HTMLElement, targetElement: HTMLElement): void;
/**
 * 在目标元素后插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
export declare function insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void;
/**
 * 设置多个属性
 * @param element - DOM元素
 * @param attributes - 属性对象
 */
export declare function setAttributes(element: HTMLElement, attributes: Record<string, string>): void;
/**
 * 获取数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @returns 数据属性值
 */
export declare function getData(element: HTMLElement, key: string): string | null;
/**
 * 设置数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @param value - 数据属性值
 */
export declare function setData(element: HTMLElement, key: string, value: string): void;
//# sourceMappingURL=element.d.ts.map