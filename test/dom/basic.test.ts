import {
  querySelector,
  hasClass,
  matches,
  closest,
  addClass,
  removeClass,
  toggleClass,
  setStyle,
  getStyle,
  setStyles
} from '../../src/dom/basic';

describe('DOM Basic Operations', () => {
  let container: HTMLElement;
  let testElement: HTMLElement;
  let parentElement: HTMLElement;

  beforeEach(() => {
    // 创建测试用的 DOM 元素
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);

    parentElement = document.createElement('div');
    parentElement.className = 'parent';
    container.appendChild(parentElement);

    testElement = document.createElement('div');
    testElement.className = 'test-element';
    parentElement.appendChild(testElement);
  });

  afterEach(() => {
    // 清理测试用的 DOM 元素
    document.body.removeChild(container);
  });

  describe('querySelector', () => {
    test('应该能找到存在的元素', () => {
      const element = querySelector('#test-container');
      expect(element).toBe(container);
    });

    test('找不到元素时应该返回 null', () => {
      const element = querySelector('.non-existent');
      expect(element).toBeNull();
    });
  });

  describe('hasClass', () => {
    test('应该正确检测类名是否存在', () => {
      expect(hasClass(testElement, 'test-element')).toBe(true);
      expect(hasClass(testElement, 'non-existent')).toBe(false);
    });
  });

  describe('matches', () => {
    test('应该正确匹配选择器', () => {
      expect(matches(testElement, '.test-element')).toBe(true);
      expect(matches(testElement, '.non-existent')).toBe(false);
    });
  });

  describe('closest', () => {
    test('应该找到最近的匹配祖先元素', () => {
      const result = closest(testElement, '.parent');
      expect(result).toBe(parentElement);
    });

    test('找不到匹配元素时应该返回 null', () => {
      const result = closest(testElement, '.non-existent');
      expect(result).toBeNull();
    });
  });

  describe('addClass', () => {
    test('应该添加单个类名', () => {
      addClass(testElement, 'new-class');
      expect(hasClass(testElement, 'new-class')).toBe(true);
    });

    test('应该添加多个类名', () => {
      addClass(testElement, ['class1', 'class2']);
      expect(hasClass(testElement, 'class1')).toBe(true);
      expect(hasClass(testElement, 'class2')).toBe(true);
    });
  });

  describe('removeClass', () => {
    beforeEach(() => {
      addClass(testElement, ['class1', 'class2']);
    });

    test('应该移除单个类名', () => {
      removeClass(testElement, 'class1');
      expect(hasClass(testElement, 'class1')).toBe(false);
      expect(hasClass(testElement, 'class2')).toBe(true);
    });

    test('应该移除多个类名', () => {
      removeClass(testElement, ['class1', 'class2']);
      expect(hasClass(testElement, 'class1')).toBe(false);
      expect(hasClass(testElement, 'class2')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    test('应该切换类名的存在状态', () => {
      toggleClass(testElement, 'toggle-class');
      expect(hasClass(testElement, 'toggle-class')).toBe(true);

      toggleClass(testElement, 'toggle-class');
      expect(hasClass(testElement, 'toggle-class')).toBe(false);
    });
  });

  describe('setStyle', () => {
    test('应该设置样式属性', () => {
      setStyle(testElement, 'backgroundColor', 'red');
      expect(getStyle(testElement, 'backgroundColor')).toBe('red');
    });

    test('应该处理数字值', () => {
      setStyle(testElement, 'width', 100);
      expect(getStyle(testElement, 'width')).toBe('100');
    });
  });

  describe('getStyle', () => {
    test('应该获取样式值', () => {
      setStyle(testElement, 'color', 'blue');
      expect(getStyle(testElement, 'color')).toBe('blue');
    });

    test('不存在的样式应该返回 null', () => {
      expect(getStyle(testElement, 'nonExistent')).toBeNull();
    });
  });

  describe('setStyles', () => {
    test('应该设置多个样式', () => {
      const styles = {
        backgroundColor: 'red',
        color: 'blue',
        width: 100
      };
      setStyles(testElement, styles);

      expect(getStyle(testElement, 'backgroundColor')).toBe('red');
      expect(getStyle(testElement, 'color')).toBe('blue');
      expect(getStyle(testElement, 'width')).toBe('100');
    });
  });
}); 