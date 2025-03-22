/**
 * 获取元素尺寸
 * @param element - DOM元素
 * @returns 元素尺寸对象
 */
export declare function getElementSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素位置
 * @param element - DOM元素
 * @returns 元素位置对象
 */
export declare function getElementPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 获取元素视口位置
 * @param element - DOM元素
 * @returns 元素视口位置对象
 */
export declare function getElementViewportPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 检查元素是否在视口中
 * @param element - DOM元素
 * @param threshold - 阈值（0-1之间）
 * @returns 是否在视口中
 */
export declare function isElementInViewport(element: HTMLElement, threshold?: number): boolean;
/**
 * 获取元素滚动位置
 * @param element - DOM元素
 * @returns 滚动位置对象
 */
export declare function getElementScrollPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 设置元素滚动位置
 * @param element - DOM元素
 * @param position - 滚动位置对象
 */
export declare function setElementScrollPosition(element: HTMLElement, position: {
    top?: number;
    left?: number;
}): void;
/**
 * 获取元素内容尺寸
 * @param element - DOM元素
 * @returns 内容尺寸对象
 */
export declare function getElementContentSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素内边距尺寸
 * @param element - DOM元素
 * @returns 内边距尺寸对象
 */
export declare function getElementPaddingSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素边框尺寸
 * @param element - DOM元素
 * @returns 边框尺寸对象
 */
export declare function getElementBorderSize(element: HTMLElement): {
    width: number;
    height: number;
};
//# sourceMappingURL=position.d.ts.map