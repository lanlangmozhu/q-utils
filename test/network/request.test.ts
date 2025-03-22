import { request } from '../../src/network/request';

describe('通用请求函数', () => {
  let mockFetch: jest.Mock;
  let mockAbortController: jest.Mock;
  let mockSetTimeout: jest.Mock;
  let mockClearTimeout: jest.Mock;
  let mockAbort: jest.Mock;
  let mockSignal: any;

  beforeEach(() => {
    // 模拟 AbortController
    mockAbort = jest.fn();
    mockSignal = {};
    mockAbortController = jest.fn().mockImplementation(() => ({
      abort: mockAbort,
      signal: mockSignal
    }));
    global.AbortController = mockAbortController as any;

    // 模拟定时器
    mockSetTimeout = jest.fn().mockReturnValue(1);
    mockClearTimeout = jest.fn();
    global.setTimeout = mockSetTimeout;
    global.clearTimeout = mockClearTimeout;

    // 模拟 fetch
    mockFetch = jest.fn();
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('应该成功发送 GET 请求', async () => {
    const mockData = { name: 'test', value: 123 };
    const mockResponse = new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const result = await request('https://api.example.com/data');

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/data',
      expect.objectContaining({
        method: 'GET',
        headers: {},
        credentials: 'same-origin',
        signal: mockSignal
      })
    );
  });

  it('应该成功发送 POST 请求并发送 JSON 数据', async () => {
    const mockData = { name: 'test', value: 123 };
    const mockResponse = new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const postData = { name: 'John', age: 30 };
    const result = await request('https://api.example.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: postData
    });

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/users',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
    );
  });

  it('应该处理表单数据', async () => {
    const mockResponse = new Response('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const formData = { name: 'John', age: '30' };
    const result = await request('https://api.example.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: formData
    });

    expect(result).toBe('success');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/users',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'name=John&age=30'
      })
    );
  });

  it('应该处理 FormData 对象', async () => {
    const mockResponse = new Response('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const formData = new FormData();
    formData.append('name', 'John');
    formData.append('age', '30');

    const result = await request('https://api.example.com/users', {
      method: 'POST',
      data: formData
    });

    expect(result).toBe('success');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/users',
      expect.objectContaining({
        method: 'POST',
        body: formData
      })
    );
  });

  it('应该处理 GET 请求的查询参数', async () => {
    const mockResponse = new Response('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const queryParams = { name: 'John', age: 30 };
    const result = await request('https://api.example.com/users', {
      method: 'GET',
      data: queryParams
    });

    expect(result).toBe('success');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/users?name=John&age=30',
      expect.any(Object)
    );
  });

  it('应该在超时时抛出错误', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });
    mockFetch.mockRejectedValue(new Error('AbortError'));

    await expect(request('https://api.example.com/data', { timeout }))
      .rejects
      .toThrow(`Request timeout after ${timeout}ms`);
  });

  it('应该处理 HTTP 错误状态码', async () => {
    const mockResponse = new Response('Not Found', {
      status: 404,
      statusText: 'Not Found'
    });
    mockFetch.mockResolvedValue(mockResponse);

    await expect(request('https://api.example.com/data'))
      .rejects
      .toThrow('HTTP error! Status: 404');
  });

  it('应该处理网络错误', async () => {
    const error = new Error('Network error');
    mockFetch.mockRejectedValue(error);

    await expect(request('https://api.example.com/data'))
      .rejects
      .toThrow('Network error');
  });

  it('应该根据响应内容类型解析数据', async () => {
    // 测试 JSON 响应
    const jsonResponse = new Response(JSON.stringify({ data: 'test' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    mockFetch.mockResolvedValueOnce(jsonResponse);
    const jsonResult = await request('https://api.example.com/json');
    expect(jsonResult).toEqual({ data: 'test' });

    // 测试文本响应
    const textResponse = new Response('Hello World', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValueOnce(textResponse);
    const textResult = await request('https://api.example.com/text');
    expect(textResult).toBe('Hello World');

    // 测试二进制响应
    const blobResponse = new Response(new Blob(['test']), {
      status: 200,
      headers: { 'Content-Type': 'application/octet-stream' }
    });
    mockFetch.mockResolvedValueOnce(blobResponse);
    const blobResult = await request('https://api.example.com/blob');
    expect(blobResult).toBeInstanceOf(Blob);
  });

  it('应该使用自定义凭证设置', async () => {
    const mockResponse = new Response('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await request('https://api.example.com/data', {
      credentials: 'include'
    });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/data',
      expect.objectContaining({
        credentials: 'include'
      })
    );
  });

  it('应该在请求完成后清理资源', async () => {
    const mockResponse = new Response('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await request('https://api.example.com/data');

    expect(mockClearTimeout).toHaveBeenCalledWith(1);
  });
}); 