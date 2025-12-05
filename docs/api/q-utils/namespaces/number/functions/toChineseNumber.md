[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / toChineseNumber

# Function: toChineseNumber()

> **toChineseNumber**(`value`, `options`): `string`

Defined in: [number/format.ts:204](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/format.ts#L204)

将数字转换为中文数字

## Parameters

### value

`number`

要转换的数字

### options

转换选项

#### useTraditional?

`boolean`

是否使用繁体字，默认为false

#### useCapital?

`boolean`

是否使用大写，默认为false

## Returns

`string`

中文数字字符串

## Example

```ts
toChineseNumber(1234) // '一千二百三十四'
toChineseNumber(1234, { useTraditional: true }) // '一千二百三十四'
toChineseNumber(1234, { useCapital: true }) // '壹仟贰佰叁拾肆'
```
