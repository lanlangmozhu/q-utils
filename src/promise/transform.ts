/**
 * Promise 转换工具函数
 * @packageDocumentation
 */

/**
 * 防抖
 * @param fn - 要执行的函数
 * @param ms - 延迟时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * const debouncedFn = debounce(() => console.log('执行'), 1000);
 * debouncedFn();
 * debouncedFn();
 * // 1秒后只执行一次
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

/**
 * 节流
 * @param fn - 要执行的函数
 * @param ms - 间隔时间（毫秒）
 * @returns 节流后的函数
 * @example
 * const throttledFn = throttle(() => console.log('执行'), 1000);
 * throttledFn();
 * throttledFn();
 * // 1秒内只执行一次
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      fn(...args);
      lastTime = now;
    }
  };
};

