/**
 * localStorage 操作工具函数
 * 包含设置、获取、删除 localStorage 数据的功能
 * @packageDocumentation
 */
/**
 * 检查浏览器是否支持 localStorage
 *
 * @returns 如果支持返回 true，否则返回 false
 */
export declare function isLocalStorageSupported(): boolean;
/**
 * 获取 localStorage 数据
 *
 * @param key - 要获取数据的键名
 * @returns 获取到的数据
 */
export declare function getLocalStorage<T>(key: string, defaultValue: T): T;
/**
 * 设置 localStorage 数据
 *
 * @param key - 要设置数据的键名
 * @param value - 要设置的数据
 */
export declare function setLocalStorage<T>(key: string, value: T): void;
/**
 * 删除 localStorage 数据
 *
 * @param key - 要删除数据的键名
 */
export declare function removeLocalStorage(key: string): void;
/**
 * 清除 localStorage 所有数据
 */
export declare function clearLocalStorage(): void;
/**
 * 获取 localStorage 所有数据
 *
 * @returns 获取到的所有数据，键值对对象
 */
export declare function getAllLocalStorage(): Record<string, any>;
/**
 * 获取 localStorage 数据数量
 *
 * @returns 获取到的数据数量
 */
export declare function getLocalStorageLength(): number;
/**
 * 获取 localStorage 所有键名
 *
 * @returns 获取到的所有键名
 */
export declare function getAllLocalStorageKeys(): string[];
/**
 * 获取 localStorage 所有值
 *
 * @returns 获取到的所有值数组
 * @example
 * ```ts
 * const allValues = getAllLocalStorageValues();
 * console.log('所有存储的值:', allValues);
 * ```
 */
export declare function getAllLocalStorageValues(): any[];
//# sourceMappingURL=localStorage.d.ts.map