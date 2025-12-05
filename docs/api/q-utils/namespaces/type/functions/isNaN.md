[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isNaN

# Function: isNaN()

> **isNaN**(`value`): `value is number`

Defined in: [type/basic.ts:169](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/basic.ts#L169)

检查值是否为 NaN

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is number`

是否为 NaN

## Example

```ts
isNaN(NaN) // true
isNaN(1) // false
isNaN('test') // false
```
