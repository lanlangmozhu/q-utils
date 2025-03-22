/**
 * 将Base64编码字符串转换为文件对象
 *
 * @param base64 - Base64编码的字符串，可以是纯Base64或Data URL格式
 * @param filename - 生成的文件名
 * @param options - 转换选项
 * @param options.type - 文件MIME类型，默认根据Data URL或文件扩展名推断
 * @returns 转换后的File对象
 *
 * @example
 * ```ts
 * // 从纯Base64创建文件
 * const pdfBase64 = 'JVBERi0xLjcKJeLjz9MKNSAwIG...'; // PDF文件的Base64编码
 * const pdfFile = base64ToFile(pdfBase64, 'document.pdf');
 * console.log(pdfFile.size, pdfFile.type); // File对象的大小和类型
 *
 * // 从Data URL创建文件
 * const imgDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAA...';
 * const imgFile = base64ToFile(imgDataUrl, 'image.png');
 *
 * // 指定文件类型
 * const textBase64 = btoa('Hello, World!');
 * const textFile = base64ToFile(textBase64, 'hello.txt', { type: 'text/plain' });
 * ```
 */
export declare function base64ToFile(base64: string, filename: string, options?: {
    type?: string;
}): File;
//# sourceMappingURL=base64ToFile.d.ts.map