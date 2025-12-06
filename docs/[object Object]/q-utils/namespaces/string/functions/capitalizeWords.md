[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / capitalizeWords

# Function: capitalizeWords()

> **capitalizeWords**(`str`, `delimiter`): `string`

Defined in: [string/transform.ts:32](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/transform.ts#L32)

每个单词首字母大写

## Parameters

### str

要处理的字符串

`string` | `null` | `undefined`

### delimiter

`string` = `' '`

单词分隔符，默认为空格

## Returns

`string`

每个单词首字母大写的字符串

## Example

```ts
capitalizeWords('hello world'); // 'Hello World'
capitalizeWords('hello-world', '-'); // 'Hello-World'
```
