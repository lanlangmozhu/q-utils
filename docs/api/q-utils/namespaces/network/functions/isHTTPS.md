[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [network](../README.md) / isHTTPS

# Function: isHTTPS()

> **isHTTPS**(`url?`): `boolean`

Defined in: [network/url.ts:170](https://github.com/lanlangmozhu/q-utils/blob/main/src/network/url.ts#L170)

判断当前页面是否使用 HTTPS 协议

## Parameters

### url?

`string`

要检查的 URL，默认为当前页面的 URL

## Returns

`boolean`

如果是 HTTPS 则返回 true，否则返回 false

## Example

```ts
if (isHTTPS()) {
  console.log('当前页面是安全连接');
} else {
  console.log('当前页面是非安全连接');
}

// 检查指定 URL
console.log(isHTTPS('https://example.com')); // true
console.log(isHTTPS('http://example.com'));  // false
```
