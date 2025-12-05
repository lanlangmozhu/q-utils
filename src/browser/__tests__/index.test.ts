import * as browser from '@/browser';

describe('Browser Utils', () => {
  // Mock navigator and window for testing
  const originalNavigator = global.navigator;
  const originalWindow = global.window;
  
  beforeEach(() => {
    // Mock window
    Object.defineProperty(global, 'window', {
      writable: true,
      value: {
        innerWidth: 1920,
        innerHeight: 1080,
        matchMedia: jest.fn(() => ({
          matches: false
        })),
        devicePixelRatio: 1,
        document: {
          documentElement: {
            style: {}
          },
          createElement: jest.fn(() => ({
            setAttribute: jest.fn(),
            type: ''
          }))
        }
      }
    });
    
    // Mock navigator
    Object.defineProperty(global, 'navigator', {
      writable: true,
      value: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        vendor: '',
        maxTouchPoints: 0
      }
    });
  });

  afterEach(() => {
    Object.defineProperty(global, 'navigator', {
      writable: true,
      value: originalNavigator
    });
    Object.defineProperty(global, 'window', {
      writable: true,
      value: originalWindow
    });
  });

  describe('isMobile', () => {
    it('should detect mobile devices', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
      });
      expect(browser.isMobile()).toBe(true);
    });

    it('should return false for desktop', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      });
      expect(browser.isMobile()).toBe(false);
    });
  });

  describe('isTablet', () => {
    it('should detect tablet devices', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)'
      });
      expect(browser.isTablet()).toBe(true);
    });
  });

  describe('isDesktop', () => {
    it('should detect desktop devices', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      });
      expect(browser.isDesktop()).toBe(true);
    });
  });

  describe('isIOS', () => {
    it('should detect iOS devices', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
      });
      expect(browser.isIOS()).toBe(true);
    });
  });

  describe('isAndroid', () => {
    it('should detect Android devices', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Linux; Android 10)'
      });
      expect(browser.isAndroid()).toBe(true);
    });
  });

  // Note: isWindows, isMac, isLinux are not exported from browser module
  // They may be in device module or not implemented yet

  describe('getDeviceType', () => {
    it('should return device type', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
      });
      const type = browser.getDeviceType();
      expect(['mobile', 'tablet', 'desktop']).toContain(type);
    });
  });

  describe('getBrowserInfo', () => {
    it('should return browser information', () => {
      Object.defineProperty(global.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      });
      const info = browser.getBrowserInfo();
      expect(info).toHaveProperty('name');
      expect(info).toHaveProperty('version');
      expect(info).toHaveProperty('isMobile');
      expect(typeof info.name).toBe('string');
      expect(typeof info.version).toBe('string');
      expect(typeof info.isMobile).toBe('boolean');
    });
  });
});

