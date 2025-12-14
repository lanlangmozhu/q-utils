[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / getURLDomain

# Function: getURLDomain()

> **getURLDomain**(`url?`): `string`

Defined in: [network/url.ts:147](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L147)

获取 URL 的域名部分

## Parameters

### url?

`string`

要处理的 URL，默认为当前页面的 URL

## Returns

`string`

URL 的域名

## Example

```ts
// 假设当前页面为 https://sub.example.com/products
console.log(getURLDomain()); // 'sub.example.com'

// 处理指定 URL
console.log(getURLDomain('https://api.example.org/v1/data')); // 'api.example.org'
```
