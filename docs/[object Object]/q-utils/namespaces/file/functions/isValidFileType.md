[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [file](../README.md) / isValidFileType

# Function: isValidFileType()

> **isValidFileType**(`file`, `allowedTypes`): `boolean`

Defined in: [file/isValidFileType.ts:30](https://github.com/lanlangmozhu/q-utils/blob/main/src/file/isValidFileType.ts#L30)

检查文件类型是否符合指定的允许类型

## Parameters

### file

要检查的文件对象或文件名

`string` | `File`

### allowedTypes

`string`[]

允许的MIME类型或文件扩展名数组

## Returns

`boolean`

如果文件类型符合允许列表则返回true，否则返回false

## Example

```ts
// 检查文件对象
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
fileInput.addEventListener('change', () => {
  const file = fileInput.files?.[0];
  if (file) {
    // 检查是否为图片
    const isImage = isValidFileType(file, ['image/jpeg', 'image/png', 'image/gif']);
    console.log('是否为允许的图片格式:', isImage);
  }
});

// 根据文件名检查
const isValidDocument = isValidFileType('report.pdf', ['.pdf', '.doc', '.docx']);
console.log('是否为有效文档:', isValidDocument); // true

// 混合类型和扩展名检查
const isValid = isValidFileType('data.xlsx', ['application/pdf', '.xlsx', '.csv']);
console.log('是否为有效文件类型:', isValid); // true
```
