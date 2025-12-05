[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [storage](../README.md) / getCookie

# Function: getCookie()

> **getCookie**(`name`): `string`

Defined in: [storage/cookie.ts:95](https://github.com/lanlangmozhu/q-utils/blob/main/src/storage/cookie.ts#L95)

获取指定名称的 Cookie 值

## Parameters

### name

`string`

Cookie 名称

## Returns

`string`

Cookie 值，如果不存在则返回空字符串

## Example

```ts
// 获取用户名
const username = getCookie('username');
if (username) {
  console.log(`欢迎回来，${username}`);
}
```
