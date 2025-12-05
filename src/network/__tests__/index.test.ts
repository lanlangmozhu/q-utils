import {
  parseURLParams,
  buildURL,
  getURLPath,
  getURLDomain,
  isHTTPS,
  getFileNameFromURL,
  isAbsoluteURL,
  joinURL
} from '@/network/url';

describe('Network URL Utils', () => {
  describe('parseURLParams', () => {
    it('should parse URL parameters', () => {
      const params = parseURLParams('https://example.com?name=test&age=25');
      expect(params.name).toBe('test');
      expect(params.age).toBe('25');
    });

    it('should handle URL with hash', () => {
      const params = parseURLParams('https://example.com?name=test#section');
      expect(params.name).toBe('test');
    });

    it('should handle URL without parameters', () => {
      const params = parseURLParams('https://example.com');
      expect(Object.keys(params).length).toBe(0);
    });

    it('should decode URL encoded values', () => {
      const params = parseURLParams('https://example.com?name=%E6%B5%8B%E8%AF%95');
      expect(params.name).toBe('测试');
    });
  });

  describe('buildURL', () => {
    it('should build URL with parameters', () => {
      const url = buildURL('https://example.com', { name: 'test', age: '25' });
      expect(url).toContain('name=test');
      expect(url).toContain('age=25');
    });

    it('should handle URL with existing parameters', () => {
      const url = buildURL('https://example.com?sort=desc', { page: '1' });
      expect(url).toContain('sort=desc');
      expect(url).toContain('page=1');
    });

    it('should handle relative paths', () => {
      const url = buildURL('/api/users', { id: '123' });
      expect(url).toContain('/api/users');
      expect(url).toContain('id=123');
    });

    it('should encode URL parameters', () => {
      const url = buildURL('https://example.com', { name: '测试' });
      expect(url).toContain(encodeURIComponent('测试'));
    });
  });

  describe('getURLPath', () => {
    it('should get URL path', () => {
      const path = getURLPath('https://example.com/products/123');
      expect(path).toBe('/products/123');
    });

    it('should handle root path', () => {
      const path = getURLPath('https://example.com/');
      expect(path).toBe('/');
    });
  });

  describe('getURLDomain', () => {
    it('should get URL domain', () => {
      const domain = getURLDomain('https://sub.example.com/products');
      expect(domain).toBe('sub.example.com');
    });

    it('should handle different protocols', () => {
      const domain = getURLDomain('http://example.com');
      expect(domain).toBe('example.com');
    });
  });

  describe('isHTTPS', () => {
    it('should return true for HTTPS URL', () => {
      expect(isHTTPS('https://example.com')).toBe(true);
    });

    it('should return false for HTTP URL', () => {
      expect(isHTTPS('http://example.com')).toBe(false);
    });
  });

  describe('getFileNameFromURL', () => {
    it('should extract filename from URL', () => {
      expect(getFileNameFromURL('https://example.com/documents/report.pdf')).toBe('report.pdf');
    });

    it('should handle URL with query parameters', () => {
      expect(getFileNameFromURL('https://example.com/images/photo.jpg?size=large')).toBe('photo.jpg');
    });

    it('should return empty string for directory URL', () => {
      expect(getFileNameFromURL('https://example.com/documents/')).toBe('');
    });
  });

  describe('isAbsoluteURL', () => {
    it('should return true for absolute URL with protocol', () => {
      expect(isAbsoluteURL('https://example.com')).toBe(true);
      expect(isAbsoluteURL('http://example.com')).toBe(true);
    });

    it('should return true for protocol-relative URL', () => {
      expect(isAbsoluteURL('//example.com')).toBe(true);
    });

    it('should return false for relative URL', () => {
      expect(isAbsoluteURL('/page')).toBe(false);
      expect(isAbsoluteURL('page')).toBe(false);
    });
  });

  describe('joinURL', () => {
    it('should join base URL and relative URL', () => {
      expect(joinURL('https://example.com', '/api/users')).toBe('https://example.com/api/users');
    });

    it('should handle relative URL without leading slash', () => {
      // URL constructor behavior: relative URL without leading slash is resolved relative to base
      const result = joinURL('https://example.com/api', 'users');
      expect(result).toContain('example.com');
      expect(result).toContain('users');
    });

    it('should handle trailing slashes', () => {
      // URL constructor handles trailing slashes automatically
      const result = joinURL('https://example.com/api/', '/users');
      expect(result).toContain('example.com');
      expect(result).toContain('users');
    });
  });
});

