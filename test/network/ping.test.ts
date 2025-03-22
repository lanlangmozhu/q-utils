import { ping } from '../../src/network/ping';

describe('网络 ping 检测函数', () => {
  let mockFetch: jest.Mock;
  let mockAbortController: jest.Mock;
  let mockSetTimeout: jest.Mock;
  let mockClearTimeout: jest.Mock;
  let mockAbort: jest.Mock;
  let mockSignal: any;
  let mockDate: jest.Mock;

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

    // 模拟 Date.now
    mockDate = jest.fn();
    global.Date.now = mockDate;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('应该成功检测 URL 并返回响应时间', async () => {
    const mockResponse = new Response(null, { status: 200 });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);

    const time = await ping('https://example.com');

    expect(time).toBe(500);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com',
      expect.objectContaining({
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        signal: mockSignal
      })
    );
    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      5000
    );
    expect(mockClearTimeout).toHaveBeenCalledWith(1);
  });

  it('应该使用自定义的超时时间', async () => {
    const mockResponse = new Response(null, { status: 200 });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);
    const timeout = 2000;

    await ping('https://example.com', { timeout });

    expect(mockSetTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      timeout
    );
  });

  it('应该使用 GET 方法', async () => {
    const mockResponse = new Response(null, { status: 200 });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);

    await ping('https://example.com', { method: 'GET' });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com',
      expect.objectContaining({
        method: 'GET'
      })
    );
  });

  it('应该在超时时抛出错误', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });
    mockFetch.mockRejectedValue(new Error('AbortError'));

    await expect(ping('https://example.com', { timeout }))
      .rejects
      .toThrow(`Ping to https://example.com timed out after ${timeout}ms`);
  });

  it('应该在请求失败时抛出错误', async () => {
    const error = new Error('Network error');
    mockFetch.mockRejectedValue(error);

    await expect(ping('https://example.com'))
      .rejects
      .toThrow('Network error');
  });

  it('应该在请求完成后清理资源', async () => {
    const mockResponse = new Response(null, { status: 200 });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);

    await ping('https://example.com');

    expect(mockClearTimeout).toHaveBeenCalledWith(1);
  });

  it('应该在超时时中止请求', async () => {
    const timeout = 1000;
    mockSetTimeout.mockImplementation((callback) => {
      callback();
    });
    mockFetch.mockRejectedValue(new Error('AbortError'));

    await expect(ping('https://example.com', { timeout }))
      .rejects
      .toThrow();

    expect(mockAbort).toHaveBeenCalled();
  });

  it('应该处理 HTTP 错误状态码', async () => {
    const mockResponse = new Response(null, { status: 404 });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);

    const time = await ping('https://example.com');

    expect(time).toBe(500);
  });

  it('应该处理重定向', async () => {
    const mockResponse = new Response(null, {
      status: 301,
      headers: { Location: 'https://example.com/new' }
    });
    mockFetch.mockResolvedValue(mockResponse);
    mockDate.mockReturnValueOnce(1000).mockReturnValueOnce(1500);

    const time = await ping('https://example.com');

    expect(time).toBe(500);
  });

  it('应该处理 CORS 错误', async () => {
    const error = new Error('CORS error');
    mockFetch.mockRejectedValue(error);

    await expect(ping('https://example.com'))
      .rejects
      .toThrow('CORS error');
  });
}); 