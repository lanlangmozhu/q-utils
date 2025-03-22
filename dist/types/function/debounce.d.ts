/**
 * 创建一个防抖函数，该函数延迟调用原函数，直到上一次被调用后经过指定的时间
 * 常用于处理连续触发的事件，如输入框输入、窗口调整大小等
 * @param func - 要防抖的函数
 * @param wait - 延迟时间（毫秒）
 * @param immediate - 是否在延迟开始前调用函数，默认为false
 * @returns 防抖处理后的函数
 * @example
 * ```ts
 * // 基本用法，延迟300ms执行
 * const debouncedFn = debounce(() => {
 *   console.log('处理搜索请求');
 * }, 300);
 *
 * // 在输入事件中使用
 * inputElement.addEventListener('input', debouncedFn);
 *
 * // 立即执行，然后等待300ms才能再次执行
 * const immediateFunc = debounce(() => {
 *   console.log('立即执行');
 * }, 300, true);
 * ```
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait?: number, immediate?: boolean): T & {
    cancel: () => void;
};
/**
 * 取消防抖函数的执行
 * @param debouncedFn - 通过debounce创建的防抖函数
 * @example
 * ```ts
 * const debouncedFn = debounce(() => console.log('Debounced'), 300);
 *
 * // 取消定时器，阻止函数执行
 * cancelDebounce(debouncedFn);
 * ```
 */
export declare function cancelDebounce(debouncedFn: Function): void;
//# sourceMappingURL=debounce.d.ts.map