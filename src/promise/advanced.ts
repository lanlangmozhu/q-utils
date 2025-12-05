/**
 * Promise 高级功能工具函数
 * @packageDocumentation
 */

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
export const wrap = <T>(
  promise: Promise<T>
): Promise<[Error | null, T | null]> => {
  return promise
    .then(result => [null, result] as [Error | null, T | null])
    .catch(error => [error, null] as [Error | null, T | null]);
};

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
export const wrapAsync = <T extends (...args: any[]) => Promise<any>>(
  fn: T
): ((...args: Parameters<T>) => Promise<[Error | null, ReturnType<T> | null]>) => {
  return (...args: Parameters<T>) => wrap(fn(...args));
};

/**
 * 创建可取消的 Promise
 * @returns 可取消的 Promise 和取消函数
 * @example
 * const [promise, cancel] = cancellable();
 * promise.then(() => console.log('完成'));
 * cancel();
 */
export const cancellable = <T>(): [
  Promise<T>,
  (reason?: any) => void
] => {
  let cancel: (reason?: any) => void;
  const promise = new Promise<T>((_, reject) => {
    cancel = (reason?: any) => reject(reason || new Error('Promise cancelled'));
  });
  return [promise, cancel!];
};

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
export const cancellableAsync = <T>(
  fn: () => Promise<T>
): () => [Promise<T>, (reason?: any) => void] => {
  return () => {
    const [promise, cancel] = cancellable<T>();
    fn().then(
      result => {
        try {
          (promise as any).resolve(result);
        } catch {
          // 如果 promise 已经被取消，忽略结果
        }
      },
      error => {
        try {
          (promise as any).reject(error);
        } catch {
          // 如果 promise 已经被取消，忽略错误
        }
      }
    );
    return [promise, cancel];
  };
};

