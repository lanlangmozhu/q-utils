[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / combine

# Function: combine()

> **combine**(`patterns`, `flags?`): `RegExp`

Defined in: [regexp/utils.ts:42](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/utils.ts#L42)

合并多个正则表达式

## Parameters

### patterns

`RegExp`[]

正则表达式数组

### flags?

`string`

正则表达式标志

## Returns

`RegExp`

合并后的正则表达式

## Example

```ts
combine([/\d+/, /\w+/], 'g') // /(\d+)|(\w+)/g
```
