[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / parseURLParams

# Function: parseURLParams()

> **parseURLParams**(`url?`): `Record`\<`string`, `string`\>

Defined in: [network/url.ts:24](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L24)

解析 URL 参数为对象

## Parameters

### url?

`string`

要解析的 URL，默认为当前页面的 URL

## Returns

`Record`\<`string`, `string`\>

包含 URL 参数的对象

## Example

```ts
// 假设 URL 是 https://example.com?name=张三&age=25
const params = parseURLParams();
console.log(params.name); // '张三'
console.log(params.age);  // '25'

// 解析指定 URL
const params2 = parseURLParams('https://example.com?id=123&type=product');
console.log(params2.id);   // '123'
console.log(params2.type); // 'product'
```
