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
export declare function getBrowserInfo(): BrowserInfo;
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
export declare function isBrowser(browserName: string): boolean;
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
export declare function isChrome(): boolean;
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
export declare function isFirefox(): boolean;
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
export declare function isSafari(): boolean;
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
export declare function isEdge(): boolean;
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
export declare function isIE(): boolean;
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
export declare function supportsCSSProperty(property: string): boolean;
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
export declare function supportsMediaQuery(query: string): boolean;
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
export declare function supportsWebAPI(api: string): boolean;
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
export declare function supportsOfflineStorage(): boolean;
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
export declare function supportsInputType(inputType: string): boolean;
//# sourceMappingURL=browser.d.ts.map