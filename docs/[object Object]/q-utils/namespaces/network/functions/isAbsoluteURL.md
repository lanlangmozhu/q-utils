[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / isAbsoluteURL

# Function: isAbsoluteURL()

> **isAbsoluteURL**(`url`): `boolean`

Defined in: [network/url.ts:220](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L220)

检查 URL 是否为绝对 URL

## Parameters

### url

`string`

要检查的 URL

## Returns

`boolean`

如果是绝对 URL 则返回 true，否则返回 false

## Example

```ts
console.log(isAbsoluteURL('https://example.com/page')); // true
console.log(isAbsoluteURL('//example.com/page'));       // true
console.log(isAbsoluteURL('/page'));                    // false
console.log(isAbsoluteURL('page'));                     // false
```
