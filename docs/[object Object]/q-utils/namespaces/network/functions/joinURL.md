[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / joinURL

# Function: joinURL()

> **joinURL**(`baseURL`, `relativeURL`): `string`

Defined in: [network/url.ts:252](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L252)

合并相对 URL 和基础 URL

## Parameters

### baseURL

`string`

基础 URL

### relativeURL

`string`

相对 URL

## Returns

`string`

合并后的绝对 URL

## Example

```ts
console.log(joinURL('https://example.com', '/api/users')); 
// 'https://example.com/api/users'

console.log(joinURL('https://example.com/api', 'users'));
// 'https://example.com/api/users'

console.log(joinURL('https://example.com/api/', '/users'));
// 'https://example.com/api/users'
```
