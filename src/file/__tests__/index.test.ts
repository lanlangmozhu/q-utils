import {
  getFileExtension,
  getFileSize,
  isValidFileType
} from '@/file';

describe('File Utils', () => {
  describe('getFileExtension', () => {
    it('should get file extension', () => {
      expect(getFileExtension('document.pdf')).toBe('pdf');
      expect(getFileExtension('image.JPG')).toBe('jpg');
    });

    it('should include dot when specified', () => {
      expect(getFileExtension('script.js', { includeDot: true })).toBe('.js');
    });

    it('should preserve case when toLowerCase is false', () => {
      expect(getFileExtension('LICENSE.TXT', { toLowerCase: false })).toBe('TXT');
    });

    it('should handle file paths', () => {
      expect(getFileExtension('/path/to/file.tar.gz')).toBe('gz');
    });

    it('should handle URLs', () => {
      expect(getFileExtension('https://example.com/downloads/report.xlsx')).toBe('xlsx');
    });

    it('should return empty string for files without extension', () => {
      expect(getFileExtension('README')).toBe('');
    });

    it('should handle files with query parameters', () => {
      expect(getFileExtension('file.pdf?download=true')).toBe('pdf');
    });
  });

  describe('getFileSize', () => {
    it('should return formatted file size', () => {
      const file = new File(['test'], 'test.txt', { type: 'text/plain' });
      const size = getFileSize(file);
      expect(typeof size).toBe('string');
      expect(size).toMatch(/\d+\.?\d*\s(B|KB|MB|GB)/);
    });

    it('should return raw bytes when formatted is false', () => {
      const file = new File(['test'], 'test.txt', { type: 'text/plain' });
      const size = getFileSize(file, { formatted: false });
      expect(typeof size).toBe('number');
      expect(size).toBeGreaterThanOrEqual(0);
    });

    it('should handle zero size files', () => {
      const file = new File([], 'empty.txt', { type: 'text/plain' });
      const size = getFileSize(file);
      expect(size).toBe('0 B');
    });

    it('should use custom precision', () => {
      const file = new File(['x'.repeat(1024)], 'test.txt', { type: 'text/plain' });
      const size = getFileSize(file, { precision: 1 });
      expect(size).toMatch(/\d+\.\d\sKB/);
    });
  });

  describe('isValidFileType', () => {
    it('should validate file by MIME type', () => {
      const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
      expect(isValidFileType(file, ['image/jpeg', 'image/png'])).toBe(true);
      expect(isValidFileType(file, ['image/png'])).toBe(false);
    });

    it('should validate file by extension', () => {
      const file = new File([''], 'test.pdf', { type: 'application/pdf' });
      expect(isValidFileType(file, ['.pdf', '.doc'])).toBe(true);
      expect(isValidFileType(file, ['.doc'])).toBe(false);
    });

    it('should validate filename string', () => {
      expect(isValidFileType('report.pdf', ['.pdf', '.doc'])).toBe(true);
      expect(isValidFileType('report.pdf', ['.doc'])).toBe(false);
    });

    it('should handle case insensitive matching', () => {
      const file = new File([''], 'test.PDF', { type: 'application/pdf' });
      expect(isValidFileType(file, ['.pdf'])).toBe(true);
    });

    it('should handle mixed MIME types and extensions', () => {
      const file = new File([''], 'data.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      expect(isValidFileType(file, ['application/pdf', '.xlsx', '.csv'])).toBe(true);
    });
  });
});

