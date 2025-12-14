[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / toNumber

# Function: toNumber()

> **toNumber**(`str`): `number`

Defined in: [string/transform.ts:82](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/transform.ts#L82)

转换为数字

## Parameters

### str

要转换的字符串

`string` | `null` | `undefined`

## Returns

`number`

转换后的数字

## Example

```ts
toNumber('123'); // 123
toNumber('12.34'); // 12.34
toNumber('abc'); // NaN
```
