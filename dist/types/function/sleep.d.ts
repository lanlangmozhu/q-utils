/**
 * 延迟指定时间
 * 提供一个Promise，在指定的毫秒数后解析
 *
 * @param ms - 延迟的毫秒数
 * @returns 返回一个Promise，在指定时间后解析
 * @example
 * ```ts
 * // 基本用法
 * async function demo() {
 *   console.log('开始');
 *   await sleep(2000); // 暂停2秒
 *   console.log('2秒后继续执行');
 * }
 *
 * // 在循环中使用
 * async function processItems(items: any[]) {
 *   for (const item of items) {
 *     processItem(item);
 *     await sleep(300); // 每次处理后暂停300毫秒
 *   }
 * }
 * ```
 */
export declare function sleep(ms: number): Promise<void>;
//# sourceMappingURL=sleep.d.ts.map