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
export function trim(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.trim();
}

/**
 * 去除左侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimLeft('  Hello World'); // 'Hello World'
 * ```
 */
export function trimLeft(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.trimStart();
}

/**
 * 去除右侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimRight('Hello World  '); // 'Hello World'
 * ```
 */
export function trimRight(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.trimEnd();
}

/**
 * 去除多余空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * normalizeSpace('Hello   World'); // 'Hello World'
 * ```
 */
export function normalizeSpace(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\s+/g, ' ').trim();
}

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
export function format(template: string | null | undefined, ...args: any[]): string {
  if (!template || typeof template !== 'string') return '';
  if (args.length === 0) return template;
  
  // 如果第一个参数是对象，则使用命名参数模式
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
    return formatNamed(template, args[0]);
  }
  
  // 尝试使用 printf 风格的格式化 (%s, %d 等)
  if (/%[sdfo]/.test(template)) {
    return formatPrintf(template, args);
  }
  
  // 使用索引参数模式
  return formatIndexed(template, args);
}

/**
 * 使用命名参数格式化字符串
 * @param template - 带有{name}格式化标记的字符串模板
 * @param params - 命名参数对象
 * @returns 格式化后的字符串
 */
function formatNamed(template: string, params: Record<string, any>): string {
  return template.replace(/\{([^{}]+)\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * 使用索引参数格式化字符串
 * @param template - 带有{0}, {1}等格式化标记的字符串模板
 * @param params - 参数数组
 * @returns 格式化后的字符串
 */
function formatIndexed(template: string, params: any[]): string {
  return template.replace(/\{(\d+)\}/g, (match, index) => {
    const idx = parseInt(index, 10);
    if (idx >= 0 && idx < params.length) {
      return String(params[idx]);
    }
    return match;
  });
}

/**
 * 使用printf风格格式化字符串
 * @param template - 带有%s, %d等格式化标记的字符串模板
 * @param params - 参数数组
 * @returns 格式化后的字符串
 */
function formatPrintf(template: string, params: any[]): string {
  let paramIndex = 0;
  
  return template.replace(/%([sdfo])/g, (match, type) => {
    if (paramIndex >= params.length) {
      return match;
    }
    
    const value = params[paramIndex++];
    
    switch (type) {
      case 's': // 字符串
        return String(value);
      case 'd': // 整数
        return parseInt(String(value), 10).toString();
      case 'f': // 浮点数
        return parseFloat(String(value)).toString();
      case 'o': // 对象
        try {
          return JSON.stringify(value);
        } catch (e) {
          return String(value);
        }
      default:
        return match;
    }
  });
} 