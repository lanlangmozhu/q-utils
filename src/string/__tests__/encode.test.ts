import { encodeUrl, decodeUrl, encodeBase64, decodeBase64, encodeHtml, decodeHtml } from '@/string/encode';

describe('String Encoding and Decoding Operations', () => {
  describe('encodeUrl', () => {
    it('应该正确编码URL字符串', () => {
      expect(encodeUrl('Hello World')).toBe('Hello%20World');
      expect(encodeUrl('你好世界')).toBe('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C');
      expect(encodeUrl('http://example.com?name=test&age=18')).toBe('http%3A%2F%2Fexample.com%3Fname%3Dtest%26age%3D18');
    });

    it('应该处理无效输入', () => {
      expect(encodeUrl('')).toBe('');
      expect(encodeUrl(null)).toBe('');
      expect(encodeUrl(undefined)).toBe('');
    });
  });

  describe('decodeUrl', () => {
    it('应该正确解码URL字符串', () => {
      expect(decodeUrl('Hello%20World')).toBe('Hello World');
      expect(decodeUrl('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C')).toBe('你好世界');
      expect(decodeUrl('http%3A%2F%2Fexample.com%3Fname%3Dtest%26age%3D18')).toBe('http://example.com?name=test&age=18');
    });

    it('应该处理无效输入', () => {
      expect(decodeUrl('')).toBe('');
      expect(decodeUrl(null)).toBe('');
      expect(decodeUrl(undefined)).toBe('');
    });
  });

  describe('encodeBase64', () => {
    it('应该正确编码Base64字符串', () => {
      expect(encodeBase64('Hello World')).toBe('SGVsbG8gV29ybGQ=');
      expect(encodeBase64('你好世界')).toBe('5L2g5aW95LiW55WM');
      expect(encodeBase64('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(encodeBase64(null)).toBe('');
      expect(encodeBase64(undefined)).toBe('');
    });
  });

  describe('decodeBase64', () => {
    it('应该正确解码Base64字符串', () => {
      expect(decodeBase64('SGVsbG8gV29ybGQ=')).toBe('Hello World');
      expect(decodeBase64('5L2g5aW95LiW55WM')).toBe('你好世界');
      expect(decodeBase64('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(decodeBase64(null)).toBe('');
      expect(decodeBase64(undefined)).toBe('');
    });
  });

  describe('encodeHtml', () => {
    it('应该正确编码HTML字符串', () => {
      expect(encodeHtml('<div>Hello & World</div>')).toBe('&lt;div&gt;Hello &amp; World&lt;/div&gt;');
      expect(encodeHtml('"quotes" and \'apostrophes\'')).toBe('&quot;quotes&quot; and &#x27;apostrophes&#x27;');
      expect(encodeHtml('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(encodeHtml(null)).toBe('');
      expect(encodeHtml(undefined)).toBe('');
    });
  });

  describe('decodeHtml', () => {
    it('应该正确解码HTML字符串', () => {
      expect(decodeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;')).toBe('<div>Hello & World</div>');
      expect(decodeHtml('&quot;quotes&quot; and &#x27;apostrophes&#x27;')).toBe('"quotes" and \'apostrophes\'');
      expect(decodeHtml('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(decodeHtml(null)).toBe('');
      expect(decodeHtml(undefined)).toBe('');
    });
  });
}); 