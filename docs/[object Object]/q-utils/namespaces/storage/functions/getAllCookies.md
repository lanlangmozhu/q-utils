[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [storage](../README.md) / getAllCookies

# Function: getAllCookies()

> **getAllCookies**(): `Record`\<`string`, `string`\>

Defined in: [storage/cookie.ts:161](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/storage/cookie.ts#L161)

获取所有 Cookie，以对象形式返回

## Returns

`Record`\<`string`, `string`\>

包含所有 Cookie 的对象

## Example

```ts
const allCookies = getAllCookies();
console.log('当前站点的所有 Cookie:', allCookies);
```
