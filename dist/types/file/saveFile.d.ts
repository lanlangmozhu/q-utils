/**
 * 将内容保存为文件并下载到本地
 *
 * @param content - 要保存的内容，可以是字符串、Blob、ArrayBuffer等
 * @param filename - 保存的文件名
 * @param options - 保存选项
 * @param options.type - 文件MIME类型，默认根据扩展名推断
 * @param options.encoding - 当content为字符串时的编码，默认为'utf-8'
 * @returns 无返回值
 *
 * @example
 * ```ts
 * // 保存文本内容为文件
 * saveFile('Hello, World!', 'hello.txt');
 *
 * // 保存JSON数据
 * const data = { name: 'John', age: 30 };
 * saveFile(JSON.stringify(data, null, 2), 'data.json');
 *
 * // 保存CSV数据
 * const csvContent = 'Name,Age\nJohn,30\nJane,25';
 * saveFile(csvContent, 'users.csv', { type: 'text/csv' });
 *
 * // 保存ArrayBuffer为二进制文件
 * const buffer = new ArrayBuffer(8);
 * const view = new Uint8Array(buffer);
 * view.set([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x21, 0x0d, 0x0a]); // "Hello!\r\n"
 * saveFile(buffer, 'binary.bin', { type: 'application/octet-stream' });
 * ```
 */
export declare function saveFile(content: string | Blob | ArrayBuffer | ArrayBufferView, filename: string, options?: {
    type?: string;
    encoding?: string;
}): void;
//# sourceMappingURL=saveFile.d.ts.map