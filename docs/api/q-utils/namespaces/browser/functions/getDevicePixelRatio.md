[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [browser](../README.md) / getDevicePixelRatio

# Function: getDevicePixelRatio()

> **getDevicePixelRatio**(): `number`

Defined in: [browser/device.ts:155](https://github.com/lanlangmozhu/q-utils/blob/main/src/browser/device.ts#L155)

获取设备像素比

## Returns

`number`

设备的像素比

## Example

```ts
const ratio = getDevicePixelRatio();
console.log(`设备像素比是: ${ratio}`);

// 基于像素比调整图像质量
if (ratio >= 2) {
  // 使用高分辨率图像
}
```
