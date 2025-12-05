[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [network](../README.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`url`, `options`): `Promise`\<`void`\>

Defined in: [network/downloadFile.ts:30](https://github.com/lanlangmozhu/q-utils/blob/main/src/network/downloadFile.ts#L30)

从URL下载文件并保存到本地

## Parameters

### url

`string`

文件URL

### options

下载选项

#### filename?

`string`

下载后的文件名，默认从URL中提取

#### forceDownload?

`boolean`

是否强制下载而不是在浏览器中打开，默认为true

#### headers?

`Record`\<`string`, `string`\>

请求头

## Returns

`Promise`\<`void`\>

返回Promise，成功时resolve，失败时reject

## Example

```ts
// 基本用法
downloadFile('https://example.com/document.pdf')
  .then(() => console.log('下载成功'))
  .catch(error => console.error('下载失败:', error));

// 指定文件名
downloadFile('https://example.com/document.pdf', { 
  filename: '我的文档.pdf' 
});

// 添加请求头
downloadFile('https://api.example.com/files/123', {
  headers: { 'Authorization': 'Bearer token123' },
  filename: '报告.xlsx'
});
```
