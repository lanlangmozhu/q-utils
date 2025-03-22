/**
 * 字符串清理和格式化工具函数
 * @packageDocumentation
 */
/**
 * 去除两端空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trim('  Hello World  '); // 'Hello World'
 * ```
 */
export declare function trim(str: string | null | undefined): string;
/**
 * 去除左侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimLeft('  Hello World'); // 'Hello World'
 * ```
 */
export declare function trimLeft(str: string | null | undefined): string;
/**
 * 去除右侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimRight('Hello World  '); // 'Hello World'
 * ```
 */
export declare function trimRight(str: string | null | undefined): string;
/**
 * 去除多余空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * normalizeSpace('Hello   World'); // 'Hello World'
 * ```
 */
export declare function normalizeSpace(str: string | null | undefined): string;
/**
 * 格式化字符串，支持位置参数和命名参数
 * @param template - 带有格式化标记的字符串模板
 * @param args - 要替换的参数，可以是单个对象（命名参数）或多个值（位置参数）
 * @returns 格式化后的字符串
 * @example
 * ```ts
 * // 使用位置参数 (类似 C 的 printf)
 * format('Hello, %s! You have %d new messages.', 'John', 5);
 * // 'Hello, John! You have 5 new messages.'
 *
 * // 使用索引参数
 * format('The {0} brown {1} jumps over the {2} {1}', 'quick', 'fox', 'lazy');
 * // 'The quick brown fox jumps over the lazy fox'
 *
 * // 使用命名参数
 * format('Hello, {name}! You are {age} years old.', { name: 'John', age: 30 });
 * // 'Hello, John! You are 30 years old.'
 * ```
 */
export declare function format(template: string | null | undefined, ...args: any[]): string;
//# sourceMappingURL=format.d.ts.map