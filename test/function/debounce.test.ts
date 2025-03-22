import { debounce, cancelDebounce } from '../../src/function/debounce';

// 模拟计时器
jest.useFakeTimers();

describe('debounce', () => {
  let func: jest.Mock;
  let debouncedFunc: ReturnType<typeof debounce>;
  
  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });
  
  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
  
  test('不应该立即执行函数', () => {
    debouncedFunc();
    
    expect(func).not.toBeCalled();
  });
  
  test('应该在等待时间后执行函数', () => {
    debouncedFunc();
    
    jest.advanceTimersByTime(1000);
    
    expect(func).toBeCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  test('如果在等待时间内多次调用，只应该执行一次', () => {
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    
    jest.advanceTimersByTime(500);
    
    // 500ms后再次调用
    debouncedFunc();
    
    jest.advanceTimersByTime(1000);
    
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  test('应该正确传递参数', () => {
    debouncedFunc('test', 123);
    
    jest.advanceTimersByTime(1000);
    
    expect(func).toHaveBeenCalledWith('test', 123);
  });
  
  test('immediate选项设置为true，应该立即执行', () => {
    const immediateFunc = debounce(func, 1000, true);
    
    immediateFunc();
    
    expect(func).toHaveBeenCalledTimes(1);
    
    // 在等待期间不应再次执行
    immediateFunc();
    immediateFunc();
    
    expect(func).toHaveBeenCalledTimes(1);
    
    // 等待期结束后，下一次调用应该立即执行
    jest.advanceTimersByTime(1000);
    immediateFunc();
    
    expect(func).toHaveBeenCalledTimes(2);
  });
  
  test('cancelDebounce应该取消执行', () => {
    debouncedFunc();
    
    // 取消防抖
    cancelDebounce(debouncedFunc);
    
    jest.advanceTimersByTime(1000);
    
    expect(func).not.toBeCalled();
  });
}); 