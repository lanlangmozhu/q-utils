[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyOrFalsy

# Function: isEmptyOrFalsy()

> **isEmptyOrFalsy**(`value`): `boolean`

Defined in: [empty/advanced.ts:33](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/advanced.ts#L33)

检查值是否为空或假值

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为空或假值

## Example

```ts
isEmptyOrFalsy(null) // true
isEmptyOrFalsy(undefined) // true
isEmptyOrFalsy('') // true
isEmptyOrFalsy(0) // true
isEmptyOrFalsy(false) // true
isEmptyOrFalsy('test') // false
isEmptyOrFalsy(1) // false
```
