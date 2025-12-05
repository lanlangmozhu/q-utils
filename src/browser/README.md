# 浏览器和设备检测工具函数

## 目录结构

```
src/browser/
├── index.ts
├── browser.ts
└── device.ts
```

## 功能描述

浏览器和设备检测工具函数提供了一系列用于检测浏览器类型、版本、设备类型、屏幕方向等信息的工具函数。

### 浏览器检测

- `getBrowserInfo`: 获取当前浏览器的详细信息
- `isBrowser`: 检查当前浏览器是否为指定的浏览器类型
- `isChrome`: 检查当前浏览器是否为 Chrome
- `isFirefox`: 检查当前浏览器是否为 Firefox
- `isSafari`: 检查当前浏览器是否为 Safari
- `isEdge`: 检查当前浏览器是否为 Edge
- `isIE`: 检查当前浏览器是否为 Internet Explorer
- `supportsCSSProperty`: 检查浏览器是否支持某个 CSS 属性
- `supportsMediaQuery`: 检查浏览器是否支持某种媒体查询
- `supportsWebAPI`: 检查浏览器是否支持某个 Web API
- `supportsOfflineStorage`: 检查浏览器是否支持离线存储
- `supportsInputType`: 检查浏览器是否支持指定的输入类型

### 设备检测

- `isMobile`: 检测当前设备是否为移动设备
- `isTablet`: 检测当前设备是否为平板设备
- `isDesktop`: 检测当前设备是否为桌面设备
- `isIOS`: 检测当前设备是否为 iOS 设备
- `isAndroid`: 检测当前设备是否为 Android 设备
- `isPortrait`: 检测屏幕是否处于竖屏模式
- `isLandscape`: 检测屏幕是否处于横屏模式
- `getDevicePixelRatio`: 获取设备像素比
- `isTouchDevice`: 判断是否支持触摸事件
- `getDeviceType`: 获取设备类型

## 使用示例

```typescript
import { 
  // 浏览器检测
  getBrowserInfo,
  isBrowser,
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isIE,
  supportsCSSProperty,
  supportsMediaQuery,
  supportsWebAPI,
  supportsOfflineStorage,
  supportsInputType,
  
  // 设备检测
  isMobile,
  isTablet,
  isDesktop,
  isIOS,
  isAndroid,
  isPortrait,
  isLandscape,
  getDevicePixelRatio,
  isTouchDevice,
  getDeviceType
} from '@q-utils/browser';

// 浏览器检测
const browserInfo = getBrowserInfo();
console.log(`浏览器: ${browserInfo.name} ${browserInfo.version}`);
console.log(`是否移动浏览器: ${browserInfo.isMobile}`);

if (isChrome()) {
  // 使用 Chrome 特定功能
} else if (isFirefox()) {
  // 使用 Firefox 特定功能
} else if (isSafari()) {
  // 处理 Safari 兼容性问题
} else if (isEdge()) {
  // 处理 Edge 特定问题
} else if (isIE()) {
  alert('您的浏览器不受支持，请使用现代浏览器');
}

// 功能检测
if (supportsCSSProperty('grid')) {
  // 使用 CSS Grid 布局
} else {
  // 使用替代布局
}

if (supportsMediaQuery('(prefers-color-scheme: dark)')) {
  // 支持暗黑模式偏好检测
}

if (supportsWebAPI('IntersectionObserver')) {
  // 使用 Intersection Observer API 实现懒加载
} else {
  // 使用滚动事件实现懒加载
}

if (supportsOfflineStorage()) {
  // 实现离线功能
}

// 设备检测
if (isMobile()) {
  // 显示移动版布局
} else if (isTablet()) {
  // 显示平板版布局
} else {
  // 显示桌面版布局
}

if (isIOS()) {
  // 处理 iOS 特定功能
} else if (isAndroid()) {
  // 处理 Android 特定功能
}

if (isPortrait()) {
  // 优化竖屏布局
} else {
  // 优化横屏布局
}

const pixelRatio = getDevicePixelRatio();
if (pixelRatio >= 2) {
  // 使用高分辨率图像
}

if (isTouchDevice()) {
  // 启用触摸优化交互
} else {
  // 启用鼠标优化交互
}

const deviceType = getDeviceType();
switch (deviceType) {
  case 'mobile':
    // 移动设备处理
    break;
  case 'tablet':
    // 平板设备处理
    break;
  case 'desktop':
    // 桌面设备处理
    break;
}
```

## 注意事项

1. 浏览器检测：
   - 浏览器检测基于 User Agent 字符串，可能不够准确
   - 建议优先使用功能检测而不是浏览器检测
   - 某些浏览器可能会伪装 User Agent
   - 新版本浏览器可能会移除对旧版 API 的支持

2. 设备检测：
   - 设备检测结合了 User Agent 和屏幕尺寸
   - 平板设备的判断标准可能因设备而异
   - 屏幕方向检测优先使用 matchMedia API
   - 设备像素比可用于优化图像显示
   - 触摸设备检测考虑了多种兼容性情况

3. 功能检测：
   - 优先使用功能检测而不是浏览器检测
   - 某些 API 可能需要前缀或 polyfill
   - 功能支持可能因浏览器版本而异
   - 建议提供降级方案

## 更新记录

- 2024-03-21: 初始版本
  - 添加浏览器检测函数
  - 添加设备检测函数
  - 添加功能检测函数 