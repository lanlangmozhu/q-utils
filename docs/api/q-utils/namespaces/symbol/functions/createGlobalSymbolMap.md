[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [symbol](../README.md) / createGlobalSymbolMap

# Function: createGlobalSymbolMap()

> **createGlobalSymbolMap**(`keys`): `Record`\<`string`, `symbol`\>

Defined in: [symbol/index.ts:152](https://github.com/lanlangmozhu/q-utils/blob/main/src/symbol/index.ts#L152)

创建全局 Symbol 映射

## Parameters

### keys

`string`[]

Symbol 键名数组

## Returns

`Record`\<`string`, `symbol`\>

全局 Symbol 映射

## Example

```ts
createGlobalSymbolMap(['test1', 'test2']) // { test1: Symbol.for('test1'), test2: Symbol.for('test2') }
```
