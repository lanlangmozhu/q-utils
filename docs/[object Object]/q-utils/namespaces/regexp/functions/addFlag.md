[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / addFlag

# Function: addFlag()

> **addFlag**(`regexp`, `flag`): `RegExp`

Defined in: [regexp/flags.ts:44](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/flags.ts#L44)

添加正则表达式标志

## Parameters

### regexp

`RegExp`

正则表达式

### flag

`string`

要添加的标志

## Returns

`RegExp`

新的正则表达式

## Example

```ts
addFlag(/test/, 'g') // /test/g
```
