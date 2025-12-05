[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [symbol](../README.md) / isSymbol

# Function: isSymbol()

> **isSymbol**(`value`): `value is symbol`

Defined in: [symbol/index.ts:54](https://github.com/lanlangmozhu/q-utils/blob/main/src/symbol/index.ts#L54)

检查是否为 Symbol

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is symbol`

是否为 Symbol

## Example

```ts
isSymbol(Symbol('test')) // true
isSymbol('test') // false
```
