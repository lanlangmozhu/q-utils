[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [browser](../README.md) / supportsWebAPI

# Function: supportsWebAPI()

> **supportsWebAPI**(`api`): `boolean`

Defined in: [browser/browser.ts:226](https://github.com/lanlangmozhu/q-utils/blob/main/src/browser/browser.ts#L226)

检查浏览器是否支持某个 Web API

## Parameters

### api

`string`

要检查的 API 名称

## Returns

`boolean`

如果支持则返回 true，否则返回 false

## Example

```ts
if (supportsWebAPI('IntersectionObserver')) {
  // 使用 Intersection Observer API 实现懒加载
} else {
  // 使用滚动事件实现懒加载
}
```
