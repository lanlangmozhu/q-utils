/**
 * 根据路径设置对象中的值，支持点表示法和数组路径
 *
 * @param obj - 要设置值的对象
 * @param path - 路径字符串或路径数组
 * @param value - 要设置的值
 * @returns 修改后的原始对象
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * set(obj, 'a.b.c', 100);           // obj.a.b.c 变为 100
 * set(obj, 'a.x.y', 'hello');       // 创建不存在的路径，obj.a.x.y 变为 'hello'
 *
 * // 使用数组路径
 * set(obj, ['a', 'b', 'd'], true);  // obj.a.b.d 变为 true
 *
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * set(arr, 'users[1].name', '王五'); // arr.users[1].name 变为 '王五'
 * set(arr, ['users', 1, 'name'], '王五'); // 同上
 *
 * // 创建数组
 * const data = {};
 * set(data, 'items[0]', 'first');    // data 变为 { items: ['first'] }
 * ```
 */
export declare function set<T extends object>(obj: T, path: string | (string | number)[], value: any): T;
//# sourceMappingURL=setValueByPath.d.ts.map