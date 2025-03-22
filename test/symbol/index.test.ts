import {
  createSymbol,
  createGlobalSymbol,
  getSymbolDescription,
  getSymbolKey,
  isSymbol,
  isGlobalSymbol,
  createSymbolIterator,
  createSymbolAsyncIterator,
  createSymbolGenerator,
  createSymbolAsyncGenerator,
  createSymbolArray,
  createGlobalSymbolArray,
  createSymbolMap,
  createGlobalSymbolMap
} from '../../src/symbol';

describe('Symbol 工具函数', () => {
  describe('createSymbol', () => {
    it('应该创建 Symbol', () => {
      const symbol = createSymbol('test');
      expect(typeof symbol).toBe('symbol');
      expect(getSymbolDescription(symbol)).toBe('test');
    });
  });

  describe('createGlobalSymbol', () => {
    it('应该正确创建全局 Symbol', () => {
      const sym = createGlobalSymbol('test');
      expect(isSymbol(sym)).toBe(true);
      expect(getSymbolKey(sym)).toBe('test');
    });
  });

  describe('getSymbolDescription', () => {
    it('应该获取 Symbol 的描述', () => {
      expect(getSymbolDescription(Symbol('test'))).toBe('test');
      expect(getSymbolDescription(Symbol())).toBeUndefined();
    });
  });

  describe('getSymbolKey', () => {
    it('应该获取 Symbol 的键', () => {
      const sym = Symbol.for('test');
      expect(getSymbolKey(sym)).toBe('test');
    });
  });

  describe('isSymbol', () => {
    it('应该正确判断值是否为 Symbol', () => {
      expect(isSymbol(Symbol())).toBe(true);
      expect(isSymbol(Symbol('test'))).toBe(true);
      expect(isSymbol('test')).toBe(false);
      expect(isSymbol(null)).toBe(false);
      expect(isSymbol(undefined)).toBe(false);
    });
  });

  describe('isGlobalSymbol', () => {
    it('应该正确判断是否为全局 Symbol', () => {
      expect(isGlobalSymbol(Symbol.for('test'))).toBe(true);
      expect(isGlobalSymbol(Symbol('test'))).toBe(false);
    });
  });

  describe('createSymbolIterator', () => {
    it('应该正确创建 Symbol 迭代器', async () => {
      const sym = Symbol('test');
      const iterator = createSymbolIterator(sym);
      const result = iterator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolAsyncIterator', () => {
    it('应该正确创建 Symbol 异步迭代器', async () => {
      const sym = Symbol('test');
      const iterator = createSymbolAsyncIterator(sym);
      const result = await iterator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolGenerator', () => {
    it('应该正确创建 Symbol 生成器', () => {
      const sym = Symbol('test');
      const generator = createSymbolGenerator(sym);
      const result = generator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolAsyncGenerator', () => {
    it('应该正确创建 Symbol 异步生成器', async () => {
      const sym = Symbol('test');
      const generator = createSymbolAsyncGenerator(sym);
      const result = await generator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolArray', () => {
    it('应该正确创建 Symbol 数组', () => {
      const descriptions = ['test1', 'test2'];
      const symbols = createSymbolArray(descriptions);
      expect(symbols).toHaveLength(2);
      expect(symbols[0].description).toBe('test1');
      expect(symbols[1].description).toBe('test2');
    });
  });

  describe('createGlobalSymbolArray', () => {
    it('应该正确创建全局 Symbol 数组', () => {
      const keys = ['test1', 'test2'];
      const symbols = createGlobalSymbolArray(keys);
      expect(symbols).toHaveLength(2);
      expect(Symbol.keyFor(symbols[0])).toBe('test1');
      expect(Symbol.keyFor(symbols[1])).toBe('test2');
    });
  });

  describe('createSymbolMap', () => {
    it('应该正确创建 Symbol 映射', () => {
      const descriptions = ['test1', 'test2'];
      const map = createSymbolMap(descriptions);
      expect(Object.keys(map)).toHaveLength(2);
      expect(map['test1'].description).toBe('test1');
      expect(map['test2'].description).toBe('test2');
    });
  });

  describe('createGlobalSymbolMap', () => {
    it('应该正确创建全局 Symbol 映射', () => {
      const keys = ['test1', 'test2'];
      const map = createGlobalSymbolMap(keys);
      expect(Object.keys(map)).toHaveLength(2);
      expect(Symbol.keyFor(map['test1'])).toBe('test1');
      expect(Symbol.keyFor(map['test2'])).toBe('test2');
    });
  });
}); 