/**
 * 深度合并对象的选项接口
 */
export interface DeepMergeOptions {
  /**
   * 数组合并模式
   * - 'replace': 替换模式（默认）
   * - 'concat': 连接模式
   * - 'merge': 合并模式
   */
  arrayMode?: 'replace' | 'concat' | 'merge';
  /**
   * 是否克隆源对象
   */
  clone?: boolean;
  /**
   * 自定义合并函数
   */
  customMerge?: (key: string, target: any, source: any) => any;
}

/**
 * 判断是否为对象
 * @param value - 要检查的值
 * @returns 如果是对象则返回 true，否则返回 false
 */
function isObject(value: unknown): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 深度克隆对象
 * @param obj - 要克隆的对象
 * @returns 克隆后的对象
 */
function deepClone<T>(obj: T): T {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 深度合并两个对象
 * @param target - 目标对象
 * @param source - 源对象
 * @param options - 合并选项
 * @returns 合并后的对象
 */
function deepMergeTwo<T extends Record<string, any>>(
  target: T | Record<string, any>,
  source: Partial<T> | Record<string, any>,
  options: DeepMergeOptions = {}
): T {
  if (!isObject(source)) {
    return target as T;
  }

  const result = options.clone ? deepClone(target) : { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetValue = result[key];
      const sourceValue = source[key];

      if (options.customMerge) {
        const customValue = options.customMerge(key, targetValue, sourceValue);
        if (customValue !== undefined) {
          result[key] = customValue;
          continue;
        }
      }

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        switch (options.arrayMode) {
          case 'concat':
            result[key] = [...targetValue, ...sourceValue];
            break;
          case 'merge':
            result[key] = targetValue.map((item: any, index: number) => {
              if (index < sourceValue.length) {
                return deepMergeTwo(item, sourceValue[index], options);
              }
              return item;
            });
            break;
          default:
            result[key] = deepClone(sourceValue);
        }
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        result[key] = deepMergeTwo(targetValue, sourceValue, options);
      } else {
        result[key] = deepClone(sourceValue);
      }
    }
  }

  return result as T;
}

/**
 * 深度合并对象
 * @param target - 目标对象
 * @param source - 源对象
 * @param rest - 其他对象和选项
 * @returns 合并后的对象
 */
export function deepMerge<T extends Record<string, any>>(
  target?: T | Record<string, any>,
  source?: Partial<T> | Record<string, any>,
  ...rest: Array<Partial<T> | Record<string, any> | DeepMergeOptions>
): T {
  if (!target) {
    return {} as T;
  }

  if (!source) {
    return deepClone(target) as T;
  }

  if (!isObject(target)) {
    return target as T;
  }

  const options: DeepMergeOptions = rest.length > 0 && isObject(rest[rest.length - 1]) && !Array.isArray(rest[rest.length - 1])
    ? rest.pop() as DeepMergeOptions
    : {};

  let result = deepMergeTwo(target, source, options);

  const remainingObjects = rest.filter(obj => isObject(obj)) as Array<Partial<T>>;
  for (const obj of remainingObjects) {
    result = deepMergeTwo(result, obj, options);
  }

  return result;
}