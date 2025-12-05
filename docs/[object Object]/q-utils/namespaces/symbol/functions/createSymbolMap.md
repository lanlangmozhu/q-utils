[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [symbol](../README.md) / createSymbolMap

# Function: createSymbolMap()

> **createSymbolMap**(`descriptions`): `Record`\<`string`, `symbol`\>

Defined in: [symbol/index.ts:139](https://github.com/lanlangmozhu/q-utils/blob/main/src/symbol/index.ts#L139)

创建 Symbol 映射

## Parameters

### descriptions

`string`[]

Symbol 描述数组

## Returns

`Record`\<`string`, `symbol`\>

Symbol 映射

## Example

```ts
createSymbolMap(['test1', 'test2']) // { test1: Symbol('test1'), test2: Symbol('test2') }
```
