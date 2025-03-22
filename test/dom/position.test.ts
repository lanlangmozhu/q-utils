import {
  getElementSize,
  getElementPosition,
  getElementViewportPosition,
  isElementInViewport,
  getElementScrollPosition,
  setElementScrollPosition,
  getElementContentSize,
  getElementPaddingSize,
  getElementBorderSize
} from '../../src/dom/position';

describe('DOM Position Operations', () => {
  let container: HTMLElement;
  let testElement: HTMLElement;
  let scrollContainer: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '1000px';
    container.style.height = '1000px';
    document.body.appendChild(container);

    testElement = document.createElement('div');
    testElement.style.position = 'absolute';
    testElement.style.top = '100px';
    testElement.style.left = '100px';
    testElement.style.width = '200px';
    testElement.style.height = '200px';
    testElement.style.padding = '10px';
    testElement.style.border = '1px solid black';
    container.appendChild(testElement);

    scrollContainer = document.createElement('div');
    scrollContainer.style.width = '200px';
    scrollContainer.style.height = '200px';
    scrollContainer.style.overflow = 'auto';
    scrollContainer.innerHTML = '<div style="width: 400px; height: 400px;"></div>';
    container.appendChild(scrollContainer);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('getElementSize', () => {
    test('应该获取元素尺寸', () => {
      const size = getElementSize(testElement);
      expect(size.width).toBe(200);
      expect(size.height).toBe(200);
    });
  });

  describe('getElementPosition', () => {
    test('应该获取元素位置', () => {
      const position = getElementPosition(testElement);
      expect(position.top).toBe(100 + window.scrollY);
      expect(position.left).toBe(100 + window.scrollX);
    });
  });

  describe('getElementViewportPosition', () => {
    test('应该获取元素视口位置', () => {
      const position = getElementViewportPosition(testElement);
      expect(position.top).toBe(100);
      expect(position.left).toBe(100);
    });
  });

  describe('isElementInViewport', () => {
    test('应该检测元素是否在视口中', () => {
      expect(isElementInViewport(testElement)).toBe(true);
      
      testElement.style.top = '2000px';
      expect(isElementInViewport(testElement)).toBe(false);
      
      testElement.style.top = '100px';
      expect(isElementInViewport(testElement, 0.5)).toBe(true);
    });
  });

  describe('getElementScrollPosition', () => {
    test('应该获取元素滚动位置', () => {
      scrollContainer.scrollTop = 50;
      scrollContainer.scrollLeft = 50;
      
      const position = getElementScrollPosition(scrollContainer);
      expect(position.top).toBe(50);
      expect(position.left).toBe(50);
    });
  });

  describe('setElementScrollPosition', () => {
    test('应该设置元素滚动位置', () => {
      setElementScrollPosition(scrollContainer, { top: 100, left: 100 });
      expect(scrollContainer.scrollTop).toBe(100);
      expect(scrollContainer.scrollLeft).toBe(100);
    });

    test('应该只设置指定的滚动位置', () => {
      setElementScrollPosition(scrollContainer, { top: 100 });
      expect(scrollContainer.scrollTop).toBe(100);
      expect(scrollContainer.scrollLeft).toBe(0);
    });
  });

  describe('getElementContentSize', () => {
    test('应该获取元素内容尺寸', () => {
      const size = getElementContentSize(scrollContainer);
      expect(size.width).toBe(400);
      expect(size.height).toBe(400);
    });
  });

  describe('getElementPaddingSize', () => {
    test('应该获取元素内边距尺寸', () => {
      const size = getElementPaddingSize(testElement);
      expect(size.width).toBe(20); // 左右各10px
      expect(size.height).toBe(20); // 上下各10px
    });
  });

  describe('getElementBorderSize', () => {
    test('应该获取元素边框尺寸', () => {
      const size = getElementBorderSize(testElement);
      expect(size.width).toBe(2); // 左右各1px
      expect(size.height).toBe(2); // 上下各1px
    });
  });
}); 