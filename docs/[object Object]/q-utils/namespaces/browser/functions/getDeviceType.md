[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [browser](../README.md) / getDeviceType

# Function: getDeviceType()

> **getDeviceType**(): `"mobile"` \| `"tablet"` \| `"desktop"`

Defined in: [browser/device.ts:200](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/browser/device.ts#L200)

获取设备类型

## Returns

`"mobile"` \| `"tablet"` \| `"desktop"`

设备类型的字符串表示 ('mobile', 'tablet', 'desktop')

## Example

```ts
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
