[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / format

# Function: format()

> **format**(`template`, ...`args`): `string`

Defined in: [string/format.ts:82](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/format.ts#L82)

格式化字符串，支持位置参数和命名参数

## Parameters

### template

带有格式化标记的字符串模板

`string` | `null` | `undefined`

### args

...`any`[]

要替换的参数，可以是单个对象（命名参数）或多个值（位置参数）

## Returns

`string`

格式化后的字符串

## Example

```ts
// 使用位置参数 (类似 C 的 printf)
format('Hello, %s! You have %d new messages.', 'John', 5);
// 'Hello, John! You have 5 new messages.'

// 使用索引参数
format('The {0} brown {1} jumps over the {2} {1}', 'quick', 'fox', 'lazy');
// 'The quick brown fox jumps over the lazy fox'

// 使用命名参数
format('Hello, {name}! You are {age} years old.', { name: 'John', age: 30 });
// 'Hello, John! You are 30 years old.'
```
