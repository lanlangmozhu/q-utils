import {
  on,
  off,
  once,
  delegate
} from '../../src/dom/event';

describe('DOM Event Operations', () => {
  let container: HTMLElement;
  let testElement: HTMLElement;
  let childElement: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);

    testElement = document.createElement('div');
    testElement.id = 'test';
    container.appendChild(testElement);

    childElement = document.createElement('div');
    childElement.id = 'child';
    testElement.appendChild(childElement);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('on', () => {
    test('应该添加事件监听器', () => {
      const handler = jest.fn();
      on(testElement, 'click', handler);
      testElement.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('应该多次触发事件监听器', () => {
      const handler = jest.fn();
      on(testElement, 'click', handler);
      testElement.click();
      testElement.click();
      expect(handler).toHaveBeenCalledTimes(2);
    });
  });

  describe('off', () => {
    test('应该移除事件监听器', () => {
      const handler = jest.fn();
      on(testElement, 'click', handler);
      off(testElement, 'click', handler);
      testElement.click();
      expect(handler).not.toHaveBeenCalled();
    });

    test('移除不存在的监听器不应该报错', () => {
      const handler = jest.fn();
      off(testElement, 'click', handler);
      testElement.click();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('once', () => {
    test('应该只触发一次事件监听器', () => {
      const handler = jest.fn();
      once(testElement, 'click', handler);
      testElement.click();
      testElement.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('应该正确传递事件对象', () => {
      const handler = jest.fn();
      once(testElement, 'click', handler);
      testElement.click();
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });
  });

  describe('delegate', () => {
    test('应该处理匹配选择器的事件', () => {
      const handler = jest.fn();
      delegate(container, 'click', '#child', handler);
      childElement.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('不应该处理不匹配选择器的事件', () => {
      const handler = jest.fn();
      delegate(container, 'click', '#non-existent', handler);
      childElement.click();
      expect(handler).not.toHaveBeenCalled();
    });

    test('应该正确绑定 this 上下文', () => {
      const handler = jest.fn(function(this: HTMLElement) {
        expect(this).toBe(childElement);
      });
      delegate(container, 'click', '#child', handler);
      childElement.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('应该处理冒泡事件', () => {
      const handler = jest.fn();
      delegate(container, 'click', '#child', handler);
      const grandChild = document.createElement('div');
      grandChild.id = 'grand-child';
      childElement.appendChild(grandChild);
      grandChild.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
}); 