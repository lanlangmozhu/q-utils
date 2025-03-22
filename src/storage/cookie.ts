/**
 * Cookie 操作相关工具函数
 * @packageDocumentation
 */

/**
 * Cookie 选项配置
 */
export interface CookieOptions {
  /** Cookie 过期时间（天） */
  expires?: number;
  /** Cookie 路径 */
  path?: string;
  /** Cookie 域名 */
  domain?: string;
  /** 是否仅通过 HTTPS 传输 */
  secure?: boolean;
  /** 控制 Cookie 可通过哪些方式访问 */
  sameSite?: 'strict' | 'lax' | 'none';
}

/**
 * 设置 Cookie
 * 
 * @param name - Cookie 名称
 * @param value - Cookie 值
 * @param options - Cookie 选项
 * @example
 * ```ts
 * // 简单设置
 * setCookie('username', 'zhangsan');
 * 
 * // 设置带有过期时间的 Cookie（7天后过期）
 * setCookie('rememberMe', 'true', { expires: 7 });
 * 
 * // 设置安全的 Cookie
 * setCookie('authToken', 'xyz123', {
 *   expires: 1,
 *   path: '/',
 *   domain: 'example.com',
 *   secure: true,
 *   sameSite: 'strict'
 * });
 * ```
 */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  // 基本 cookie 字符串
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  // 添加过期时间
  if (options.expires !== undefined) {
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + options.expires);
    cookieStr += `; expires=${expiresDate.toUTCString()}`;
  }
  
  // 添加路径
  if (options.path) {
    cookieStr += `; path=${options.path}`;
  }
  
  // 添加域名
  if (options.domain) {
    cookieStr += `; domain=${options.domain}`;
  }
  
  // 添加安全标志
  if (options.secure) {
    cookieStr += '; secure';
  }
  
  // 添加 SameSite
  if (options.sameSite) {
    cookieStr += `; samesite=${options.sameSite}`;
  }
  
  // 设置 Cookie
  document.cookie = cookieStr;
}

/**
 * 获取指定名称的 Cookie 值
 * 
 * @param name - Cookie 名称
 * @returns Cookie 值，如果不存在则返回空字符串
 * @example
 * ```ts
 * // 获取用户名
 * const username = getCookie('username');
 * if (username) {
 *   console.log(`欢迎回来，${username}`);
 * }
 * ```
 */
export function getCookie(name: string): string {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  
  const nameEQ = `${name}=`;
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  
  return '';
}

/**
 * 删除指定的 Cookie
 * 
 * @param name - Cookie 名称
 * @param options - Cookie 选项（主要用于指定路径和域名）
 * @example
 * ```ts
 * // 简单删除
 * deleteCookie('username');
 * 
 * // 删除带有特定路径和域名的 Cookie
 * deleteCookie('authToken', { path: '/', domain: 'example.com' });
 * ```
 */
export function deleteCookie(name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
  // 设置过期时间为过去时间，以删除 Cookie
  setCookie(name, '', {
    ...options,
    expires: -1
  });
}

/**
 * 检查 Cookie 是否存在
 * 
 * @param name - Cookie 名称
 * @returns 如果 Cookie 存在则返回 true，否则返回 false
 * @example
 * ```ts
 * if (hasCookie('authToken')) {
 *   // 用户已登录
 * } else {
 *   // 重定向到登录页
 * }
 * ```
 */
export function hasCookie(name: string): boolean {
  return getCookie(name) !== '';
}

/**
 * 获取所有 Cookie，以对象形式返回
 * 
 * @returns 包含所有 Cookie 的对象
 * @example
 * ```ts
 * const allCookies = getAllCookies();
 * console.log('当前站点的所有 Cookie:', allCookies);
 * ```
 */
export function getAllCookies(): Record<string, string> {
  const result: Record<string, string> = {};
  const decodedCookie = decodeURIComponent(document.cookie);
  
  if (!decodedCookie) {
    return result;
  }
  
  const cookies = decodedCookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const separatorIndex = cookie.indexOf('=');
    
    if (separatorIndex > 0) {
      const name = cookie.substring(0, separatorIndex);
      const value = cookie.substring(separatorIndex + 1);
      result[name] = value;
    }
  }
  
  return result;
} 