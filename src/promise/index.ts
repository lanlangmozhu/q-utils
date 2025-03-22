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
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

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
export const timeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  const timeoutPromise = new Promise<T>((_, reject) => {
    setTimeout(() => reject(new Error('Promise timeout')), ms);
  });
  return Promise.race([promise, timeoutPromise]);
};

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
export const retry = <T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const attempt = async (n: number) => {
      try {
        const result = await fn();
        resolve(result);
      } catch (error) {
        if (n === 0) reject(error);
        else setTimeout(() => attempt(n - 1), delay);
      }
    };
    attempt(retries);
  });
};

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
export const concurrent = <T>(
  tasks: (() => Promise<T>)[],
  limit: number
): Promise<T[]> => {
  const results: T[] = [];
  let current = 0;
  let completed = 0;

  return new Promise((resolve, reject) => {
    const run = async (index: number) => {
      try {
        const result = await tasks[index]();
        results[index] = result;
        completed++;
        if (completed === tasks.length) resolve(results);
        else if (current < tasks.length) run(current++);
      } catch (error) {
        reject(error);
      }
    };

    for (let i = 0; i < Math.min(limit, tasks.length); i++) {
      run(current++);
    }
  });
};

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