/**
 * 创建一个会缓存结果的函数
 * 对于相同的参数，函数只会计算一次，后续调用直接从缓存返回结果
 * 
 * @param func - 要缓存结果的函数
 * @param resolver - 可选的函数，用于计算缓存的键。默认使用第一个参数作为键
 * @returns 缓存化后的函数
 * @example
 * ```ts
 * // 基本用法 - 缓存耗时计算
 * const fibonacci = memoize((n: number): number => {
 *   if (n <= 1) return n;
 *   return fibonacci(n - 1) + fibonacci(n - 2);
 * });
 * 
 * console.time('first');
 * fibonacci(40); // 首次计算耗时较长
 * console.timeEnd('first');
 * 
 * console.time('second');
 * fibonacci(40); // 从缓存返回结果，几乎立即完成
 * console.timeEnd('second');
 * 
 * // 使用自定义键生成函数
 * const calculateArea = memoize(
 *   (width: number, height: number) => width * height,
 *   (width, height) => `${width}x${height}` // 自定义键
 * );
 * ```
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string | number
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string | number, ReturnType<T>>();
  
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
    // 计算缓存键
    const key = resolver 
      ? resolver.apply(this, args) 
      : args[0] as string | number;
    
    // 检查缓存
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    // 计算并缓存结果
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
} 