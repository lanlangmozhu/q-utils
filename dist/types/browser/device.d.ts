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
export declare function isMobile(): boolean;
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
export declare function isTablet(): boolean;
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
export declare function isDesktop(): boolean;
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
export declare function isIOS(): boolean;
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
export declare function isAndroid(): boolean;
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
export declare function isPortrait(): boolean;
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
export declare function isLandscape(): boolean;
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
export declare function getDevicePixelRatio(): number;
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
export declare function isTouchDevice(): boolean;
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
export declare function getDeviceType(): 'mobile' | 'tablet' | 'desktop';
//# sourceMappingURL=device.d.ts.map