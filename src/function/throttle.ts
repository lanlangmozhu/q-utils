/**
 * 创建一个节流函数，限制函数在指定的时间内只能被调用一次
 * 常用于处理频繁触发的事件，如滚动事件、鼠标移动等
 * @param func - 要节流的函数
 * @param wait - 等待时间（毫秒）
 * @param options - 配置选项
 * @param options.leading - 是否在开始时立即执行一次，默认为true
 * @param options.trailing - 是否在结束时再执行一次，默认为true
 * @returns 节流处理后的函数
 * @example
 * ```ts
 * // 基本用法，每200ms最多执行一次
 * const throttledScroll = throttle(() => {
 *   console.log('处理滚动事件');
 * }, 200);
 * 
 * // 在滚动事件中使用
 * window.addEventListener('scroll', throttledScroll);
 * 
 * // 自定义选项：开始时不执行，结束时执行一次
 * const customThrottle = throttle(() => {
 *   console.log('自定义节流');
 * }, 300, { leading: false, trailing: true });
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
  options: { leading?: boolean; trailing?: boolean } = {}
): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> | undefined {
  let context: any;
  let args: Parameters<T> | null = null;
  let result: ReturnType<T> | undefined;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let previous = 0;
  
  // 设置默认选项
  const { leading = true, trailing = true } = options;
  
  const later = function() {
    previous = leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args as Parameters<T>);
    if (!timeout) {
      context = args = null;
    }
  };
  
  return function(this: ThisParameterType<T>, ...funcArgs: Parameters<T>): ReturnType<T> | undefined {
    const now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }
    
    const remaining = wait - (now - previous);
    context = this;
    args = funcArgs;
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    
    return result;
  };
}

/**
 * 取消节流函数的执行
 * @param throttledFn - 通过throttle创建的节流函数
 * @example
 * ```ts
 * const throttledFn = throttle(() => console.log('Throttled'), 300);
 * 
 * // 取消定时器，阻止尾部函数执行
 * cancelThrottle(throttledFn);
 * ```
 */
export function cancelThrottle(throttledFn: Function): void {
  // @ts-ignore - 访问节流函数内部的timeout属性
  const timeout = throttledFn.timeout;
  if (timeout) {
    clearTimeout(timeout);
  }
} 