/**
 * UUID 生成相关工具函数
 * @packageDocumentation
 */

/**
 * 生成 UUID v4 (随机)
 * 
 * 生成符合 RFC4122 v4 标准的 UUID
 * 
 * @returns 生成的 UUID 字符串
 * @example
 * ```ts
 * // 生成 UUID
 * const id = uuid(); // 例如: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 * ```
 */
export function uuid(): string {
  // 使用加密安全的随机数（如果可用）
  let getRandomValues: (array: Uint8Array) => Uint8Array;
  
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    getRandomValues = (array) => crypto.getRandomValues(array);
  } else if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    getRandomValues = (array) => window.crypto.getRandomValues(array);
  } else {
    // 降级方案，使用Math.random()
    getRandomValues = (array) => {
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    };
  }
  
  // 创建 16 字节的随机数组
  const buffer = new Uint8Array(16);
  getRandomValues(buffer);
  
  // 设置 version (版本 4)
  buffer[6] = (buffer[6] & 0x0f) | 0x40;
  // 设置 variant (变种 1)
  buffer[8] = (buffer[8] & 0x3f) | 0x80;
  
  // 转换为16进制字符串并添加连字符
  let i = 0;
  return (
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    '-' +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    '-' +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    '-' +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    '-' +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]] +
    byteToHex[buffer[i++]]
  );
}

/**
 * 生成指定长度的随机字符串ID
 * 
 * @param length - ID的长度，默认为8
 * @param options - 配置选项
 * @param options.prefix - ID的前缀
 * @param options.charset - 使用的字符集，默认为字母和数字
 * @returns 生成的随机ID
 * @example
 * ```ts
 * // 生成默认长度(8)的随机ID
 * randomId(); // 例如: 'a1b2c3d4'
 * 
 * // 生成指定长度的随机ID
 * randomId(16); // 例如: 'a1b2c3d4e5f6g7h8'
 * 
 * // 带前缀的随机ID
 * randomId(8, { prefix: 'user_' }); // 例如: 'user_a1b2c3d4'
 * 
 * // 使用自定义字符集
 * randomId(8, { charset: '0123456789' }); // 例如: '12345678'
 * ```
 */
export function randomId(
  length: number = 8,
  options: { prefix?: string; charset?: string } = {}
): string {
  const {
    prefix = '',
    charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  } = options;
  
  let result = '';
  
  // 获取随机值的函数
  let getRandomValue: () => number;
  
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // 使用加密安全的随机数
    const buffer = new Uint8Array(1);
    getRandomValue = () => {
      crypto.getRandomValues(buffer);
      return buffer[0] / 256;
    };
  } else if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    // 浏览器环境
    const buffer = new Uint8Array(1);
    getRandomValue = () => {
      window.crypto.getRandomValues(buffer);
      return buffer[0] / 256;
    };
  } else {
    // 降级方案
    getRandomValue = () => Math.random();
  }
  
  // 生成随机字符串
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(getRandomValue() * charset.length));
  }
  
  return prefix + result;
}

// 字节到十六进制的映射表（优化性能）
const byteToHex: string[] = [];
for (let i = 0; i < 256; i++) {
  byteToHex[i] = (i + 0x100).toString(16).slice(1);
}