[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / escapeRegExp

# Function: escapeRegExp()

> **escapeRegExp**(`str`): `string`

Defined in: [regexp/basic.ts:15](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/basic.ts#L15)

转义正则表达式中的特殊字符

## Parameters

### str

`string`

需要转义的字符串

## Returns

`string`

转义后的字符串

## Example

```ts
escapeRegExp('.*+?^${}()|[]\\') // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
```
