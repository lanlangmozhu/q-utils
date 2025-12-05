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
} from '@/symbol';

describe('Symbol Utils', () => {
  describe('createSymbol', () => {
    it('should create a symbol with description', () => {
      const sym = createSymbol('test');
      expect(typeof sym).toBe('symbol');
      expect(sym.description).toBe('test');
    });

    it('should create a symbol without description', () => {
      const sym = createSymbol();
      expect(typeof sym).toBe('symbol');
      expect(sym.description).toBeUndefined();
    });
  });

  describe('createGlobalSymbol', () => {
    it('should create a global symbol', () => {
      const sym1 = createGlobalSymbol('test');
      const sym2 = createGlobalSymbol('test');
      expect(sym1).toBe(sym2);
    });
  });

  describe('getSymbolDescription', () => {
    it('should get symbol description', () => {
      const sym = Symbol('test');
      expect(getSymbolDescription(sym)).toBe('test');
    });

    it('should return undefined for symbol without description', () => {
      const sym = Symbol();
      expect(getSymbolDescription(sym)).toBeUndefined();
    });
  });

  describe('getSymbolKey', () => {
    it('should get symbol key for global symbol', () => {
      const sym = Symbol.for('test');
      expect(getSymbolKey(sym)).toBe('test');
    });

    it('should return undefined for non-global symbol', () => {
      const sym = Symbol('test');
      expect(getSymbolKey(sym)).toBeUndefined();
    });
  });

  describe('isSymbol', () => {
    it('should return true for symbol', () => {
      expect(isSymbol(Symbol('test'))).toBe(true);
      expect(isSymbol(Symbol())).toBe(true);
    });

    it('should return false for non-symbol', () => {
      expect(isSymbol('test')).toBe(false);
      expect(isSymbol(123)).toBe(false);
      expect(isSymbol({})).toBe(false);
    });
  });

  describe('isGlobalSymbol', () => {
    it('should return true for global symbol', () => {
      const sym = Symbol.for('test');
      expect(isGlobalSymbol(sym)).toBe(true);
    });

    it('should return false for non-global symbol', () => {
      const sym = Symbol('test');
      expect(isGlobalSymbol(sym)).toBe(false);
    });
  });

  describe('createSymbolIterator', () => {
    it('should create a symbol iterator', () => {
      const sym = Symbol('test');
      const iterator = createSymbolIterator(sym);
      const result = iterator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolAsyncIterator', () => {
    it('should create a symbol async iterator', async () => {
      const sym = Symbol('test');
      const iterator = createSymbolAsyncIterator(sym);
      const result = await iterator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(true);
    });
  });

  describe('createSymbolGenerator', () => {
    it('should create a symbol generator', () => {
      const sym = Symbol('test');
      const generator = createSymbolGenerator(sym);
      const result = generator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(false);
      expect(generator.next().done).toBe(true);
    });
  });

  describe('createSymbolAsyncGenerator', () => {
    it('should create a symbol async generator', async () => {
      const sym = Symbol('test');
      const generator = createSymbolAsyncGenerator(sym);
      const result = await generator.next();
      expect(result.value).toBe(sym);
      expect(result.done).toBe(false);
      expect((await generator.next()).done).toBe(true);
    });
  });

  describe('createSymbolArray', () => {
    it('should create an array of symbols', () => {
      const symbols = createSymbolArray(['test1', 'test2']);
      expect(symbols).toHaveLength(2);
      expect(symbols[0].description).toBe('test1');
      expect(symbols[1].description).toBe('test2');
    });
  });

  describe('createGlobalSymbolArray', () => {
    it('should create an array of global symbols', () => {
      const symbols = createGlobalSymbolArray(['test1', 'test2']);
      expect(symbols).toHaveLength(2);
      expect(symbols[0]).toBe(Symbol.for('test1'));
      expect(symbols[1]).toBe(Symbol.for('test2'));
    });
  });

  describe('createSymbolMap', () => {
    it('should create a map of symbols', () => {
      const map = createSymbolMap(['test1', 'test2']);
      expect(map.test1).toBeDefined();
      expect(map.test2).toBeDefined();
      expect(typeof map.test1).toBe('symbol');
      expect(typeof map.test2).toBe('symbol');
    });
  });

  describe('createGlobalSymbolMap', () => {
    it('should create a map of global symbols', () => {
      const map = createGlobalSymbolMap(['test1', 'test2']);
      expect(map.test1).toBe(Symbol.for('test1'));
      expect(map.test2).toBe(Symbol.for('test2'));
    });
  });
});

