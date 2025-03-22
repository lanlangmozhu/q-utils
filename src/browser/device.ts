/**
 * 设备检测相关工具函数
 * @packageDocumentation
 */

/**
 * 检测当前设备是否为移动设备
 * 
 * @returns 如果是移动设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isMobile()) {
 *   // 显示移动版布局
 * } else {
 *   // 显示桌面版布局
 * }
 * ```
 */
export function isMobile(): boolean {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  
  // 检查常见的移动设备标识
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  return mobileRegex.test(userAgent.toLowerCase());
}

/**
 * 检测当前设备是否为平板设备
 * 
 * @returns 如果是平板设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isTablet()) {
 *   // 调整布局适应平板设备
 * }
 * ```
 */
export function isTablet(): boolean {
  // 综合多种方法判断是否为平板
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  
  // 检查常见的平板设备标识
  const tabletRegex = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i;
  
  // 检查屏幕大小（通常平板设备宽度 > 768px）
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  return tabletRegex.test(userAgent.toLowerCase()) || (screenWidth > 768 && isMobile());
}

/**
 * 检测当前设备是否为桌面设备
 * 
 * @returns 如果是桌面设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isDesktop()) {
 *   // 启用高级交互功能
 * }
 * ```
 */
export function isDesktop(): boolean {
  return !isMobile() && !isTablet();
}

/**
 * 检测当前设备是否为 iOS 设备
 * 
 * @returns 如果是 iOS 设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isIOS()) {
 *   // 处理 iOS 特定功能
 * }
 * ```
 */
export function isIOS(): boolean {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  
  // 检查 iOS 设备的特征
  return /ipad|iphone|ipod/i.test(userAgent) && !(window as any).MSStream;
}

/**
 * 检测当前设备是否为 Android 设备
 * 
 * @returns 如果是 Android 设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isAndroid()) {
 *   // 处理 Android 特定功能
 * }
 * ```
 */
export function isAndroid(): boolean {
  const userAgent = navigator.userAgent || '';
  
  return /android/i.test(userAgent);
}

/**
 * 检测屏幕是否处于竖屏模式
 * 
 * @returns 如果是竖屏模式则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isPortrait()) {
 *   // 优化竖屏布局
 * } else {
 *   // 优化横屏布局
 * }
 * ```
 */
export function isPortrait(): boolean {
  // 首先尝试使用 window.matchMedia
  if (window.matchMedia) {
    return window.matchMedia('(orientation: portrait)').matches;
  }
  
  // 备选方法：比较窗口宽高
  return window.innerHeight > window.innerWidth;
}

/**
 * 检测屏幕是否处于横屏模式
 * 
 * @returns 如果是横屏模式则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isLandscape()) {
 *   // 显示横屏优化的内容
 * }
 * ```
 */
export function isLandscape(): boolean {
  return !isPortrait();
}

/**
 * 获取设备像素比
 * 
 * @returns 设备的像素比
 * @example
 * ```ts
 * const ratio = getDevicePixelRatio();
 * console.log(`设备像素比是: ${ratio}`);
 * 
 * // 基于像素比调整图像质量
 * if (ratio >= 2) {
 *   // 使用高分辨率图像
 * }
 * ```
 */
export function getDevicePixelRatio(): number {
  return window.devicePixelRatio || 1;
}

/**
 * 判断是否支持触摸事件
 * 
 * @returns 如果支持触摸事件则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isTouchDevice()) {
 *   // 启用触摸优化交互
 * } else {
 *   // 启用鼠标优化交互
 * }
 * ```
 */
export function isTouchDevice(): boolean {
  return (
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints > 0)
  );
}

/**
 * 获取设备类型
 * 
 * @returns 设备类型的字符串表示 ('mobile', 'tablet', 'desktop')
 * @example
 * ```ts
 * const deviceType = getDeviceType();
 * switch (deviceType) {
 *   case 'mobile':
 *     // 移动设备处理
 *     break;
 *   case 'tablet':
 *     // 平板设备处理
 *     break;
 *   case 'desktop':
 *     // 桌面设备处理
 *     break;
 * }
 * ```
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (isTablet()) {
    return 'tablet';
  } else if (isMobile()) {
    return 'mobile';
  } else {
    return 'desktop';
  }
} 