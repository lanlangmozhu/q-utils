import { fetchWithTimeout } from '../../src/network/fetchWithTimeout';

describe('带超时功能的 fetch 函数', () => {
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

  it('应该成功发送请求并返回响应', async () => {
    const mockResponse = new Response('{"data": "test"}', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const response = await fetchWithTimeout('https://api.example.com/data');

    expect(response).toBe(mockResponse);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/data',
      expect.objectContaining({
        signal: mockSignal
      })
    );
    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      10000
    );
    expect(mockClearTimeout).toHaveBeenCalledWith(1);
  });

  it('应该使用自定义的超时时间', async () => {
    const mockResponse = new Response('{"data": "test"}');
    mockFetch.mockResolvedValue(mockResponse);
    const timeout = 5000;

    await fetchWithTimeout('https://api.example.com/data', {}, timeout);

    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      timeout
    );
  });

  it('应该处理请求选项', async () => {
    const mockResponse = new Response('{"data": "test"}');
    mockFetch.mockResolvedValue(mockResponse);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'test' })
    };

    await fetchWithTimeout('https://api.example.com/data', options);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/data',
      expect.objectContaining({
        ...options,
        signal: mockSignal
      })
    );
  });

  it('应该在超时时抛出错误', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });
    mockFetch.mockRejectedValue(new Error('AbortError'));

    await expect(fetchWithTimeout('https://api.example.com/data', {}, timeout))
      .rejects
      .toThrow(`Request timeout after ${timeout}ms`);
  });

  it('应该在请求失败时抛出错误', async () => {
    const error = new Error('Network error');
    mockFetch.mockRejectedValue(error);

    await expect(fetchWithTimeout('https://api.example.com/data'))
      .rejects
      .toThrow('Network error');
  });

  it('应该在请求完成后清理资源', async () => {
    const mockResponse = new Response('{"data": "test"}');
    mockFetch.mockResolvedValue(mockResponse);

    await fetchWithTimeout('https://api.example.com/data');

    expect(mockClearTimeout).toHaveBeenCalledWith(1);
  });

  it('应该在超时时中止请求', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });
    mockFetch.mockRejectedValue(new Error('AbortError'));

    await expect(fetchWithTimeout('https://api.example.com/data', {}, timeout))
      .rejects
      .toThrow();

    expect(mockAbort).toHaveBeenCalled();
  });

  it('应该处理 HTTP 错误状态码', async () => {
    const mockResponse = new Response('{"error": "Not Found"}', {
      status: 404,
      statusText: 'Not Found'
    });
    mockFetch.mockResolvedValue(mockResponse);

    const response = await fetchWithTimeout('https://api.example.com/data');

    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
  });

  it('应该处理空响应', async () => {
    const mockResponse = new Response('', {
      status: 204,
      statusText: 'No Content'
    });
    mockFetch.mockResolvedValue(mockResponse);

    const response = await fetchWithTimeout('https://api.example.com/data');

    expect(response.status).toBe(204);
    expect(response.statusText).toBe('No Content');
  });
}); 