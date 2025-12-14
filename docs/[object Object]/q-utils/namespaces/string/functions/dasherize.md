[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / dasherize

# Function: dasherize()

> **dasherize**(`str`): `string`

Defined in: [string/transform.ts:65](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/transform.ts#L65)

将驼峰命名法转换为横线连接命名法

## Parameters

### str

要转换的字符串

`string` | `null` | `undefined`

## Returns

`string`

横线连接命名字符串

## Example

```ts
dasherize('helloWorld'); // 'hello-world'
dasherize('backgroundColor'); // 'background-color'
```
