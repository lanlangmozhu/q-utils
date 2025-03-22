/**
 * 会话存储(sessionStorage)相关工具函数
 * @packageDocumentation
 */
/**
 * 检查浏览器是否支持 sessionStorage
 *
 * @returns 如果支持返回 true，否则返回 false
 * @example
 * ```ts
 * if (isSessionStorageSupported()) {
 *   // 使用 sessionStorage
 * } else {
 *   // 使用备选方案
 * }
 * ```
 */
export declare function isSessionStorageSupported(): boolean;
/**
 * 从 sessionStorage 获取数据
 *
 * @param key - 存储的键名
 * @param defaultValue - 当键不存在时返回的默认值
 * @returns 存储的值或默认值
 * @example
 * ```ts
 * // 获取一个简单值
 * const tabId = getSessionStorage('currentTabId', '1');
 *
 * // 获取一个对象
 * const pageState = getSessionStorage('pageState', { scrollPos: 0 });
 * ```
 */
export declare function getSessionStorage<T>(key: string, defaultValue: T): T;
/**
 * 将数据存储到 sessionStorage
 *
 * @param key - 存储的键名
 * @param value - 要存储的值
 * @returns 存储是否成功
 * @example
 * ```ts
 * // 存储一个简单值
 * setSessionStorage('currentTabId', '2');
 *
 * // 存储一个对象
 * setSessionStorage('pageState', { scrollPos: 250, activeSection: 'comments' });
 * ```
 */
export declare function setSessionStorage<T>(key: string, value: T): boolean;
/**
 * 从 sessionStorage 中移除数据
 *
 * @param key - 要移除的键名
 * @returns 移除是否成功
 * @example
 * ```ts
 * // 移除一个存储项
 * removeSessionStorage('pageState');
 * ```
 */
export declare function removeSessionStorage(key: string): boolean;
/**
 * 清空所有 sessionStorage 数据
 *
 * @returns 清空是否成功
 * @example
 * ```ts
 * // 清空所有会话存储
 * clearSessionStorage();
 * ```
 */
export declare function clearSessionStorage(): boolean;
//# sourceMappingURL=sessionStorage.d.ts.map