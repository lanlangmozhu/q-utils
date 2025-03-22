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
export declare function uuid(): string;
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
export declare function randomId(length?: number, options?: {
    prefix?: string;
    charset?: string;
}): string;
//# sourceMappingURL=uuid.d.ts.map