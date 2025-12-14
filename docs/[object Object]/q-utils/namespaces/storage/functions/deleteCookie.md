[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [storage](../README.md) / deleteCookie

# Function: deleteCookie()

> **deleteCookie**(`name`, `options`): `void`

Defined in: [storage/cookie.ts:125](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/storage/cookie.ts#L125)

删除指定的 Cookie

## Parameters

### name

`string`

Cookie 名称

### options

`Pick`\<[`CookieOptions`](../interfaces/CookieOptions.md), `"path"` \| `"domain"`\> = `{}`

Cookie 选项（主要用于指定路径和域名）

## Returns

`void`

## Example

```ts
// 简单删除
deleteCookie('username');

// 删除带有特定路径和域名的 Cookie
deleteCookie('authToken', { path: '/', domain: 'example.com' });
```
