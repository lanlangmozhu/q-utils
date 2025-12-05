[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [file](../README.md) / saveFile

# Function: saveFile()

> **saveFile**(`content`, `filename`, `options`): `void`

Defined in: [file/saveFile.ts:31](https://github.com/lanlangmozhu/q-utils/blob/main/src/file/saveFile.ts#L31)

将内容保存为文件并下载到本地

## Parameters

### content

要保存的内容，可以是字符串、Blob、ArrayBuffer等

`string` | `Blob` | `ArrayBuffer` | `ArrayBufferView`\<`ArrayBufferLike`\>

### filename

`string`

保存的文件名

### options

保存选项

#### type?

`string`

文件MIME类型，默认根据扩展名推断

#### encoding?

`string`

当content为字符串时的编码，默认为'utf-8'

## Returns

`void`

无返回值

## Example

```ts
// 保存文本内容为文件
saveFile('Hello, World!', 'hello.txt');

// 保存JSON数据
const data = { name: 'John', age: 30 };
saveFile(JSON.stringify(data, null, 2), 'data.json');

// 保存CSV数据
const csvContent = 'Name,Age\nJohn,30\nJane,25';
saveFile(csvContent, 'users.csv', { type: 'text/csv' });

// 保存ArrayBuffer为二进制文件
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view.set([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x21, 0x0d, 0x0a]); // "Hello!\r\n"
saveFile(buffer, 'binary.bin', { type: 'application/octet-stream' });
```
