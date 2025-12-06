[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [symbol](../README.md) / createGlobalSymbolArray

# Function: createGlobalSymbolArray()

> **createGlobalSymbolArray**(`keys`): `symbol`[]

Defined in: [symbol/index.ts:129](https://github.com/lanlangmozhu/q-utils/blob/main/src/symbol/index.ts#L129)

创建全局 Symbol 数组

## Parameters

### keys

`string`[]

Symbol 键名数组

## Returns

`symbol`[]

全局 Symbol 数组

## Example

```ts
createGlobalSymbolArray(['test1', 'test2']) // [Symbol.for('test1'), Symbol.for('test2')]
```
