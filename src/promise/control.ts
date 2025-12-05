/**
 * Promise 控制流工具函数
 * @packageDocumentation
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

