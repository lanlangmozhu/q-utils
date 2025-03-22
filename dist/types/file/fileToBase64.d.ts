/**
 * 将文件对象转换为Base64编码的字符串
 *
 * @param file - 要转换的文件对象
 * @param options - 转换选项
 * @param options.includePrefix - 是否包含Data URL前缀(如"data:image/jpeg;base64,")，默认为false
 * @returns 返回Promise，resolve为转换后的Base64字符串
 *
 * @example
 * ```ts
 * // 基本用法
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', async () => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     try {
 *       const base64 = await fileToBase64(file);
 *       console.log('Base64:', base64);
 *     } catch (error) {
 *       console.error('转换失败:', error);
 *     }
 *   }
 * });
 *
 * // 包含Data URL前缀
 * const imageFile = fileInput.files?.[0];
 * if (imageFile) {
 *   const dataUrl = await fileToBase64(imageFile, { includePrefix: true });
 *   const img = document.createElement('img');
 *   img.src = dataUrl;
 *   document.body.appendChild(img);
 * }
 * ```
 */
export declare function fileToBase64(file: File, options?: {
    includePrefix?: boolean;
}): Promise<string>;
//# sourceMappingURL=fileToBase64.d.ts.map