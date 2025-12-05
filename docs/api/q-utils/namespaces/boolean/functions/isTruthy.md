[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [boolean](../README.md) / isTruthy

# Function: isTruthy()

> **isTruthy**(`value`): `boolean`

Defined in: [boolean/index.ts:45](https://github.com/lanlangmozhu/q-utils/blob/main/src/boolean/index.ts#L45)

检查值是否为真值

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为真值

## Example

```ts
isTruthy(true) // true
isTruthy(1) // true
isTruthy('test') // true
isTruthy([]) // true
isTruthy({}) // true
isTruthy(false) // false
isTruthy(0) // false
isTruthy('') // false
isTruthy(null) // false
isTruthy(undefined) // false
```
