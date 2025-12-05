[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [boolean](../README.md) / isFalsy

# Function: isFalsy()

> **isFalsy**(`value`): `boolean`

Defined in: [boolean/index.ts:71](https://github.com/lanlangmozhu/q-utils/blob/main/src/boolean/index.ts#L71)

检查值是否为假值

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为假值

## Example

```ts
isFalsy(false) // true
isFalsy(0) // true
isFalsy('') // true
isFalsy(null) // true
isFalsy(undefined) // true
isFalsy(true) // false
isFalsy(1) // false
isFalsy('test') // false
isFalsy([]) // false
isFalsy({}) // false
```
