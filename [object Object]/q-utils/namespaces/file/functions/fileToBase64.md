[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [file](../README.md) / fileToBase64

# Function: fileToBase64()

> **fileToBase64**(`file`, `options`): `Promise`\<`string`\>

Defined in: [file/fileToBase64.ts:35](https://github.com/lanlangmozhu/q-utils/blob/main/src/file/fileToBase64.ts#L35)

将文件对象转换为Base64编码的字符串

## Parameters

### file

`File`

要转换的文件对象

### options

转换选项

#### includePrefix?

`boolean`

是否包含Data URL前缀(如"data:image/jpeg;base64,")，默认为false

## Returns

`Promise`\<`string`\>

返回Promise，resolve为转换后的Base64字符串

## Example

```ts
// 基本用法
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
fileInput.addEventListener('change', async () => {
  const file = fileInput.files?.[0];
  if (file) {
    try {
      const base64 = await fileToBase64(file);
      console.log('Base64:', base64);
    } catch (error) {
      console.error('转换失败:', error);
    }
  }
});

// 包含Data URL前缀
const imageFile = fileInput.files?.[0];
if (imageFile) {
  const dataUrl = await fileToBase64(imageFile, { includePrefix: true });
  const img = document.createElement('img');
  img.src = dataUrl;
  document.body.appendChild(img);
}
```
