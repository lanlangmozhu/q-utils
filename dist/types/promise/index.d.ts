/**
 * Promise 工具函数
 */
/**
 * 延迟执行
 * @param ms - 延迟时间（毫秒）
 * @returns Promise
 * @example
 * delay(1000).then(() => console.log('1秒后执行'))
 */
export declare const delay: (ms: number) => Promise<void>;
/**
 * 超时处理
 * @param promise - Promise 对象
 * @param ms - 超时时间（毫秒）
 * @returns Promise
 * @example
 * timeout(fetch('https://api.example.com'), 5000)
 *   .then(response => response.json())
 *   .catch(error => console.error('请求超时'))
 */
export declare const timeout: <T>(promise: Promise<T>, ms: number) => Promise<T>;
/**
 * 重试执行
 * @param fn - 要执行的函数
 * @param retries - 重试次数
 * @param delay - 重试延迟（毫秒）
 * @returns Promise
 * @example
 * retry(() => fetch('https://api.example.com'), 3, 1000)
 *   .then(response => response.json())
 *   .catch(error => console.error('重试失败'))
 */
export declare const retry: <T>(fn: () => Promise<T>, retries: number, delay: number) => Promise<T>;
/**
 * 并发控制
 * @param tasks - 任务数组
 * @param limit - 并发限制
 * @returns Promise
 * @example
 * const tasks = [
 *   () => fetch('https://api1.example.com'),
 *   () => fetch('https://api2.example.com'),
 *   () => fetch('https://api3.example.com')
 * ];
 * concurrent(tasks, 2).then(results => console.log(results))
 */
export declare const concurrent: <T>(tasks: (() => Promise<T>)[], limit: number) => Promise<T[]>;
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
export declare const debounce: <T extends (...args: any[]) => any>(fn: T, ms: number) => ((...args: Parameters<T>) => void);
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
export declare const throttle: <T extends (...args: any[]) => any>(fn: T, ms: number) => ((...args: Parameters<T>) => void);
/**
 * 包装 Promise
 * @param promise - Promise 对象
 * @returns 包装后的 Promise
 * @example
 * wrap(Promise.resolve(1))
 *   .then(([error, result]) => {
 *     if (error) console.error(error);
 *     else console.log(result);
 *   })
 */
export declare const wrap: <T>(promise: Promise<T>) => Promise<[Error | null, T | null]>;
/**
 * 包装异步函数
 * @param fn - 异步函数
 * @returns 包装后的函数
 * @example
 * const wrappedFn = wrapAsync(async () => {
 *   const response = await fetch('https://api.example.com');
 *   return response.json();
 * });
 * const [error, result] = await wrappedFn();
 */
export declare const wrapAsync: <T extends (...args: any[]) => Promise<any>>(fn: T) => ((...args: Parameters<T>) => Promise<[Error | null, ReturnType<T> | null]>);
/**
 * 创建可取消的 Promise
 * @returns 可取消的 Promise 和取消函数
 * @example
 * const [promise, cancel] = cancellable();
 * promise.then(() => console.log('完成'));
 * cancel();
 */
export declare const cancellable: <T>() => [Promise<T>, (reason?: any) => void];
/**
 * 创建可取消的异步函数
 * @param fn - 异步函数
 * @returns 可取消的异步函数
 * @example
 * const cancellableFetch = cancellableAsync(async () => {
 *   const response = await fetch('https://api.example.com');
 *   return response.json();
 * });
 * const [promise, cancel] = cancellableFetch();
 * promise.then(result => console.log(result));
 * cancel();
 */
export declare const cancellableAsync: <T>(fn: () => Promise<T>) => () => [Promise<T>, (reason?: any) => void];
//# sourceMappingURL=index.d.ts.map