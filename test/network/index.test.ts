import { request, fetchWithTimeout, jsonp, ping, downloadFile } from '../../src/network';
import {
  parseURLParams,
  buildURL,
  getURLPath,
  getURLDomain,
  isHTTPS,
  getFileNameFromURL,
  isAbsoluteURL,
  joinURL
} from '../../src/network/url';

describe('网络操作工具函数', () => {
  describe('request', () => {
    it('应该正确发送 GET 请求', async () => {
      const mockResponse = { data: 'test' };
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await request('https://api.example.com/test');
      expect(result).toEqual(mockResponse);
    });

    it('应该正确发送 POST 请求', async () => {
      const mockResponse = { data: 'test' };
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await request('https://api.example.com/test', {
        method: 'POST',
        data: { name: 'test' }
      });
      expect(result).toEqual(mockResponse);
    });

    it('应该正确处理 GET 请求', async () => {
      const response = await request('https://api.example.com');
      expect(response).toBeDefined();
    });
  });

  describe('fetchWithTimeout', () => {
    it('应该在超时前完成请求', async () => {
      const mockResponse = { data: 'test' };
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await fetchWithTimeout('https://api.example.com/test');
      expect(result).toBeDefined();
    });

    it('应该在超时后抛出错误', async () => {
      globalThis.fetch = jest.fn().mockImplementation(() => 
        new Promise(resolve => setTimeout(resolve, 2000))
      );

      await expect(fetchWithTimeout('https://api.example.com/test', {}, 100))
        .rejects
        .toThrow('Request timeout');
    });
  });

  describe('jsonp', () => {
    it('应该正确发送 JSONP 请求', async () => {
      const mockData = { data: 'test' };
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockData)
      });

      const result = await jsonp('https://api.example.com/test');
      expect(result).toBeDefined();
    });
  });

  describe('ping', () => {
    it('应该正确检测 URL 可用性', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true
      });

      const time = await ping('https://example.com');
      expect(time).toBeGreaterThan(0);
    });

    it('应该在超时后抛出错误', async () => {
      globalThis.fetch = jest.fn().mockImplementation(() => 
        new Promise(resolve => setTimeout(resolve, 2000))
      );

      await expect(ping('https://example.com', { timeout: 100 }))
        .rejects
        .toThrow('Ping timed out');
    });
  });

  describe('downloadFile', () => {
    it('应该正确下载文件', async () => {
      const mockBlob = new Blob(['test']);
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob)
      });

      await expect(downloadFile('https://example.com/file.pdf'))
        .resolves
        .not
        .toThrow();
    });
  });

  describe('URL 工具函数', () => {
    describe('parseURLParams', () => {
      it('应该正确解析 URL 参数', () => {
        const url = 'https://example.com?name=test&age=25';
        const params = parseURLParams(url);
        expect(params).toEqual({
          name: 'test',
          age: '25'
        });
      });
    });

    describe('buildURL', () => {
      it('应该正确构建 URL', () => {
        const baseUrl = 'https://example.com';
        const params = { name: 'test', age: '25' };
        const url = buildURL(baseUrl, params);
        expect(url).toBe('https://example.com?name=test&age=25');
      });
    });

    describe('getURLPath', () => {
      it('应该正确获取 URL 路径', () => {
        const url = 'https://example.com/api/users';
        const path = getURLPath(url);
        expect(path).toBe('/api/users');
      });
    });

    describe('getURLDomain', () => {
      it('应该正确获取 URL 域名', () => {
        const url = 'https://api.example.com/users';
        const domain = getURLDomain(url);
        expect(domain).toBe('api.example.com');
      });
    });

    describe('isHTTPS', () => {
      it('应该正确判断是否为 HTTPS', () => {
        expect(isHTTPS('https://example.com')).toBe(true);
        expect(isHTTPS('http://example.com')).toBe(false);
      });
    });

    describe('getFileNameFromURL', () => {
      it('应该正确获取文件名', () => {
        expect(getFileNameFromURL('https://example.com/file.pdf')).toBe('file.pdf');
        expect(getFileNameFromURL('https://example.com/images/photo.jpg')).toBe('photo.jpg');
      });
    });

    describe('isAbsoluteURL', () => {
      it('应该正确判断是否为绝对 URL', () => {
        expect(isAbsoluteURL('https://example.com')).toBe(true);
        expect(isAbsoluteURL('//example.com')).toBe(true);
        expect(isAbsoluteURL('/path')).toBe(false);
        expect(isAbsoluteURL('path')).toBe(false);
      });
    });

    describe('joinURL', () => {
      it('应该正确合并 URL', () => {
        expect(joinURL('https://example.com', '/api/users')).toBe('https://example.com/api/users');
        expect(joinURL('https://example.com/api', 'users')).toBe('https://example.com/api/users');
        expect(joinURL('https://example.com/api/', '/users')).toBe('https://example.com/api/users');
      });
    });
  });
}); 