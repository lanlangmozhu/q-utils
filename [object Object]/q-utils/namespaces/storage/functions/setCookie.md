[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [storage](../README.md) / setCookie

# Function: setCookie()

> **setCookie**(`name`, `value`, `options`): `void`

Defined in: [storage/cookie.ts:46](https://github.com/lanlangmozhu/q-utils/blob/main/src/storage/cookie.ts#L46)

设置 Cookie

## Parameters

### name

`string`

Cookie 名称

### value

`string`

Cookie 值

### options

[`CookieOptions`](../interfaces/CookieOptions.md) = `{}`

Cookie 选项

## Returns

`void`

## Example

```ts
// 简单设置
setCookie('username', 'zhangsan');

// 设置带有过期时间的 Cookie（7天后过期）
setCookie('rememberMe', 'true', { expires: 7 });

// 设置安全的 Cookie
setCookie('authToken', 'xyz123', {
  expires: 1,
  path: '/',
  domain: 'example.com',
  secure: true,
  sameSite: 'strict'
});
```
