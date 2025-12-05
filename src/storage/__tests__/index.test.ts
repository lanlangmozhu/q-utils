import {
  isLocalStorageSupported,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  getAllLocalStorage,
  getLocalStorageLength,
  getAllLocalStorageKeys,
  getAllLocalStorageValues,
  isSessionStorageSupported,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
  setCookie,
  getCookie,
  deleteCookie,
  hasCookie,
  getAllCookies
} from '@/storage';

describe('Storage Utils', () => {
  beforeEach(() => {
    // 清理 localStorage
    if (isLocalStorageSupported()) {
      clearLocalStorage();
    }
    // 清理 sessionStorage
    if (isSessionStorageSupported()) {
      clearSessionStorage();
    }
    // 清理 cookies
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (name) {
        deleteCookie(name);
      }
    });
  });

  describe('localStorage', () => {
    it('should check localStorage support', () => {
      const supported = isLocalStorageSupported();
      expect(typeof supported).toBe('boolean');
    });

    it('should set and get localStorage', () => {
      if (!isLocalStorageSupported()) {
        return; // Skip test if localStorage is not supported
      }
      setLocalStorage('test', 'value');
      expect(getLocalStorage('test', 'default')).toBe('value');
    });

    it('should return default value when key does not exist', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      expect(getLocalStorage('nonexistent', 'default')).toBe('default');
    });

    it('should store and retrieve objects', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      const obj = { name: 'test', value: 123 };
      setLocalStorage('obj', obj);
      expect(getLocalStorage('obj', {})).toEqual(obj);
    });

    it('should remove localStorage item', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test', 'value');
      removeLocalStorage('test');
      expect(getLocalStorage('test', 'default')).toBe('default');
    });

    it('should clear all localStorage', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test1', 'value1');
      setLocalStorage('test2', 'value2');
      clearLocalStorage();
      expect(getLocalStorageLength()).toBe(0);
    });

    it('should get all localStorage', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test1', 'value1');
      setLocalStorage('test2', 'value2');
      const all = getAllLocalStorage();
      expect(all).toHaveProperty('test1');
      expect(all).toHaveProperty('test2');
    });

    it('should get localStorage length', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test1', 'value1');
      setLocalStorage('test2', 'value2');
      expect(getLocalStorageLength()).toBeGreaterThanOrEqual(2);
    });

    it('should get all localStorage keys', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test1', 'value1');
      setLocalStorage('test2', 'value2');
      const keys = getAllLocalStorageKeys();
      expect(keys).toContain('test1');
      expect(keys).toContain('test2');
    });

    it('should get all localStorage values', () => {
      if (!isLocalStorageSupported()) {
        return;
      }
      setLocalStorage('test1', 'value1');
      setLocalStorage('test2', 'value2');
      const values = getAllLocalStorageValues();
      expect(values.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('sessionStorage', () => {
    it('should check sessionStorage support', () => {
      const supported = isSessionStorageSupported();
      expect(typeof supported).toBe('boolean');
    });

    it('should set and get sessionStorage', () => {
      if (!isSessionStorageSupported()) {
        return;
      }
      const result = setSessionStorage('test', 'value');
      expect(result).toBe(true);
      expect(getSessionStorage('test', 'default')).toBe('value');
    });

    it('should return default value when key does not exist', () => {
      if (!isSessionStorageSupported()) {
        return;
      }
      expect(getSessionStorage('nonexistent', 'default')).toBe('default');
    });

    it('should store and retrieve objects', () => {
      if (!isSessionStorageSupported()) {
        return;
      }
      const obj = { name: 'test', value: 123 };
      setSessionStorage('obj', obj);
      expect(getSessionStorage('obj', {})).toEqual(obj);
    });

    it('should remove sessionStorage item', () => {
      if (!isSessionStorageSupported()) {
        return;
      }
      setSessionStorage('test', 'value');
      const result = removeSessionStorage('test');
      expect(result).toBe(true);
      expect(getSessionStorage('test', 'default')).toBe('default');
    });

    it('should clear all sessionStorage', () => {
      if (!isSessionStorageSupported()) {
        return;
      }
      setSessionStorage('test1', 'value1');
      setSessionStorage('test2', 'value2');
      const result = clearSessionStorage();
      expect(result).toBe(true);
    });
  });

  describe('cookie', () => {
    it('should set and get cookie', () => {
      setCookie('test', 'value');
      expect(getCookie('test')).toBe('value');
    });

    it('should return empty string when cookie does not exist', () => {
      expect(getCookie('nonexistent')).toBe('');
    });

    it('should delete cookie', () => {
      setCookie('test', 'value');
      deleteCookie('test');
      expect(getCookie('test')).toBe('');
    });

    it('should check if cookie exists', () => {
      setCookie('test', 'value');
      expect(hasCookie('test')).toBe(true);
      expect(hasCookie('nonexistent')).toBe(false);
    });

    it('should get all cookies', () => {
      setCookie('test1', 'value1');
      setCookie('test2', 'value2');
      const all = getAllCookies();
      expect(all).toHaveProperty('test1');
      expect(all).toHaveProperty('test2');
    });

    it('should set cookie with options', () => {
      setCookie('test', 'value', { expires: 7, path: '/' });
      expect(getCookie('test')).toBe('value');
    });
  });
});

