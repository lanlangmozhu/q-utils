[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [browser](../README.md) / supportsInputType

# Function: supportsInputType()

> **supportsInputType**(`inputType`): `boolean`

Defined in: [browser/browser.ts:259](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/browser/browser.ts#L259)

检查浏览器是否支持指定的输入类型

## Parameters

### inputType

`string`

要检查的输入类型

## Returns

`boolean`

如果支持则返回 true，否则返回 false

## Example

```ts
if (supportsInputType('date')) {
  // 使用原生日期选择器
} else {
  // 使用自定义日期选择器
}
```
