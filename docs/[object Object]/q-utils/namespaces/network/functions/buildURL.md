[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / buildURL

# Function: buildURL()

> **buildURL**(`baseUrl`, `params`): `string`

Defined in: [network/url.ts:82](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L82)

构建 URL，将参数对象添加到基础 URL

## Parameters

### baseUrl

`string`

基础 URL

### params

`Record`\<`string`, `string`\>

参数对象

## Returns

`string`

组合后的 URL

## Example

```ts
// 基本用法
const url = buildURL('https://example.com', { 
  name: '张三', 
  age: '25' 
});
console.log(url); // 'https://example.com?name=%E5%BC%A0%E4%B8%89&age=25'

// 带有已有参数的 URL
const url2 = buildURL('https://example.com?sort=desc', { 
  page: '1',
  limit: '10'
});
console.log(url2); // 'https://example.com?sort=desc&page=1&limit=10'

// 相对路径 URL
const url3 = buildURL('/api/users', { id: '123' });
console.log(url3); // '/api/users?id=123'
```
