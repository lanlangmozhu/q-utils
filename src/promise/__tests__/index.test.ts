import {
  delay,
  timeout,
  retry,
  concurrent,
  debounce,
  throttle,
  wrap,
  wrapAsync,
  cancellable,
  cancellableAsync
} from '@/promise';

describe('Promise 工具函数', () => {
  describe('delay', () => {
    it('应该正确延迟执行', async () => {
      const start = Date.now();
      await delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });

  describe('timeout', () => {
    it('应该在超时时抛出错误', async () => {
      const promise = delay(200);
      await expect(timeout(promise, 100)).rejects.toThrow('Promise timeout');
    });

    it('应该在超时前完成时返回结果', async () => {
      const promise = delay(100).then(() => 'success');
      const result = await timeout(promise, 200);
      expect(result).toBe('success');
    });
  });

  describe('retry', () => {
    it('应该在失败时重试指定次数', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        if (attempts < 3) throw new Error('fail');
        return 'success';
      };
      const result = await retry(fn, 3, 100);
      expect(result).toBe('success');
      expect(attempts).toBe(3);
    });

    it('应该在达到最大重试次数时抛出错误', async () => {
      const fn = async () => {
        throw new Error('fail');
      };
      await expect(retry(fn, 3, 100)).rejects.toThrow('fail');
    });
  });

  describe('concurrent', () => {
    it('应该限制并发执行数量', async () => {
      const tasks = Array.from({ length: 5 }, (_, i) => 
        () => delay(100).then(() => i)
      );
      const results = await concurrent(tasks, 2);
      expect(results).toHaveLength(5);
      expect(results).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe('debounce', () => {
    it('应该防抖函数调用', async () => {
      let count = 0;
      const fn = debounce(() => count++, 100);
      fn();
      fn();
      fn();
      expect(count).toBe(0);
      await delay(150);
      expect(count).toBe(1);
    });
  });

  describe('throttle', () => {
    it('应该节流函数调用', async () => {
      let count = 0;
      const fn = throttle(() => count++, 100);
      fn();
      fn();
      fn();
      expect(count).toBe(1);
      await delay(150);
      fn();
      expect(count).toBe(2);
    });
  });

  describe('wrap', () => {
    it('应该包装 Promise 并返回错误和结果元组', async () => {
      const [error1, result1] = await wrap(Promise.resolve('success'));
      expect(error1).toBeNull();
      expect(result1).toBe('success');

      const [error2, result2] = await wrap(Promise.reject(new Error('fail')));
      expect(error2).toBeInstanceOf(Error);
      expect(result2).toBeNull();
    });
  });

  describe('wrapAsync', () => {
    it('应该包装异步函数并返回错误和结果元组', async () => {
      const fn = async () => 'success';
      const [error1, result1] = await wrapAsync(fn)();
      expect(error1).toBeNull();
      expect(result1).toBe('success');

      const fn2 = async () => {
        throw new Error('fail');
      };
      const [error2, result2] = await wrapAsync(fn2)();
      expect(error2).toBeInstanceOf(Error);
      expect(result2).toBeNull();
    });
  });

  describe('cancellable', () => {
    it('应该可以取消 Promise', async () => {
      const [promise, cancel] = cancellable();
      setTimeout(cancel, 50);
      await expect(promise).rejects.toThrow('Promise cancelled');
    });
  });

  describe('cancellableAsync', () => {
    it('应该可以取消异步函数', async () => {
      const fn = async () => {
        await delay(100);
        return 'success';
      };
      const wrappedFn = cancellableAsync(fn);
      const [promise, cancel] = wrappedFn();
      setTimeout(cancel, 50);
      await expect(promise).rejects.toThrow('Promise cancelled');
    });
  });
}); 