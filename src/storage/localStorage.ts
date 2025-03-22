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
export function isLocalStorageSupported(): boolean {
    try {
        const testKey = '__test_support__';
        localStorage.setItem(testKey, testKey);
        const result = localStorage.getItem(testKey) === testKey;
        localStorage.removeItem(testKey);
        return result;
    } catch (error) {
        return false;
    }
}

/**
 * 获取 localStorage 数据
 * 
 * @param key - 要获取数据的键名
 * @returns 获取到的数据
 */ 
export function getLocalStorage<T>(key: string, defaultValue: T): T {
    if (!isLocalStorageSupported()) {
        return defaultValue;
    }
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
}   

/**
 * 设置 localStorage 数据
 * 
 * @param key - 要设置数据的键名
 * @param value - 要设置的数据
 */ 
export function setLocalStorage<T>(key: string, value: T): void {           
    if (!isLocalStorageSupported()) {
        return;
    }
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 删除 localStorage 数据
 * 
 * @param key - 要删除数据的键名
 */ 
export function removeLocalStorage(key: string): void { 
    if (!isLocalStorageSupported()) {
        return;
    }
    localStorage.removeItem(key);
}           

/**
 * 清除 localStorage 所有数据
 */ 
export function clearLocalStorage(): void {
    if (!isLocalStorageSupported()) {
        return;
    }
    localStorage.clear();
}

/**
 * 获取 localStorage 所有数据
 * 
 * @returns 获取到的所有数据，键值对对象
 */ 
export function getAllLocalStorage(): Record<string, any> {
    if (!isLocalStorageSupported()) {
        return {};
    }
    return Object.fromEntries(Object.entries(localStorage));
}

/**
 * 获取 localStorage 数据数量
 * 
 * @returns 获取到的数据数量
 */ 
export function getLocalStorageLength(): number {
    if (!isLocalStorageSupported()) {
        return 0;
    }
    return localStorage.length;
}

/**
 * 获取 localStorage 所有键名
 * 
 * @returns 获取到的所有键名
 */ 
export function getAllLocalStorageKeys(): string[] {
    if (!isLocalStorageSupported()) {
        return [];
    }
    return Object.keys(localStorage);
}

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
export function getAllLocalStorageValues(): any[] {
    if (!isLocalStorageSupported()) {
        return [];
    }
    return Object.values(localStorage);
} 