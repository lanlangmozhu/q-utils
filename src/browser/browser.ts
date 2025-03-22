/**
 * 浏览器检测相关工具函数
 * @packageDocumentation
 */

/**
 * 浏览器信息接口
 */
export interface BrowserInfo {
  /** 浏览器名称 */
  name: string;
  /** 浏览器版本 */
  version: string;
  /** 是否为移动浏览器 */
  isMobile: boolean;
}

/**
 * 获取当前浏览器的详细信息
 * 
 * @returns 浏览器名称、版本和移动浏览器标志
 * @example
 * ```ts
 * const browser = getBrowserInfo();
 * console.log(`浏览器: ${browser.name} ${browser.version}`);
 * if (browser.isMobile) {
 *   console.log('这是移动浏览器');
 * }
 * ```
 */
export function getBrowserInfo(): BrowserInfo {
  const userAgent = navigator.userAgent;
  let name = 'Unknown';
  let version = 'Unknown';
  let isMobile = false;
  
  // 检查是否为移动浏览器
  if (/Mobi|Android/i.test(userAgent)) {
    isMobile = true;
  }
  
  // 检测常见浏览器
  if (/Edge|Edg/i.test(userAgent)) {
    name = 'Edge';
    const match = userAgent.match(/(Edge|Edg)\/(\d+(\.\d+)?)/);
    if (match) {
      version = match[2];
    }
  } else if (/Firefox/i.test(userAgent)) {
    name = 'Firefox';
    const match = userAgent.match(/Firefox\/(\d+(\.\d+)?)/);
    if (match) {
      version = match[1];
    }
  } else if (/Chrome/i.test(userAgent)) {
    name = 'Chrome';
    const match = userAgent.match(/Chrome\/(\d+(\.\d+)?)/);
    if (match) {
      version = match[1];
    }
  } else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
    name = 'Safari';
    const match = userAgent.match(/Version\/(\d+(\.\d+)?)/);
    if (match) {
      version = match[1];
    }
  } else if (/MSIE|Trident/i.test(userAgent)) {
    name = 'Internet Explorer';
    const match = userAgent.match(/(?:MSIE |rv:)(\d+(\.\d+)?)/);
    if (match) {
      version = match[1];
    }
  } else if (/Opera|OPR/i.test(userAgent)) {
    name = 'Opera';
    const match = userAgent.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/);
    if (match) {
      version = match[1];
    }
  }
  
  return { name, version, isMobile };
}

/**
 * 检查当前浏览器是否为指定的浏览器类型
 * 
 * @param browserName - 浏览器名称
 * @returns 如果匹配则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isBrowser('Chrome')) {
 *   // Chrome 特定功能
 * } else if (isBrowser('Safari')) {
 *   // Safari 特定功能
 * }
 * ```
 */
export function isBrowser(browserName: string): boolean {
  const info = getBrowserInfo();
  return info.name.toLowerCase() === browserName.toLowerCase();
}

/**
 * 检查当前浏览器是否为 Chrome
 * 
 * @returns 如果是 Chrome 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isChrome()) {
 *   // 使用 Chrome 特定功能
 * }
 * ```
 */
export function isChrome(): boolean {
  return isBrowser('Chrome');
}

/**
 * 检查当前浏览器是否为 Firefox
 * 
 * @returns 如果是 Firefox 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isFirefox()) {
 *   // 使用 Firefox 特定功能
 * }
 * ```
 */
export function isFirefox(): boolean {
  return isBrowser('Firefox');
}

/**
 * 检查当前浏览器是否为 Safari
 * 
 * @returns 如果是 Safari 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isSafari()) {
 *   // 处理 Safari 兼容性问题
 * }
 * ```
 */
export function isSafari(): boolean {
  return isBrowser('Safari');
}

/**
 * 检查当前浏览器是否为 Edge
 * 
 * @returns 如果是 Edge 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isEdge()) {
 *   // 处理 Edge 特定问题
 * }
 * ```
 */
export function isEdge(): boolean {
  return isBrowser('Edge');
}

/**
 * 检查当前浏览器是否为 Internet Explorer
 * 
 * @returns 如果是 IE 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isIE()) {
 *   alert('您的浏览器不受支持，请使用现代浏览器');
 * }
 * ```
 */
export function isIE(): boolean {
  return isBrowser('Internet Explorer');
}

/**
 * 检查浏览器是否支持某个 CSS 属性
 * 
 * @param property - 要检查的 CSS 属性
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsCSSProperty('grid')) {
 *   // 使用 CSS Grid 布局
 * } else {
 *   // 使用替代布局
 * }
 * ```
 */
export function supportsCSSProperty(property: string): boolean {
  return property in document.documentElement.style;
}

/**
 * 检查浏览器是否支持某种媒体查询
 * 
 * @param query - 要检查的媒体查询字符串
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsMediaQuery('(prefers-color-scheme: dark)')) {
 *   // 支持暗黑模式偏好检测
 * }
 * ```
 */
export function supportsMediaQuery(query: string): boolean {
  return window.matchMedia && window.matchMedia(query).matches;
}

/**
 * 检查浏览器是否支持某个 Web API
 * 
 * @param api - 要检查的 API 名称
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsWebAPI('IntersectionObserver')) {
 *   // 使用 Intersection Observer API 实现懒加载
 * } else {
 *   // 使用滚动事件实现懒加载
 * }
 * ```
 */
export function supportsWebAPI(api: string): boolean {
  return api in window;
}

/**
 * 检查浏览器是否支持离线存储
 * 
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsOfflineStorage()) {
 *   // 实现离线功能
 * }
 * ```
 */
export function supportsOfflineStorage(): boolean {
  return 'serviceWorker' in navigator && 'caches' in window;
}

/**
 * 检查浏览器是否支持指定的输入类型
 * 
 * @param inputType - 要检查的输入类型
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsInputType('date')) {
 *   // 使用原生日期选择器
 * } else {
 *   // 使用自定义日期选择器
 * }
 * ```
 */
export function supportsInputType(inputType: string): boolean {
  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  return input.type === inputType;
} 