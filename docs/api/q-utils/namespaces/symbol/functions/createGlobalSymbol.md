[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [symbol](../README.md) / createGlobalSymbol

# Function: createGlobalSymbol()

> **createGlobalSymbol**(`key`): `symbol`

Defined in: [symbol/index.ts:23](https://github.com/lanlangmozhu/q-utils/blob/main/src/symbol/index.ts#L23)

创建全局唯一的 Symbol

## Parameters

### key

`string`

Symbol 键名

## Returns

`symbol`

全局唯一的 Symbol

## Example

```ts
createGlobalSymbol('test') // Symbol.for('test')
```
