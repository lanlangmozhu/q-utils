# 文件操作工具函数

## 目录结构

```
src/file/
├── index.ts
├── readFile.ts
├── saveFile.ts
├── fileToBase64.ts
├── base64ToFile.ts
├── getFileExtension.ts
├── isValidFileType.ts
└── getFileSize.ts
```

## 功能描述

文件操作工具函数提供了一系列用于处理文件读取、保存、格式转换、类型检查等功能的工具函数。

### 文件读写

- `readFile`: 以异步方式读取文件内容，支持多种读取格式
- `saveFile`: 将内容保存为文件并下载到本地
- `fileToBase64`: 将文件对象转换为 Base64 编码的字符串
- `base64ToFile`: 将 Base64 编码字符串转换为文件对象

### 文件信息

- `getFileExtension`: 获取文件的扩展名
- `isValidFileType`: 检查文件类型是否符合指定的允许类型
- `getFileSize`: 获取文件大小，支持格式化显示

## 使用示例

```typescript
import { 
  readFile,
  saveFile,
  fileToBase64,
  base64ToFile,
  getFileExtension,
  isValidFileType,
  getFileSize
} from '@qh5-utils/file';

// 文件读写
// 读取文件内容
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
fileInput.addEventListener('change', async (event) => {
  const file = fileInput.files?.[0];
  if (file) {
    try {
      // 读取为文本
      const textContent = await readFile(file, 'text');
      console.log('文件内容:', textContent);
      
      // 读取为 Data URL
      const dataUrl = await readFile(file, 'dataURL');
      const img = document.createElement('img');
      img.src = dataUrl as string;
      document.body.appendChild(img);
      
      // 读取为 ArrayBuffer
      const buffer = await readFile(file, 'arrayBuffer');
      // 处理二进制数据...
    } catch (error) {
      console.error('读取文件出错:', error);
    }
  }
});

// 保存文件
// 保存文本内容
saveFile('Hello, World!', 'hello.txt');

// 保存 JSON 数据
const data = { name: 'John', age: 30 };
saveFile(JSON.stringify(data, null, 2), 'data.json');

// 保存 CSV 数据
const csvContent = 'Name,Age\nJohn,30\nJane,25';
saveFile(csvContent, 'users.csv', { type: 'text/csv' });

// 文件格式转换
// 文件转 Base64
const imageFile = fileInput.files?.[0];
if (imageFile) {
  const base64 = await fileToBase64(imageFile);
  console.log('Base64:', base64);
  
  // 包含 Data URL 前缀
  const dataUrl = await fileToBase64(imageFile, { includePrefix: true });
  const img = document.createElement('img');
  img.src = dataUrl;
  document.body.appendChild(img);
}

// Base64 转文件
const pdfBase64 = 'JVBERi0xLjcKJeLjz9MKNSAwIG...'; // PDF 文件的 Base64 编码
const pdfFile = base64ToFile(pdfBase64, 'document.pdf');

// 文件信息
// 获取文件扩展名
console.log(getFileExtension('document.pdf')); // 'pdf'
console.log(getFileExtension('image.JPG', { includeDot: true })); // '.jpg'
console.log(getFileExtension('LICENSE.TXT', { toLowerCase: false })); // 'TXT'

// 检查文件类型
const file = fileInput.files?.[0];
if (file) {
  // 检查是否为图片
  const isImage = isValidFileType(file, ['image/jpeg', 'image/png', 'image/gif']);
  console.log('是否为允许的图片格式:', isImage);
  
  // 根据文件名检查
  const isValidDocument = isValidFileType('report.pdf', ['.pdf', '.doc', '.docx']);
  console.log('是否为有效文档:', isValidDocument);
}

// 获取文件大小
if (file) {
  // 格式化显示
  const size = getFileSize(file);
  console.log(`文件大小: ${size}`); // 如 "文件大小: 1.25 MB"
  
  // 获取原始字节数
  const rawSize = getFileSize(file, { formatted: false });
  console.log(`文件大小: ${rawSize} 字节`);
  
  // 自定义格式化
  const customSize = getFileSize(file, { precision: 1 });
  console.log(`文件大小: ${customSize}`); // 如 "文件大小: 1.3 MB"
  
  // 特定语言环境
  const frSize = getFileSize(file, { locale: 'fr-FR' });
  console.log(`Taille du fichier: ${frSize}`); // 使用法语数字格式
}
```

## 注意事项

1. 文件读写：
   - `readFile` 支持多种读取格式：text、dataURL、arrayBuffer、binaryString
   - `saveFile` 支持多种内容类型：字符串、Blob、ArrayBuffer 等
   - `fileToBase64` 和 `base64ToFile` 支持 Data URL 格式
   - 大文件处理时注意内存使用

2. 文件信息：
   - `getFileExtension` 支持处理 URL 和路径
   - `isValidFileType` 支持 MIME 类型和文件扩展名检查
   - `getFileSize` 支持多种单位（B、KB、MB、GB 等）
   - 文件类型检查基于 MIME 类型和扩展名

3. 浏览器兼容性：
   - 文件操作需要浏览器支持 File API
   - Base64 转换需要浏览器支持 FileReader API
   - 文件下载需要浏览器支持 Blob 和 URL API

## 更新记录

- 2024-03-21: 初始版本
  - 添加文件读写函数
  - 添加文件格式转换函数
  - 添加文件信息函数 