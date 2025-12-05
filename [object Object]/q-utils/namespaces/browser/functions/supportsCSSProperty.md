[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [browser](../README.md) / supportsCSSProperty

# Function: supportsCSSProperty()

> **supportsCSSProperty**(`property`): `boolean`

Defined in: [browser/browser.ts:192](https://github.com/lanlangmozhu/q-utils/blob/main/src/browser/browser.ts#L192)

检查浏览器是否支持某个 CSS 属性

## Parameters

### property

`string`

要检查的 CSS 属性

## Returns

`boolean`

如果支持则返回 true，否则返回 false

## Example

```ts
if (supportsCSSProperty('grid')) {
  // 使用 CSS Grid 布局
} else {
  // 使用替代布局
}
```
