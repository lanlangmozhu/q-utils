[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyOrFalsyStrict

# Function: isEmptyOrFalsyStrict()

> **isEmptyOrFalsyStrict**(`value`): `boolean`

Defined in: [empty/advanced.ts:56](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/advanced.ts#L56)

检查值是否为空或假值（不包括空数组和空对象）

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为空或假值

## Example

```ts
isEmptyOrFalsyStrict(null) // true
isEmptyOrFalsyStrict(undefined) // true
isEmptyOrFalsyStrict('') // true
isEmptyOrFalsyStrict(0) // true
isEmptyOrFalsyStrict(false) // true
isEmptyOrFalsyStrict([]) // false
isEmptyOrFalsyStrict({}) // false
isEmptyOrFalsyStrict('test') // false
isEmptyOrFalsyStrict(1) // false
```
