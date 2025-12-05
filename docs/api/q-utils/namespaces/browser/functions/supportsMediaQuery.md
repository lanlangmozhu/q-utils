[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [browser](../README.md) / supportsMediaQuery

# Function: supportsMediaQuery()

> **supportsMediaQuery**(`query`): `boolean`

Defined in: [browser/browser.ts:208](https://github.com/lanlangmozhu/q-utils/blob/main/src/browser/browser.ts#L208)

检查浏览器是否支持某种媒体查询

## Parameters

### query

`string`

要检查的媒体查询字符串

## Returns

`boolean`

如果支持则返回 true，否则返回 false

## Example

```ts
if (supportsMediaQuery('(prefers-color-scheme: dark)')) {
  // 支持暗黑模式偏好检测
}
```
