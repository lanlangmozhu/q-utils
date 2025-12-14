[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [symbol](../README.md) / isGlobalSymbol

# Function: isGlobalSymbol()

> **isGlobalSymbol**(`sym`): `boolean`

Defined in: [symbol/index.ts:65](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/symbol/index.ts#L65)

检查是否为全局 Symbol

## Parameters

### sym

`symbol`

Symbol 对象

## Returns

`boolean`

是否为全局 Symbol

## Example

```ts
isGlobalSymbol(Symbol.for('test')) // true
isGlobalSymbol(Symbol('test')) // false
```
