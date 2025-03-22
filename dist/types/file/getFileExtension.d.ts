/**
 * 获取文件的扩展名
 *
 * @param filename - 文件名或文件路径
 * @param options - 选项
 * @param options.toLowerCase - 是否将扩展名转为小写，默认为true
 * @param options.includeDot - 是否包含点号，默认为false
 * @returns 文件的扩展名，如果没有扩展名则返回空字符串
 *
 * @example
 * ```ts
 * // 基本用法
 * getFileExtension('document.pdf'); // 'pdf'
 * getFileExtension('image.JPG'); // 'jpg' (默认转为小写)
 *
 * // 包含点号
 * getFileExtension('script.js', { includeDot: true }); // '.js'
 *
 * // 保留原始大小写
 * getFileExtension('LICENSE.TXT', { toLowerCase: false }); // 'TXT'
 *
 * // 处理路径
 * getFileExtension('/path/to/file.tar.gz'); // 'gz'
 *
 * // 处理URL
 * getFileExtension('https://example.com/downloads/report.xlsx'); // 'xlsx'
 *
 * // 处理没有扩展名的文件
 * getFileExtension('README'); // ''
 * ```
 */
export declare function getFileExtension(filename: string, options?: {
    toLowerCase?: boolean;
    includeDot?: boolean;
}): string;
//# sourceMappingURL=getFileExtension.d.ts.map