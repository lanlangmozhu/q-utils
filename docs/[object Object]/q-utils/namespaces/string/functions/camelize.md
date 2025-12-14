[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / camelize

# Function: camelize()

> **camelize**(`str`): `string`

Defined in: [string/transform.ts:50](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/transform.ts#L50)

将连字符分隔的字符串转换为驼峰式

## Parameters

### str

要转换的字符串

`string` | `null` | `undefined`

## Returns

`string`

驼峰式字符串

## Example

```ts
camelize('hello-world'); // 'helloWorld'
camelize('background-color'); // 'backgroundColor'
```
