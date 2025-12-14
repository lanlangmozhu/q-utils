[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [browser](../README.md) / isTouchDevice

# Function: isTouchDevice()

> **isTouchDevice**(): `boolean`

Defined in: [browser/device.ts:172](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/browser/device.ts#L172)

判断是否支持触摸事件

## Returns

`boolean`

如果支持触摸事件则返回 true，否则返回 false

## Example

```ts
if (isTouchDevice()) {
  // 启用触摸优化交互
} else {
  // 启用鼠标优化交互
}
```
