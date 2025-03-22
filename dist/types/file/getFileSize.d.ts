/**
 * 获取文件大小，并可选择格式化为人类可读的形式
 *
 * @param file - 文件对象
 * @param options - 选项
 * @param options.formatted - 是否格式化为人类可读的形式，默认为true
 * @param options.precision - 保留的小数位数，默认为2
 * @param options.locale - 使用的语言环境，默认为undefined（使用浏览器默认语言）
 * @returns 如果formatted为true，返回格式化后的字符串（如"1.25 MB"）；否则返回字节数
 *
 * @example
 * ```ts
 * // 基本用法
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', () => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     const size = getFileSize(file);
 *     console.log(`文件大小: ${size}`); // 如 "文件大小: 1.25 MB"
 *   }
 * });
 *
 * // 获取原始字节数
 * const rawSize = getFileSize(file, { formatted: false });
 * console.log(`文件大小: ${rawSize} 字节`);
 *
 * // 自定义格式化
 * const customSize = getFileSize(file, { precision: 1 });
 * console.log(`文件大小: ${customSize}`); // 如 "文件大小: 1.3 MB"
 *
 * // 特定语言环境
 * const frSize = getFileSize(file, { locale: 'fr-FR' });
 * console.log(`Taille du fichier: ${frSize}`); // 使用法语数字格式
 * ```
 */
export declare function getFileSize(file: File, options?: {
    formatted?: boolean;
    precision?: number;
    locale?: string | string[];
}): string | number;
//# sourceMappingURL=getFileSize.d.ts.map