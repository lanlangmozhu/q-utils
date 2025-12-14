[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [file](../README.md) / base64ToFile

# Function: base64ToFile()

> **base64ToFile**(`base64`, `filename`, `options`): `File`

Defined in: [file/base64ToFile.ts:26](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/file/base64ToFile.ts#L26)

将Base64编码字符串转换为文件对象

## Parameters

### base64

`string`

Base64编码的字符串，可以是纯Base64或Data URL格式

### filename

`string`

生成的文件名

### options

转换选项

#### type?

`string`

文件MIME类型，默认根据Data URL或文件扩展名推断

## Returns

`File`

转换后的File对象

## Example

```ts
// 从纯Base64创建文件
const pdfBase64 = 'JVBERi0xLjcKJeLjz9MKNSAwIG...'; // PDF文件的Base64编码
const pdfFile = base64ToFile(pdfBase64, 'document.pdf');
console.log(pdfFile.size, pdfFile.type); // File对象的大小和类型

// 从Data URL创建文件
const imgDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAA...';
const imgFile = base64ToFile(imgDataUrl, 'image.png');

// 指定文件类型
const textBase64 = btoa('Hello, World!');
const textFile = base64ToFile(textBase64, 'hello.txt', { type: 'text/plain' });
```
