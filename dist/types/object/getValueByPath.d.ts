/**
 * 根据路径获取对象中的值，支持点表示法和数组路径
 *
 * @param obj - 要获取值的对象
 * @param path - 路径字符串或路径数组
 * @param defaultValue - 当路径不存在时返回的默认值
 * @returns 路径对应的值或默认值
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * get(obj, 'a.b.c');          // 返回: 42
 * get(obj, 'a.b');            // 返回: { c: 42 }
 * get(obj, 'a.x.y', 'none');  // 返回: 'none'
 *
 * // 使用数组路径
 * get(obj, ['a', 'b', 'c']);  // 返回: 42
 *
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * get(arr, 'users[1].name');  // 返回: '李四'
 * get(arr, ['users', 1, 'name']); // 返回: '李四'
 * ```
 */
export declare function get<T = any>(obj: any, path: string | (string | number)[], defaultValue?: T): T;
/**
 * 根据路径获取对象中的值
 * @param obj - 源对象
 * @param path - 路径，可以是字符串（用点号分隔）或字符串数组
 * @returns 路径对应的值，如果路径不存在则返回 undefined
 * @example
 * ```ts
 * const obj = { a: { b: { c: 1 } } };
 * getValueByPath(obj, 'a.b.c'); // 1
 * getValueByPath(obj, ['a', 'b', 'c']); // 1
 * getValueByPath(obj, 'a.d.e'); // undefined
 * ```
 */
export declare const getValueByPath: <T = any>(obj: Record<string, any>, path: string | string[]) => T | undefined;
//# sourceMappingURL=getValueByPath.d.ts.map