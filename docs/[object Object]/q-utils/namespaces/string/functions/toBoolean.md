[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / toBoolean

# Function: toBoolean()

> **toBoolean**(`str`): `boolean`

Defined in: [string/transform.ts:99](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/transform.ts#L99)

转换为布尔值

## Parameters

### str

要转换的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

转换后的布尔值

## Example

```ts
toBoolean('true'); // true
toBoolean('false'); // false
toBoolean('1'); // true
toBoolean('0'); // false
```
