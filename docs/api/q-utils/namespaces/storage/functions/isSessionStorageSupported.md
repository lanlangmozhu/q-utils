[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [storage](../README.md) / isSessionStorageSupported

# Function: isSessionStorageSupported()

> **isSessionStorageSupported**(): `boolean`

Defined in: [storage/sessionStorage.ts:19](https://github.com/lanlangmozhu/q-utils/blob/main/src/storage/sessionStorage.ts#L19)

检查浏览器是否支持 sessionStorage

## Returns

`boolean`

如果支持返回 true，否则返回 false

## Example

```ts
if (isSessionStorageSupported()) {
  // 使用 sessionStorage
} else {
  // 使用备选方案
}
```
