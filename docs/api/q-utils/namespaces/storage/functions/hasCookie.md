[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [storage](../README.md) / hasCookie

# Function: hasCookie()

> **hasCookie**(`name`): `boolean`

Defined in: [storage/cookie.ts:147](https://github.com/lanlangmozhu/q-utils/blob/main/src/storage/cookie.ts#L147)

检查 Cookie 是否存在

## Parameters

### name

`string`

Cookie 名称

## Returns

`boolean`

如果 Cookie 存在则返回 true，否则返回 false

## Example

```ts
if (hasCookie('authToken')) {
  // 用户已登录
} else {
  // 重定向到登录页
}
```
