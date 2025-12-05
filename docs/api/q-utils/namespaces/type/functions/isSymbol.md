[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isSymbol

# Function: isSymbol()

> **isSymbol**(`value`): `value is symbol`

Defined in: [type/advanced.ts:52](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/advanced.ts#L52)

检查值是否为 Symbol

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is symbol`

是否为 Symbol

## Example

```ts
isSymbol(Symbol()) // true
isSymbol(Symbol('test')) // true
isSymbol('test') // false
```
