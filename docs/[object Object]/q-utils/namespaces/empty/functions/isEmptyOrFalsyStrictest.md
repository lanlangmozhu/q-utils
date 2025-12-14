[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyOrFalsyStrictest

# Function: isEmptyOrFalsyStrictest()

> **isEmptyOrFalsyStrictest**(`value`): `boolean`

Defined in: [empty/advanced.ts:106](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/advanced.ts#L106)

检查值是否为空或假值（包括空数组、空对象和空字符串）

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为空或假值

## Example

```ts
isEmptyOrFalsyStrictest(null) // true
isEmptyOrFalsyStrictest(undefined) // true
isEmptyOrFalsyStrictest('') // true
isEmptyOrFalsyStrictest(0) // true
isEmptyOrFalsyStrictest(false) // true
isEmptyOrFalsyStrictest([]) // true
isEmptyOrFalsyStrictest({}) // true
isEmptyOrFalsyStrictest('test') // false
isEmptyOrFalsyStrictest(1) // false
```
