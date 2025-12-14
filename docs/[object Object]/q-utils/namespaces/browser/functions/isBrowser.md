[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [browser](../README.md) / isBrowser

# Function: isBrowser()

> **isBrowser**(`browserName`): `boolean`

Defined in: [browser/browser.ts:98](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/browser/browser.ts#L98)

检查当前浏览器是否为指定的浏览器类型

## Parameters

### browserName

`string`

浏览器名称

## Returns

`boolean`

如果匹配则返回 true，否则返回 false

## Example

```ts
if (isBrowser('Chrome')) {
  // Chrome 特定功能
} else if (isBrowser('Safari')) {
  // Safari 特定功能
}
```
