import {
  createElement,
  insertBefore,
  insertAfter,
  setAttributes,
  getData,
  setData
} from '../../src/dom/element';

describe('DOM Element Operations', () => {
  let container: HTMLElement;
  let targetElement: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);

    targetElement = document.createElement('div');
    targetElement.id = 'target';
    container.appendChild(targetElement);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('createElement', () => {
    test('应该创建基本元素', () => {
      const element = createElement('div');
      expect(element.tagName.toLowerCase()).toBe('div');
    });

    test('应该设置属性', () => {
      const element = createElement('div', {
        id: 'test',
        class: 'test-class'
      });
      expect(element.id).toBe('test');
      expect(element.className).toBe('test-class');
    });

    test('应该添加文本子元素', () => {
      const element = createElement('div', {}, ['Hello']);
      expect(element.textContent).toBe('Hello');
    });

    test('应该添加 DOM 子元素', () => {
      const child = document.createElement('span');
      child.textContent = 'Child';
      const element = createElement('div', {}, [child]);
      expect(element.firstChild).toBe(child);
    });

    test('应该添加混合子元素', () => {
      const child = document.createElement('span');
      child.textContent = 'Child';
      const element = createElement('div', {}, ['Hello', child, 'World']);
      expect(element.childNodes.length).toBe(3);
      expect(element.childNodes[0].textContent).toBe('Hello');
      expect(element.childNodes[1]).toBe(child);
      expect(element.childNodes[2].textContent).toBe('World');
    });
  });

  describe('insertBefore', () => {
    test('应该在目标元素前插入新元素', () => {
      const newElement = document.createElement('div');
      newElement.id = 'new';
      insertBefore(newElement, targetElement);
      expect(container.firstChild).toBe(newElement);
      expect(container.lastChild).toBe(targetElement);
    });
  });

  describe('insertAfter', () => {
    test('应该在目标元素后插入新元素', () => {
      const newElement = document.createElement('div');
      newElement.id = 'new';
      insertAfter(newElement, targetElement);
      expect(container.firstChild).toBe(targetElement);
      expect(container.lastChild).toBe(newElement);
    });
  });

  describe('setAttributes', () => {
    test('应该设置多个属性', () => {
      const element = document.createElement('div');
      setAttributes(element, {
        id: 'test',
        class: 'test-class',
        'data-test': 'value'
      });
      expect(element.id).toBe('test');
      expect(element.className).toBe('test-class');
      expect(element.getAttribute('data-test')).toBe('value');
    });
  });

  describe('getData', () => {
    test('应该获取数据属性值', () => {
      const element = document.createElement('div');
      element.dataset.test = 'value';
      expect(getData(element, 'test')).toBe('value');
    });

    test('不存在的属性应该返回 null', () => {
      const element = document.createElement('div');
      expect(getData(element, 'non-existent')).toBeNull();
    });
  });

  describe('setData', () => {
    test('应该设置数据属性值', () => {
      const element = document.createElement('div');
      setData(element, 'test', 'value');
      expect(element.dataset.test).toBe('value');
    });

    test('应该覆盖已存在的数据属性值', () => {
      const element = document.createElement('div');
      element.dataset.test = 'old-value';
      setData(element, 'test', 'new-value');
      expect(element.dataset.test).toBe('new-value');
    });
  });
}); 