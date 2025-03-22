import { jsonp } from '../../src/network/jsonp';

describe('JSONP 请求函数', () => {
  let mockScript: HTMLScriptElement;
  let mockAppendChild: jest.Mock;
  let mockRemoveChild: jest.Mock;
  let mockSetTimeout: jest.Mock;
  let mockClearTimeout: jest.Mock;
  let mockWindow: any;

  beforeEach(() => {
    // 模拟 DOM 操作
    mockScript = document.createElement('script');
    mockAppendChild = jest.fn();
    mockRemoveChild = jest.fn();
    document.head.appendChild = mockAppendChild;
    document.head.removeChild = mockRemoveChild;

    // 模拟定时器
    mockSetTimeout = jest.fn().mockReturnValue(1);
    mockClearTimeout = jest.fn();
    window.setTimeout = mockSetTimeout;
    window.clearTimeout = mockClearTimeout;

    // 模拟 window 对象
    mockWindow = {};
    (window as any) = mockWindow;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('应该成功发送 JSONP 请求并获取数据', async () => {
    const mockData = { name: 'test', value: 123 };
    const mockCallback = jest.fn().mockImplementation((data) => {
      expect(data).toEqual(mockData);
    });

    // 模拟回调函数被调用
    setTimeout(() => {
      mockWindow.jsonpCallback_123456_789(mockData);
    }, 0);

    const result = await jsonp('https://api.example.com/data', {
      callbackName: 'jsonpCallback_123456_789'
    });

    expect(result).toEqual(mockData);
    expect(mockAppendChild).toHaveBeenCalledWith(mockScript);
    expect(mockScript.src).toBe('https://api.example.com/data?callback=jsonpCallback_123456_789');
  });

  it('应该使用自定义的回调参数名', async () => {
    const mockData = { name: 'test', value: 123 };
    const mockCallback = jest.fn().mockImplementation((data) => {
      expect(data).toEqual(mockData);
    });

    setTimeout(() => {
      mockWindow.jsonpCallback_123456_789(mockData);
    }, 0);

    await jsonp('https://api.example.com/data', {
      callbackParam: 'jsonpCallback',
      callbackName: 'jsonpCallback_123456_789'
    });

    expect(mockScript.src).toBe('https://api.example.com/data?jsonpCallback=jsonpCallback_123456_789');
  });

  it('应该处理带有查询参数的 URL', async () => {
    const mockData = { name: 'test', value: 123 };

    setTimeout(() => {
      mockWindow.jsonpCallback_123456_789(mockData);
    }, 0);

    await jsonp('https://api.example.com/data?type=test', {
      callbackName: 'jsonpCallback_123456_789'
    });

    expect(mockScript.src).toBe('https://api.example.com/data?type=test&callback=jsonpCallback_123456_789');
  });

  it('应该在超时时抛出错误', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });

    await expect(jsonp('https://api.example.com/data', { timeout }))
      .rejects
      .toThrow(`JSONP request to https://api.example.com/data timed out after ${timeout}ms`);
  });

  it('应该在请求失败时抛出错误', async () => {
    const error = new Error('Network error');
    mockScript.onerror = jest.fn().mockImplementation(() => {
      throw error;
    });

    await expect(jsonp('https://api.example.com/data'))
      .rejects
      .toThrow('JSONP request to https://api.example.com/data failed');
  });

  it('应该在请求完成后清理资源', async () => {
    const mockData = { name: 'test', value: 123 };
    const callbackName = 'jsonpCallback_123456_789';

    setTimeout(() => {
      mockWindow[callbackName](mockData);
    }, 0);

    await jsonp('https://api.example.com/data', {
      callbackName
    });

    expect(mockClearTimeout).toHaveBeenCalled();
    expect(mockRemoveChild).toHaveBeenCalledWith(mockScript);
    expect(mockWindow[callbackName]).toBeUndefined();
  });

  it('应该使用默认的超时时间', async () => {
    await jsonp('https://api.example.com/data');

    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      10000
    );
  });

  it('应该使用自定义的超时时间', async () => {
    const timeout = 5000;
    await jsonp('https://api.example.com/data', { timeout });

    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      timeout
    );
  });
}); 