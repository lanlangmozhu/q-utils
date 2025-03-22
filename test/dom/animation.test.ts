import {
  fadeIn,
  fadeOut,
  slideDown,
  slideUp,
  addTransition,
  removeTransition
} from '../../src/dom/animation';

describe('DOM Animation Operations', () => {
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

  describe('fadeIn', () => {
    test('应该执行淡入动画', (done) => {
      testElement.style.display = 'none';
      testElement.style.opacity = '0';
      
      fadeIn(testElement, 100, () => {
        expect(testElement.style.display).toBe('block');
        expect(parseFloat(testElement.style.opacity)).toBeGreaterThan(0);
        done();
      });
    });

    test('应该使用默认持续时间', (done) => {
      testElement.style.display = 'none';
      testElement.style.opacity = '0';
      
      fadeIn(testElement, undefined, () => {
        expect(testElement.style.display).toBe('block');
        expect(parseFloat(testElement.style.opacity)).toBeGreaterThan(0);
        done();
      });
    });
  });

  describe('fadeOut', () => {
    test('应该执行淡出动画', (done) => {
      testElement.style.display = 'block';
      testElement.style.opacity = '1';
      
      fadeOut(testElement, 100, () => {
        expect(testElement.style.display).toBe('none');
        expect(parseFloat(testElement.style.opacity)).toBe(0);
        done();
      });
    });

    test('应该使用默认持续时间', (done) => {
      testElement.style.display = 'block';
      testElement.style.opacity = '1';
      
      fadeOut(testElement, undefined, () => {
        expect(testElement.style.display).toBe('none');
        expect(parseFloat(testElement.style.opacity)).toBe(0);
        done();
      });
    });
  });

  describe('slideDown', () => {
    test('应该执行向下滑动动画', (done) => {
      testElement.style.display = 'none';
      testElement.style.height = '0';
      
      slideDown(testElement, 100, () => {
        expect(testElement.style.display).toBe('block');
        expect(testElement.style.height).toBe('auto');
        expect(testElement.style.overflow).toBe('visible');
        done();
      });
    });

    test('应该使用默认持续时间', (done) => {
      testElement.style.display = 'none';
      testElement.style.height = '0';
      
      slideDown(testElement, undefined, () => {
        expect(testElement.style.display).toBe('block');
        expect(testElement.style.height).toBe('auto');
        expect(testElement.style.overflow).toBe('visible');
        done();
      });
    });
  });

  describe('slideUp', () => {
    test('应该执行向上滑动动画', (done) => {
      testElement.style.display = 'block';
      testElement.style.height = '200px';
      
      slideUp(testElement, 100, () => {
        expect(testElement.style.display).toBe('none');
        expect(testElement.style.height).toBe('auto');
        expect(testElement.style.overflow).toBe('visible');
        done();
      });
    });

    test('应该使用默认持续时间', (done) => {
      testElement.style.display = 'block';
      testElement.style.height = '200px';
      
      slideUp(testElement, undefined, () => {
        expect(testElement.style.display).toBe('none');
        expect(testElement.style.height).toBe('auto');
        expect(testElement.style.overflow).toBe('visible');
        done();
      });
    });
  });

  describe('addTransition', () => {
    test('应该添加单个属性的过渡效果', () => {
      addTransition(testElement, 'opacity');
      expect(testElement.style.transition).toBe('opacity 300ms ease');
    });

    test('应该添加多个属性的过渡效果', () => {
      addTransition(testElement, ['opacity', 'height']);
      expect(testElement.style.transition).toBe('opacity 300ms ease, height 300ms ease');
    });

    test('应该使用自定义持续时间和时间函数', () => {
      addTransition(testElement, 'opacity', 500, 'linear');
      expect(testElement.style.transition).toBe('opacity 500ms linear');
    });
  });

  describe('removeTransition', () => {
    test('应该移除过渡效果', () => {
      addTransition(testElement, 'opacity');
      removeTransition(testElement);
      expect(testElement.style.transition).toBe('');
    });
  });
}); 