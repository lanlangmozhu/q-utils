# 颜色操作工具函数

## 目录结构

```
src/color/
├── index.ts
├── hexToRgb.ts
├── rgbToHex.ts
└── adjustColor.ts
```

## 功能描述

颜色操作工具函数提供了一系列用于处理颜色格式转换、颜色调整等功能的工具函数。

### 颜色格式转换

- `hexToRgb`: 将十六进制颜色代码转换为 RGB 颜色值
- `rgbToHex`: 将 RGB 颜色值转换为十六进制颜色代码

### 颜色调整

- `adjustColor`: 调整颜色的亮度、饱和度或色调

## 使用示例

```typescript
import { 
  hexToRgb,
  rgbToHex,
  adjustColor
} from '@qh5-utils/color';

// 颜色格式转换
// 十六进制转 RGB
console.log(hexToRgb('#ff0000')); // 返回: { r: 255, g: 0, b: 0 }
console.log(hexToRgb('#f00')); // 返回: { r: 255, g: 0, b: 0 }
console.log(hexToRgb('ff0000')); // 返回: { r: 255, g: 0, b: 0 }

// 返回数组格式
console.log(hexToRgb('#ff0000', { format: 'array' })); // 返回: [255, 0, 0]

// 返回字符串格式
console.log(hexToRgb('#ff0000', { format: 'string' })); // 返回: "rgb(255, 0, 0)"

// 包含 alpha 值
console.log(hexToRgb('#ff0000', { alpha: 0.5, format: 'string' })); // 返回: "rgba(255, 0, 0, 0.5)"

// RGB 转十六进制
console.log(rgbToHex(255, 0, 0)); // 返回: "#ff0000"
console.log(rgbToHex(255, 0, 0, { prefix: false })); // 返回: "ff0000"

// 使用对象
console.log(rgbToHex({ r: 255, g: 0, b: 0 })); // 返回: "#ff0000"

// 使用数组
console.log(rgbToHex([255, 0, 0])); // 返回: "#ff0000"

// 颜色调整
// 调整亮度
console.log(adjustColor('#ff0000', { lightness: 0.2 })); // 返回: "#ff3333" (变亮)
console.log(adjustColor('#ff0000', { lightness: -0.2 })); // 返回: "#cc0000" (变暗)

// 调整饱和度
console.log(adjustColor('#ff0000', { saturation: -0.5 })); // 返回: "#bf4040" (降低饱和度)

// 调整色调
console.log(adjustColor('#ff0000', { hue: 60 })); // 返回: "#ffff00" (红色 -> 黄色)
console.log(adjustColor('#ff0000', { hue: 120 })); // 返回: "#00ff00" (红色 -> 绿色)

// 组合调整
console.log(adjustColor('#ff0000', { 
  lightness: 0.1, 
  saturation: -0.2, 
  hue: 30 
})); // 返回混合调整后的颜色

// 使用 RGB 对象
console.log(adjustColor({ r: 255, g: 0, b: 0 }, { lightness: 0.2 })); // 返回: { r: 255, g: 51, b: 51 }
```

## 注意事项

1. 颜色格式转换：
   - `hexToRgb` 支持 3 位(#RGB)和 6 位(#RRGGBB)格式的十六进制颜色
   - `hexToRgb` 支持多种返回格式：object、array、string
   - `hexToRgb` 支持 alpha 通道
   - `rgbToHex` 支持多种输入格式：分开的 RGB 值、对象、数组
   - `rgbToHex` 支持自定义是否包含 # 前缀

2. 颜色调整：
   - `adjustColor` 支持调整亮度、饱和度、色调和 alpha 通道
   - 亮度调整范围为 -1 到 1，0 表示不变
   - 饱和度调整范围为 -1 到 1，0 表示不变
   - 色调调整范围为 -360 到 360，0 表示不变
   - alpha 通道范围为 0 到 1
   - 支持十六进制和 RGB 格式的输入输出

3. 颜色处理：
   - 所有颜色值都会被规范化到有效范围内
   - 无效的颜色值会被返回 null 或原始值
   - 颜色转换过程中会保持精度
   - 支持 alpha 通道的透明度处理

## 更新记录

- 2024-03-21: 初始版本
  - 添加颜色格式转换函数
  - 添加颜色调整函数 