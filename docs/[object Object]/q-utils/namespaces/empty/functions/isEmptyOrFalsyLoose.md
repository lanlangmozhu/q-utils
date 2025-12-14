[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyOrFalsyLoose

# Function: isEmptyOrFalsyLoose()

> **isEmptyOrFalsyLoose**(`value`): `boolean`

Defined in: [empty/advanced.ts:81](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/advanced.ts#L81)

检查值是否为空或假值（包括空数组和空对象）

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为空或假值

## Example

```ts
isEmptyOrFalsyLoose(null) // true
isEmptyOrFalsyLoose(undefined) // true
isEmptyOrFalsyLoose('') // true
isEmptyOrFalsyLoose(0) // true
isEmptyOrFalsyLoose(false) // true
isEmptyOrFalsyLoose([]) // true
isEmptyOrFalsyLoose({}) // true
isEmptyOrFalsyLoose('test') // false
isEmptyOrFalsyLoose(1) // false
```
