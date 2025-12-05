[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [file](../README.md) / getFileExtension

# Function: getFileExtension()

> **getFileExtension**(`filename`, `options`): `string`

Defined in: [file/getFileExtension.ts:32](https://github.com/lanlangmozhu/q-utils/blob/main/src/file/getFileExtension.ts#L32)

获取文件的扩展名

## Parameters

### filename

`string`

文件名或文件路径

### options

选项

#### toLowerCase?

`boolean`

是否将扩展名转为小写，默认为true

#### includeDot?

`boolean`

是否包含点号，默认为false

## Returns

`string`

文件的扩展名，如果没有扩展名则返回空字符串

## Example

```ts
// 基本用法
getFileExtension('document.pdf'); // 'pdf'
getFileExtension('image.JPG'); // 'jpg' (默认转为小写)

// 包含点号
getFileExtension('script.js', { includeDot: true }); // '.js'

// 保留原始大小写
getFileExtension('LICENSE.TXT', { toLowerCase: false }); // 'TXT'

// 处理路径
getFileExtension('/path/to/file.tar.gz'); // 'gz'

// 处理URL
getFileExtension('https://example.com/downloads/report.xlsx'); // 'xlsx'

// 处理没有扩展名的文件
getFileExtension('README'); // ''
```
