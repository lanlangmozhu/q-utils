[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / removeFlag

# Function: removeFlag()

> **removeFlag**(`regexp`, `flag`): `RegExp`

Defined in: [regexp/flags.ts:58](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/flags.ts#L58)

移除正则表达式标志

## Parameters

### regexp

`RegExp`

正则表达式

### flag

`string`

要移除的标志

## Returns

`RegExp`

新的正则表达式

## Example

```ts
removeFlag(/test/gi, 'i') // /test/g
```
