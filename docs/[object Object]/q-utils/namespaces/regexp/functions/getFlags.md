[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / getFlags

# Function: getFlags()

> **getFlags**(`regexp`): `string`[]

Defined in: [regexp/flags.ts:15](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/flags.ts#L15)

获取正则表达式的所有标志

## Parameters

### regexp

`RegExp`

正则表达式

## Returns

`string`[]

标志数组

## Example

```ts
getFlags(/test/gi) // ['g', 'i']
```
