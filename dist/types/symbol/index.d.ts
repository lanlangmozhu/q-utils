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
export declare const createSymbol: (description?: string) => symbol;
/**
 * 创建全局唯一的 Symbol
 * @param key - Symbol 键名
 * @returns 全局唯一的 Symbol
 * @example
 * createGlobalSymbol('test') // Symbol.for('test')
 */
export declare const createGlobalSymbol: (key: string) => symbol;
/**
 * 获取 Symbol 的描述
 * @param sym - Symbol 对象
 * @returns Symbol 描述
 * @example
 * getSymbolDescription(Symbol('test')) // 'test'
 */
export declare const getSymbolDescription: (sym: symbol) => string | undefined;
/**
 * 获取 Symbol 的键名
 * @param sym - Symbol 对象
 * @returns Symbol 键名
 * @example
 * getSymbolKey(Symbol.for('test')) // 'test'
 */
export declare const getSymbolKey: (sym: symbol) => string | undefined;
/**
 * 检查是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
export declare const isSymbol: (value: unknown) => value is symbol;
/**
 * 检查是否为全局 Symbol
 * @param sym - Symbol 对象
 * @returns 是否为全局 Symbol
 * @example
 * isGlobalSymbol(Symbol.for('test')) // true
 * isGlobalSymbol(Symbol('test')) // false
 */
export declare const isGlobalSymbol: (sym: symbol) => boolean;
/**
 * 创建 Symbol 迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 迭代器
 * @example
 * createSymbolIterator(Symbol('test'))
 */
export declare const createSymbolIterator: (sym: symbol) => Iterator<symbol>;
/**
 * 创建 Symbol 异步迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 异步迭代器
 * @example
 * createSymbolAsyncIterator(Symbol('test'))
 */
export declare const createSymbolAsyncIterator: (sym: symbol) => AsyncIterator<symbol>;
/**
 * 创建 Symbol 生成器
 * @param sym - Symbol 对象
 * @returns Symbol 生成器
 * @example
 * createSymbolGenerator(Symbol('test'))
 */
export declare function createSymbolGenerator(sym: symbol): Generator<symbol>;
/**
 * 创建 Symbol 异步生成器
 * @param sym - Symbol 对象
 * @returns Symbol 异步生成器
 * @example
 * createSymbolAsyncGenerator(Symbol('test'))
 */
export declare function createSymbolAsyncGenerator(sym: symbol): AsyncGenerator<symbol>;
/**
 * 创建 Symbol 数组
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 数组
 * @example
 * createSymbolArray(['test1', 'test2']) // [Symbol('test1'), Symbol('test2')]
 */
export declare const createSymbolArray: (descriptions: string[]) => symbol[];
/**
 * 创建全局 Symbol 数组
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 数组
 * @example
 * createGlobalSymbolArray(['test1', 'test2']) // [Symbol.for('test1'), Symbol.for('test2')]
 */
export declare const createGlobalSymbolArray: (keys: string[]) => symbol[];
/**
 * 创建 Symbol 映射
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 映射
 * @example
 * createSymbolMap(['test1', 'test2']) // { test1: Symbol('test1'), test2: Symbol('test2') }
 */
export declare const createSymbolMap: (descriptions: string[]) => Record<string, symbol>;
/**
 * 创建全局 Symbol 映射
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 映射
 * @example
 * createGlobalSymbolMap(['test1', 'test2']) // { test1: Symbol.for('test1'), test2: Symbol.for('test2') }
 */
export declare const createGlobalSymbolMap: (keys: string[]) => Record<string, symbol>;
//# sourceMappingURL=index.d.ts.map