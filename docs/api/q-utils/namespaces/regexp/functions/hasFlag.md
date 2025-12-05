[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / hasFlag

# Function: hasFlag()

> **hasFlag**(`regexp`, `flag`): `boolean`

Defined in: [regexp/flags.ts:30](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/flags.ts#L30)

检查正则表达式是否包含指定标志

## Parameters

### regexp

`RegExp`

正则表达式

### flag

`string`

要检查的标志

## Returns

`boolean`

是否包含标志

## Example

```ts
hasFlag(/test/gi, 'g') // true
hasFlag(/test/gi, 'm') // false
```
