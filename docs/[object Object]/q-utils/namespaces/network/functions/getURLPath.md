[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [network](../README.md) / getURLPath

# Function: getURLPath()

> **getURLPath**(`url?`): `string`

Defined in: [network/url.ts:128](https://github.com/lanlangmozhu/q-utils/blob/main/src/network/url.ts#L128)

获取 URL 的相对路径

## Parameters

### url?

`string`

要处理的 URL，默认为当前页面的 URL

## Returns

`string`

URL 的相对路径

## Example

```ts
// 假设当前页面为 https://example.com/products/123?sort=desc
console.log(getURLPath()); // '/products/123'

// 处理指定 URL
console.log(getURLPath('https://example.com/about/team?id=5')); // '/about/team'
```
