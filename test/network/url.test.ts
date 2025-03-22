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

describe('URL 工具函数', () => {
  describe('parseURLParams', () => {
    it('应该正确解析 URL 参数', () => {
      const url = 'https://example.com?name=张三&age=25';
      const params = parseURLParams(url);
      expect(params).toEqual({
        name: '张三',
        age: '25'
      });
    });

    it('应该处理没有参数的 URL', () => {
      const url = 'https://example.com';
      const params = parseURLParams(url);
      expect(params).toEqual({});
    });

    it('应该处理带有 hash 的 URL', () => {
      const url = 'https://example.com?name=张三#section';
      const params = parseURLParams(url);
      expect(params).toEqual({
        name: '张三'
      });
    });

    it('应该处理空值参数', () => {
      const url = 'https://example.com?name=&age=25';
      const params = parseURLParams(url);
      expect(params).toEqual({
        name: '',
        age: '25'
      });
    });

    it('应该处理特殊字符', () => {
      const url = 'https://example.com?name=%E5%BC%A0%E4%B8%89&age=25';
      const params = parseURLParams(url);
      expect(params).toEqual({
        name: '张三',
        age: '25'
      });
    });
  });

  describe('buildURL', () => {
    it('应该正确构建基本 URL', () => {
      const baseUrl = 'https://example.com';
      const params = { name: '张三', age: '25' };
      const url = buildURL(baseUrl, params);
      expect(url).toBe('https://example.com?name=%E5%BC%A0%E4%B8%89&age=25');
    });

    it('应该处理已有参数的 URL', () => {
      const baseUrl = 'https://example.com?sort=desc';
      const params = { page: '1', limit: '10' };
      const url = buildURL(baseUrl, params);
      expect(url).toBe('https://example.com?sort=desc&page=1&limit=10');
    });

    it('应该处理相对路径 URL', () => {
      const baseUrl = '/api/users';
      const params = { id: '123' };
      const url = buildURL(baseUrl, params);
      expect(url).toBe('/api/users?id=123');
    });

    it('应该处理空参数对象', () => {
      const baseUrl = 'https://example.com';
      const params = {};
      const url = buildURL(baseUrl, params);
      expect(url).toBe('https://example.com');
    });
  });

  describe('getURLPath', () => {
    it('应该正确获取 URL 路径', () => {
      const url = 'https://example.com/products/123?sort=desc';
      const path = getURLPath(url);
      expect(path).toBe('/products/123');
    });

    it('应该处理根路径', () => {
      const url = 'https://example.com/';
      const path = getURLPath(url);
      expect(path).toBe('/');
    });

    it('应该处理没有路径的 URL', () => {
      const url = 'https://example.com';
      const path = getURLPath(url);
      expect(path).toBe('/');
    });
  });

  describe('getURLDomain', () => {
    it('应该正确获取域名', () => {
      const url = 'https://sub.example.com/products';
      const domain = getURLDomain(url);
      expect(domain).toBe('sub.example.com');
    });

    it('应该处理 IP 地址', () => {
      const url = 'https://192.168.1.1/api';
      const domain = getURLDomain(url);
      expect(domain).toBe('192.168.1.1');
    });

    it('应该处理带端口的域名', () => {
      const url = 'https://example.com:8080/api';
      const domain = getURLDomain(url);
      expect(domain).toBe('example.com');
    });
  });

  describe('isHTTPS', () => {
    it('应该正确识别 HTTPS URL', () => {
      expect(isHTTPS('https://example.com')).toBe(true);
      expect(isHTTPS('http://example.com')).toBe(false);
    });

    it('应该处理协议相对 URL', () => {
      expect(isHTTPS('//example.com')).toBe(false);
    });
  });

  describe('getFileNameFromURL', () => {
    it('应该正确提取文件名', () => {
      expect(getFileNameFromURL('https://example.com/documents/report.pdf')).toBe('report.pdf');
      expect(getFileNameFromURL('https://example.com/images/photo.jpg?size=large')).toBe('photo.jpg');
    });

    it('应该处理没有文件名的 URL', () => {
      expect(getFileNameFromURL('https://example.com/')).toBe('');
      expect(getFileNameFromURL('https://example.com')).toBe('');
    });

    it('应该处理带有查询参数的 URL', () => {
      expect(getFileNameFromURL('https://example.com/file.txt?type=document')).toBe('file.txt');
    });
  });

  describe('isAbsoluteURL', () => {
    it('应该正确识别绝对 URL', () => {
      expect(isAbsoluteURL('https://example.com')).toBe(true);
      expect(isAbsoluteURL('http://example.com')).toBe(true);
      expect(isAbsoluteURL('ftp://example.com')).toBe(true);
      expect(isAbsoluteURL('//example.com')).toBe(true);
    });

    it('应该正确识别相对 URL', () => {
      expect(isAbsoluteURL('/path')).toBe(false);
      expect(isAbsoluteURL('path')).toBe(false);
      expect(isAbsoluteURL('./path')).toBe(false);
      expect(isAbsoluteURL('../path')).toBe(false);
    });
  });

  describe('joinURL', () => {
    it('应该正确合并 URL', () => {
      expect(joinURL('https://example.com', '/api/users')).toBe('https://example.com/api/users');
      expect(joinURL('https://example.com/api', 'users')).toBe('https://example.com/api/users');
      expect(joinURL('https://example.com/api/', '/users')).toBe('https://example.com/api/users');
    });

    it('应该处理相对路径', () => {
      expect(joinURL('/api', 'users')).toBe('/api/users');
      expect(joinURL('/api/', '/users')).toBe('/api/users');
    });

    it('应该处理空路径', () => {
      expect(joinURL('https://example.com', '')).toBe('https://example.com');
      expect(joinURL('https://example.com/', '')).toBe('https://example.com/');
    });
  });
}); 