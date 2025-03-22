import { downloadFile } from '../../src/network/downloadFile';

describe('文件下载函数', () => {
  let mockFetch: jest.Mock;
  let mockCreateObjectURL: jest.Mock;
  let mockRevokeObjectURL: jest.Mock;
  let mockCreateElement: jest.Mock;
  let mockAppendChild: jest.Mock;
  let mockRemoveChild: jest.Mock;
  let mockClick: jest.Mock;
  let mockLink: HTMLElement;
  let mockBlob: Blob;

  beforeEach(() => {
    // 模拟 Blob
    mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // 模拟 URL 对象
    mockCreateObjectURL = jest.fn().mockReturnValue('blob:test-url');
    mockRevokeObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;

    // 模拟 DOM 操作
    mockLink = document.createElement('a');
    mockClick = jest.fn();
    mockLink.click = mockClick;
    mockCreateElement = jest.fn().mockReturnValue(mockLink);
    mockAppendChild = jest.fn();
    mockRemoveChild = jest.fn();
    document.createElement = mockCreateElement as any;
    document.body.appendChild = mockAppendChild;
    document.body.removeChild = mockRemoveChild;

    // 模拟 fetch
    mockFetch = jest.fn();
    global.fetch = mockFetch;

    // 模拟 setTimeout
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('应该成功下载文件', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt');

    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com/file.txt',
      expect.objectContaining({
        method: 'GET',
        headers: {}
      })
    );
    expect(mockCreateObjectURL).toHaveBeenCalledWith(mockBlob);
    expect(mockCreateElement).toHaveBeenCalledWith('a');
    expect(mockLink.href).toBe('blob:test-url');
    expect(mockLink.download).toBe('file.txt');
    expect(mockClick).toHaveBeenCalled();
    expect(mockAppendChild).toHaveBeenCalledWith(mockLink);
    expect(mockLink.style.display).toBe('none');
  });

  it('应该使用指定的文件名', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt', {
      filename: 'custom-name.txt'
    });

    expect(mockLink.download).toBe('custom-name.txt');
  });

  it('应该从 Content-Disposition 获取文件名', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: {
        'content-type': 'text/plain',
        'content-disposition': 'attachment; filename="server-file.txt"'
      }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt');

    expect(mockLink.download).toBe('server-file.txt');
  });

  it('应该处理没有文件名的 URL', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/');

    expect(mockLink.download).toBe('download');
  });

  it('应该处理带有查询参数的 URL', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt?type=document');

    expect(mockLink.download).toBe('file.txt');
  });

  it('应该添加自定义请求头', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    const headers = {
      'Authorization': 'Bearer token123'
    };

    await downloadFile('https://example.com/file.txt', { headers });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com/file.txt',
      expect.objectContaining({
        method: 'GET',
        headers
      })
    );
  });

  it('应该处理 HTTP 错误', async () => {
    const mockResponse = new Response(null, { status: 404 });
    mockFetch.mockResolvedValue(mockResponse);

    await expect(downloadFile('https://example.com/file.txt'))
      .rejects
      .toThrow('文件下载失败: HTTP error! Status: 404');
  });

  it('应该处理网络错误', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    await expect(downloadFile('https://example.com/file.txt'))
      .rejects
      .toThrow('文件下载失败: Network error');
  });

  it('应该在下载完成后清理资源', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt');

    // 触发 setTimeout 回调
    jest.advanceTimersByTime(100);

    expect(mockRemoveChild).toHaveBeenCalledWith(mockLink);
    expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test-url');
  });

  it('应该处理非强制下载模式', async () => {
    const mockResponse = new Response(mockBlob, {
      headers: { 'content-type': 'text/plain' }
    });
    mockFetch.mockResolvedValue(mockResponse);

    await downloadFile('https://example.com/file.txt', {
      forceDownload: false
    });

    expect(mockAppendChild).not.toHaveBeenCalled();
    expect(mockLink.style.display).toBeUndefined();
    expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:test-url');
  });
}); 