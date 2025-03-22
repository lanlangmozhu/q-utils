/**
 * Symbol 工具函数
 */

/**
 * 创建唯一的 Symbol
 * @param description - Symbol 描述
 * @returns 唯一的 Symbol
 * @example
 * createSymbol('test') // Symbol('test')
 */
export const createSymbol = (description?: string): symbol => 
  Symbol(description);

/**
 * 创建全局唯一的 Symbol
 * @param key - Symbol 键名
 * @returns 全局唯一的 Symbol
 * @example
 * createGlobalSymbol('test') // Symbol.for('test')
 */
export const createGlobalSymbol = (key: string): symbol => 
  Symbol.for(key);

/**
 * 获取 Symbol 的描述
 * @param sym - Symbol 对象
 * @returns Symbol 描述
 * @example
 * getSymbolDescription(Symbol('test')) // 'test'
 */
export const getSymbolDescription = (sym: symbol): string | undefined => 
  sym.description;

/**
 * 获取 Symbol 的键名
 * @param sym - Symbol 对象
 * @returns Symbol 键名
 * @example
 * getSymbolKey(Symbol.for('test')) // 'test'
 */
export const getSymbolKey = (sym: symbol): string | undefined => 
  Symbol.keyFor(sym);

/**
 * 检查是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
export const isSymbol = (value: unknown): value is symbol => 
  typeof value === 'symbol';

/**
 * 检查是否为全局 Symbol
 * @param sym - Symbol 对象
 * @returns 是否为全局 Symbol
 * @example
 * isGlobalSymbol(Symbol.for('test')) // true
 * isGlobalSymbol(Symbol('test')) // false
 */
export const isGlobalSymbol = (sym: symbol): boolean => 
  Symbol.keyFor(sym) !== undefined;

/**
 * 创建 Symbol 迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 迭代器
 * @example
 * createSymbolIterator(Symbol('test'))
 */
export const createSymbolIterator = (sym: symbol): Iterator<symbol> => ({
  next: () => ({ value: sym, done: true })
});

/**
 * 创建 Symbol 异步迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 异步迭代器
 * @example
 * createSymbolAsyncIterator(Symbol('test'))
 */
export const createSymbolAsyncIterator = (sym: symbol): AsyncIterator<symbol> => ({
  next: async () => ({ value: sym, done: true })
});

/**
 * 创建 Symbol 生成器
 * @param sym - Symbol 对象
 * @returns Symbol 生成器
 * @example
 * createSymbolGenerator(Symbol('test'))
 */
export function* createSymbolGenerator(sym: symbol): Generator<symbol> {
  yield sym;
}

/**
 * 创建 Symbol 异步生成器
 * @param sym - Symbol 对象
 * @returns Symbol 异步生成器
 * @example
 * createSymbolAsyncGenerator(Symbol('test'))
 */
export async function* createSymbolAsyncGenerator(sym: symbol): AsyncGenerator<symbol> {
  yield sym;
}

/**
 * 创建 Symbol 数组
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 数组
 * @example
 * createSymbolArray(['test1', 'test2']) // [Symbol('test1'), Symbol('test2')]
 */
export const createSymbolArray = (descriptions: string[]): symbol[] => 
  descriptions.map(description => Symbol(description));

/**
 * 创建全局 Symbol 数组
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 数组
 * @example
 * createGlobalSymbolArray(['test1', 'test2']) // [Symbol.for('test1'), Symbol.for('test2')]
 */
export const createGlobalSymbolArray = (keys: string[]): symbol[] => 
  keys.map(key => Symbol.for(key));

/**
 * 创建 Symbol 映射
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 映射
 * @example
 * createSymbolMap(['test1', 'test2']) // { test1: Symbol('test1'), test2: Symbol('test2') }
 */
export const createSymbolMap = (descriptions: string[]): Record<string, symbol> => 
  descriptions.reduce((map, description) => ({
    ...map,
    [description]: Symbol(description)
  }), {});

/**
 * 创建全局 Symbol 映射
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 映射
 * @example
 * createGlobalSymbolMap(['test1', 'test2']) // { test1: Symbol.for('test1'), test2: Symbol.for('test2') }
 */
export const createGlobalSymbolMap = (keys: string[]): Record<string, symbol> => 
  keys.reduce((map, key) => ({
    ...map,
    [key]: Symbol.for(key)
  }), {}); 