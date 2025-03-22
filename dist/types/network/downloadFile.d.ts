/**
 * 从URL下载文件并保存到本地
 *
 * @param url - 文件URL
 * @param options - 下载选项
 * @param options.filename - 下载后的文件名，默认从URL中提取
 * @param options.forceDownload - 是否强制下载而不是在浏览器中打开，默认为true
 * @param options.headers - 请求头
 * @returns 返回Promise，成功时resolve，失败时reject
 *
 * @example
 * ```ts
 * // 基本用法
 * downloadFile('https://example.com/document.pdf')
 *   .then(() => console.log('下载成功'))
 *   .catch(error => console.error('下载失败:', error));
 *
 * // 指定文件名
 * downloadFile('https://example.com/document.pdf', {
 *   filename: '我的文档.pdf'
 * });
 *
 * // 添加请求头
 * downloadFile('https://api.example.com/files/123', {
 *   headers: { 'Authorization': 'Bearer token123' },
 *   filename: '报告.xlsx'
 * });
 * ```
 */
export declare function downloadFile(url: string, options?: {
    filename?: string;
    forceDownload?: boolean;
    headers?: Record<string, string>;
}): Promise<void>;
//# sourceMappingURL=downloadFile.d.ts.map