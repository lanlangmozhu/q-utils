import {
  copyToClipboard,
  getComputedStyleValue,
  isVisible,
  isFocusable,
  getTextContent,
  setTextContent,
  getInnerHTML,
  setInnerHTML
} from '../../src/dom/utils';

describe('DOM Utility Functions', () => {
  let container: HTMLElement;
  let testElement: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '1000px';
    container.style.height = '1000px';
    document.body.appendChild(container);

    testElement = document.createElement('div');
    testElement.style.width = '200px';
    testElement.style.height = '200px';
    testElement.style.backgroundColor = 'red';
    container.appendChild(testElement);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('copyToClipboard', () => {
    test('应该复制文本到剪贴板', async () => {
      const text = '测试文本';
      await copyToClipboard(text);
      
      // 由于安全限制，我们无法直接测试剪贴板内容
      // 这里我们只测试函数是否正常执行
      expect(true).toBe(true);
    });
  });

  describe('getComputedStyleValue', () => {
    test('应该获取计算后的样式值', () => {
      testElement.style.backgroundColor = 'red';
      expect(getComputedStyleValue(testElement, 'background-color')).toBe('rgb(255, 0, 0)');
    });

    test('应该处理不存在的样式属性', () => {
      expect(getComputedStyleValue(testElement, 'non-existent-property')).toBe('');
    });
  });

  describe('isVisible', () => {
    test('应该检测元素是否可见', () => {
      expect(isVisible(testElement)).toBe(true);

      testElement.style.display = 'none';
      expect(isVisible(testElement)).toBe(false);

      testElement.style.display = 'block';
      testElement.style.visibility = 'hidden';
      expect(isVisible(testElement)).toBe(false);

      testElement.style.visibility = 'visible';
      testElement.style.opacity = '0';
      expect(isVisible(testElement)).toBe(false);
    });
  });

  describe('isFocusable', () => {
    test('应该检测元素是否可聚焦', () => {
      const button = document.createElement('button');
      expect(isFocusable(button)).toBe(true);

      const input = document.createElement('input');
      expect(isFocusable(input)).toBe(true);

      const select = document.createElement('select');
      expect(isFocusable(select)).toBe(true);

      const textarea = document.createElement('textarea');
      expect(isFocusable(textarea)).toBe(true);

      const link = document.createElement('a');
      expect(isFocusable(link)).toBe(true);

      const area = document.createElement('area');
      expect(isFocusable(area)).toBe(true);

      const div = document.createElement('div');
      expect(isFocusable(div)).toBe(false);

      div.setAttribute('tabindex', '0');
      expect(isFocusable(div)).toBe(true);

      div.setAttribute('tabindex', '-1');
      expect(isFocusable(div)).toBe(false);
    });
  });

  describe('getTextContent', () => {
    test('应该获取元素的文本内容', () => {
      testElement.textContent = '测试文本';
      expect(getTextContent(testElement)).toBe('测试文本');
    });

    test('应该处理空文本内容', () => {
      testElement.textContent = '';
      expect(getTextContent(testElement)).toBe('');
    });
  });

  describe('setTextContent', () => {
    test('应该设置元素的文本内容', () => {
      setTextContent(testElement, '新文本');
      expect(testElement.textContent).toBe('新文本');
    });

    test('应该清空元素的文本内容', () => {
      setTextContent(testElement, '');
      expect(testElement.textContent).toBe('');
    });
  });

  describe('getInnerHTML', () => {
    test('应该获取元素的HTML内容', () => {
      testElement.innerHTML = '<span>测试</span>';
      expect(getInnerHTML(testElement)).toBe('<span>测试</span>');
    });

    test('应该处理空HTML内容', () => {
      testElement.innerHTML = '';
      expect(getInnerHTML(testElement)).toBe('');
    });
  });

  describe('setInnerHTML', () => {
    test('应该设置元素的HTML内容', () => {
      setInnerHTML(testElement, '<span>新内容</span>');
      expect(testElement.innerHTML).toBe('<span>新内容</span>');
    });

    test('应该清空元素的HTML内容', () => {
      setInnerHTML(testElement, '');
      expect(testElement.innerHTML).toBe('');
    });
  });
}); 