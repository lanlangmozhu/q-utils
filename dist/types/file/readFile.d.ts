/**
 * 以异步方式读取文件内容
 *
 * @param file - 要读取的File对象
 * @param readAs - 读取方式，可以是'text'、'dataURL'、'arrayBuffer'或'binaryString'，默认为'text'
 * @returns 返回Promise，resolve为读取到的内容，reject为错误信息
 *
 * @example
 * ```ts
 * // 从input元素获取文件并读取文本内容
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', async (event) => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     try {
 *       const content = await readFile(file, 'text');
 *       console.log('文件内容:', content);
 *     } catch (error) {
 *       console.error('读取文件出错:', error);
 *     }
 *   }
 * });
 *
 * // 读取为Data URL (Base64)
 * const imageFile = fileInput.files?.[0];
 * if (imageFile) {
 *   const dataUrl = await readFile(imageFile, 'dataURL');
 *   const img = document.createElement('img');
 *   img.src = dataUrl as string;
 *   document.body.appendChild(img);
 * }
 *
 * // 读取为ArrayBuffer
 * const binFile = fileInput.files?.[0];
 * if (binFile) {
 *   const buffer = await readFile(binFile, 'arrayBuffer');
 *   // 处理二进制数据...
 * }
 * ```
 */
export declare function readFile(file: File, readAs?: 'text' | 'dataURL' | 'arrayBuffer' | 'binaryString'): Promise<string | ArrayBuffer>;
//# sourceMappingURL=readFile.d.ts.map