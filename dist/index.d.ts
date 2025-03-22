/**
 * 基础数组操作相关工具函数
 * @packageDocumentation
 */
/**
 * 判断数组是否为空
 * @param arr - 要检查的数组
 * @returns 是否为空
 * @example
 * ```typescript
 * isEmpty([])
 * // 返回 true
 * ```
 */
declare function isEmpty$2<T>(arr: T[] | null | undefined): boolean;
/**
 * 获取数组第一个元素
 * @param arr - 源数组
 * @returns 第一个元素
 * @example
 * ```typescript
 * first([1, 2, 3])
 * // 返回 1
 * ```
 */
declare function first<T>(arr: T[] | null | undefined): T | undefined;
/**
 * 获取数组最后一个元素
 * @param arr - 源数组
 * @returns 最后一个元素
 * @example
 * ```typescript
 * last([1, 2, 3])
 * // 返回 3
 * ```
 */
declare function last<T>(arr: T[] | null | undefined): T | undefined;
/**
 * 获取数组指定范围的元素
 * @param arr - 源数组
 * @param start - 起始索引
 * @param end - 结束索引
 * @returns 指定范围的元素数组
 * @example
 * ```typescript
 * range([1, 2, 3, 4, 5], 1, 3)
 * // 返回 [2, 3]
 * ```
 */
declare function range<T>(arr: T[] | null | undefined, start: number, end: number): T[];
/**
 * 安全获取数组元素
 * @param arr - 源数组
 * @param index - 索引
 * @param defaultValue - 默认值
 * @returns 指定索引的元素或默认值
 * @example
 * ```typescript
 * get([1, 2, 3], 1, 0)
 * // 返回 2
 * get([1, 2, 3], 5, 0)
 * // 返回 0
 * ```
 */
declare function get$1<T>(arr: T[] | null | undefined, index: number, defaultValue?: T): T | undefined;
/**
 * 将数组分割成指定大小的块
 * @param arr - 要分割的数组
 * @param size - 每个块的大小
 * @returns 分割后的数组块
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // 返回 [[1, 2], [3, 4], [5]]
 * ```
 */
declare function chunk<T>(arr: T[] | null | undefined, size: number): T[][];
/**
 * 将多维数组扁平化为一维数组
 * @param arr - 要扁平化的数组
 * @param depth - 扁平化的深度，默认为 Infinity
 * @returns 扁平化后的数组
 * @example
 * ```typescript
 * flatten([1, [2, 3], [4, [5, 6]]])
 * // 返回 [1, 2, 3, 4, 5, 6]
 * ```
 */
declare function flatten<T>(arr: T[] | null | undefined, depth?: number): T[];

/**
 * 数组比较相关工具函数
 * @packageDocumentation
 */
/**
 * 计算数组差集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 差集数组
 * @example
 * ```typescript
 * difference([1, 2, 3], [2, 3, 4])
 * // 返回 [1]
 * ```
 */
declare function difference<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 计算数组交集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 交集数组
 * @example
 * ```typescript
 * intersection([1, 2, 3], [2, 3, 4])
 * // 返回 [2, 3]
 * ```
 */
declare function intersection<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 计算数组并集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 并集数组
 * @example
 * ```typescript
 * union([1, 2, 3], [2, 3, 4])
 * // 返回 [1, 2, 3, 4]
 * ```
 */
declare function union<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 检查数组是否包含子数组
 * @param arr - 主数组
 * @param subArr - 子数组
 * @param compareFn - 可选的比较函数
 * @returns 是否包含
 * @example
 * ```typescript
 * includes([1, 2, 3, 4], [2, 3])
 * // 返回 true
 * ```
 */
declare function includes$1<T>(arr: T[] | null | undefined, subArr: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): boolean;

/**
 * 数组分组相关工具函数
 * @packageDocumentation
 */
/**
 * 按指定条件将数组元素分组
 * @param arr - 要分组的数组
 * @param keyOrFn - 分组的键或转换函数
 * @returns 分组后的对象
 * @example
 * ```typescript
 * groupBy([1, 2, 3, 4, 5, 6], n => n % 2 === 0 ? '偶数' : '奇数')
 * // 返回 { '偶数': [2, 4, 6], '奇数': [1, 3, 5] }
 * ```
 */
declare function groupBy<T, K extends keyof T | string>(arr: T[] | null | undefined, keyOrFn: K | ((item: T) => string | number)): Record<string, T[]>;
/**
 * 按大小将数组分组
 * @param arr - 要分组的数组
 * @param size - 每组的大小
 * @returns 分组后的数组
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // 返回 [[1, 2], [3, 4], [5]]
 * ```
 */
declare function chunkGroups<T>(arr: T[] | null | undefined, size: number): T[][];
/**
 * 按数量将数组分组
 * @param arr - 要分组的数组
 * @param count - 分组数量
 * @param options - 配置选项
 * @returns 分组后的数组
 * @example
 * ```typescript
 * splitIntoGroups([1, 2, 3, 4, 5, 6, 7], 3)
 * // 返回 [[1, 2, 3], [4, 5], [6, 7]]
 * ```
 */
declare function splitIntoGroups<T>(arr: T[] | null | undefined, count: number, options?: {
    balanced?: boolean;
} | null | undefined): T[][];

/**
 * 数组操作相关工具函数
 * @packageDocumentation
 */
/**
 * 移动数组元素到指定位置
 * @param arr - 要操作的数组
 * @param fromIndex - 要移动的元素的索引
 * @param toIndex - 目标位置的索引
 * @returns 移动后的数组
 * @example
 * ```typescript
 * move([1, 2, 3, 4], 1, 3)
 * // 返回 [1, 3, 4, 2]
 * ```
 */
declare function move<T>(arr: T[] | null | undefined, fromIndex: number, toIndex: number): T[];
/**
 * 旋转数组元素
 * @param arr - 要操作的数组
 * @param count - 旋转的次数，正数向右旋转，负数向左旋转
 * @returns 旋转后的数组
 * @example
 * ```typescript
 * rotate([1, 2, 3, 4], 1)
 * // 返回 [4, 1, 2, 3]
 * ```
 */
declare function rotate<T>(arr: T[] | null | undefined, count: number): T[];
/**
 * 交换数组中的两个元素
 * @param arr - 要操作的数组
 * @param index1 - 第一个元素的索引
 * @param index2 - 第二个元素的索引
 * @returns 交换后的数组
 * @example
 * ```typescript
 * swap([1, 2, 3, 4], 0, 3)
 * // 返回 [4, 2, 3, 1]
 * ```
 */
declare function swap<T>(arr: T[] | null | undefined, index1: number, index2: number): T[];

/**
 * 数组随机操作相关工具函数
 * @packageDocumentation
 */
/**
 * 从数组中随机获取一个元素
 * @param arr - 源数组
 * @returns 随机获取的元素
 * @example
 * ```typescript
 * randomItem([1, 2, 3, 4, 5])
 * // 可能返回 1, 2, 3, 4, 5 中的任意一个
 * ```
 */
declare function randomItem<T>(arr: T[]): T | undefined;
/**
 * 从数组中随机获取指定数量的元素
 * @param arr - 源数组
 * @param count - 需要获取的元素数量
 * @returns 随机获取的元素数组
 * @example
 * ```typescript
 * randomItems([1, 2, 3, 4, 5], 3)
 * // 可能返回 [1, 3, 5] 等任意三个元素的组合
 * ```
 */
declare function randomItems<T>(arr: T[], count: number): T[];
/**
 * 随机打乱数组
 * @param arr - 要打乱的数组
 * @returns 打乱后的新数组
 * @example
 * ```typescript
 * shuffle([1, 2, 3, 4, 5])
 * // 可能返回 [3, 1, 5, 2, 4] 等任意排列
 * ```
 */
declare function shuffle$1<T>(arr: T[]): T[];
/**
 * 随机获取指定范围内的元素
 * @param arr - 源数组
 * @param start - 起始索引
 * @param end - 结束索引
 * @returns 指定范围内的随机元素
 * @example
 * ```typescript
 * randomRange([1, 2, 3, 4, 5], 1, 3)
 * // 可能返回 2, 3, 4 中的任意一个
 * ```
 */
declare function randomRange<T>(arr: T[], start: number, end: number): T | undefined;

/**
 * 排序相关工具函数
 * @packageDocumentation
 */
/**
 * 根据指定条件对数组元素进行排序
 * @param arr - 要排序的数组
 * @param keyOrFn - 排序的键或比较函数
 * @param order - 排序顺序，'asc' 或 'desc'，默认为 'asc'
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortBy([{ id: 1, value: 3 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
 * // 返回 [{ id: 2, value: 1 }, { id: 3, value: 2 }, { id: 1, value: 3 }]
 * ```
 */
declare function sortBy<T, K extends keyof T | string>(arr: T[] | null | undefined, keyOrFn: K | ((a: T, b: T) => number), order?: 'asc' | 'desc'): T[];
/**
 * 根据多个条件对数组元素进行排序
 * @param arr - 要排序的数组
 * @param conditions - 排序条件数组
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortByMultiple(
 *   [
 *     { name: 'a', age: 20 },
 *     { name: 'b', age: 18 },
 *     { name: 'a', age: 18 }
 *   ],
 *   [
 *     { key: 'name', order: 'asc' },
 *     { key: 'age', order: 'desc' }
 *   ]
 * )
 * // 返回 [{ name: 'a', age: 20 }, { name: 'a', age: 18 }, { name: 'b', age: 18 }]
 * ```
 */
declare function sortByMultiple<T>(arr: T[] | null | undefined, conditions: Array<{
    key: keyof T;
    order?: 'asc' | 'desc';
}> | null | undefined): T[];
/**
 * 使用自定义比较函数对数组进行排序
 * @param arr - 要排序的数组
 * @param compareFn - 比较函数
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortWith([1, 2, 3, 4], (a, b) => b - a)
 * // 返回 [4, 3, 2, 1]
 * ```
 */
declare function sortWith<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[];
/**
 * 使用稳定排序算法对数组进行排序
 * @param arr - 要排序的数组
 * @param compareFn - 比较函数
 * @returns 排序后的数组
 * @example
 * ```typescript
 * stableSort([{ id: 1, value: 1 }, { id: 2, value: 1 }], (a, b) => a.value - b.value)
 * // 返回 [{ id: 1, value: 1 }, { id: 2, value: 1 }]，保持相等元素的原始顺序
 * ```
 */
declare function stableSort<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[];

/**
 * 统计相关工具函数
 * @packageDocumentation
 */
/**
 * 统计数组元素出现次数
 * @param arr - 要统计的数组
 * @returns 元素出现次数的对象
 * @example
 * ```typescript
 * count([1, 2, 1, 3, 2, 1])
 * // 返回 { 1: 3, 2: 2, 3: 1 }
 * ```
 */
declare function count$1<T>(arr: T[] | null | undefined): Record<string, number>;
/**
 * 计算数组的统计信息
 * @param arr - 要计算的数组
 * @returns 统计信息对象
 * @example
 * ```typescript
 * stats([1, 2, 3, 4, 5])
 * // 返回 { sum: 15, avg: 3, min: 1, max: 5, length: 5 }
 * ```
 */
declare function stats(arr: number[] | null | undefined): {
    sum: number;
    avg: number;
    min: number;
    max: number;
    length: number;
};

/**
 * 数组转换相关工具函数
 * @packageDocumentation
 */
/**
 * 将数组转换为对象
 * @param arr - 源数组
 * @param keyFn - 生成键的函数
 * @param valueFn - 生成值的函数
 * @returns 转换后的对象
 * @example
 * ```typescript
 * toObject(
 *   [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
 *   item => item.id,
 *   item => item.name
 * )
 * // 返回 { 1: 'a', 2: 'b' }
 * ```
 */
declare function toObject<T, K extends string | number, V>(arr: T[] | null | undefined, keyFn: (item: T) => K, valueFn: (item: T) => V): Record<K, V>;
/**
 * 将数组转换为Map
 * @param arr - 源数组
 * @param keyFn - 生成键的函数
 * @param valueFn - 生成值的函数
 * @returns 转换后的Map
 * @example
 * ```typescript
 * toMap(
 *   [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
 *   item => item.id,
 *   item => item.name
 * )
 * // 返回 Map(2) { 1 => 'a', 2 => 'b' }
 * ```
 */
declare function toMap<T, K, V>(arr: T[] | null | undefined, keyFn: (item: T) => K, valueFn: (item: T) => V): Map<K, V>;
/**
 * 将数组转换为Set
 * @param arr - 源数组
 * @param transformFn - 转换函数
 * @returns 转换后的Set
 * @example
 * ```typescript
 * toSet([1, 2, 3, 3, 4, 4, 5])
 * // 返回 Set(5) { 1, 2, 3, 4, 5 }
 * ```
 */
declare function toSet<T, R = T>(arr: T[] | null | undefined, transformFn?: (item: T) => R): Set<R>;
/**
 * 将数组转换为字符串
 * @param arr - 源数组
 * @param separator - 分隔符
 * @returns 转换后的字符串
 * @example
 * ```typescript
 * toString([1, 2, 3], '-')
 * // 返回 '1-2-3'
 * ```
 */
declare function toString$1<T>(arr: T[] | null | undefined, separator?: string): string;

/**
 * 树形结构相关工具函数
 * @packageDocumentation
 */
/**
 * 将数组转换为树结构
 * @param arr - 要转换的数组
 * @param options - 配置选项
 * @returns 树结构
 * @example
 * ```typescript
 * arrayToTree([
 *   { id: 1, parentId: null },
 *   { id: 2, parentId: 1 },
 *   { id: 3, parentId: 1 }
 * ])
 * // 返回 [{ id: 1, children: [{ id: 2 }, { id: 3 }] }]
 * ```
 */
declare function arrayToTree<T extends {
    [key: string]: any;
}>(arr: T[] | null | undefined, options?: {
    idKey?: string;
    parentKey?: string;
    childrenKey?: string;
} | null | undefined): (T & {
    [key: string]: any;
})[];
/**
 * 将树结构转换为数组
 * @param tree - 要转换的树结构
 * @param options - 配置选项
 * @returns 数组
 * @example
 * ```typescript
 * treeToArray([
 *   { id: 1, children: [{ id: 2 }, { id: 3 }] }
 * ])
 * // 返回 [{ id: 1, parentId: null }, { id: 2, parentId: 1 }, { id: 3, parentId: 1 }]
 * ```
 */
declare function treeToArray<T extends {
    [key: string]: any;
}>(tree: (T & {
    [key: string]: any;
})[] | null | undefined, options?: {
    idKey?: string;
    parentKey?: string;
    childrenKey?: string;
} | null | undefined): T[];
/**
 * 在树结构中查找节点
 * @param tree - 树结构
 * @param predicate - 查找条件
 * @param options - 配置选项
 * @returns 找到的节点
 * @example
 * ```typescript
 * findTreeNode(
 *   [{ id: 1, children: [{ id: 2 }, { id: 3 }] }],
 *   node => node.id === 2
 * )
 * // 返回 { id: 2 }
 * ```
 */
declare function findTreeNode<T extends {
    [key: string]: any;
}>(tree: (T & {
    [key: string]: any;
})[] | null | undefined, predicate: (node: T & {
    [key: string]: any;
}) => boolean, options?: {
    childrenKey?: string;
} | null | undefined): (T & {
    [key: string]: any;
}) | undefined;
/**
 * 过滤树结构
 * @param tree - 树结构
 * @param predicate - 过滤条件
 * @param options - 配置选项
 * @returns 过滤后的树结构
 * @example
 * ```typescript
 * filterTree(
 *   [{ id: 1, children: [{ id: 2 }, { id: 3 }] }],
 *   node => node.id !== 2
 * )
 * // 返回 [{ id: 1, children: [{ id: 3 }] }]
 * ```
 */
declare function filterTree<T extends {
    [key: string]: any;
}>(tree: (T & {
    [key: string]: any;
})[] | null | undefined, predicate: (node: T & {
    [key: string]: any;
}) => boolean, options?: {
    childrenKey?: string;
} | null | undefined): (T & {
    [key: string]: any;
})[];

/**
 * 去重相关工具函数
 * @packageDocumentation
 */
/**
 * 数组去重
 * @param arr - 要去重的数组
 * @returns 去重后的数组
 * @example
 * ```typescript
 * unique([1, 2, 1, 3, 2, 1])
 * // 返回 [1, 2, 3]
 * ```
 */
declare function unique<T>(arr: T[]): T[];
/**
 * 根据指定条件去重
 * @param arr - 要去重的数组
 * @param keyOrFn - 去重的键或比较函数
 * @returns 去重后的数组
 * @example
 * ```typescript
 * uniqueBy([{ id: 1, value: 1 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
 * // 返回 [{ id: 1, value: 1 }, { id: 3, value: 2 }]
 * ```
 */
declare function uniqueBy<T, K extends keyof T | string>(arr: T[], keyOrFn: K | ((a: T, b: T) => boolean)): T[];

/**
 * 验证相关工具函数
 * @packageDocumentation
 */
/**
 * 验证数组是否有效
 * @param arr - 要验证的数组
 * @returns 是否有效
 * @example
 * ```typescript
 * isValid([1, 2, 3])
 * // 返回 true
 * ```
 */
declare function isValid<T>(arr: T[]): boolean;
/**
 * 比较两个数组是否相等
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 是否相等
 * @example
 * ```typescript
 * isEqual([1, 2, 3], [1, 2, 3])
 * // 返回 true
 * ```
 */
declare function isEqual$1<T>(arr1: T[], arr2: T[], compareFn?: (a: T, b: T) => boolean): boolean;
/**
 * 检查是否所有元素都满足条件
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否所有元素都满足条件
 * @example
 * ```typescript
 * allMatch([1, 2, 3], n => n > 0)
 * // 返回 true
 * ```
 */
declare function allMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean;
/**
 * 检查是否存在满足条件的元素
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否存在满足条件的元素
 * @example
 * ```typescript
 * anyMatch([1, 2, 3], n => n === 2)
 * // 返回 true
 * ```
 */
declare function anyMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean;
/**
 * 检查是否没有元素满足条件
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否没有元素满足条件
 * @example
 * ```typescript
 * noneMatch([1, 2, 3], n => n < 0)
 * // 返回 true
 * ```
 */
declare function noneMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean;

/**
 * 数组操作相关工具函数
 * @packageDocumentation
 */

declare const array_allMatch: typeof allMatch;
declare const array_anyMatch: typeof anyMatch;
declare const array_arrayToTree: typeof arrayToTree;
declare const array_chunk: typeof chunk;
declare const array_chunkGroups: typeof chunkGroups;
declare const array_difference: typeof difference;
declare const array_filterTree: typeof filterTree;
declare const array_findTreeNode: typeof findTreeNode;
declare const array_first: typeof first;
declare const array_flatten: typeof flatten;
declare const array_groupBy: typeof groupBy;
declare const array_intersection: typeof intersection;
declare const array_isValid: typeof isValid;
declare const array_last: typeof last;
declare const array_move: typeof move;
declare const array_noneMatch: typeof noneMatch;
declare const array_randomItem: typeof randomItem;
declare const array_randomItems: typeof randomItems;
declare const array_randomRange: typeof randomRange;
declare const array_range: typeof range;
declare const array_rotate: typeof rotate;
declare const array_sortBy: typeof sortBy;
declare const array_sortByMultiple: typeof sortByMultiple;
declare const array_sortWith: typeof sortWith;
declare const array_splitIntoGroups: typeof splitIntoGroups;
declare const array_stableSort: typeof stableSort;
declare const array_stats: typeof stats;
declare const array_swap: typeof swap;
declare const array_toMap: typeof toMap;
declare const array_toObject: typeof toObject;
declare const array_toSet: typeof toSet;
declare const array_treeToArray: typeof treeToArray;
declare const array_union: typeof union;
declare const array_unique: typeof unique;
declare const array_uniqueBy: typeof uniqueBy;
declare namespace array {
  export { array_allMatch as allMatch, array_anyMatch as anyMatch, array_arrayToTree as arrayToTree, array_chunk as chunk, array_chunkGroups as chunkGroups, count$1 as count, array_difference as difference, array_filterTree as filterTree, array_findTreeNode as findTreeNode, array_first as first, array_flatten as flatten, get$1 as get, array_groupBy as groupBy, includes$1 as includes, array_intersection as intersection, isEmpty$2 as isEmpty, isEqual$1 as isEqual, array_isValid as isValid, array_last as last, array_move as move, array_noneMatch as noneMatch, array_randomItem as randomItem, array_randomItems as randomItems, array_randomRange as randomRange, array_range as range, array_rotate as rotate, shuffle$1 as shuffle, array_sortBy as sortBy, array_sortByMultiple as sortByMultiple, array_sortWith as sortWith, array_splitIntoGroups as splitIntoGroups, array_stableSort as stableSort, array_stats as stats, array_swap as swap, array_toMap as toMap, array_toObject as toObject, array_toSet as toSet, toString$1 as toString, array_treeToArray as treeToArray, array_union as union, array_unique as unique, array_uniqueBy as uniqueBy };
}

/**
 * 浏览器检测相关工具函数
 * @packageDocumentation
 */
/**
 * 浏览器信息接口
 */
interface BrowserInfo {
    /** 浏览器名称 */
    name: string;
    /** 浏览器版本 */
    version: string;
    /** 是否为移动浏览器 */
    isMobile: boolean;
}
/**
 * 获取当前浏览器的详细信息
 *
 * @returns 浏览器名称、版本和移动浏览器标志
 * @example
 * ```ts
 * const browser = getBrowserInfo();
 * console.log(`浏览器: ${browser.name} ${browser.version}`);
 * if (browser.isMobile) {
 *   console.log('这是移动浏览器');
 * }
 * ```
 */
declare function getBrowserInfo(): BrowserInfo;
/**
 * 检查当前浏览器是否为指定的浏览器类型
 *
 * @param browserName - 浏览器名称
 * @returns 如果匹配则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isBrowser('Chrome')) {
 *   // Chrome 特定功能
 * } else if (isBrowser('Safari')) {
 *   // Safari 特定功能
 * }
 * ```
 */
declare function isBrowser(browserName: string): boolean;
/**
 * 检查当前浏览器是否为 Chrome
 *
 * @returns 如果是 Chrome 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isChrome()) {
 *   // 使用 Chrome 特定功能
 * }
 * ```
 */
declare function isChrome(): boolean;
/**
 * 检查当前浏览器是否为 Firefox
 *
 * @returns 如果是 Firefox 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isFirefox()) {
 *   // 使用 Firefox 特定功能
 * }
 * ```
 */
declare function isFirefox(): boolean;
/**
 * 检查当前浏览器是否为 Safari
 *
 * @returns 如果是 Safari 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isSafari()) {
 *   // 处理 Safari 兼容性问题
 * }
 * ```
 */
declare function isSafari(): boolean;
/**
 * 检查当前浏览器是否为 Edge
 *
 * @returns 如果是 Edge 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isEdge()) {
 *   // 处理 Edge 特定问题
 * }
 * ```
 */
declare function isEdge(): boolean;
/**
 * 检查当前浏览器是否为 Internet Explorer
 *
 * @returns 如果是 IE 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isIE()) {
 *   alert('您的浏览器不受支持，请使用现代浏览器');
 * }
 * ```
 */
declare function isIE(): boolean;
/**
 * 检查浏览器是否支持某个 CSS 属性
 *
 * @param property - 要检查的 CSS 属性
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsCSSProperty('grid')) {
 *   // 使用 CSS Grid 布局
 * } else {
 *   // 使用替代布局
 * }
 * ```
 */
declare function supportsCSSProperty(property: string): boolean;
/**
 * 检查浏览器是否支持某种媒体查询
 *
 * @param query - 要检查的媒体查询字符串
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsMediaQuery('(prefers-color-scheme: dark)')) {
 *   // 支持暗黑模式偏好检测
 * }
 * ```
 */
declare function supportsMediaQuery(query: string): boolean;
/**
 * 检查浏览器是否支持某个 Web API
 *
 * @param api - 要检查的 API 名称
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsWebAPI('IntersectionObserver')) {
 *   // 使用 Intersection Observer API 实现懒加载
 * } else {
 *   // 使用滚动事件实现懒加载
 * }
 * ```
 */
declare function supportsWebAPI(api: string): boolean;
/**
 * 检查浏览器是否支持离线存储
 *
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsOfflineStorage()) {
 *   // 实现离线功能
 * }
 * ```
 */
declare function supportsOfflineStorage(): boolean;
/**
 * 检查浏览器是否支持指定的输入类型
 *
 * @param inputType - 要检查的输入类型
 * @returns 如果支持则返回 true，否则返回 false
 * @example
 * ```ts
 * if (supportsInputType('date')) {
 *   // 使用原生日期选择器
 * } else {
 *   // 使用自定义日期选择器
 * }
 * ```
 */
declare function supportsInputType(inputType: string): boolean;

/**
 * 设备检测相关工具函数
 * @packageDocumentation
 */
/**
 * 检测当前设备是否为移动设备
 *
 * @returns 如果是移动设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isMobile()) {
 *   // 显示移动版布局
 * } else {
 *   // 显示桌面版布局
 * }
 * ```
 */
declare function isMobile(): boolean;
/**
 * 检测当前设备是否为平板设备
 *
 * @returns 如果是平板设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isTablet()) {
 *   // 调整布局适应平板设备
 * }
 * ```
 */
declare function isTablet(): boolean;
/**
 * 检测当前设备是否为桌面设备
 *
 * @returns 如果是桌面设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isDesktop()) {
 *   // 启用高级交互功能
 * }
 * ```
 */
declare function isDesktop(): boolean;
/**
 * 检测当前设备是否为 iOS 设备
 *
 * @returns 如果是 iOS 设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isIOS()) {
 *   // 处理 iOS 特定功能
 * }
 * ```
 */
declare function isIOS(): boolean;
/**
 * 检测当前设备是否为 Android 设备
 *
 * @returns 如果是 Android 设备则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isAndroid()) {
 *   // 处理 Android 特定功能
 * }
 * ```
 */
declare function isAndroid(): boolean;
/**
 * 检测屏幕是否处于竖屏模式
 *
 * @returns 如果是竖屏模式则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isPortrait()) {
 *   // 优化竖屏布局
 * } else {
 *   // 优化横屏布局
 * }
 * ```
 */
declare function isPortrait(): boolean;
/**
 * 检测屏幕是否处于横屏模式
 *
 * @returns 如果是横屏模式则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isLandscape()) {
 *   // 显示横屏优化的内容
 * }
 * ```
 */
declare function isLandscape(): boolean;
/**
 * 获取设备像素比
 *
 * @returns 设备的像素比
 * @example
 * ```ts
 * const ratio = getDevicePixelRatio();
 * console.log(`设备像素比是: ${ratio}`);
 *
 * // 基于像素比调整图像质量
 * if (ratio >= 2) {
 *   // 使用高分辨率图像
 * }
 * ```
 */
declare function getDevicePixelRatio(): number;
/**
 * 判断是否支持触摸事件
 *
 * @returns 如果支持触摸事件则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isTouchDevice()) {
 *   // 启用触摸优化交互
 * } else {
 *   // 启用鼠标优化交互
 * }
 * ```
 */
declare function isTouchDevice(): boolean;
/**
 * 获取设备类型
 *
 * @returns 设备类型的字符串表示 ('mobile', 'tablet', 'desktop')
 * @example
 * ```ts
 * const deviceType = getDeviceType();
 * switch (deviceType) {
 *   case 'mobile':
 *     // 移动设备处理
 *     break;
 *   case 'tablet':
 *     // 平板设备处理
 *     break;
 *   case 'desktop':
 *     // 桌面设备处理
 *     break;
 * }
 * ```
 */
declare function getDeviceType(): 'mobile' | 'tablet' | 'desktop';

/**
 * 浏览器和设备检测相关工具函数
 * @packageDocumentation
 */

type browser_BrowserInfo = BrowserInfo;
declare const browser_getBrowserInfo: typeof getBrowserInfo;
declare const browser_getDevicePixelRatio: typeof getDevicePixelRatio;
declare const browser_getDeviceType: typeof getDeviceType;
declare const browser_isAndroid: typeof isAndroid;
declare const browser_isBrowser: typeof isBrowser;
declare const browser_isChrome: typeof isChrome;
declare const browser_isDesktop: typeof isDesktop;
declare const browser_isEdge: typeof isEdge;
declare const browser_isFirefox: typeof isFirefox;
declare const browser_isIE: typeof isIE;
declare const browser_isIOS: typeof isIOS;
declare const browser_isLandscape: typeof isLandscape;
declare const browser_isMobile: typeof isMobile;
declare const browser_isPortrait: typeof isPortrait;
declare const browser_isSafari: typeof isSafari;
declare const browser_isTablet: typeof isTablet;
declare const browser_isTouchDevice: typeof isTouchDevice;
declare const browser_supportsCSSProperty: typeof supportsCSSProperty;
declare const browser_supportsInputType: typeof supportsInputType;
declare const browser_supportsMediaQuery: typeof supportsMediaQuery;
declare const browser_supportsOfflineStorage: typeof supportsOfflineStorage;
declare const browser_supportsWebAPI: typeof supportsWebAPI;
declare namespace browser {
  export { type browser_BrowserInfo as BrowserInfo, browser_getBrowserInfo as getBrowserInfo, browser_getDevicePixelRatio as getDevicePixelRatio, browser_getDeviceType as getDeviceType, browser_isAndroid as isAndroid, browser_isBrowser as isBrowser, browser_isChrome as isChrome, browser_isDesktop as isDesktop, browser_isEdge as isEdge, browser_isFirefox as isFirefox, browser_isIE as isIE, browser_isIOS as isIOS, browser_isLandscape as isLandscape, browser_isMobile as isMobile, browser_isPortrait as isPortrait, browser_isSafari as isSafari, browser_isTablet as isTablet, browser_isTouchDevice as isTouchDevice, browser_supportsCSSProperty as supportsCSSProperty, browser_supportsInputType as supportsInputType, browser_supportsMediaQuery as supportsMediaQuery, browser_supportsOfflineStorage as supportsOfflineStorage, browser_supportsWebAPI as supportsWebAPI };
}

/**
 * 将十六进制颜色代码转换为RGB颜色值
 *
 * @param hex - 十六进制颜色代码，支持3位(#RGB)和6位(#RRGGBB)格式，可选带#前缀
 * @param options - 配置选项
 * @param options.alpha - 是否返回包含alpha通道的RGBA值，默认为false
 * @param options.format - 返回格式，可以是'object'、'array'或'string'，默认为'object'
 * @returns 转换后的RGB颜色值，格式由options.format决定
 * @example
 * ```ts
 * // 基本用法
 * hexToRgb('#ff0000'); // 返回: { r: 255, g: 0, b: 0 }
 *
 * // 缩写形式
 * hexToRgb('#f00'); // 返回: { r: 255, g: 0, b: 0 }
 *
 * // 不带#前缀
 * hexToRgb('ff0000'); // 返回: { r: 255, g: 0, b: 0 }
 *
 * // 返回数组格式
 * hexToRgb('#ff0000', { format: 'array' }); // 返回: [255, 0, 0]
 *
 * // 返回字符串格式
 * hexToRgb('#ff0000', { format: 'string' }); // 返回: "rgb(255, 0, 0)"
 *
 * // 包含alpha值
 * hexToRgb('#ff0000', { alpha: 0.5, format: 'string' }); // 返回: "rgba(255, 0, 0, 0.5)"
 * ```
 */
declare function hexToRgb(hex: string, options?: {
    alpha?: number;
    format?: 'object' | 'array' | 'string';
}): {
    r: number;
    g: number;
    b: number;
    a?: number;
} | number[] | string | null;

/**
 * 将RGB颜色值转换为十六进制颜色代码
 *
 * @param r - 红色通道值（0-255）或包含RGB值的对象或数组
 * @param g - 绿色通道值（0-255），如果第一个参数是对象或数组则忽略
 * @param b - 蓝色通道值（0-255），如果第一个参数是对象或数组则忽略
 * @param options - 配置选项
 * @param options.prefix - 是否包含#前缀，默认为true
 * @param options.alpha - alpha通道值（0-1），用于生成RGBA颜色
 * @returns 十六进制颜色代码
 * @example
 * ```ts
 * // 基本用法
 * rgbToHex(255, 0, 0); // 返回: "#ff0000"
 *
 * // 不带#前缀
 * rgbToHex(255, 0, 0, { prefix: false }); // 返回: "ff0000"
 *
 * // 使用对象
 * rgbToHex({ r: 255, g: 0, b: 0 }); // 返回: "#ff0000"
 *
 * // 使用数组
 * rgbToHex([255, 0, 0]); // 返回: "#ff0000"
 *
 * // 包含alpha通道
 * rgbToHex(255, 0, 0, { alpha: 0.5 }); // 返回: "#ff0000" (alpha值在十六进制表示中被忽略)
 * ```
 */
declare function rgbToHex(r: number | {
    r: number;
    g: number;
    b: number;
} | number[], g?: number, b?: number, options?: {
    prefix?: boolean;
    alpha?: number;
}): string;

/**
 * 调整颜色的亮度、饱和度或色调
 *
 * @param color - 要调整的颜色，可以是十六进制或RGB格式
 * @param adjustments - 调整选项
 * @param adjustments.lightness - 亮度调整值，范围为-1到1，0表示不变
 * @param adjustments.saturation - 饱和度调整值，范围为-1到1，0表示不变
 * @param adjustments.hue - 色调调整值，范围为-360到360，0表示不变
 * @param adjustments.alpha - alpha通道值，范围为0到1
 * @returns 调整后的颜色（与输入格式相同）
 * @example
 * ```ts
 * // 调整亮度
 * adjustColor('#ff0000', { lightness: 0.2 }); // 返回: "#ff3333" (变亮)
 * adjustColor('#ff0000', { lightness: -0.2 }); // 返回: "#cc0000" (变暗)
 *
 * // 调整饱和度
 * adjustColor('#ff0000', { saturation: -0.5 }); // 返回: "#bf4040" (降低饱和度)
 *
 * // 调整色调
 * adjustColor('#ff0000', { hue: 60 }); // 返回: "#ffff00" (红色 -> 黄色)
 * adjustColor('#ff0000', { hue: 120 }); // 返回: "#00ff00" (红色 -> 绿色)
 *
 * // 组合调整
 * adjustColor('#ff0000', { lightness: 0.1, saturation: -0.2, hue: 30 }); // 返回混合调整后的颜色
 *
 * // 使用RGB对象
 * adjustColor({ r: 255, g: 0, b: 0 }, { lightness: 0.2 }); // 返回: { r: 255, g: 51, b: 51 }
 * ```
 */
declare function adjustColor(color: string | {
    r: number;
    g: number;
    b: number;
    a?: number | undefined;
}, adjustments?: {
    lightness?: number | undefined;
    saturation?: number | undefined;
    hue?: number | undefined;
    alpha?: number | undefined;
}): string | {
    r: number;
    g: number;
    b: number;
    a?: number | undefined;
};

/**
 * 颜色操作相关工具函数
 * @packageDocumentation
 */

declare const color_adjustColor: typeof adjustColor;
declare const color_hexToRgb: typeof hexToRgb;
declare const color_rgbToHex: typeof rgbToHex;
declare namespace color {
  export { color_adjustColor as adjustColor, color_hexToRgb as hexToRgb, color_rgbToHex as rgbToHex };
}

/**
 * 判断是否为有效的日期对象
 * @param date - 要检查的值
 * @returns 是否为有效的日期对象
 * @example
 * isDate(new Date()) // true
 * isDate('2024-03-20') // false
 */
declare function isDate$1(date: any): boolean;
/**
 * 判断日期是否为今天
 * @param date - 要检查的日期
 * @returns 是否为今天
 * @example
 * isToday(new Date()) // true
 * isToday(new Date('2024-03-19')) // false
 */
declare function isToday(date: Date): boolean;
/**
 * 判断日期是否在指定日期之前
 * @param date - 要检查的日期
 * @param compareDate - 比较的日期
 * @returns 是否在指定日期之前
 * @example
 * isBefore(new Date('2024-03-19'), new Date('2024-03-20')) // true
 */
declare function isBefore(date: Date, compareDate: Date): boolean;
/**
 * 判断日期是否在指定日期之后
 * @param date - 要检查的日期
 * @param compareDate - 比较的日期
 * @returns 是否在指定日期之后
 * @example
 * isAfter(new Date('2024-03-20'), new Date('2024-03-19')) // true
 */
declare function isAfter(date: Date, compareDate: Date): boolean;
/**
 * 判断两个日期是否为同一天
 * @param date1 - 第一个日期
 * @param date2 - 第二个日期
 * @returns 是否为同一天
 * @example
 * isSameDay(new Date('2024-03-20'), new Date('2024-03-20')) // true
 */
declare function isSameDay(date1: Date, date2: Date): boolean;

/**
 * 格式化日期
 * @param date - 要格式化的日期
 * @param format - 格式化模式
 * @returns 格式化后的日期字符串
 * @example
 * formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') // '2024-03-20 14:30:00'
 */
declare function formatDate(date: Date, format?: string): string;
/**
 * 获取相对时间描述
 * @param date - 要计算的日期
 * @returns 相对时间描述
 * @example
 * timeAgo(new Date(Date.now() - 3600000)) // '1小时前'
 */
declare function timeAgo(date: Date): string;

/**
 * 添加天数
 * @param date - 基准日期
 * @param days - 要添加的天数
 * @returns 新的日期对象
 * @example
 * addDays(new Date('2024-03-20'), 5) // 2024-03-25
 */
declare function addDays(date: Date, days: number): Date;
/**
 * 添加月份
 * @param date - 基准日期
 * @param months - 要添加的月份数
 * @returns 新的日期对象
 * @example
 * addMonths(new Date('2024-03-20'), 2) // 2024-05-20
 */
declare function addMonths(date: Date, months: number): Date;
/**
 * 添加年份
 * @param date - 基准日期
 * @param years - 要添加的年份数
 * @returns 新的日期对象
 * @example
 * addYears(new Date('2024-03-20'), 1) // 2025-03-20
 */
declare function addYears(date: Date, years: number): Date;
/**
 * 获取指定月份的天数
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 该月的天数
 * @example
 * getDaysInMonth(2024, 1) // 29 (2024是闰年)
 */
declare function getDaysInMonth(year: number, month: number): number;
/**
 * 获取日期是当年的第几周
 * @param date - 要计算的日期
 * @returns 周数
 * @example
 * getWeekNumber(new Date('2024-03-20')) // 12
 */
declare function getWeekNumber(date: Date): number;

/**
 * 判断日期是否在指定范围内
 * @param date - 要检查的日期
 * @param startDate - 范围开始日期
 * @param endDate - 范围结束日期
 * @returns 是否在范围内
 * @example
 * isDateInRange(new Date('2024-03-20'), new Date('2024-03-19'), new Date('2024-03-21')) // true
 */
declare function isDateInRange(date: Date, startDate: Date, endDate: Date): boolean;
/**
 * 计算两个日期范围的交集
 * @param range1 - 第一个日期范围
 * @param range2 - 第二个日期范围
 * @returns 交集范围或null
 * @example
 * getDateRangeIntersection(
 *   [new Date('2024-03-19'), new Date('2024-03-21')],
 *   [new Date('2024-03-20'), new Date('2024-03-22')]
 * ) // [2024-03-20, 2024-03-21]
 */
declare function getDateRangeIntersection(range1: [Date, Date], range2: [Date, Date]): [Date, Date] | null;

/**
 * 判断是否为闰年
 * @param year - 要判断的年份
 * @returns 是否为闰年
 * @example
 * isLeapYear(2024) // true
 */
declare function isLeapYear(year: number): boolean;
/**
 * 获取指定月份的第一天
 * @param date - 日期对象
 * @returns 该月第一天
 * @example
 * getFirstDayOfMonth(new Date('2024-03-20')) // 2024-03-01
 */
declare function getFirstDayOfMonth(date: Date): Date;
/**
 * 获取指定月份的最后一天
 * @param date - 日期对象
 * @returns 该月最后一天
 * @example
 * getLastDayOfMonth(new Date('2024-03-20')) // 2024-03-31
 */
declare function getLastDayOfMonth(date: Date): Date;

/**
 * 获取日期的开始时间（00:00:00）
 * @param date - 日期对象
 * @returns 开始时间
 * @example
 * startOfDay(new Date('2024-03-20 14:30:00')) // 2024-03-20 00:00:00
 */
declare function startOfDay(date: Date): Date;
/**
 * 获取日期的结束时间（23:59:59）
 * @param date - 日期对象
 * @returns 结束时间
 * @example
 * endOfDay(new Date('2024-03-20 14:30:00')) // 2024-03-20 23:59:59
 */
declare function endOfDay(date: Date): Date;
/**
 * 获取周的开始时间
 * @param date - 日期对象
 * @returns 周开始时间
 * @example
 * startOfWeek(new Date('2024-03-20')) // 2024-03-18 00:00:00
 */
declare function startOfWeek(date: Date): Date;
/**
 * 获取周的结束时间
 * @param date - 日期对象
 * @returns 周结束时间
 * @example
 * endOfWeek(new Date('2024-03-20')) // 2024-03-24 23:59:59
 */
declare function endOfWeek(date: Date): Date;
/**
 * 获取月份的开始时间
 * @param date - 日期对象
 * @returns 月开始时间
 * @example
 * startOfMonth(new Date('2024-03-20')) // 2024-03-01 00:00:00
 */
declare function startOfMonth(date: Date): Date;
/**
 * 获取月份的结束时间
 * @param date - 日期对象
 * @returns 月结束时间
 * @example
 * endOfMonth(new Date('2024-03-20')) // 2024-03-31 23:59:59
 */
declare function endOfMonth(date: Date): Date;

interface LunarDate {
    year: number;
    month: number;
    day: number;
    leap: boolean;
    festival?: string;
}
/**
 * 公历转农历
 * @param date - 公历日期
 * @returns 农历日期信息
 * @example
 * solarToLunar(new Date('2024-03-20')) // { year: 2024, month: 2, day: 11, leap: false }
 */
declare function solarToLunar(date: Date): LunarDate;
/**
 * 农历转公历
 * @param year - 农历年
 * @param month - 农历月
 * @param day - 农历日
 * @returns 公历日期
 * @example
 * lunarToSolar(2024, 2, 11) // 2024-03-20
 */
declare function lunarToSolar(year: number, month: number, day: number): Date;
/**
 * 获取农历节日
 * @param date - 公历日期
 * @returns 农历节日名称
 * @example
 * getLunarFestival(new Date('2024-02-10')) // '春节'
 */
declare function getLunarFestival(date: Date): string | undefined;
/**
 * 获取二十四节气
 * @param date - 公历日期
 * @returns 节气名称
 * @example
 * getSolarTerm(new Date('2024-03-20')) // '春分'
 */
declare function getSolarTerm(date: Date): string | undefined;

/**
 * 转换时区
 * @param date - 要转换的日期
 * @param fromZone - 源时区
 * @param toZone - 目标时区
 * @returns 转换后的日期
 * @example
 * convertTimeZone(new Date(), 'UTC', 'Asia/Shanghai')
 */
declare function convertTimeZone(date: Date, fromZone: string, toZone: string): Date;
/**
 * 获取时区偏移量（小时）
 * @param timezone - 时区名称
 * @returns 偏移量
 * @example
 * getTimezoneOffset('Asia/Shanghai') // 8
 */
declare function getTimezoneOffset(timezone: string): number;
/**
 * UTC时间转本地时间
 * @param date - UTC时间
 * @returns 本地时间
 * @example
 * utcToLocal(new Date('2024-03-20T00:00:00Z')) // 2024-03-20 08:00:00
 */
declare function utcToLocal(date: Date): Date;
/**
 * 本地时间转UTC时间
 * @param date - 本地时间
 * @returns UTC时间
 * @example
 * localToUtc(new Date('2024-03-20 08:00:00')) // 2024-03-20T00:00:00Z
 */
declare function localToUtc(date: Date): Date;

interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
}
/**
 * 生成月历数据
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 月历数据
 * @example
 * generateCalendarMonth(2024, 2) // 生成2024年3月的日历数据
 */
declare function generateCalendarMonth(year: number, month: number): CalendarDay[];
/**
 * 生成周历数据
 * @param date - 日期对象
 * @returns 周历数据
 * @example
 * generateCalendarWeek(new Date('2024-03-20')) // 生成包含该日期的周历数据
 */
declare function generateCalendarWeek(date: Date): Date[];
/**
 * 获取日历网格
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 日历网格数据
 * @example
 * getCalendarGrid(2024, 2) // 生成2024年3月的日历网格
 */
declare function getCalendarGrid(year: number, month: number): Date[][];

/**
 * 计算工作日数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 工作日数量
 * @example
 * getWorkingDays(new Date('2024-03-20'), new Date('2024-03-25')) // 4
 */
declare function getWorkingDays(startDate: Date, endDate: Date): number;
/**
 * 获取两个日期之间的所有日期
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 日期数组
 * @example
 * getDatesBetween(new Date('2024-03-20'), new Date('2024-03-22'))
 * // [2024-03-20, 2024-03-21, 2024-03-22]
 */
declare function getDatesBetween(startDate: Date, endDate: Date): Date[];

/**
 * 日期操作相关工具函数
 * @packageDocumentation
 */

declare const date_addDays: typeof addDays;
declare const date_addMonths: typeof addMonths;
declare const date_addYears: typeof addYears;
declare const date_convertTimeZone: typeof convertTimeZone;
declare const date_endOfDay: typeof endOfDay;
declare const date_endOfMonth: typeof endOfMonth;
declare const date_endOfWeek: typeof endOfWeek;
declare const date_formatDate: typeof formatDate;
declare const date_generateCalendarMonth: typeof generateCalendarMonth;
declare const date_generateCalendarWeek: typeof generateCalendarWeek;
declare const date_getCalendarGrid: typeof getCalendarGrid;
declare const date_getDateRangeIntersection: typeof getDateRangeIntersection;
declare const date_getDatesBetween: typeof getDatesBetween;
declare const date_getDaysInMonth: typeof getDaysInMonth;
declare const date_getFirstDayOfMonth: typeof getFirstDayOfMonth;
declare const date_getLastDayOfMonth: typeof getLastDayOfMonth;
declare const date_getLunarFestival: typeof getLunarFestival;
declare const date_getSolarTerm: typeof getSolarTerm;
declare const date_getTimezoneOffset: typeof getTimezoneOffset;
declare const date_getWeekNumber: typeof getWeekNumber;
declare const date_getWorkingDays: typeof getWorkingDays;
declare const date_isAfter: typeof isAfter;
declare const date_isBefore: typeof isBefore;
declare const date_isDateInRange: typeof isDateInRange;
declare const date_isLeapYear: typeof isLeapYear;
declare const date_isSameDay: typeof isSameDay;
declare const date_isToday: typeof isToday;
declare const date_localToUtc: typeof localToUtc;
declare const date_lunarToSolar: typeof lunarToSolar;
declare const date_solarToLunar: typeof solarToLunar;
declare const date_startOfDay: typeof startOfDay;
declare const date_startOfMonth: typeof startOfMonth;
declare const date_startOfWeek: typeof startOfWeek;
declare const date_timeAgo: typeof timeAgo;
declare const date_utcToLocal: typeof utcToLocal;
declare namespace date {
  export { date_addDays as addDays, date_addMonths as addMonths, date_addYears as addYears, date_convertTimeZone as convertTimeZone, date_endOfDay as endOfDay, date_endOfMonth as endOfMonth, date_endOfWeek as endOfWeek, date_formatDate as formatDate, date_generateCalendarMonth as generateCalendarMonth, date_generateCalendarWeek as generateCalendarWeek, date_getCalendarGrid as getCalendarGrid, date_getDateRangeIntersection as getDateRangeIntersection, date_getDatesBetween as getDatesBetween, date_getDaysInMonth as getDaysInMonth, date_getFirstDayOfMonth as getFirstDayOfMonth, date_getLastDayOfMonth as getLastDayOfMonth, date_getLunarFestival as getLunarFestival, date_getSolarTerm as getSolarTerm, date_getTimezoneOffset as getTimezoneOffset, date_getWeekNumber as getWeekNumber, date_getWorkingDays as getWorkingDays, date_isAfter as isAfter, date_isBefore as isBefore, isDate$1 as isDate, date_isDateInRange as isDateInRange, date_isLeapYear as isLeapYear, date_isSameDay as isSameDay, date_isToday as isToday, date_localToUtc as localToUtc, date_lunarToSolar as lunarToSolar, date_solarToLunar as solarToLunar, date_startOfDay as startOfDay, date_startOfMonth as startOfMonth, date_startOfWeek as startOfWeek, date_timeAgo as timeAgo, date_utcToLocal as utcToLocal };
}

/**
 * 元素查找
 */
/**
 * 查找元素
 * @param selector - CSS选择器
 * @returns 找到的元素或null
 */
declare function querySelector(selector: string): Element | null;
/**
 * 判断元素是否包含指定类名
 * @param element - DOM元素
 * @param className - 类名
 * @returns 是否包含类名
 */
declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * 判断元素是否匹配选择器
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 是否匹配
 */
declare function matches(element: HTMLElement, selector: string): boolean;
/**
 * 获取最近的匹配选择器的祖先元素
 * @param element - DOM元素
 * @param selector - CSS选择器
 * @returns 匹配的祖先元素或null
 */
declare function closest(element: HTMLElement, selector: string): HTMLElement | null;
/**
 * 类名操作
 */
/**
 * 添加类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
declare function addClass(element: HTMLElement, className: string | string[]): void;
/**
 * 移除类名
 * @param element - DOM元素
 * @param className - 类名或类名数组
 */
declare function removeClass(element: HTMLElement, className: string | string[]): void;
/**
 * 切换类名
 * @param element - DOM元素
 * @param className - 类名
 */
declare function toggleClass(element: HTMLElement, className: string): void;
/**
 * 样式操作
 */
/**
 * 设置样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @param value - 样式值
 */
declare function setStyle(element: HTMLElement, property: string, value: string | number): void;
/**
 * 获取样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 样式值
 */
declare function getStyle(element: HTMLElement, property: string): string | null;
/**
 * 设置多个样式
 * @param element - DOM元素
 * @param styles - 样式对象
 */
declare function setStyles(element: HTMLElement, styles: Record<string, string | number>): void;

/**
 * 创建元素
 * @param tag - 标签名
 * @param attributes - 属性对象
 * @param children - 子元素数组
 * @returns 创建的元素
 */
declare function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, attributes?: Record<string, string>, children?: (string | HTMLElement)[]): HTMLElementTagNameMap[K];
/**
 * 在目标元素前插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
declare function insertBefore(newElement: HTMLElement, targetElement: HTMLElement): void;
/**
 * 在目标元素后插入新元素
 * @param newElement - 新元素
 * @param targetElement - 目标元素
 */
declare function insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void;
/**
 * 设置多个属性
 * @param element - DOM元素
 * @param attributes - 属性对象
 */
declare function setAttributes(element: HTMLElement, attributes: Record<string, string>): void;
/**
 * 获取数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @returns 数据属性值
 */
declare function getData(element: HTMLElement, key: string): string | null;
/**
 * 设置数据属性值
 * @param element - DOM元素
 * @param key - 数据属性名
 * @param value - 数据属性值
 */
declare function setData(element: HTMLElement, key: string, value: string): void;

/**
 * 添加事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
declare function on(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 移除事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
declare function off(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 添加一次性事件监听
 * @param element - DOM元素
 * @param eventType - 事件类型
 * @param handler - 事件处理函数
 */
declare function once$1(element: HTMLElement, eventType: string, handler: (event: Event) => void): void;
/**
 * 事件委托
 * @param element - 委托元素
 * @param eventType - 事件类型
 * @param selector - 选择器
 * @param handler - 事件处理函数
 */
declare function delegate(element: HTMLElement, eventType: string, selector: string, handler: (event: Event) => void): void;

/**
 * 序列化表单数据
 * @param form - 表单元素
 * @returns 表单数据对象
 */
declare function serializeForm(form: HTMLFormElement): Record<string, string>;
/**
 * 重置表单
 * @param form - 表单元素
 */
declare function resetForm(form: HTMLFormElement): void;
/**
 * 禁用表单
 * @param form - 表单元素
 */
declare function disableForm(form: HTMLFormElement): void;
/**
 * 启用表单
 * @param form - 表单元素
 */
declare function enableForm(form: HTMLFormElement): void;
/**
 * 获取表单字段值
 * @param field - 表单字段元素
 * @returns 字段值
 */
declare function getFormFieldValue(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string;
/**
 * 设置表单字段值
 * @param field - 表单字段元素
 * @param value - 字段值
 */
declare function setFormFieldValue(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: string): void;

/**
 * 获取元素尺寸
 * @param element - DOM元素
 * @returns 元素尺寸对象
 */
declare function getElementSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素位置
 * @param element - DOM元素
 * @returns 元素位置对象
 */
declare function getElementPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 获取元素视口位置
 * @param element - DOM元素
 * @returns 元素视口位置对象
 */
declare function getElementViewportPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 检查元素是否在视口中
 * @param element - DOM元素
 * @param threshold - 阈值（0-1之间）
 * @returns 是否在视口中
 */
declare function isElementInViewport(element: HTMLElement, threshold?: number): boolean;
/**
 * 获取元素滚动位置
 * @param element - DOM元素
 * @returns 滚动位置对象
 */
declare function getElementScrollPosition(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * 设置元素滚动位置
 * @param element - DOM元素
 * @param position - 滚动位置对象
 */
declare function setElementScrollPosition(element: HTMLElement, position: {
    top?: number;
    left?: number;
}): void;
/**
 * 获取元素内容尺寸
 * @param element - DOM元素
 * @returns 内容尺寸对象
 */
declare function getElementContentSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素内边距尺寸
 * @param element - DOM元素
 * @returns 内边距尺寸对象
 */
declare function getElementPaddingSize(element: HTMLElement): {
    width: number;
    height: number;
};
/**
 * 获取元素边框尺寸
 * @param element - DOM元素
 * @returns 边框尺寸对象
 */
declare function getElementBorderSize(element: HTMLElement): {
    width: number;
    height: number;
};

/**
 * 淡入效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
declare function fadeIn(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 淡出效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
declare function fadeOut(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 滑动显示
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
declare function slideDown(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 滑动隐藏
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
declare function slideUp(element: HTMLElement, duration?: number, callback?: () => void): void;
/**
 * 添加过渡效果
 * @param element - DOM元素
 * @param properties - 需要添加过渡效果的属性
 * @param duration - 过渡持续时间（毫秒）
 * @param timing - 过渡时间函数
 */
declare function addTransition(element: HTMLElement, properties: string | string[], duration?: number, timing?: string): void;
/**
 * 移除过渡效果
 * @param element - DOM元素
 */
declare function removeTransition(element: HTMLElement): void;

/**
 * DOM 操作工具函数
 */
/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns Promise<void>
 */
declare function copyToClipboard(text: string): Promise<void>;
/**
 * 获取元素的计算样式
 * @param element - DOM元素
 * @param property - 样式属性
 * @returns 计算后的样式值
 */
declare function getComputedStyleValue(element: HTMLElement, property: string): string;
/**
 * 检查元素是否可见
 * @param element - DOM元素
 * @returns 是否可见
 */
declare function isVisible(element: HTMLElement): boolean;
/**
 * 检查元素是否可聚焦
 * @param element - DOM元素
 * @returns 是否可聚焦
 */
declare function isFocusable(element: HTMLElement): boolean;
/**
 * 获取元素的文本内容
 * @param element - DOM元素
 * @returns 文本内容
 */
declare function getTextContent(element: HTMLElement): string;
/**
 * 设置元素的文本内容
 * @param element - DOM元素
 * @param text - 文本内容
 */
declare function setTextContent(element: HTMLElement, text: string): void;
/**
 * 获取元素的HTML内容
 * @param element - DOM元素
 * @returns HTML内容
 */
declare function getInnerHTML(element: HTMLElement): string;
/**
 * 设置元素的HTML内容
 * @param element - DOM元素
 * @param html - HTML内容
 */
declare function setInnerHTML(element: HTMLElement, html: string): void;

/**
 * DOM 操作相关工具函数
 * @packageDocumentation
 */

declare const dom_addClass: typeof addClass;
declare const dom_addTransition: typeof addTransition;
declare const dom_closest: typeof closest;
declare const dom_copyToClipboard: typeof copyToClipboard;
declare const dom_createElement: typeof createElement;
declare const dom_delegate: typeof delegate;
declare const dom_disableForm: typeof disableForm;
declare const dom_enableForm: typeof enableForm;
declare const dom_fadeIn: typeof fadeIn;
declare const dom_fadeOut: typeof fadeOut;
declare const dom_getComputedStyleValue: typeof getComputedStyleValue;
declare const dom_getData: typeof getData;
declare const dom_getElementBorderSize: typeof getElementBorderSize;
declare const dom_getElementContentSize: typeof getElementContentSize;
declare const dom_getElementPaddingSize: typeof getElementPaddingSize;
declare const dom_getElementPosition: typeof getElementPosition;
declare const dom_getElementScrollPosition: typeof getElementScrollPosition;
declare const dom_getElementSize: typeof getElementSize;
declare const dom_getElementViewportPosition: typeof getElementViewportPosition;
declare const dom_getFormFieldValue: typeof getFormFieldValue;
declare const dom_getInnerHTML: typeof getInnerHTML;
declare const dom_getStyle: typeof getStyle;
declare const dom_getTextContent: typeof getTextContent;
declare const dom_hasClass: typeof hasClass;
declare const dom_insertAfter: typeof insertAfter;
declare const dom_insertBefore: typeof insertBefore;
declare const dom_isElementInViewport: typeof isElementInViewport;
declare const dom_isFocusable: typeof isFocusable;
declare const dom_isVisible: typeof isVisible;
declare const dom_matches: typeof matches;
declare const dom_off: typeof off;
declare const dom_on: typeof on;
declare const dom_querySelector: typeof querySelector;
declare const dom_removeClass: typeof removeClass;
declare const dom_removeTransition: typeof removeTransition;
declare const dom_resetForm: typeof resetForm;
declare const dom_serializeForm: typeof serializeForm;
declare const dom_setAttributes: typeof setAttributes;
declare const dom_setData: typeof setData;
declare const dom_setElementScrollPosition: typeof setElementScrollPosition;
declare const dom_setFormFieldValue: typeof setFormFieldValue;
declare const dom_setInnerHTML: typeof setInnerHTML;
declare const dom_setStyle: typeof setStyle;
declare const dom_setStyles: typeof setStyles;
declare const dom_setTextContent: typeof setTextContent;
declare const dom_slideDown: typeof slideDown;
declare const dom_slideUp: typeof slideUp;
declare const dom_toggleClass: typeof toggleClass;
declare namespace dom {
  export { dom_addClass as addClass, dom_addTransition as addTransition, dom_closest as closest, dom_copyToClipboard as copyToClipboard, dom_createElement as createElement, dom_delegate as delegate, dom_disableForm as disableForm, dom_enableForm as enableForm, dom_fadeIn as fadeIn, dom_fadeOut as fadeOut, dom_getComputedStyleValue as getComputedStyleValue, dom_getData as getData, dom_getElementBorderSize as getElementBorderSize, dom_getElementContentSize as getElementContentSize, dom_getElementPaddingSize as getElementPaddingSize, dom_getElementPosition as getElementPosition, dom_getElementScrollPosition as getElementScrollPosition, dom_getElementSize as getElementSize, dom_getElementViewportPosition as getElementViewportPosition, dom_getFormFieldValue as getFormFieldValue, dom_getInnerHTML as getInnerHTML, dom_getStyle as getStyle, dom_getTextContent as getTextContent, dom_hasClass as hasClass, dom_insertAfter as insertAfter, dom_insertBefore as insertBefore, dom_isElementInViewport as isElementInViewport, dom_isFocusable as isFocusable, dom_isVisible as isVisible, dom_matches as matches, dom_off as off, dom_on as on, once$1 as once, dom_querySelector as querySelector, dom_removeClass as removeClass, dom_removeTransition as removeTransition, dom_resetForm as resetForm, dom_serializeForm as serializeForm, dom_setAttributes as setAttributes, dom_setData as setData, dom_setElementScrollPosition as setElementScrollPosition, dom_setFormFieldValue as setFormFieldValue, dom_setInnerHTML as setInnerHTML, dom_setStyle as setStyle, dom_setStyles as setStyles, dom_setTextContent as setTextContent, dom_slideDown as slideDown, dom_slideUp as slideUp, dom_toggleClass as toggleClass };
}

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
declare function readFile(file: File, readAs?: 'text' | 'dataURL' | 'arrayBuffer' | 'binaryString'): Promise<string | ArrayBuffer>;

/**
 * 将内容保存为文件并下载到本地
 *
 * @param content - 要保存的内容，可以是字符串、Blob、ArrayBuffer等
 * @param filename - 保存的文件名
 * @param options - 保存选项
 * @param options.type - 文件MIME类型，默认根据扩展名推断
 * @param options.encoding - 当content为字符串时的编码，默认为'utf-8'
 * @returns 无返回值
 *
 * @example
 * ```ts
 * // 保存文本内容为文件
 * saveFile('Hello, World!', 'hello.txt');
 *
 * // 保存JSON数据
 * const data = { name: 'John', age: 30 };
 * saveFile(JSON.stringify(data, null, 2), 'data.json');
 *
 * // 保存CSV数据
 * const csvContent = 'Name,Age\nJohn,30\nJane,25';
 * saveFile(csvContent, 'users.csv', { type: 'text/csv' });
 *
 * // 保存ArrayBuffer为二进制文件
 * const buffer = new ArrayBuffer(8);
 * const view = new Uint8Array(buffer);
 * view.set([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x21, 0x0d, 0x0a]); // "Hello!\r\n"
 * saveFile(buffer, 'binary.bin', { type: 'application/octet-stream' });
 * ```
 */
declare function saveFile(content: string | Blob | ArrayBuffer | ArrayBufferView, filename: string, options?: {
    type?: string;
    encoding?: string;
}): void;

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
declare function fileToBase64(file: File, options?: {
    includePrefix?: boolean;
}): Promise<string>;

/**
 * 将Base64编码字符串转换为文件对象
 *
 * @param base64 - Base64编码的字符串，可以是纯Base64或Data URL格式
 * @param filename - 生成的文件名
 * @param options - 转换选项
 * @param options.type - 文件MIME类型，默认根据Data URL或文件扩展名推断
 * @returns 转换后的File对象
 *
 * @example
 * ```ts
 * // 从纯Base64创建文件
 * const pdfBase64 = 'JVBERi0xLjcKJeLjz9MKNSAwIG...'; // PDF文件的Base64编码
 * const pdfFile = base64ToFile(pdfBase64, 'document.pdf');
 * console.log(pdfFile.size, pdfFile.type); // File对象的大小和类型
 *
 * // 从Data URL创建文件
 * const imgDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAA...';
 * const imgFile = base64ToFile(imgDataUrl, 'image.png');
 *
 * // 指定文件类型
 * const textBase64 = btoa('Hello, World!');
 * const textFile = base64ToFile(textBase64, 'hello.txt', { type: 'text/plain' });
 * ```
 */
declare function base64ToFile(base64: string, filename: string, options?: {
    type?: string;
}): File;

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
declare function getFileExtension(filename: string, options?: {
    toLowerCase?: boolean;
    includeDot?: boolean;
}): string;

/**
 * 检查文件类型是否符合指定的允许类型
 *
 * @param file - 要检查的文件对象或文件名
 * @param allowedTypes - 允许的MIME类型或文件扩展名数组
 * @returns 如果文件类型符合允许列表则返回true，否则返回false
 *
 * @example
 * ```ts
 * // 检查文件对象
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', () => {
 *   const file = fileInput.files?.[0];
 *   if (file) {
 *     // 检查是否为图片
 *     const isImage = isValidFileType(file, ['image/jpeg', 'image/png', 'image/gif']);
 *     console.log('是否为允许的图片格式:', isImage);
 *   }
 * });
 *
 * // 根据文件名检查
 * const isValidDocument = isValidFileType('report.pdf', ['.pdf', '.doc', '.docx']);
 * console.log('是否为有效文档:', isValidDocument); // true
 *
 * // 混合类型和扩展名检查
 * const isValid = isValidFileType('data.xlsx', ['application/pdf', '.xlsx', '.csv']);
 * console.log('是否为有效文件类型:', isValid); // true
 * ```
 */
declare function isValidFileType(file: File | string, allowedTypes: string[]): boolean;

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
declare function getFileSize(file: File, options?: {
    formatted?: boolean;
    precision?: number;
    locale?: string | string[];
}): string | number;

/**
 * 文件操作相关工具函数
 * @packageDocumentation
 */

declare const file_base64ToFile: typeof base64ToFile;
declare const file_fileToBase64: typeof fileToBase64;
declare const file_getFileExtension: typeof getFileExtension;
declare const file_getFileSize: typeof getFileSize;
declare const file_isValidFileType: typeof isValidFileType;
declare const file_readFile: typeof readFile;
declare const file_saveFile: typeof saveFile;
declare namespace file {
  export { file_base64ToFile as base64ToFile, file_fileToBase64 as fileToBase64, file_getFileExtension as getFileExtension, file_getFileSize as getFileSize, file_isValidFileType as isValidFileType, file_readFile as readFile, file_saveFile as saveFile };
}

/**
 * 创建一个防抖函数，该函数延迟调用原函数，直到上一次被调用后经过指定的时间
 * 常用于处理连续触发的事件，如输入框输入、窗口调整大小等
 * @param func - 要防抖的函数
 * @param wait - 延迟时间（毫秒）
 * @param immediate - 是否在延迟开始前调用函数，默认为false
 * @returns 防抖处理后的函数
 * @example
 * ```ts
 * // 基本用法，延迟300ms执行
 * const debouncedFn = debounce(() => {
 *   console.log('处理搜索请求');
 * }, 300);
 *
 * // 在输入事件中使用
 * inputElement.addEventListener('input', debouncedFn);
 *
 * // 立即执行，然后等待300ms才能再次执行
 * const immediateFunc = debounce(() => {
 *   console.log('立即执行');
 * }, 300, true);
 * ```
 */
declare function debounce$2<T extends (...args: any[]) => any>(func: T, wait?: number, immediate?: boolean): T & {
    cancel: () => void;
};
/**
 * 取消防抖函数的执行
 * @param debouncedFn - 通过debounce创建的防抖函数
 * @example
 * ```ts
 * const debouncedFn = debounce(() => console.log('Debounced'), 300);
 *
 * // 取消定时器，阻止函数执行
 * cancelDebounce(debouncedFn);
 * ```
 */
declare function cancelDebounce(debouncedFn: Function): void;

/**
 * 创建一个节流函数，限制函数在指定的时间内只能被调用一次
 * 常用于处理频繁触发的事件，如滚动事件、鼠标移动等
 * @param func - 要节流的函数
 * @param wait - 等待时间（毫秒）
 * @param options - 配置选项
 * @param options.leading - 是否在开始时立即执行一次，默认为true
 * @param options.trailing - 是否在结束时再执行一次，默认为true
 * @returns 节流处理后的函数
 * @example
 * ```ts
 * // 基本用法，每200ms最多执行一次
 * const throttledScroll = throttle(() => {
 *   console.log('处理滚动事件');
 * }, 200);
 *
 * // 在滚动事件中使用
 * window.addEventListener('scroll', throttledScroll);
 *
 * // 自定义选项：开始时不执行，结束时执行一次
 * const customThrottle = throttle(() => {
 *   console.log('自定义节流');
 * }, 300, { leading: false, trailing: true });
 * ```
 */
declare function throttle$2<T extends (...args: any[]) => any>(func: T, wait?: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> | undefined;
/**
 * 取消节流函数的执行
 * @param throttledFn - 通过throttle创建的节流函数
 * @example
 * ```ts
 * const throttledFn = throttle(() => console.log('Throttled'), 300);
 *
 * // 取消定时器，阻止尾部函数执行
 * cancelThrottle(throttledFn);
 * ```
 */
declare function cancelThrottle(throttledFn: Function): void;

/**
 * 创建一个只执行一次的函数
 * 确保函数无论被调用多少次，只会执行一次，并返回第一次执行的结果
 *
 * @param func - 要执行一次的函数
 * @returns 包装后的函数，只会执行一次
 * @example
 * ```ts
 * // 基本用法
 * const initialize = once(() => {
 *   console.log('初始化操作，只会执行一次');
 *   return { initialized: true };
 * });
 *
 * const result1 = initialize(); // 输出: '初始化操作，只会执行一次'
 * const result2 = initialize(); // 不会再次输出
 *
 * console.log(result1 === result2); // true, 返回相同的结果
 * ```
 */
declare function once<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T>;

/**
 * 创建一个会缓存结果的函数
 * 对于相同的参数，函数只会计算一次，后续调用直接从缓存返回结果
 *
 * @param func - 要缓存结果的函数
 * @param resolver - 可选的函数，用于计算缓存的键。默认使用第一个参数作为键
 * @returns 缓存化后的函数
 * @example
 * ```ts
 * // 基本用法 - 缓存耗时计算
 * const fibonacci = memoize((n: number): number => {
 *   if (n <= 1) return n;
 *   return fibonacci(n - 1) + fibonacci(n - 2);
 * });
 *
 * console.time('first');
 * fibonacci(40); // 首次计算耗时较长
 * console.timeEnd('first');
 *
 * console.time('second');
 * fibonacci(40); // 从缓存返回结果，几乎立即完成
 * console.timeEnd('second');
 *
 * // 使用自定义键生成函数
 * const calculateArea = memoize(
 *   (width: number, height: number) => width * height,
 *   (width, height) => `${width}x${height}` // 自定义键
 * );
 * ```
 */
declare function memoize<T extends (...args: any[]) => any>(func: T, resolver?: (...args: Parameters<T>) => string | number): (...args: Parameters<T>) => ReturnType<T>;

/**
 * 函数柯里化，将接受多个参数的函数转换为接受单个参数的函数序列
 *
 * @param func - 要柯里化的函数
 * @param arity - 可选的参数数量，默认为函数的参数长度
 * @returns 柯里化后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = curry(add);
 *
 * curriedAdd(1)(2)(3); // 返回 6
 * curriedAdd(1, 2)(3); // 也返回 6
 * curriedAdd(1)(2, 3); // 也返回 6
 * curriedAdd(1, 2, 3); // 也返回 6
 *
 * // 指定参数数量
 * const multiply = (...args: number[]) => args.reduce((a, b) => a * b, 1);
 * const curriedMultiply = curry(multiply, 3);
 *
 * curriedMultiply(2)(3)(4); // 返回 24
 * ```
 */
declare function curry<T extends (...args: any[]) => any>(func: T, arity?: number): (...args: any[]) => any;

/**
 * 函数组合，从右到左组合多个函数
 * 组合函数方向为：compose(f, g, h)(x) 等同于 f(g(h(x)))
 *
 * @param funcs - 要组合的函数列表，从右到左执行
 * @returns 组合后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add10 = (x: number) => x + 10;
 * const multiply2 = (x: number) => x * 2;
 * const toString = (x: number) => `结果是: ${x}`;
 *
 * // 组合函数：toString(multiply2(add10(5)))
 * const calculate = compose(toString, multiply2, add10);
 *
 * calculate(5); // 返回 "结果是: 30"
 *
 * // 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
 * ```
 */
declare function compose<R>(...funcs: Array<(arg: any) => any>): (arg: any) => R;

/**
 * 函数管道，从左到右组合多个函数
 * 管道函数方向为：pipe(f, g, h)(x) 等同于 h(g(f(x)))
 * 与compose相反，pipe是从左到右执行函数
 *
 * @param funcs - 要组合的函数列表，从左到右执行
 * @returns 组合后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add10 = (x: number) => x + 10;
 * const multiply2 = (x: number) => x * 2;
 * const toString = (x: number) => `结果是: ${x}`;
 *
 * // 组合函数：toString(multiply2(add10(5)))
 * const calculate = pipe(add10, multiply2, toString);
 *
 * calculate(5); // 返回 "结果是: 30"
 *
 * // 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
 * ```
 */
declare function pipe<R>(...funcs: Array<(arg: any) => any>): (arg: any) => R;

/**
 * 延迟指定时间
 * 提供一个Promise，在指定的毫秒数后解析
 *
 * @param ms - 延迟的毫秒数
 * @returns 返回一个Promise，在指定时间后解析
 * @example
 * ```ts
 * // 基本用法
 * async function demo() {
 *   console.log('开始');
 *   await sleep(2000); // 暂停2秒
 *   console.log('2秒后继续执行');
 * }
 *
 * // 在循环中使用
 * async function processItems(items: any[]) {
 *   for (const item of items) {
 *     processItem(item);
 *     await sleep(300); // 每次处理后暂停300毫秒
 *   }
 * }
 * ```
 */
declare function sleep(ms: number): Promise<void>;

/**
 * 函数操作相关工具函数
 * @packageDocumentation
 */

declare const func_cancelDebounce: typeof cancelDebounce;
declare const func_cancelThrottle: typeof cancelThrottle;
declare const func_compose: typeof compose;
declare const func_curry: typeof curry;
declare const func_memoize: typeof memoize;
declare const func_once: typeof once;
declare const func_pipe: typeof pipe;
declare const func_sleep: typeof sleep;
declare namespace func {
  export { func_cancelDebounce as cancelDebounce, func_cancelThrottle as cancelThrottle, func_compose as compose, func_curry as curry, debounce$2 as debounce, func_memoize as memoize, func_once as once, func_pipe as pipe, func_sleep as sleep, throttle$2 as throttle };
}

/**
 * 通用请求函数，支持GET和POST等常见请求方法
 *
 * @param url - 请求URL
 * @param options - 请求配置选项
 * @param options.method - 请求方法，默认为'GET'
 * @param options.headers - 请求头
 * @param options.data - 请求数据，用于POST、PUT等方法
 * @param options.timeout - 超时时间（毫秒）
 * @param options.credentials - 是否携带凭证，默认为'same-origin'
 * @returns 返回Promise，resolve为响应数据，reject为错误信息
 *
 * @example
 * ```ts
 * // 基本GET请求
 * request('https://api.example.com/users')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // POST请求发送JSON数据
 * request('https://api.example.com/users', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   data: { name: 'John', age: 30 }
 * }).then(response => console.log(response));
 *
 * // 设置超时
 * request('https://api.example.com/users', { timeout: 5000 })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
declare function request<T = any>(url: string, options?: {
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
    credentials?: RequestCredentials;
}): Promise<T>;

/**
 * 带超时功能的fetch函数
 *
 * @param url - 请求的URL
 * @param options - fetch选项
 * @param timeout - 超时时间（毫秒），默认为10000ms
 * @returns 返回Promise，resolve为Response对象，超时则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * fetchWithTimeout('https://api.example.com/data')
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 自定义超时时间
 * fetchWithTimeout('https://api.example.com/data', {}, 5000)
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 发送POST请求
 * fetchWithTimeout('https://api.example.com/users', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ name: 'John', age: 30 })
 * })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
declare function fetchWithTimeout(url: string, options?: RequestInit, timeout?: number): Promise<Response>;

/**
 * 发送JSONP请求，用于跨域获取数据
 *
 * @param url - 请求URL
 * @param options - 配置选项
 * @param options.callbackParam - 回调参数名，默认为'callback'
 * @param options.callbackName - 自定义回调函数名，默认为自动生成
 * @param options.timeout - 超时时间（毫秒），默认为10000ms
 * @returns 返回Promise，resolve为响应数据，超时或错误则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * jsonp('https://api.example.com/data')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * // 自定义参数
 * jsonp('https://api.example.com/data', {
 *   callbackParam: 'jsonpCallback',
 *   timeout: 5000
 * })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
declare function jsonp<T = any>(url: string, options?: {
    callbackParam?: string;
    callbackName?: string;
    timeout?: number;
}): Promise<T>;

/**
 * 检测URL的可用性和响应时间
 *
 * @param url - 要检测的URL
 * @param options - 配置选项
 * @param options.timeout - 超时时间（毫秒），默认为5000ms
 * @param options.method - 使用的HTTP方法，默认为'HEAD'
 * @returns 返回Promise，resolve为响应时间（毫秒），失败则reject
 *
 * @example
 * ```ts
 * // 基本用法
 * ping('https://example.com')
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 *
 * // 设置更短的超时
 * ping('https://example.com', { timeout: 2000 })
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 *
 * // 使用GET方法代替HEAD
 * ping('https://example.com', { method: 'GET' })
 *   .then(time => console.log(`响应时间: ${time}ms`))
 *   .catch(error => console.error('Ping失败:', error));
 * ```
 */
declare function ping(url: string, options?: {
    timeout?: number;
    method?: 'HEAD' | 'GET';
}): Promise<number>;

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
declare function downloadFile(url: string, options?: {
    filename?: string;
    forceDownload?: boolean;
    headers?: Record<string, string>;
}): Promise<void>;

/**
 * URL 操作相关工具函数
 * @packageDocumentation
 */
/**
 * 解析 URL 参数为对象
 *
 * @param url - 要解析的 URL，默认为当前页面的 URL
 * @returns 包含 URL 参数的对象
 * @example
 * ```ts
 * // 假设 URL 是 https://example.com?name=张三&age=25
 * const params = parseURLParams();
 * console.log(params.name); // '张三'
 * console.log(params.age);  // '25'
 *
 * // 解析指定 URL
 * const params2 = parseURLParams('https://example.com?id=123&type=product');
 * console.log(params2.id);   // '123'
 * console.log(params2.type); // 'product'
 * ```
 */
declare function parseURLParams(url?: string): Record<string, string>;
/**
 * 构建 URL，将参数对象添加到基础 URL
 *
 * @param baseUrl - 基础 URL
 * @param params - 参数对象
 * @returns 组合后的 URL
 * @example
 * ```ts
 * // 基本用法
 * const url = buildURL('https://example.com', {
 *   name: '张三',
 *   age: '25'
 * });
 * console.log(url); // 'https://example.com?name=%E5%BC%A0%E4%B8%89&age=25'
 *
 * // 带有已有参数的 URL
 * const url2 = buildURL('https://example.com?sort=desc', {
 *   page: '1',
 *   limit: '10'
 * });
 * console.log(url2); // 'https://example.com?sort=desc&page=1&limit=10'
 *
 * // 相对路径 URL
 * const url3 = buildURL('/api/users', { id: '123' });
 * console.log(url3); // '/api/users?id=123'
 * ```
 */
declare function buildURL(baseUrl: string, params: Record<string, string>): string;
/**
 * 获取 URL 的相对路径
 *
 * @param url - 要处理的 URL，默认为当前页面的 URL
 * @returns URL 的相对路径
 * @example
 * ```ts
 * // 假设当前页面为 https://example.com/products/123?sort=desc
 * console.log(getURLPath()); // '/products/123'
 *
 * // 处理指定 URL
 * console.log(getURLPath('https://example.com/about/team?id=5')); // '/about/team'
 * ```
 */
declare function getURLPath(url?: string): string;
/**
 * 获取 URL 的域名部分
 *
 * @param url - 要处理的 URL，默认为当前页面的 URL
 * @returns URL 的域名
 * @example
 * ```ts
 * // 假设当前页面为 https://sub.example.com/products
 * console.log(getURLDomain()); // 'sub.example.com'
 *
 * // 处理指定 URL
 * console.log(getURLDomain('https://api.example.org/v1/data')); // 'api.example.org'
 * ```
 */
declare function getURLDomain(url?: string): string;
/**
 * 判断当前页面是否使用 HTTPS 协议
 *
 * @param url - 要检查的 URL，默认为当前页面的 URL
 * @returns 如果是 HTTPS 则返回 true，否则返回 false
 * @example
 * ```ts
 * if (isHTTPS()) {
 *   console.log('当前页面是安全连接');
 * } else {
 *   console.log('当前页面是非安全连接');
 * }
 *
 * // 检查指定 URL
 * console.log(isHTTPS('https://example.com')); // true
 * console.log(isHTTPS('http://example.com'));  // false
 * ```
 */
declare function isHTTPS(url?: string): boolean;
/**
 * 从 URL 中提取文件名
 *
 * @param url - 要处理的 URL
 * @returns URL 中的文件名
 * @example
 * ```ts
 * console.log(getFileNameFromURL('https://example.com/documents/report.pdf'));
 * // 'report.pdf'
 *
 * console.log(getFileNameFromURL('https://example.com/images/photo.jpg?size=large'));
 * // 'photo.jpg'
 * ```
 */
declare function getFileNameFromURL(url: string): string;
/**
 * 检查 URL 是否为绝对 URL
 *
 * @param url - 要检查的 URL
 * @returns 如果是绝对 URL 则返回 true，否则返回 false
 * @example
 * ```ts
 * console.log(isAbsoluteURL('https://example.com/page')); // true
 * console.log(isAbsoluteURL('//example.com/page'));       // true
 * console.log(isAbsoluteURL('/page'));                    // false
 * console.log(isAbsoluteURL('page'));                     // false
 * ```
 */
declare function isAbsoluteURL(url: string): boolean;
/**
 * 合并相对 URL 和基础 URL
 *
 * @param baseURL - 基础 URL
 * @param relativeURL - 相对 URL
 * @returns 合并后的绝对 URL
 * @example
 * ```ts
 * console.log(joinURL('https://example.com', '/api/users'));
 * // 'https://example.com/api/users'
 *
 * console.log(joinURL('https://example.com/api', 'users'));
 * // 'https://example.com/api/users'
 *
 * console.log(joinURL('https://example.com/api/', '/users'));
 * // 'https://example.com/api/users'
 * ```
 */
declare function joinURL(baseURL: string, relativeURL: string): string;

/**
 * 网络操作相关工具函数
 * @packageDocumentation
 */

declare const network_buildURL: typeof buildURL;
declare const network_downloadFile: typeof downloadFile;
declare const network_fetchWithTimeout: typeof fetchWithTimeout;
declare const network_getFileNameFromURL: typeof getFileNameFromURL;
declare const network_getURLDomain: typeof getURLDomain;
declare const network_getURLPath: typeof getURLPath;
declare const network_isAbsoluteURL: typeof isAbsoluteURL;
declare const network_isHTTPS: typeof isHTTPS;
declare const network_joinURL: typeof joinURL;
declare const network_jsonp: typeof jsonp;
declare const network_parseURLParams: typeof parseURLParams;
declare const network_ping: typeof ping;
declare const network_request: typeof request;
declare namespace network {
  export { network_buildURL as buildURL, network_downloadFile as downloadFile, network_fetchWithTimeout as fetchWithTimeout, network_getFileNameFromURL as getFileNameFromURL, network_getURLDomain as getURLDomain, network_getURLPath as getURLPath, network_isAbsoluteURL as isAbsoluteURL, network_isHTTPS as isHTTPS, network_joinURL as joinURL, network_jsonp as jsonp, network_parseURLParams as parseURLParams, network_ping as ping, network_request as request };
}

/**
 * 基础数字操作工具函数
 * @packageDocumentation
 */
/**
 * 检查是否为数字
 * @param value - 要检查的值
 * @returns 是否为数字
 * @example
 * isNumber(123) // true
 * isNumber('123') // false
 */
declare const isNumber$1: (value: unknown) => value is number;
/**
 * 检查是否为整数
 * @param value - 要检查的值
 * @returns 是否为整数
 * @example
 * isInteger(123) // true
 * isInteger(123.45) // false
 */
declare const isInteger$1: (value: number) => boolean;
/**
 * 检查是否为有限数
 * @param value - 要检查的值
 * @returns 是否为有限数
 * @example
 * isFiniteNumber(123) // true
 * isFiniteNumber(Infinity) // false
 */
declare const isFiniteNumber$1: (value: number) => boolean;
/**
 * 检查是否为 NaN
 * @param value - 要检查的值
 * @returns 是否为 NaN
 * @example
 * isNaN(NaN) // true
 * isNaN(123) // false
 */
declare const isNaN$1: (value: number) => boolean;
/**
 * 检查是否为偶数
 * @param value - 要检查的值
 * @returns 是否为偶数
 * @example
 * isEven(123) // false
 * isEven(124) // true
 */
declare const isEven: (value: number) => boolean;
/**
 * 判断数字是否为奇数
 * @param num 要判断的数字
 * @returns 是否为奇数
 */
declare function isOdd(num: number): boolean;
/**
 * 检查是否为质数
 * @param value - 要检查的值
 * @returns 是否为质数
 * @example
 * isPrime(17) // true
 * isPrime(18) // false
 */
declare const isPrime: (value: number) => boolean;

/**
 * 数学运算工具函数
 * @packageDocumentation
 */
/**
 * 获取数字的绝对值
 * @param value - 数字
 * @returns 绝对值
 * @example
 * abs(-123) // 123
 */
declare const abs: (value: number | null | undefined) => number;
/**
 * 获取数字的符号
 * @param value - 数字
 * @returns 符号（1、0 或 -1）
 * @example
 * sign(123) // 1
 * sign(0) // 0
 * sign(-123) // -1
 */
declare const sign: (value: number | null | undefined) => number;
/**
 * 获取数字的平方根
 * @param value - 数字
 * @returns 平方根
 * @example
 * sqrt(16) // 4
 * sqrt(17) // 4.123105625617661
 */
declare const sqrt: (value: number | null | undefined) => number;
/**
 * 获取数字的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * pow(2, 3) // 8
 */
declare const pow: (base: number | null | undefined, exponent: number | null | undefined) => number;
/**
 * 计算两个数的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * gcd(12, 18) // 6
 */
declare function gcd(a: number | null | undefined, b: number | null | undefined): number;
/**
 * 计算两个数的最小公倍数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 最小公倍数
 */
declare function lcm(a: number | null | undefined, b: number | null | undefined): number;
/**
 * 获取数字的位数
 * @param value - 数字
 * @returns 位数
 * @example
 * length(123) // 3
 */
declare const length$1: (value: number | null | undefined) => number;
/**
 * 获取数字的阶乘
 * @param value - 数字
 * @returns 阶乘
 * @example
 * factorial(5) // 120
 */
declare const factorial: (value: number | null | undefined) => number;

/**
 * 进制转换工具函数
 * @packageDocumentation
 */
/**
 * 获取数字的二进制表示
 * @param value - 数字
 * @returns 二进制表示
 * @example
 * toBinary(123) // '1111011'
 */
declare const toBinary: (value: number) => string;
/**
 * 获取数字的八进制表示
 * @param value - 数字
 * @returns 八进制表示
 * @example
 * toOctal(123) // '173'
 */
declare const toOctal: (value: number) => string;
/**
 * 获取数字的十六进制表示
 * @param value - 数字
 * @returns 十六进制表示
 * @example
 * toHex(123) // '7b'
 */
declare const toHex: (value: number) => string;
/**
 * 将二进制字符串转换为数字
 * @param value - 二进制字符串
 * @returns 数字
 * @example
 * fromBinary('1111011') // 123
 */
declare const fromBinary: (value: string) => number;
/**
 * 将八进制字符串转换为数字
 * @param value - 八进制字符串
 * @returns 数字
 * @example
 * fromOctal('173') // 123
 */
declare const fromOctal: (value: string) => number;
/**
 * 将十六进制字符串转换为数字
 * @param value - 十六进制字符串
 * @returns 数字
 * @example
 * fromHex('7b') // 123
 */
declare const fromHex: (value: string) => number;

/**
 * 数字格式化工具函数
 * @packageDocumentation
 */
/**
 * 将数字转换为货币格式
 * @param value - 要格式化的数字
 * @param locale - 地区设置
 * @param options - 格式化选项
 * @returns 格式化后的货币字符串
 * @example
 * toCurrency(1234.56) // '¥1,234.56'
 */
declare const toCurrency: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string;
/**
 * 格式化数字
 * @param value - 要格式化的数字
 * @param locale - 地区设置
 * @param options - 格式化选项
 * @returns 格式化后的数字字符串
 * @example
 * formatNumber(1234.56) // '1,234.56'
 */
declare const formatNumber: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string;
/**
 * 将数字转换为固定小数位数
 * @param value - 要格式化的数字
 * @param digits - 小数位数
 * @returns 格式化后的数字字符串
 * @example
 * toFixed(1234.5678, 2) // '1234.57'
 */
declare const toFixed: (value: number, digits: number) => string;
/**
 * 计算数字的精度
 * @param value - 要计算的数字
 * @returns 精度值
 * @example
 * precision(1234.5678) // 4
 */
declare const precision: (value: number) => number;
/**
 * 解析数字字符串为数字
 * @param value - 要解析的字符串
 * @param options - 解析选项
 * @param options.radix - 进制，默认为10
 * @param options.allowNaN - 是否允许NaN，默认为false
 * @param options.allowInfinity - 是否允许无穷大，默认为false
 * @returns 解析后的数字
 * @example
 * parse('123.45') // 123.45
 * parse('1,234.56') // 1234.56
 * parse('abc') // 0
 * parse('abc', { allowNaN: true }) // NaN
 */
declare function parse(value: string, options?: {
    radix?: number;
    allowNaN?: boolean;
    allowInfinity?: boolean;
}): number;
/**
 * 将数字转换为百分比
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.precision - 保留的小数位数，默认为0
 * @param options.withSymbol - 是否包含百分号，默认为true
 * @returns 百分比字符串
 * @example
 * percentage(0.1234) // '12%'
 * percentage(0.1234, { precision: 2 }) // '12.34%'
 * percentage(0.1234, { withSymbol: false }) // '12'
 */
declare function percentage(value: number, options?: {
    precision?: number;
    withSymbol?: boolean;
}): string;
/**
 * 将数字转换为科学计数法
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.precision - 保留的小数位数，默认为10
 * @param options.notation - 表示法类型，默认为'standard'
 * @returns 科学计数法字符串
 * @example
 * toScientific(1234567) // '1.234567e+6'
 * toScientific(1234567, { precision: 2 }) // '1.23e+6'
 */
declare function toScientific(value: number, options?: {
    precision?: number;
    notation?: 'standard' | 'engineering' | 'compact';
}): string;
/**
 * 将数字转换为中文数字
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.useTraditional - 是否使用繁体字，默认为false
 * @param options.useCapital - 是否使用大写，默认为false
 * @returns 中文数字字符串
 * @example
 * toChineseNumber(1234) // '一千二百三十四'
 * toChineseNumber(1234, { useTraditional: true }) // '一千二百三十四'
 * toChineseNumber(1234, { useCapital: true }) // '壹仟贰佰叁拾肆'
 */
declare function toChineseNumber(value: number, options?: {
    useTraditional?: boolean;
    useCapital?: boolean;
}): string;

/**
 * 随机数生成工具函数
 */
/**
 * 生成指定范围内的随机数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机数
 * @example
 * random(1, 10) // 1-10 之间的随机数
 * random(1, 10, false) // 2-9 之间的随机数
 */
declare function random(min: number, max: number, inclusive?: boolean): number;
/**
 * 生成指定范围内的随机整数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机整数
 * @example
 * randomInt(1, 10) // 1-10 之间的随机整数
 * randomInt(1, 10, false) // 2-9 之间的随机整数
 */
declare function randomInt(min: number, max: number, inclusive?: boolean): number;
/**
 * 生成指定长度的随机数字字符串
 * @param length - 字符串长度
 * @returns 随机数字字符串
 * @example
 * randomDigits(4) // 例如 "3751"
 * randomDigits(6) // 例如 "159374"
 */
declare function randomDigits(length: number): string;
/**
 * 生成UUID v4（随机UUID）
 * @returns UUID字符串
 * @example
 * randomUUID() // 例如 "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 */
declare function randomUUID(): string;
/**
 * 随机打乱数组
 * @param array - 要打乱的数组
 * @returns 打乱后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 2, 5]
 */
declare function shuffle<T>(array: T[]): T[];

/**
 * 数字范围工具函数
 * @packageDocumentation
 */
/**
 * 将数字限制在指定范围内
 * @param value - 要限制的数字
 * @param min - 最小值
 * @param max - 最大值
 * @returns 限制后的数字
 * @example
 * clamp(5, 0, 10) // 5
 * clamp(-1, 0, 10) // 0
 * clamp(11, 0, 10) // 10
 */
declare const clamp: (value: number, min: number, max: number) => number;
/**
 * 将数字四舍五入到指定小数位数
 * @param value - 要四舍五入的数字
 * @param decimals - 小数位数
 * @returns 四舍五入后的数字
 * @example
 * round(3.14159, 2) // 3.14
 */
declare const round: (value: number, decimals?: number) => number;
/**
 * 检查数字是否在指定范围内
 * @param value - 要检查的数字
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 是否在范围内
 * @example
 * inRange(5, 1, 10) // true
 * inRange(5, 1, 5, false) // false
 * inRange(5, 1, 5, true) // true
 */
declare function inRange(value: number, min: number, max: number, inclusive?: boolean): boolean;
/**
 * 线性插值计算
 * @param start - 起始值
 * @param end - 结束值
 * @param t - 插值因子（0-1）
 * @returns 插值结果
 * @example
 * lerp(0, 100, 0.5) // 50
 * lerp(0, 100, 0) // 0
 * lerp(0, 100, 1) // 100
 */
declare function lerp(start: number, end: number, t: number): number;
/**
 * 将数字归一化到指定范围
 * @param value - 要归一化的数字
 * @param min - 最小值
 * @param max - 最大值
 * @param targetMin - 目标最小值，默认为0
 * @param targetMax - 目标最大值，默认为1
 * @returns 归一化后的数字
 * @example
 * normalize(5, 0, 10) // 0.5
 * normalize(5, 0, 10, 0, 100) // 50
 */
declare function normalize(value: number, min: number, max: number, targetMin?: number, targetMax?: number): number;

/**
 * 数据分析相关函数
 */
/**
 * 计算增长率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @returns 增长率
 * @example
 * growthRate(100, 150) // 0.5
 */
declare const growthRate: (initialValue: number | null | undefined, finalValue: number | null | undefined) => number;
/**
 * 计算复合增长率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @param periods - 期数
 * @returns 复合增长率
 * @example
 * compoundGrowthRate(100, 150, 2) // 0.2247
 */
declare const compoundGrowthRate: (initialValue: number | null | undefined, finalValue: number | null | undefined, periods: number | null | undefined) => number;
/**
 * 计算移动平均
 * @param values - 数值数组
 * @param windowSize - 窗口大小
 * @returns 移动平均数组
 * @example
 * movingAverage([1, 2, 3, 4, 5], 3) // [2, 3, 4]
 */
declare const movingAverage: (values: number[] | null | undefined, windowSize: number | null | undefined) => number[];
/**
 * 计算指数移动平均
 * @param values - 数值数组
 * @param alpha - 平滑因子
 * @returns 指数移动平均数组
 * @example
 * exponentialMovingAverage([1, 2, 3, 4, 5], 0.2) // [1, 1.2, 1.56, 2.048, 2.6384]
 */
declare const exponentialMovingAverage: (values: number[] | null | undefined, alpha: number | null | undefined) => number[];
/**
 * 计算趋势
 * @param values - 数值数组
 * @returns 趋势（1: 上升, -1: 下降, 0: 平稳）
 * @example
 * trend([1, 2, 3, 4, 5]) // 1
 * trend([5, 4, 3, 2, 1]) // -1
 */
declare const trend: (values: number[] | null | undefined) => number;
/**
 * 计算分布
 * @param values - 数值数组
 * @param bins - 区间数
 * @returns 分布对象
 * @example
 * distribution([1, 2, 2, 3, 3, 3, 4, 4, 5], 3) // { "1-2": 3, "2-3": 3, "3-4": 3 }
 */
declare const distribution: (values: number[] | null | undefined, bins: number | null | undefined) => Record<string, number>;
/**
 * 计算相关性
 * @param x - X数组
 * @param y - Y数组
 * @returns 相关系数
 * @example
 * correlation([1, 2, 3], [2, 4, 6]) // 1
 */
declare const correlation: (x: number[] | null | undefined, y: number[] | null | undefined) => number;
/**
 * 计算预测值
 * @param values - 数值数组
 * @param periods - 预测期数
 * @returns 预测值数组
 * @example
 * forecast([1, 2, 3, 4, 5], 2) // [6, 7]
 */
declare const forecast: (values: number[] | null | undefined, periods: number | null | undefined) => number[];
/**
 * 计算季节性
 * @param values - 数值数组
 * @param period - 周期
 * @returns 季节性因子数组
 * @example
 * seasonality([1, 2, 1, 2, 1, 2], 2) // [0.5, 1.5]
 */
declare const seasonality: (values: number[] | null | undefined, period: number | null | undefined) => number[];
/**
 * 计算异常值
 * @param values - 数值数组
 * @param threshold - 阈值（标准差的倍数）
 * @returns 异常值数组
 * @example
 * outliers([1, 2, 3, 100, 4, 5], 2) // [100]
 */
declare const outliers: (values: number[] | null | undefined, threshold?: number | null | undefined) => number[];

/**
 * 统计计算相关函数
 */
/**
 * 计算平均值
 * @param numbers - 数字数组
 * @returns 平均值
 * @example
 * mean([1, 2, 3, 4, 5]) // 3
 */
declare const mean: (numbers: number[]) => number;
/**
 * 计算中位数
 * @param numbers - 数字数组
 * @returns 中位数
 * @example
 * median([1, 2, 3, 4, 5]) // 3
 * median([1, 2, 3, 4]) // 2.5
 */
declare const median: (numbers: number[]) => number;
/**
 * 计算众数
 * @param numbers - 数字数组
 * @returns 众数数组
 * @example
 * mode([1, 2, 2, 3, 3, 3]) // [3]
 * mode([1, 2, 2, 3, 3]) // [2, 3]
 */
declare const mode: (numbers: number[]) => number[];
/**
 * 计算方差
 * @param numbers - 数字数组
 * @returns 方差
 * @example
 * variance([1, 2, 3, 4, 5]) // 2
 */
declare const variance: (numbers: number[]) => number;
/**
 * 计算标准差
 * @param numbers - 数字数组
 * @returns 标准差
 * @example
 * standardDeviation([1, 2, 3, 4, 5]) // 1.4142135623730951
 */
declare const standardDeviation: (numbers: number[]) => number;
/**
 * 计算百分位数
 * @param numbers - 数字数组
 * @param percentile - 百分位数 (0-100)
 * @returns 百分位数对应的值
 * @example
 * percentile([1, 2, 3, 4, 5], 50) // 3
 */
declare const percentile: (numbers: number[], percentile: number) => number;
/**
 * 计算四分位数
 * @param numbers - 数字数组
 * @returns 四分位数对象
 * @example
 * quartiles([1, 2, 3, 4, 5]) // { q1: 2, q2: 3, q3: 4 }
 */
declare const quartiles: (numbers: number[]) => {
    q1: number;
    q2: number;
    q3: number;
};
/**
 * 计算偏度
 * @param numbers - 数字数组
 * @returns 偏度
 * @example
 * skewness([1, 2, 3, 4, 5]) // 0
 */
declare const skewness: (numbers: number[]) => number;
/**
 * 计算峰度
 * @param numbers - 数字数组
 * @returns 峰度
 * @example
 * kurtosis([1, 2, 3, 4, 5]) // -1.2
 */
declare const kurtosis: (numbers: number[]) => number;

/**
 * 单位转换相关函数
 * @packageDocumentation
 */
/**
 * 像素转rem
 * @param px - 像素值
 * @param baseFontSize - 基准字体大小
 * @returns rem值
 * @example
 * px2rem(16) // 1
 */
declare const px2rem: (px: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * rem转像素
 * @param rem - rem值
 * @param baseFontSize - 基准字体大小
 * @returns 像素值
 * @example
 * rem2px(1) // 16
 */
declare const rem2px: (rem: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * 像素转vw
 * @param px - 像素值
 * @param viewportWidth - 视口宽度
 * @returns vw值
 * @example
 * px2vw(100) // 10
 */
declare const px2vw: (px: number | null | undefined, viewportWidth?: number | null | undefined) => number;
/**
 * vw转像素
 * @param vw - vw值
 * @param viewportWidth - 视口宽度
 * @returns 像素值
 * @example
 * vw2px(10) // 100
 */
declare const vw2px: (vw: number | null | undefined, viewportWidth?: number | null | undefined) => number;
/**
 * 像素转em
 * @param px - 像素值
 * @param baseFontSize - 基准字体大小
 * @returns em值
 * @example
 * px2em(16) // 1
 */
declare const px2em: (px: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * em转像素
 * @param em - em值
 * @param baseFontSize - 基准字体大小
 * @returns 像素值
 * @example
 * em2px(1) // 16
 */
declare const em2px: (em: number | null | undefined, baseFontSize?: number | null | undefined) => number;
/**
 * 角度转弧度
 * @param degree - 角度
 * @returns 弧度
 * @example
 * degree2radian(180) // Math.PI
 */
declare const degree2radian: (degree: number | null | undefined) => number;
/**
 * 弧度转角度
 * @param radian - 弧度
 * @returns 角度
 * @example
 * radian2degree(Math.PI) // 180
 */
declare const radian2degree: (radian: number | null | undefined) => number;
/**
 * 字节转可读大小
 * @param bytes - 字节数
 * @param precision - 精度
 * @returns 可读大小
 * @example
 * byte2size(1024) // "1.00 KB"
 */
declare const byte2size: (bytes: number | null | undefined, precision?: number | null | undefined) => string;
/**
 * 可读大小转字节
 * @param size - 可读大小
 * @returns 字节数
 * @example
 * size2byte("1 KB") // 1024
 */
declare const size2byte: (size: string | null | undefined) => number;
/**
 * 摄氏度转华氏度
 * @param celsius - 摄氏度
 * @returns 华氏度
 * @example
 * celsius2fahrenheit(0) // 32
 */
declare const celsius2fahrenheit: (celsius: number | null | undefined) => number;
/**
 * 华氏度转摄氏度
 * @param fahrenheit - 华氏度
 * @returns 摄氏度
 * @example
 * fahrenheit2celsius(32) // 0
 */
declare const fahrenheit2celsius: (fahrenheit: number | null | undefined) => number;
/**
 * 千克转磅
 * @param kg - 千克
 * @returns 磅
 * @example
 * kg2lb(1) // 2.20462
 */
declare const kg2lb: (kg: number | null | undefined) => number;
/**
 * 磅转千克
 * @param lb - 磅
 * @returns 千克
 * @example
 * lb2kg(1) // 0.453592
 */
declare const lb2kg: (lb: number | null | undefined) => number;
/**
 * 公里转英里
 * @param km - 公里
 * @returns 英里
 * @example
 * km2mile(1) // 0.621371
 */
declare const km2mile: (km: number | null | undefined) => number;
/**
 * 英里转公里
 * @param mile - 英里
 * @returns 公里
 * @example
 * mile2km(1) // 1.60934
 */
declare const mile2km: (mile: number | null | undefined) => number;

/**
 * 金融计算工具函数
 * @packageDocumentation
 */
/**
 * 计算复利
 * @param principal - 本金
 * @param rate - 年利率
 * @param time - 时间（年）
 * @param frequency - 复利频率（每年复利次数），默认为1
 * @returns 最终金额
 * @example
 * compound(1000, 0.05, 1) // 1050
 * compound(1000, 0.05, 1, 12) // 1051.16
 */
declare function compound(principal: number, rate: number, time: number, frequency?: number): number;
/**
 * 计算复利利息
 * @param principal - 本金
 * @param rate - 年利率
 * @param time - 时间（年）
 * @param frequency - 复利频率（每年复利次数）
 * @returns 利息
 * @example
 * compoundInterest(1000, 0.05, 1) // 50
 * compoundInterest(1000, 0.05, 1, 12) // 51.16
 */
declare const compoundInterest: (principal: number, rate: number, time: number, frequency?: number) => number;
/**
 * 计算现值
 * @param futureValue - 未来值
 * @param rate - 年利率
 * @param time - 时间（年）
 * @returns 现值
 * @example
 * presentValue(1050, 0.05, 1) // 1000
 */
declare const presentValue: (futureValue: number, rate: number, time: number) => number;
/**
 * 计算未来值
 * @param presentValue - 现值
 * @param rate - 年利率
 * @param time - 时间（年）
 * @returns 未来值
 * @example
 * futureValue(1000, 0.05, 1) // 1050
 */
declare const futureValue: (presentValue: number, rate: number, time: number) => number;
/**
 * 计算年化收益率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @param time - 时间（年）
 * @returns 年化收益率
 * @example
 * annualReturnRate(1000, 1050, 1) // 0.05
 */
declare const annualReturnRate: (initialValue: number, finalValue: number, time: number) => number;
/**
 * 计算折扣
 * @param originalPrice - 原价
 * @param discountRate - 折扣率（0-1）
 * @returns 折扣后的价格
 * @example
 * discount(100, 0.2) // 80
 * discount(100, 0.5) // 50
 */
declare function discount(originalPrice: number, discountRate: number): number;
/**
 * 计算折扣率
 * @param originalPrice - 原价
 * @param discountedPrice - 折扣后价格
 * @returns 折扣率
 * @example
 * discountRate(100, 80) // 0.2
 */
declare const discountRate: (originalPrice: number, discountedPrice: number) => number;
/**
 * 计算税额
 * @param amount - 金额
 * @param taxRate - 税率（0-1）
 * @returns 税额
 * @example
 * tax(1000, 0.1) // 100
 * tax(1000, 0.2) // 200
 */
declare function tax(amount: number, taxRate: number): number;
/**
 * 计算税后收入
 * @param income - 收入
 * @param taxRate - 税率
 * @returns 税后收入
 * @example
 * afterTax(10000, 0.1) // 9000
 */
declare const afterTax: (income: number, taxRate: number) => number;
/**
 * 计算贷款月供
 * @param principal - 贷款金额
 * @param annualRate - 年利率
 * @param months - 贷款期限（月）
 * @returns 月供金额
 * @example
 * loan(100000, 0.05, 12) // 8560.75
 */
declare function loan(principal: number, annualRate: number, months: number): number;
/**
 * 计算贷款总利息
 * @param principal - 贷款金额
 * @param rate - 年利率
 * @param months - 贷款期限（月）
 * @returns 总利息
 * @example
 * loanInterest(100000, 0.05, 12) // 2729
 */
declare const loanInterest: (principal: number, rate: number, months: number) => number;
/**
 * 计算折旧
 * @param cost - 资产原值
 * @param salvage - 残值
 * @param life - 使用年限
 * @param period - 计算期数
 * @param method - 折旧方法，默认为'straight'
 * @returns 折旧金额
 * @example
 * depreciation(10000, 1000, 5, 1) // 1800
 * depreciation(10000, 1000, 5, 1, 'declining') // 2000
 */
declare function depreciation(cost: number, salvage: number, life: number, period: number, method?: 'straight' | 'declining'): number;
/**
 * 计算投资回报率
 * @param initialInvestment - 初始投资
 * @param finalValue - 最终价值
 * @returns 投资回报率
 * @example
 * roi(1000, 1500) // 0.5
 */
declare const roi: (initialInvestment: number, finalValue: number) => number;
/**
 * 计算内部收益率
 * @param cashFlows - 现金流数组
 * @returns 内部收益率
 * @example
 * irr([-1000, 100, 200, 300, 400]) // 0.1
 */
declare const irr: (cashFlows: number[]) => number;

/**
 * 性能优化相关函数
 * @packageDocumentation
 */
/**
 * 优化数字精度
 * @param value - 要优化的数字
 * @param precision - 精度
 * @returns 优化后的数字
 * @example
 * optimizePrecision(1.23456789, 2) // 1.23
 */
declare function optimizePrecision(value: number, precision: number): number;
/**
 * 缓存计算结果
 * @param fn - 要缓存的函数
 * @returns 缓存后的函数
 * @example
 * const cachedFn = cache((x) => x * x);
 * cachedFn(2) // 4
 * cachedFn(2) // 4 (从缓存返回)
 */
declare function cache<T extends (...args: any[]) => any>(fn: T): T;
/**
 * 节流函数
 * @param fn - 要节流的函数
 * @param wait - 等待时间（毫秒）
 * @returns 节流后的函数
 * @example
 * const throttledFn = throttle((x) => console.log(x), 1000);
 * throttledFn(1); // 立即执行
 * throttledFn(2); // 被节流
 */
declare function throttle$1<T extends (...args: any[]) => any>(fn: T, wait: number): T;
/**
 * 优化四舍五入
 * @param value - 要优化的数字
 * @param decimals - 小数位数
 * @returns 优化后的数字
 * @example
 * optimizeRound(1.23456789, 2) // 1.23
 */
declare function optimizeRound(value: number, decimals: number): number;
/**
 * 防抖函数
 * @param fn - 要防抖的函数
 * @param wait - 等待时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * const debouncedFn = debounce((x) => console.log(x), 1000);
 * debouncedFn(1); // 延迟执行
 * debouncedFn(2); // 取消之前的执行
 */
declare function debounce$1<T extends (...args: any[]) => any>(fn: T, wait: number): T;

/**
 * 动画计算相关函数
 * @packageDocumentation
 */
/**
 * 线性插值计算（使用 range.ts 中的实现）
 */
/**
 * 缓动函数
 * @param t - 时间（0-1）
 * @param type - 缓动类型
 * @returns 缓动后的值
 * @example
 * ease(0.5, 'linear') // 0.5
 * ease(0.5, 'easeIn') // 0.25
 */
declare function ease(t: number, type?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'): number;
/**
 * 弹簧动画
 * @param t - 时间（0-1）
 * @param options - 弹簧选项
 * @param options.tension - 张力，默认为170
 * @param options.friction - 摩擦力，默认为26
 * @returns 弹簧动画值
 * @example
 * spring(0.5) // 0.5
 * spring(0.5, { tension: 200, friction: 20 }) // 0.5
 */
declare function spring(t: number, options?: {
    tension?: number;
    friction?: number;
}): number;
/**
 * 贝塞尔曲线
 * @param t - 时间（0-1）
 * @param p0 - 起点
 * @param p1 - 控制点1
 * @param p2 - 控制点2
 * @param p3 - 终点
 * @returns 贝塞尔曲线上的点
 * @example
 * bezier(0.5, 0, 0.5, 0.5, 1) // 0.5
 */
declare function bezier(t: number, p0: number, p1: number, p2: number, p3: number): number;

/**
 * 特殊数字相关函数
 * @packageDocumentation
 */
/**
 * 生成斐波那契数列
 * @param n - 数列长度
 * @returns 斐波那契数列
 * @example
 * ```typescript
 * fibonacci(5) // [0, 1, 1, 2, 3]
 * ```
 */
declare function fibonacci(n: number | null | undefined): number[];
/**
 * 计算阶乘（使用 math.ts 中的实现）
 * @param n - 要计算阶乘的数
 * @returns 阶乘结果
 * @example
 * ```typescript
 * factorial(5) // 120
 * ```
 */
/**
 * 判断是否为质数（使用 basic.ts 中的实现）
 * @param num - 要判断的数字
 * @returns 是否为质数
 * @example
 * ```typescript
 * isPrime(17) // true
 * isPrime(4) // false
 * ```
 */
/**
 * 生成质数序列
 * @param start - 起始值
 * @param end - 结束值
 * @returns 质数序列
 * @example
 * ```typescript
 * primes(1, 10) // [2, 3, 5, 7]
 * ```
 */
declare function primes(start: number | null | undefined, end: number | null | undefined): number[];
/**
 * 数学常数
 */
declare const constants: {
    /**
     * 圆周率
     */
    PI: number;
    /**
     * 自然对数的底数
     */
    E: number;
    /**
     * 黄金比例
     */
    PHI: number;
    /**
     * 欧拉-马歇罗尼常数
     */
    GAMMA: number;
    /**
     * 卡塔兰常数
     */
    CATALAN: number;
    /**
     * 阿佩里常数
     */
    APERY: number;
    /**
     * 孪生素数常数
     */
    TWIN_PRIME: number;
    /**
     * 拉马努金-索尔德纳常数
     */
    RAMANUJAN_SOLDNER: number;
    /**
     * 格罗斯曼常数
     */
    GROSCHMANN: number;
    /**
     * 波特常数
     */
    PORTER: number;
    /**
     * 自然对数的底数
     */
    LN2: number;
    /**
     * 自然对数的底数
     */
    LN10: number;
    /**
     * 以e为底的2的对数
     */
    LOG2E: number;
    /**
     * 以e为底的10的对数
     */
    LOG10E: number;
    /**
     * 1/2的平方根
     */
    SQRT1_2: number;
    /**
     * 2的平方根
     */
    SQRT2: number;
};

/**
 * 数字处理工具函数
 * @packageDocumentation
 */

declare const number_abs: typeof abs;
declare const number_afterTax: typeof afterTax;
declare const number_annualReturnRate: typeof annualReturnRate;
declare const number_bezier: typeof bezier;
declare const number_byte2size: typeof byte2size;
declare const number_cache: typeof cache;
declare const number_celsius2fahrenheit: typeof celsius2fahrenheit;
declare const number_clamp: typeof clamp;
declare const number_compound: typeof compound;
declare const number_compoundGrowthRate: typeof compoundGrowthRate;
declare const number_compoundInterest: typeof compoundInterest;
declare const number_constants: typeof constants;
declare const number_correlation: typeof correlation;
declare const number_degree2radian: typeof degree2radian;
declare const number_depreciation: typeof depreciation;
declare const number_discount: typeof discount;
declare const number_discountRate: typeof discountRate;
declare const number_distribution: typeof distribution;
declare const number_ease: typeof ease;
declare const number_em2px: typeof em2px;
declare const number_exponentialMovingAverage: typeof exponentialMovingAverage;
declare const number_factorial: typeof factorial;
declare const number_fahrenheit2celsius: typeof fahrenheit2celsius;
declare const number_fibonacci: typeof fibonacci;
declare const number_forecast: typeof forecast;
declare const number_formatNumber: typeof formatNumber;
declare const number_fromBinary: typeof fromBinary;
declare const number_fromHex: typeof fromHex;
declare const number_fromOctal: typeof fromOctal;
declare const number_futureValue: typeof futureValue;
declare const number_gcd: typeof gcd;
declare const number_growthRate: typeof growthRate;
declare const number_inRange: typeof inRange;
declare const number_irr: typeof irr;
declare const number_isEven: typeof isEven;
declare const number_isOdd: typeof isOdd;
declare const number_isPrime: typeof isPrime;
declare const number_kg2lb: typeof kg2lb;
declare const number_km2mile: typeof km2mile;
declare const number_kurtosis: typeof kurtosis;
declare const number_lb2kg: typeof lb2kg;
declare const number_lcm: typeof lcm;
declare const number_lerp: typeof lerp;
declare const number_loan: typeof loan;
declare const number_loanInterest: typeof loanInterest;
declare const number_mean: typeof mean;
declare const number_median: typeof median;
declare const number_mile2km: typeof mile2km;
declare const number_mode: typeof mode;
declare const number_movingAverage: typeof movingAverage;
declare const number_normalize: typeof normalize;
declare const number_optimizePrecision: typeof optimizePrecision;
declare const number_optimizeRound: typeof optimizeRound;
declare const number_outliers: typeof outliers;
declare const number_parse: typeof parse;
declare const number_percentage: typeof percentage;
declare const number_percentile: typeof percentile;
declare const number_pow: typeof pow;
declare const number_precision: typeof precision;
declare const number_presentValue: typeof presentValue;
declare const number_primes: typeof primes;
declare const number_px2em: typeof px2em;
declare const number_px2rem: typeof px2rem;
declare const number_px2vw: typeof px2vw;
declare const number_quartiles: typeof quartiles;
declare const number_radian2degree: typeof radian2degree;
declare const number_random: typeof random;
declare const number_randomDigits: typeof randomDigits;
declare const number_randomInt: typeof randomInt;
declare const number_randomUUID: typeof randomUUID;
declare const number_rem2px: typeof rem2px;
declare const number_roi: typeof roi;
declare const number_round: typeof round;
declare const number_seasonality: typeof seasonality;
declare const number_shuffle: typeof shuffle;
declare const number_sign: typeof sign;
declare const number_size2byte: typeof size2byte;
declare const number_skewness: typeof skewness;
declare const number_spring: typeof spring;
declare const number_sqrt: typeof sqrt;
declare const number_standardDeviation: typeof standardDeviation;
declare const number_tax: typeof tax;
declare const number_toBinary: typeof toBinary;
declare const number_toChineseNumber: typeof toChineseNumber;
declare const number_toCurrency: typeof toCurrency;
declare const number_toFixed: typeof toFixed;
declare const number_toHex: typeof toHex;
declare const number_toOctal: typeof toOctal;
declare const number_toScientific: typeof toScientific;
declare const number_trend: typeof trend;
declare const number_variance: typeof variance;
declare const number_vw2px: typeof vw2px;
declare namespace number {
  export { number_abs as abs, number_afterTax as afterTax, number_annualReturnRate as annualReturnRate, number_bezier as bezier, number_byte2size as byte2size, number_cache as cache, number_celsius2fahrenheit as celsius2fahrenheit, number_clamp as clamp, number_compound as compound, number_compoundGrowthRate as compoundGrowthRate, number_compoundInterest as compoundInterest, number_constants as constants, number_correlation as correlation, debounce$1 as debounce, number_degree2radian as degree2radian, number_depreciation as depreciation, number_discount as discount, number_discountRate as discountRate, number_distribution as distribution, number_ease as ease, number_em2px as em2px, number_exponentialMovingAverage as exponentialMovingAverage, number_factorial as factorial, number_fahrenheit2celsius as fahrenheit2celsius, number_fibonacci as fibonacci, number_forecast as forecast, number_formatNumber as formatNumber, number_fromBinary as fromBinary, number_fromHex as fromHex, number_fromOctal as fromOctal, number_futureValue as futureValue, number_gcd as gcd, number_growthRate as growthRate, number_inRange as inRange, number_irr as irr, number_isEven as isEven, isFiniteNumber$1 as isFiniteNumber, isInteger$1 as isInteger, isNaN$1 as isNaN, isNumber$1 as isNumber, number_isOdd as isOdd, number_isPrime as isPrime, number_kg2lb as kg2lb, number_km2mile as km2mile, number_kurtosis as kurtosis, number_lb2kg as lb2kg, number_lcm as lcm, length$1 as length, number_lerp as lerp, number_loan as loan, number_loanInterest as loanInterest, number_mean as mean, number_median as median, number_mile2km as mile2km, number_mode as mode, number_movingAverage as movingAverage, number_normalize as normalize, number_optimizePrecision as optimizePrecision, number_optimizeRound as optimizeRound, number_outliers as outliers, number_parse as parse, number_percentage as percentage, number_percentile as percentile, number_pow as pow, number_precision as precision, number_presentValue as presentValue, number_primes as primes, number_px2em as px2em, number_px2rem as px2rem, number_px2vw as px2vw, number_quartiles as quartiles, number_radian2degree as radian2degree, number_random as random, number_randomDigits as randomDigits, number_randomInt as randomInt, number_randomUUID as randomUUID, number_rem2px as rem2px, number_roi as roi, number_round as round, number_seasonality as seasonality, number_shuffle as shuffle, number_sign as sign, number_size2byte as size2byte, number_skewness as skewness, number_spring as spring, number_sqrt as sqrt, number_standardDeviation as standardDeviation, number_tax as tax, throttle$1 as throttle, number_toBinary as toBinary, number_toChineseNumber as toChineseNumber, number_toCurrency as toCurrency, number_toFixed as toFixed, number_toHex as toHex, number_toOctal as toOctal, number_toScientific as toScientific, number_trend as trend, number_variance as variance, number_vw2px as vw2px };
}

/**
 * 深拷贝对象或数组，创建一个完全独立的副本
 *
 * @param obj - 要深拷贝的对象或数组
 * @returns 深拷贝后的对象或数组
 * @example
 * ```ts
 * // 基本用法
 * const original = {
 *   name: '张三',
 *   age: 30,
 *   address: { city: '北京', district: '海淀' },
 *   hobbies: ['阅读', '旅行']
 * };
 *
 * const copy = deepClone(original);
 * copy.address.city = '上海';
 * copy.hobbies.push('游泳');
 *
 * console.log(original.address.city); // 输出: '北京'
 * console.log(original.hobbies); // 输出: ['阅读', '旅行']
 *
 * // 处理循环引用
 * const obj: any = { name: '张三' };
 * obj.self = obj;
 * const cloned = deepClone(obj);
 * console.log(cloned.self === cloned); // 输出: true
 * ```
 */
declare function deepClone<T>(obj: T): T;

/**
 * 深度合并对象的选项接口
 */
interface DeepMergeOptions {
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
 * 深度合并对象
 * @param target - 目标对象
 * @param source - 源对象
 * @param rest - 其他对象和选项
 * @returns 合并后的对象
 */
declare function deepMerge<T extends Record<string, any>>(target?: T | Record<string, any>, source?: Partial<T> | Record<string, any>, ...rest: Array<Partial<T> | Record<string, any> | DeepMergeOptions>): T;

/**
 * 从对象中选取指定的属性，创建一个新对象
 *
 * @param obj - 源对象，可以为 null 或 undefined
 * @param keys - 要选取的属性名数组
 * @returns 包含选定属性的新对象，如果源对象为 null 或 undefined，则返回空对象
 * @example
 * ```ts
 * // 基本用法
 * const user = { id: 1, name: '张三', age: 30, email: 'zhangsan@example.com' };
 *
 * const userBasic = pick(user, ['id', 'name']);
 * console.log(userBasic); // 输出: { id: 1, name: '张三' }
 *
 * // 处理不存在的属性
 * const result = pick(user, ['id', 'role']);
 * console.log(result); // 输出: { id: 1 }
 *
 * // 处理 null 或 undefined
 * const nullResult = pick(null, ['id']);
 * console.log(nullResult); // 输出: {}
 * ```
 */
declare function pick<T extends object | null | undefined, K extends keyof NonNullable<T>>(obj: T, keys: K[]): T extends object ? Pick<T, K> : Record<string, never>;

/**
 * 从对象中排除指定的属性，返回新对象
 * @param obj 源对象
 * @param keys 要排除的属性名数组，支持点号路径
 * @returns 新对象
 * @example
 * ```ts
 * const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
 * omit(obj, ['a', 'b.c']); // { b: { d: 3 }, e: 4 }
 * ```
 */
declare function omit<T extends Record<string, any>, K extends (keyof T | string)[]>(obj: T, keys: K): Partial<T>;

/**
 * 深度比较两个值是否相等
 *
 * @param value - 第一个要比较的值
 * @param other - 第二个要比较的值
 * @returns 如果两个值深度相等则返回true，否则返回false
 * @example
 * ```ts
 * // 基本类型比较
 * isEqual(1, 1);                      // 返回: true
 * isEqual('a', 'a');                  // 返回: true
 * isEqual(null, null);                // 返回: true
 * isEqual(undefined, undefined);      // 返回: true
 * isEqual(NaN, NaN);                  // 返回: true
 *
 * // 对象比较
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); // 返回: true
 * isEqual({a: 1, b: 2}, {b: 2, a: 1}); // 返回: true (属性顺序不影响结果)
 * isEqual({a: 1}, {a: '1'});           // 返回: false
 *
 * // 数组比较
 * isEqual([1, 2, 3], [1, 2, 3]);      // 返回: true
 * isEqual([1, 2, 3], [3, 2, 1]);      // 返回: false
 *
 * // 嵌套对象比较
 * isEqual(
 *   {a: 1, b: {c: 3}},
 *   {a: 1, b: {c: 3}}
 * );  // 返回: true
 *
 * // Set比较
 * isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])); // 返回: true
 * isEqual(new Set([1, 2, 3]), new Set([3, 2, 1])); // 返回: true (Set元素顺序不影响结果)
 *
 * // Map比较
 * isEqual(
 *   new Map([['a', 1], ['b', 2]]),
 *   new Map([['a', 1], ['b', 2]])
 * ); // 返回: true
 *
 * // 混合类型比较
 * isEqual(
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] },
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] }
 * ); // 返回: true
 * ```
 */
declare function isEqual(value: any, other: any): boolean;

/**
 * 根据路径获取对象中的值，支持点表示法和数组路径
 *
 * @param obj - 要获取值的对象
 * @param path - 路径字符串或路径数组
 * @param defaultValue - 当路径不存在时返回的默认值
 * @returns 路径对应的值或默认值
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * get(obj, 'a.b.c');          // 返回: 42
 * get(obj, 'a.b');            // 返回: { c: 42 }
 * get(obj, 'a.x.y', 'none');  // 返回: 'none'
 *
 * // 使用数组路径
 * get(obj, ['a', 'b', 'c']);  // 返回: 42
 *
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * get(arr, 'users[1].name');  // 返回: '李四'
 * get(arr, ['users', 1, 'name']); // 返回: '李四'
 * ```
 */
declare function get<T = any>(obj: any, path: string | (string | number)[], defaultValue?: T): T;
/**
 * 根据路径获取对象中的值
 * @param obj - 源对象
 * @param path - 路径，可以是字符串（用点号分隔）或字符串数组
 * @returns 路径对应的值，如果路径不存在则返回 undefined
 * @example
 * ```ts
 * const obj = { a: { b: { c: 1 } } };
 * getValueByPath(obj, 'a.b.c'); // 1
 * getValueByPath(obj, ['a', 'b', 'c']); // 1
 * getValueByPath(obj, 'a.d.e'); // undefined
 * ```
 */
declare const getValueByPath: <T = any>(obj: Record<string, any>, path: string | string[]) => T | undefined;

/**
 * 根据路径设置对象中的值，支持点表示法和数组路径
 *
 * @param obj - 要设置值的对象
 * @param path - 路径字符串或路径数组
 * @param value - 要设置的值
 * @returns 修改后的原始对象
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * set(obj, 'a.b.c', 100);           // obj.a.b.c 变为 100
 * set(obj, 'a.x.y', 'hello');       // 创建不存在的路径，obj.a.x.y 变为 'hello'
 *
 * // 使用数组路径
 * set(obj, ['a', 'b', 'd'], true);  // obj.a.b.d 变为 true
 *
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * set(arr, 'users[1].name', '王五'); // arr.users[1].name 变为 '王五'
 * set(arr, ['users', 1, 'name'], '王五'); // 同上
 *
 * // 创建数组
 * const data = {};
 * set(data, 'items[0]', 'first');    // data 变为 { items: ['first'] }
 * ```
 */
declare function set<T extends object>(obj: T, path: string | (string | number)[], value: any): T;

/**
 * 对象操作相关工具函数
 * @packageDocumentation
 */

type object_DeepMergeOptions = DeepMergeOptions;
declare const object_deepClone: typeof deepClone;
declare const object_deepMerge: typeof deepMerge;
declare const object_get: typeof get;
declare const object_getValueByPath: typeof getValueByPath;
declare const object_isEqual: typeof isEqual;
declare const object_omit: typeof omit;
declare const object_pick: typeof pick;
declare const object_set: typeof set;
declare namespace object {
  export { type object_DeepMergeOptions as DeepMergeOptions, object_deepClone as deepClone, object_deepMerge as deepMerge, object_get as get, object_getValueByPath as getValueByPath, object_isEqual as isEqual, object_omit as omit, object_pick as pick, object_set as set };
}

/**
 * localStorage 操作工具函数
 * 包含设置、获取、删除 localStorage 数据的功能
 * @packageDocumentation
 */
/**
 * 检查浏览器是否支持 localStorage
 *
 * @returns 如果支持返回 true，否则返回 false
 */
declare function isLocalStorageSupported(): boolean;
/**
 * 获取 localStorage 数据
 *
 * @param key - 要获取数据的键名
 * @returns 获取到的数据
 */
declare function getLocalStorage<T>(key: string, defaultValue: T): T;
/**
 * 设置 localStorage 数据
 *
 * @param key - 要设置数据的键名
 * @param value - 要设置的数据
 */
declare function setLocalStorage<T>(key: string, value: T): void;
/**
 * 删除 localStorage 数据
 *
 * @param key - 要删除数据的键名
 */
declare function removeLocalStorage(key: string): void;
/**
 * 清除 localStorage 所有数据
 */
declare function clearLocalStorage(): void;
/**
 * 获取 localStorage 所有数据
 *
 * @returns 获取到的所有数据，键值对对象
 */
declare function getAllLocalStorage(): Record<string, any>;
/**
 * 获取 localStorage 数据数量
 *
 * @returns 获取到的数据数量
 */
declare function getLocalStorageLength(): number;
/**
 * 获取 localStorage 所有键名
 *
 * @returns 获取到的所有键名
 */
declare function getAllLocalStorageKeys(): string[];
/**
 * 获取 localStorage 所有值
 *
 * @returns 获取到的所有值数组
 * @example
 * ```ts
 * const allValues = getAllLocalStorageValues();
 * console.log('所有存储的值:', allValues);
 * ```
 */
declare function getAllLocalStorageValues(): any[];

/**
 * 会话存储(sessionStorage)相关工具函数
 * @packageDocumentation
 */
/**
 * 检查浏览器是否支持 sessionStorage
 *
 * @returns 如果支持返回 true，否则返回 false
 * @example
 * ```ts
 * if (isSessionStorageSupported()) {
 *   // 使用 sessionStorage
 * } else {
 *   // 使用备选方案
 * }
 * ```
 */
declare function isSessionStorageSupported(): boolean;
/**
 * 从 sessionStorage 获取数据
 *
 * @param key - 存储的键名
 * @param defaultValue - 当键不存在时返回的默认值
 * @returns 存储的值或默认值
 * @example
 * ```ts
 * // 获取一个简单值
 * const tabId = getSessionStorage('currentTabId', '1');
 *
 * // 获取一个对象
 * const pageState = getSessionStorage('pageState', { scrollPos: 0 });
 * ```
 */
declare function getSessionStorage<T>(key: string, defaultValue: T): T;
/**
 * 将数据存储到 sessionStorage
 *
 * @param key - 存储的键名
 * @param value - 要存储的值
 * @returns 存储是否成功
 * @example
 * ```ts
 * // 存储一个简单值
 * setSessionStorage('currentTabId', '2');
 *
 * // 存储一个对象
 * setSessionStorage('pageState', { scrollPos: 250, activeSection: 'comments' });
 * ```
 */
declare function setSessionStorage<T>(key: string, value: T): boolean;
/**
 * 从 sessionStorage 中移除数据
 *
 * @param key - 要移除的键名
 * @returns 移除是否成功
 * @example
 * ```ts
 * // 移除一个存储项
 * removeSessionStorage('pageState');
 * ```
 */
declare function removeSessionStorage(key: string): boolean;
/**
 * 清空所有 sessionStorage 数据
 *
 * @returns 清空是否成功
 * @example
 * ```ts
 * // 清空所有会话存储
 * clearSessionStorage();
 * ```
 */
declare function clearSessionStorage(): boolean;

/**
 * Cookie 操作相关工具函数
 * @packageDocumentation
 */
/**
 * Cookie 选项配置
 */
interface CookieOptions {
    /** Cookie 过期时间（天） */
    expires?: number;
    /** Cookie 路径 */
    path?: string;
    /** Cookie 域名 */
    domain?: string;
    /** 是否仅通过 HTTPS 传输 */
    secure?: boolean;
    /** 控制 Cookie 可通过哪些方式访问 */
    sameSite?: 'strict' | 'lax' | 'none';
}
/**
 * 设置 Cookie
 *
 * @param name - Cookie 名称
 * @param value - Cookie 值
 * @param options - Cookie 选项
 * @example
 * ```ts
 * // 简单设置
 * setCookie('username', 'zhangsan');
 *
 * // 设置带有过期时间的 Cookie（7天后过期）
 * setCookie('rememberMe', 'true', { expires: 7 });
 *
 * // 设置安全的 Cookie
 * setCookie('authToken', 'xyz123', {
 *   expires: 1,
 *   path: '/',
 *   domain: 'example.com',
 *   secure: true,
 *   sameSite: 'strict'
 * });
 * ```
 */
declare function setCookie(name: string, value: string, options?: CookieOptions): void;
/**
 * 获取指定名称的 Cookie 值
 *
 * @param name - Cookie 名称
 * @returns Cookie 值，如果不存在则返回空字符串
 * @example
 * ```ts
 * // 获取用户名
 * const username = getCookie('username');
 * if (username) {
 *   console.log(`欢迎回来，${username}`);
 * }
 * ```
 */
declare function getCookie(name: string): string;
/**
 * 删除指定的 Cookie
 *
 * @param name - Cookie 名称
 * @param options - Cookie 选项（主要用于指定路径和域名）
 * @example
 * ```ts
 * // 简单删除
 * deleteCookie('username');
 *
 * // 删除带有特定路径和域名的 Cookie
 * deleteCookie('authToken', { path: '/', domain: 'example.com' });
 * ```
 */
declare function deleteCookie(name: string, options?: Pick<CookieOptions, 'path' | 'domain'>): void;
/**
 * 检查 Cookie 是否存在
 *
 * @param name - Cookie 名称
 * @returns 如果 Cookie 存在则返回 true，否则返回 false
 * @example
 * ```ts
 * if (hasCookie('authToken')) {
 *   // 用户已登录
 * } else {
 *   // 重定向到登录页
 * }
 * ```
 */
declare function hasCookie(name: string): boolean;
/**
 * 获取所有 Cookie，以对象形式返回
 *
 * @returns 包含所有 Cookie 的对象
 * @example
 * ```ts
 * const allCookies = getAllCookies();
 * console.log('当前站点的所有 Cookie:', allCookies);
 * ```
 */
declare function getAllCookies(): Record<string, string>;

/**
 * 存储管理相关工具函数
 * 包含localStorage、sessionStorage、cookie操作功能
 * @packageDocumentation
 */

type storage_CookieOptions = CookieOptions;
declare const storage_clearLocalStorage: typeof clearLocalStorage;
declare const storage_clearSessionStorage: typeof clearSessionStorage;
declare const storage_deleteCookie: typeof deleteCookie;
declare const storage_getAllCookies: typeof getAllCookies;
declare const storage_getAllLocalStorage: typeof getAllLocalStorage;
declare const storage_getAllLocalStorageKeys: typeof getAllLocalStorageKeys;
declare const storage_getAllLocalStorageValues: typeof getAllLocalStorageValues;
declare const storage_getCookie: typeof getCookie;
declare const storage_getLocalStorage: typeof getLocalStorage;
declare const storage_getLocalStorageLength: typeof getLocalStorageLength;
declare const storage_getSessionStorage: typeof getSessionStorage;
declare const storage_hasCookie: typeof hasCookie;
declare const storage_isLocalStorageSupported: typeof isLocalStorageSupported;
declare const storage_isSessionStorageSupported: typeof isSessionStorageSupported;
declare const storage_removeLocalStorage: typeof removeLocalStorage;
declare const storage_removeSessionStorage: typeof removeSessionStorage;
declare const storage_setCookie: typeof setCookie;
declare const storage_setLocalStorage: typeof setLocalStorage;
declare const storage_setSessionStorage: typeof setSessionStorage;
declare namespace storage {
  export { type storage_CookieOptions as CookieOptions, storage_clearLocalStorage as clearLocalStorage, storage_clearSessionStorage as clearSessionStorage, storage_deleteCookie as deleteCookie, storage_getAllCookies as getAllCookies, storage_getAllLocalStorage as getAllLocalStorage, storage_getAllLocalStorageKeys as getAllLocalStorageKeys, storage_getAllLocalStorageValues as getAllLocalStorageValues, storage_getCookie as getCookie, storage_getLocalStorage as getLocalStorage, storage_getLocalStorageLength as getLocalStorageLength, storage_getSessionStorage as getSessionStorage, storage_hasCookie as hasCookie, storage_isLocalStorageSupported as isLocalStorageSupported, storage_isSessionStorageSupported as isSessionStorageSupported, storage_removeLocalStorage as removeLocalStorage, storage_removeSessionStorage as removeSessionStorage, storage_setCookie as setCookie, storage_setLocalStorage as setLocalStorage, storage_setSessionStorage as setSessionStorage };
}

/**
 * 基础字符串操作工具函数
 * @packageDocumentation
 */
/**
 * 判断字符串是否为空
 * @param str - 要检查的字符串
 * @returns 是否为空
 * @example
 * ```ts
 * isEmpty(''); // true
 * isEmpty(' '); // false
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * ```
 */
declare function isEmpty$1(str: string | null | undefined): boolean;
/**
 * 判断字符串是否非空
 * @param str - 要检查的字符串
 * @returns 是否非空
 * @example
 * ```ts
 * isNotEmpty(''); // false
 * isNotEmpty(' '); // true
 * isNotEmpty('hello'); // true
 * ```
 */
declare function isNotEmpty(str: string | null | undefined): boolean;
/**
 * 获取字符串长度
 * @param str - 要获取长度的字符串
 * @returns 字符串长度
 * @example
 * ```ts
 * length('hello'); // 5
 * length('你好'); // 2
 * length(''); // 0
 * ```
 */
declare function length(str: string | null | undefined): number;
/**
 * 反转字符串
 * @param str - 要反转的字符串
 * @returns 反转后的字符串
 * @example
 * ```ts
 * reverse('hello'); // 'olleh'
 * reverse('你好'); // '好你'
 * ```
 */
declare function reverse(str: string | null | undefined): string;
/**
 * 重复字符串
 * @param str - 要重复的字符串
 * @param count - 重复次数
 * @returns 重复后的字符串
 * @example
 * ```ts
 * repeat('hello', 2); // 'hellohello'
 * repeat('a', 3); // 'aaa'
 * ```
 */
declare function repeat(str: string | null | undefined, count: number): string;

/**
 * 字符串转换工具函数
 * @packageDocumentation
 */
/**
 * 首字母大写
 * @param str - 要处理的字符串
 * @returns 首字母大写的字符串
 * @example
 * ```ts
 * capitalize('hello'); // 'Hello'
 * capitalize('hello world'); // 'Hello world'
 * ```
 */
declare function capitalize(str: string | null | undefined): string;
/**
 * 每个单词首字母大写
 * @param str - 要处理的字符串
 * @param delimiter - 单词分隔符，默认为空格
 * @returns 每个单词首字母大写的字符串
 * @example
 * ```ts
 * capitalizeWords('hello world'); // 'Hello World'
 * capitalizeWords('hello-world', '-'); // 'Hello-World'
 * ```
 */
declare function capitalizeWords(str: string | null | undefined, delimiter?: string): string;
/**
 * 将连字符分隔的字符串转换为驼峰式
 * @param str - 要转换的字符串
 * @returns 驼峰式字符串
 * @example
 * ```ts
 * camelize('hello-world'); // 'helloWorld'
 * camelize('background-color'); // 'backgroundColor'
 * ```
 */
declare function camelize(str: string | null | undefined): string;
/**
 * 将驼峰命名法转换为横线连接命名法
 * @param str - 要转换的字符串
 * @returns 横线连接命名字符串
 * @example
 * ```ts
 * dasherize('helloWorld'); // 'hello-world'
 * dasherize('backgroundColor'); // 'background-color'
 * ```
 */
declare function dasherize(str: string | null | undefined): string;
/**
 * 转换为数字
 * @param str - 要转换的字符串
 * @returns 转换后的数字
 * @example
 * ```ts
 * toNumber('123'); // 123
 * toNumber('12.34'); // 12.34
 * toNumber('abc'); // NaN
 * ```
 */
declare function toNumber(str: string | null | undefined): number;
/**
 * 转换为布尔值
 * @param str - 要转换的字符串
 * @returns 转换后的布尔值
 * @example
 * ```ts
 * toBoolean('true'); // true
 * toBoolean('false'); // false
 * toBoolean('1'); // true
 * toBoolean('0'); // false
 * ```
 */
declare function toBoolean$1(str: string | null | undefined): boolean;

/**
 * 字符串截取和填充工具函数
 * @packageDocumentation
 */
/**
 * 截断字符串，超出指定长度的部分用省略号替代
 * @param str - 要处理的字符串
 * @param length - 最大长度
 * @param omission - 省略符号，默认为'...'
 * @param countingChineseCharsAsTwo - 是否将中文字符按两个字符计算，默认为false
 * @returns 处理后的字符串
 * @example
 * ```ts
 * truncate('Hello World', 5); // 'Hello...'
 * truncate('Hello World', 8, '…'); // 'Hello Wo…'
 * truncate('你好世界', 4); // '你好世界'
 * truncate('你好世界', 4, '...', true); // '你好...'
 * ```
 */
declare function truncate(str: string, length: number, omission?: string, countingChineseCharsAsTwo?: boolean): string;
/**
 * 左侧填充
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param padStr - 填充字符，默认为空格
 * @returns 填充后的字符串
 * @example
 * ```ts
 * padStart('123', 5); // '  123'
 * padStart('123', 5, '0'); // '00123'
 * ```
 */
declare function padStart(str: string, length: number, padStr?: string): string;
/**
 * 右侧填充
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param padStr - 填充字符，默认为空格
 * @returns 填充后的字符串
 * @example
 * ```ts
 * padEnd('123', 5); // '123  '
 * padEnd('123', 5, '0'); // '12300'
 * ```
 */
declare function padEnd(str: string, length: number, padStr?: string): string;
/**
 * 从左侧截取
 * @param str - 要截取的字符串
 * @param length - 截取长度
 * @returns 截取后的字符串
 * @example
 * ```ts
 * left('Hello World', 5); // 'Hello'
 * left('你好世界', 2); // '你好'
 * ```
 */
declare function left(str: string, length: number): string;
/**
 * 从右侧截取
 * @param str - 要截取的字符串
 * @param length - 截取长度
 * @returns 截取后的字符串
 * @example
 * ```ts
 * right('Hello World', 5); // 'World'
 * right('你好世界', 2); // '世界'
 * ```
 */
declare function right(str: string, length: number): string;

/**
 * 字符串查找和替换工具函数
 * @packageDocumentation
 */
/**
 * 查找子字符串
 * @param str - 要搜索的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 子字符串的位置，如果未找到则返回-1
 * @example
 * ```ts
 * indexOf('Hello World', 'World'); // 6
 * indexOf('Hello World', 'xyz'); // -1
 * ```
 */
declare function indexOf(str: string, searchStr: string): number;
/**
 * 替换字符串
 * @param str - 要处理的字符串
 * @param searchStr - 要替换的子字符串
 * @param replaceStr - 替换后的字符串
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replace('Hello World', 'World', 'JavaScript'); // 'Hello JavaScript'
 * ```
 */
declare function replace$1(str: string, searchStr: string, replaceStr: string): string;
/**
 * 替换所有匹配项
 * @param str - 要处理的字符串
 * @param searchStr - 要替换的子字符串
 * @param replaceStr - 替换后的字符串
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replaceAll('Hello World World', 'World', 'JavaScript'); // 'Hello JavaScript JavaScript'
 * ```
 */
declare function replaceAll$1(str: string, searchStr: string, replaceStr: string): string;
/**
 * 是否包含子字符串
 * @param str - 要搜索的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否包含
 * @example
 * ```ts
 * includes('Hello World', 'World'); // true
 * includes('Hello World', 'xyz'); // false
 * ```
 */
declare function includes(str: string, searchStr: string): boolean;
/**
 * 是否以某字符串开头
 * @param str - 要检查的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否以该字符串开头
 * @example
 * ```ts
 * startsWith('Hello World', 'Hello'); // true
 * startsWith('Hello World', 'World'); // false
 * ```
 */
declare function startsWith(str: string, searchStr: string): boolean;
/**
 * 是否以某字符串结尾
 * @param str - 要检查的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否以该字符串结尾
 * @example
 * ```ts
 * endsWith('Hello World', 'World'); // true
 * endsWith('Hello World', 'Hello'); // false
 * ```
 */
declare function endsWith(str: string, searchStr: string): boolean;

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
declare function trim(str: string | null | undefined): string;
/**
 * 去除左侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimLeft('  Hello World'); // 'Hello World'
 * ```
 */
declare function trimLeft(str: string | null | undefined): string;
/**
 * 去除右侧空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * trimRight('Hello World  '); // 'Hello World'
 * ```
 */
declare function trimRight(str: string | null | undefined): string;
/**
 * 去除多余空格
 * @param str - 要处理的字符串
 * @returns 处理后的字符串
 * @example
 * ```ts
 * normalizeSpace('Hello   World'); // 'Hello World'
 * ```
 */
declare function normalizeSpace(str: string | null | undefined): string;
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
declare function format(template: string | null | undefined, ...args: any[]): string;

/**
 * 字符串验证工具函数
 * @packageDocumentation
 */
/**
 * 是否为数字字符串
 * @param str - 要验证的字符串
 * @returns 是否为数字字符串
 * @example
 * ```ts
 * isNumeric('123'); // true
 * isNumeric('12.34'); // true
 * isNumeric('abc'); // false
 * ```
 */
declare function isNumeric(str: string | null | undefined): boolean;
/**
 * 是否为字母字符串
 * @param str - 要验证的字符串
 * @returns 是否为字母字符串
 * @example
 * ```ts
 * isAlpha('abc'); // true
 * isAlpha('123'); // false
 * isAlpha('abc123'); // false
 * ```
 */
declare function isAlpha(str: string | null | undefined): boolean;
/**
 * 是否为字母数字字符串
 * @param str - 要验证的字符串
 * @returns 是否为字母数字字符串
 * @example
 * ```ts
 * isAlphanumeric('abc123'); // true
 * isAlphanumeric('abc'); // true
 * isAlphanumeric('123'); // true
 * isAlphanumeric('abc-123'); // false
 * ```
 */
declare function isAlphanumeric(str: string | null | undefined): boolean;
/**
 * 是否为邮箱
 * @param str - 要验证的字符串
 * @returns 是否为邮箱
 * @example
 * ```ts
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 * ```
 */
declare function isEmail(str: string | null | undefined): boolean;
/**
 * 是否为URL
 * @param str - 要验证的字符串
 * @returns 是否为URL
 * @example
 * ```ts
 * isUrl('https://example.com'); // true
 * isUrl('http://example.com'); // true
 * isUrl('ftp://example.com'); // true
 * isUrl('invalid-url'); // false
 * ```
 */
declare function isUrl(str: string | null | undefined): boolean;
/**
 * 是否为手机号
 * @param str - 要验证的字符串
 * @returns 是否为手机号
 * @example
 * ```ts
 * isPhone('13812345678'); // true
 * isPhone('138-1234-5678'); // true
 * isPhone('invalid-phone'); // false
 * ```
 */
declare function isPhone(str: string | null | undefined): boolean;

/**
 * 字符串编码和解码工具函数
 * @packageDocumentation
 */
/**
 * URL编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeUrl('Hello World'); // 'Hello%20World'
 * encodeUrl('你好世界'); // '%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'
 * ```
 */
declare function encodeUrl(str: string | null | undefined): string;
/**
 * URL解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeUrl('Hello%20World'); // 'Hello World'
 * decodeUrl('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'); // '你好世界'
 * ```
 */
declare function decodeUrl(str: string | null | undefined): string;
/**
 * Base64编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
 * ```
 */
declare function encodeBase64(str: string | null | undefined): string;
/**
 * Base64解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
 * ```
 */
declare function decodeBase64(str: string | null | undefined): string;
/**
 * HTML编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeHtml('<div>Hello & World</div>'); // '&lt;div&gt;Hello &amp; World&lt;/div&gt;'
 * ```
 */
declare function encodeHtml(str: string | null | undefined): string;
/**
 * HTML解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;'); // '<div>Hello & World</div>'
 * ```
 */
declare function decodeHtml(str: string | null | undefined): string;

/**
 * 字符串分割和合并工具函数
 * @packageDocumentation
 */
/**
 * 分割字符串
 * @param str - 要分割的字符串
 * @param separator - 分隔符
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * split('Hello World', ' '); // ['Hello', 'World']
 * split('a,b,c', ','); // ['a', 'b', 'c']
 * ```
 */
declare function split$1(str: string, separator: string): string[];
/**
 * 合并字符串数组
 * @param arr - 要合并的字符串数组
 * @param separator - 分隔符
 * @returns 合并后的字符串
 * @example
 * ```ts
 * join(['Hello', 'World'], ' '); // 'Hello World'
 * join(['a', 'b', 'c'], ','); // 'a,b,c'
 * ```
 */
declare function join(arr: string[], separator: string): string;
/**
 * 按长度分割
 * @param str - 要分割的字符串
 * @param length - 每个部分的长度
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * splitByLength('Hello World', 5); // ['Hello', ' Worl', 'd']
 * splitByLength('123456', 2); // ['12', '34', '56']
 * ```
 */
declare function splitByLength(str: string, length: number): string[];
/**
 * 按行分割
 * @param str - 要分割的字符串
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * splitLines('Hello\nWorld'); // ['Hello', 'World']
 * splitLines('Hello\r\nWorld'); // ['Hello', 'World']
 * ```
 */
declare function splitLines(str: string): string[];

/**
 * 字符串统计工具函数
 * @packageDocumentation
 */
/**
 * 统计子字符串出现次数
 * @param str - 要统计的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 出现次数
 * @example
 * ```ts
 * count('Hello World World', 'World'); // 2
 * count('aaa', 'aa'); // 2
 * ```
 */
declare function count(str: string, searchStr: string): number;
/**
 * 统计字符出现频率
 * @param str - 要统计的字符串
 * @returns 字符出现频率对象
 * @example
 * ```ts
 * frequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
 * ```
 */
declare function frequency(str: string): Record<string, number>;
/**
 * 获取字符串中的数字
 * @param str - 要处理的字符串
 * @returns 数字数组
 * @example
 * ```ts
 * getNumbers('abc123def456'); // [123, 456]
 * getNumbers('1.23, 4.56'); // [1.23, 4.56]
 * ```
 */
declare function getNumbers(str: string): number[];
/**
 * 获取字符串中的字母
 * @param str - 要处理的字符串
 * @returns 字母数组
 * @example
 * ```ts
 * getLetters('abc123def456'); // ['a', 'b', 'c', 'd', 'e', 'f']
 * getLetters('Hello World'); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
 * ```
 */
declare function getLetters(str: string): string[];

/**
 * 字符串比较工具函数
 * @packageDocumentation
 */
/**
 * 比较两个字符串
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 比较结果：-1 表示 str1 < str2，0 表示相等，1 表示 str1 > str2
 * @example
 * ```ts
 * compare('a', 'b'); // -1
 * compare('b', 'a'); // 1
 * compare('a', 'a'); // 0
 * ```
 */
declare function compare(str1: string | null | undefined, str2: string | null | undefined): number;
/**
 * 忽略大小写比较两个字符串
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 比较结果：-1 表示 str1 < str2，0 表示相等，1 表示 str1 > str2
 * @example
 * ```ts
 * compareIgnoreCase('a', 'B'); // -1
 * compareIgnoreCase('B', 'a'); // 1
 * compareIgnoreCase('a', 'A'); // 0
 * ```
 */
declare function compareIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): number;
/**
 * 检查两个字符串是否相等
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 是否相等
 * @example
 * ```ts
 * equals('hello', 'hello'); // true
 * equals('hello', 'world'); // false
 * ```
 */
declare function equals(str1: string | null | undefined, str2: string | null | undefined): boolean;
/**
 * 忽略大小写检查两个字符串是否相等
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 是否相等
 * @example
 * ```ts
 * equalsIgnoreCase('hello', 'HELLO'); // true
 * equalsIgnoreCase('hello', 'world'); // false
 * ```
 */
declare function equalsIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): boolean;
/**
 * 计算两个字符串的相似度（Levenshtein距离）
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 相似度（0-1之间的数值）
 * @example
 * ```ts
 * similarity('hello', 'hallo'); // 0.8
 * similarity('world', 'word'); // 0.8
 * ```
 */
declare function similarity(str1: string | null | undefined, str2: string | null | undefined): number;

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
declare function uuid(): string;
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
declare function randomId(length?: number, options?: {
    prefix?: string;
    charset?: string;
}): string;

/**
 * 字符串工具函数集合
 * @packageDocumentation
 */

declare const string_camelize: typeof camelize;
declare const string_capitalize: typeof capitalize;
declare const string_capitalizeWords: typeof capitalizeWords;
declare const string_compare: typeof compare;
declare const string_compareIgnoreCase: typeof compareIgnoreCase;
declare const string_count: typeof count;
declare const string_dasherize: typeof dasherize;
declare const string_decodeBase64: typeof decodeBase64;
declare const string_decodeHtml: typeof decodeHtml;
declare const string_decodeUrl: typeof decodeUrl;
declare const string_encodeBase64: typeof encodeBase64;
declare const string_encodeHtml: typeof encodeHtml;
declare const string_encodeUrl: typeof encodeUrl;
declare const string_endsWith: typeof endsWith;
declare const string_equals: typeof equals;
declare const string_equalsIgnoreCase: typeof equalsIgnoreCase;
declare const string_format: typeof format;
declare const string_frequency: typeof frequency;
declare const string_getLetters: typeof getLetters;
declare const string_getNumbers: typeof getNumbers;
declare const string_includes: typeof includes;
declare const string_indexOf: typeof indexOf;
declare const string_isAlpha: typeof isAlpha;
declare const string_isAlphanumeric: typeof isAlphanumeric;
declare const string_isEmail: typeof isEmail;
declare const string_isNotEmpty: typeof isNotEmpty;
declare const string_isNumeric: typeof isNumeric;
declare const string_isPhone: typeof isPhone;
declare const string_isUrl: typeof isUrl;
declare const string_join: typeof join;
declare const string_left: typeof left;
declare const string_length: typeof length;
declare const string_normalizeSpace: typeof normalizeSpace;
declare const string_padEnd: typeof padEnd;
declare const string_padStart: typeof padStart;
declare const string_randomId: typeof randomId;
declare const string_repeat: typeof repeat;
declare const string_reverse: typeof reverse;
declare const string_right: typeof right;
declare const string_similarity: typeof similarity;
declare const string_splitByLength: typeof splitByLength;
declare const string_splitLines: typeof splitLines;
declare const string_startsWith: typeof startsWith;
declare const string_toNumber: typeof toNumber;
declare const string_trim: typeof trim;
declare const string_trimLeft: typeof trimLeft;
declare const string_trimRight: typeof trimRight;
declare const string_truncate: typeof truncate;
declare const string_uuid: typeof uuid;
declare namespace string {
  export { string_camelize as camelize, string_capitalize as capitalize, string_capitalizeWords as capitalizeWords, string_compare as compare, string_compareIgnoreCase as compareIgnoreCase, string_count as count, string_dasherize as dasherize, string_decodeBase64 as decodeBase64, string_decodeHtml as decodeHtml, string_decodeUrl as decodeUrl, string_encodeBase64 as encodeBase64, string_encodeHtml as encodeHtml, string_encodeUrl as encodeUrl, string_endsWith as endsWith, string_equals as equals, string_equalsIgnoreCase as equalsIgnoreCase, string_format as format, string_frequency as frequency, string_getLetters as getLetters, string_getNumbers as getNumbers, string_includes as includes, string_indexOf as indexOf, string_isAlpha as isAlpha, string_isAlphanumeric as isAlphanumeric, string_isEmail as isEmail, isEmpty$1 as isEmpty, string_isNotEmpty as isNotEmpty, string_isNumeric as isNumeric, string_isPhone as isPhone, string_isUrl as isUrl, string_join as join, string_left as left, string_length as length, string_normalizeSpace as normalizeSpace, string_padEnd as padEnd, string_padStart as padStart, string_randomId as randomId, string_repeat as repeat, replace$1 as replace, replaceAll$1 as replaceAll, string_reverse as reverse, string_right as right, string_similarity as similarity, split$1 as split, string_splitByLength as splitByLength, string_splitLines as splitLines, string_startsWith as startsWith, toBoolean$1 as toBoolean, string_toNumber as toNumber, string_trim as trim, string_trimLeft as trimLeft, string_trimRight as trimRight, string_truncate as truncate, string_uuid as uuid };
}

/**
 * 类型检测工具函数
 */
/**
 * 获取值的类型
 *
 * @param value - 要检查的值
 * @returns 类型字符串
 * @example
 * ```ts
 * getType(123); // 返回: 'number'
 * getType('abc'); // 返回: 'string'
 * getType(true); // 返回: 'boolean'
 * getType(null); // 返回: 'null'
 * getType(undefined); // 返回: 'undefined'
 * getType([]); // 返回: 'array'
 * getType({}); // 返回: 'object'
 * getType(new Date()); // 返回: 'date'
 * getType(/\d+/); // 返回: 'regexp'
 * getType(new Map()); // 返回: 'map'
 * getType(new Set()); // 返回: 'set'
 * getType(() => {}); // 返回: 'function'
 * ```
 */
declare const getType: (value: unknown) => string;
/**
 * 检查值是否为指定类型
 *
 * @param value - 要检查的值
 * @param type - 类型字符串或类型字符串数组
 * @returns 如果值是指定类型则返回true，否则返回false
 * @example
 * ```ts
 * isType(123, 'number'); // 返回: true
 * isType('abc', 'string'); // 返回: true
 * isType([], 'array'); // 返回: true
 * isType(null, 'null'); // 返回: true
 * isType(123, ['string', 'number']); // 返回: true
 * isType(undefined, ['null', 'undefined']); // 返回: true
 * ```
 */
declare const isType: (value: unknown, type: string | string[]) => boolean;
/**
 * 检查值是否为 undefined
 * @param value - 要检查的值
 * @returns 是否为 undefined
 * @example
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined('') // false
 */
declare const isUndefined: (value: unknown) => value is undefined;
/**
 * 检查值是否为 null
 * @param value - 要检查的值
 * @returns 是否为 null
 * @example
 * isNull(null) // true
 * isNull(undefined) // false
 * isNull('') // false
 */
declare const isNull: (value: unknown) => value is null;
/**
 * 检查值是否为布尔值
 * @param value - 要检查的值
 * @returns 是否为布尔值
 * @example
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(1) // false
 * isBoolean('true') // false
 */
declare const isBoolean: (value: unknown) => value is boolean;
/**
 * 检查值是否为 Promise
 * @param value - 要检查的值
 * @returns 是否为 Promise
 * @example
 * isPromise(Promise.resolve()) // true
 * isPromise(new Promise(() => {})) // true
 * isPromise({}) // false
 */
declare const isPromise: (value: unknown) => value is Promise<unknown>;
/**
 * 检查值是否为正则表达式
 * @param value - 要检查的值
 * @returns 是否为正则表达式
 * @example
 * isRegExp(/test/) // true
 * isRegExp(new RegExp('test')) // true
 * isRegExp('test') // false
 */
declare const isRegExp: (value: unknown) => value is RegExp;
/**
 * 检查值是否为 Error 对象
 * @param value - 要检查的值
 * @returns 是否为 Error 对象
 * @example
 * isError(new Error()) // true
 * isError(new TypeError()) // true
 * isError({}) // false
 */
declare const isError: (value: unknown) => value is Error;
/**
 * 检查值是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol()) // true
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
declare const isSymbol$1: (value: unknown) => value is symbol;
/**
 * 检查值是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(BigInt(1)) // true
 * isBigInt(1n) // true
 * isBigInt(1) // false
 */
declare const isBigInt$1: (value: unknown) => value is bigint;
/**
 * 检查值是否为数字
 * @param value - 要检查的值
 * @returns 是否为数字
 * @example
 * isNumber(1) // true
 * isNumber(1.5) // true
 * isNumber(NaN) // true
 * isNumber('1') // false
 */
declare const isNumber: (value: unknown) => value is number;
/**
 * 检查值是否为整数
 * @param value - 要检查的值
 * @returns 是否为整数
 * @example
 * isInteger(1) // true
 * isInteger(1.0) // true
 * isInteger(1.5) // false
 * isInteger('1') // false
 */
declare const isInteger: (value: unknown) => value is number;
/**
 * 检查值是否为有限数字
 * @param value - 要检查的值
 * @returns 是否为有限数字
 * @example
 * isFinite(1) // true
 * isFinite(1.5) // true
 * isFinite(Infinity) // false
 * isFinite(NaN) // false
 */
declare const isFiniteNumber: (value: unknown) => value is number;
/**
 * 检查值是否为 NaN
 * @param value - 要检查的值
 * @returns 是否为 NaN
 * @example
 * isNaN(NaN) // true
 * isNaN(1) // false
 * isNaN('test') // false
 */
declare const isNaN: (value: unknown) => value is number;
/**
 * 检查值是否为字符串
 * @param value - 要检查的值
 * @returns 是否为字符串
 * @example
 * isString('test') // true
 * isString('') // true
 * isString(1) // false
 */
declare const isString: (value: unknown) => value is string;
/**
 * 检查值是否为对象
 * @param value - 要检查的值
 * @returns 是否为对象
 * @example
 * isObject({}) // true
 * isObject([]) // true
 * isObject(null) // false
 * isObject(undefined) // false
 */
declare const isObject: (value: unknown) => value is object;
/**
 * 检查值是否为普通对象（由 Object 构造函数创建或原型链上没有其他对象）
 * @param value - 要检查的值
 * @returns 是否为普通对象
 * @example
 * isPlainObject({}) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject(new Date()) // false
 * isPlainObject([]) // false
 */
declare const isPlainObject: (value: unknown) => value is Record<string, unknown>;
/**
 * 检查值是否为数组
 * @param value - 要检查的值
 * @returns 是否为数组
 * @example
 * isArray([]) // true
 * isArray([1, 2, 3]) // true
 * isArray({}) // false
 */
declare const isArray: (value: unknown) => value is unknown[];
/**
 * 检查值是否为函数
 * @param value - 要检查的值
 * @returns 是否为函数
 * @example
 * isFunction(() => {}) // true
 * isFunction(function() {}) // true
 * isFunction({}) // false
 */
declare const isFunction: (value: unknown) => value is Function;
/**
 * 检查值是否为日期对象
 * @param value - 要检查的值
 * @returns 是否为日期对象
 * @example
 * isDate(new Date()) // true
 * isDate('2024-03-18') // false
 */
declare const isDate: (value: unknown) => value is Date;
/**
 * 检查值是否为 Map 对象
 * @param value - 要检查的值
 * @returns 是否为 Map 对象
 * @example
 * isMap(new Map()) // true
 * isMap({}) // false
 */
declare const isMap: (value: unknown) => value is Map<unknown, unknown>;
/**
 * 检查值是否为 Set 对象
 * @param value - 要检查的值
 * @returns 是否为 Set 对象
 * @example
 * isSet(new Set()) // true
 * isSet([]) // false
 */
declare const isSet: (value: unknown) => value is Set<unknown>;
/**
 * 检查值是否为 WeakMap 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakMap 对象
 * @example
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
declare const isWeakMap: (value: unknown) => value is WeakMap<object, unknown>;
/**
 * 检查值是否为 WeakSet 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakSet 对象
 * @example
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
declare const isWeakSet: (value: unknown) => value is WeakSet<object>;
/**
 * 检查值是否为可迭代对象
 * @param value - 要检查的值
 * @returns 是否为可迭代对象
 * @example
 * isIterable([]) // true
 * isIterable('') // true
 * isIterable(new Set()) // true
 * isIterable({}) // false
 */
declare const isIterable: (value: unknown) => value is Iterable<unknown>;
/**
 * 检查值是否为异步可迭代对象
 * @param value - 要检查的值
 * @returns 是否为异步可迭代对象
 * @example
 * isAsyncIterable({
 *   async *[Symbol.asyncIterator]() {
 *     yield 1;
 *   }
 * }) // true
 * isAsyncIterable([]) // false
 */
declare const isAsyncIterable: (value: unknown) => value is AsyncIterable<unknown>;

declare const type_getType: typeof getType;
declare const type_isArray: typeof isArray;
declare const type_isAsyncIterable: typeof isAsyncIterable;
declare const type_isBoolean: typeof isBoolean;
declare const type_isDate: typeof isDate;
declare const type_isError: typeof isError;
declare const type_isFiniteNumber: typeof isFiniteNumber;
declare const type_isFunction: typeof isFunction;
declare const type_isInteger: typeof isInteger;
declare const type_isIterable: typeof isIterable;
declare const type_isMap: typeof isMap;
declare const type_isNaN: typeof isNaN;
declare const type_isNull: typeof isNull;
declare const type_isNumber: typeof isNumber;
declare const type_isObject: typeof isObject;
declare const type_isPlainObject: typeof isPlainObject;
declare const type_isPromise: typeof isPromise;
declare const type_isRegExp: typeof isRegExp;
declare const type_isSet: typeof isSet;
declare const type_isString: typeof isString;
declare const type_isType: typeof isType;
declare const type_isUndefined: typeof isUndefined;
declare const type_isWeakMap: typeof isWeakMap;
declare const type_isWeakSet: typeof isWeakSet;
declare namespace type {
  export { type_getType as getType, type_isArray as isArray, type_isAsyncIterable as isAsyncIterable, isBigInt$1 as isBigInt, type_isBoolean as isBoolean, type_isDate as isDate, type_isError as isError, type_isFiniteNumber as isFiniteNumber, type_isFunction as isFunction, type_isInteger as isInteger, type_isIterable as isIterable, type_isMap as isMap, type_isNaN as isNaN, type_isNull as isNull, type_isNumber as isNumber, type_isObject as isObject, type_isPlainObject as isPlainObject, type_isPromise as isPromise, type_isRegExp as isRegExp, type_isSet as isSet, type_isString as isString, isSymbol$1 as isSymbol, type_isType as isType, type_isUndefined as isUndefined, type_isWeakMap as isWeakMap, type_isWeakSet as isWeakSet };
}

/**
 * 空值检测工具函数
 */
/**
 * 检查值是否为 null 或 undefined
 * @param value - 要检查的值
 * @returns 是否为 null 或 undefined
 * @example
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil('') // false
 * isNil(0) // false
 * isNil(false) // false
 */
declare const isNil: (value: unknown) => value is null | undefined;
/**
 * 检查值是否为空（null、undefined、空字符串、空数组、空对象）
 * @param value - 要检查的值
 * @returns 是否为空
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(0) // false
 * isEmpty('0') // false
 */
declare const isEmpty: (value: unknown) => boolean;
/**
 * 判断字符串是否为空
 * @param str 要判断的字符串
 * @returns 是否为空字符串
 */
declare function isEmptyString(str: string): boolean;
/**
 * 检查值是否为空数组
 * @param value - 要检查的值
 * @returns 是否为空数组
 * @example
 * isEmptyArray([]) // true
 * isEmptyArray([1, 2, 3]) // false
 * isEmptyArray({}) // false
 */
declare const isEmptyArray: (value: unknown) => value is [];
/**
 * 判断对象是否为空
 * @param obj 要判断的对象
 * @returns 是否为空对象
 */
declare function isEmptyObject(obj: object): boolean;
/**
 * 检查值是否为空 Map
 * @param value - 要检查的值
 * @returns 是否为空 Map
 * @example
 * isEmptyMap(new Map()) // true
 * isEmptyMap(new Map([['key', 'value']])) // false
 * isEmptyMap({}) // false
 */
declare const isEmptyMap: (value: unknown) => value is Map<never, never>;
/**
 * 检查值是否为空 Set
 * @param value - 要检查的值
 * @returns 是否为空 Set
 * @example
 * isEmptySet(new Set()) // true
 * isEmptySet(new Set([1, 2, 3])) // false
 * isEmptySet([]) // false
 */
declare const isEmptySet: (value: unknown) => value is Set<never>;
/**
 * 检查值是否为空 WeakMap
 * @param value - 要检查的值
 * @returns 是否为空 WeakMap
 * @example
 * isEmptyWeakMap(new WeakMap()) // true
 * isEmptyWeakMap(new Map()) // false
 */
declare const isEmptyWeakMap: (value: unknown) => value is WeakMap<object, never>;
/**
 * 检查值是否为空 WeakSet
 * @param value - 要检查的值
 * @returns 是否为空 WeakSet
 * @example
 * isEmptyWeakSet(new WeakSet()) // true
 * isEmptyWeakSet(new Set()) // false
 */
declare const isEmptyWeakSet: (value: unknown) => value is WeakSet<object>;
/**
 * 检查值是否为空 Date
 * @param value - 要检查的值
 * @returns 是否为空 Date
 * @example
 * isEmptyDate(new Date('')) // true
 * isEmptyDate(new Date()) // false
 */
declare const isEmptyDate: (value: unknown) => value is Date;
/**
 * 检查值是否为空正则表达式
 * @param value - 要检查的值
 * @returns 是否为空正则表达式
 * @example
 * isEmptyRegExp(new RegExp('')) // true
 * isEmptyRegExp(/test/) // false
 */
declare const isEmptyRegExp: (value: unknown) => value is RegExp;
/**
 * 检查值是否为空 Error
 * @param value - 要检查的值
 * @returns 是否为空 Error
 * @example
 * isEmptyError(new Error('')) // true
 * isEmptyError(new Error('test')) // false
 */
declare const isEmptyError: (value: unknown) => value is Error;
/**
 * 判断 Promise 是否为空
 * @param promise 要判断的 Promise
 * @returns 是否为空 Promise
 */
declare function isEmptyPromise(promise: Promise<unknown>): Promise<boolean>;
/**
 * 检查值是否为空迭代器
 * @param value - 要检查的值
 * @returns 是否为空迭代器
 * @example
 * isEmptyIterator([][Symbol.iterator]()) // true
 * isEmptyIterator([1, 2, 3][Symbol.iterator]()) // false
 */
declare const isEmptyIterator: (value: unknown) => value is Iterator<never>;
/**
 * 检查值是否为空异步迭代器
 * @param value - 要检查的值
 * @returns 是否为空异步迭代器
 * @example
 * isEmptyAsyncIterator({
 *   async *[Symbol.asyncIterator]() {}
 * }[Symbol.asyncIterator]()) // true
 * isEmptyAsyncIterator({
 *   async *[Symbol.asyncIterator]() { yield 1; }
 * }[Symbol.asyncIterator]()) // false
 */
declare const isEmptyAsyncIterator: (value: unknown) => Promise<boolean>;
/**
 * 检查值是否为空或假值
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsy(null) // true
 * isEmptyOrFalsy(undefined) // true
 * isEmptyOrFalsy('') // true
 * isEmptyOrFalsy(0) // true
 * isEmptyOrFalsy(false) // true
 * isEmptyOrFalsy('test') // false
 * isEmptyOrFalsy(1) // false
 */
declare const isEmptyOrFalsy: (value: unknown) => boolean;
/**
 * 检查值是否为空或假值（不包括空数组和空对象）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyStrict(null) // true
 * isEmptyOrFalsyStrict(undefined) // true
 * isEmptyOrFalsyStrict('') // true
 * isEmptyOrFalsyStrict(0) // true
 * isEmptyOrFalsyStrict(false) // true
 * isEmptyOrFalsyStrict([]) // false
 * isEmptyOrFalsyStrict({}) // false
 * isEmptyOrFalsyStrict('test') // false
 * isEmptyOrFalsyStrict(1) // false
 */
declare const isEmptyOrFalsyStrict: (value: unknown) => boolean;
/**
 * 检查值是否为空或假值（包括空数组和空对象）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyLoose(null) // true
 * isEmptyOrFalsyLoose(undefined) // true
 * isEmptyOrFalsyLoose('') // true
 * isEmptyOrFalsyLoose(0) // true
 * isEmptyOrFalsyLoose(false) // true
 * isEmptyOrFalsyLoose([]) // true
 * isEmptyOrFalsyLoose({}) // true
 * isEmptyOrFalsyLoose('test') // false
 * isEmptyOrFalsyLoose(1) // false
 */
declare const isEmptyOrFalsyLoose: (value: unknown) => boolean;
/**
 * 检查值是否为空或假值（包括空数组、空对象和空字符串）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyStrictest(null) // true
 * isEmptyOrFalsyStrictest(undefined) // true
 * isEmptyOrFalsyStrictest('') // true
 * isEmptyOrFalsyStrictest(0) // true
 * isEmptyOrFalsyStrictest(false) // true
 * isEmptyOrFalsyStrictest([]) // true
 * isEmptyOrFalsyStrictest({}) // true
 * isEmptyOrFalsyStrictest('test') // false
 * isEmptyOrFalsyStrictest(1) // false
 */
declare const isEmptyOrFalsyStrictest: (value: unknown) => boolean;

declare const empty_isEmpty: typeof isEmpty;
declare const empty_isEmptyArray: typeof isEmptyArray;
declare const empty_isEmptyAsyncIterator: typeof isEmptyAsyncIterator;
declare const empty_isEmptyDate: typeof isEmptyDate;
declare const empty_isEmptyError: typeof isEmptyError;
declare const empty_isEmptyIterator: typeof isEmptyIterator;
declare const empty_isEmptyMap: typeof isEmptyMap;
declare const empty_isEmptyObject: typeof isEmptyObject;
declare const empty_isEmptyOrFalsy: typeof isEmptyOrFalsy;
declare const empty_isEmptyOrFalsyLoose: typeof isEmptyOrFalsyLoose;
declare const empty_isEmptyOrFalsyStrict: typeof isEmptyOrFalsyStrict;
declare const empty_isEmptyOrFalsyStrictest: typeof isEmptyOrFalsyStrictest;
declare const empty_isEmptyPromise: typeof isEmptyPromise;
declare const empty_isEmptyRegExp: typeof isEmptyRegExp;
declare const empty_isEmptySet: typeof isEmptySet;
declare const empty_isEmptyString: typeof isEmptyString;
declare const empty_isEmptyWeakMap: typeof isEmptyWeakMap;
declare const empty_isEmptyWeakSet: typeof isEmptyWeakSet;
declare const empty_isNil: typeof isNil;
declare namespace empty {
  export { empty_isEmpty as isEmpty, empty_isEmptyArray as isEmptyArray, empty_isEmptyAsyncIterator as isEmptyAsyncIterator, empty_isEmptyDate as isEmptyDate, empty_isEmptyError as isEmptyError, empty_isEmptyIterator as isEmptyIterator, empty_isEmptyMap as isEmptyMap, empty_isEmptyObject as isEmptyObject, empty_isEmptyOrFalsy as isEmptyOrFalsy, empty_isEmptyOrFalsyLoose as isEmptyOrFalsyLoose, empty_isEmptyOrFalsyStrict as isEmptyOrFalsyStrict, empty_isEmptyOrFalsyStrictest as isEmptyOrFalsyStrictest, empty_isEmptyPromise as isEmptyPromise, empty_isEmptyRegExp as isEmptyRegExp, empty_isEmptySet as isEmptySet, empty_isEmptyString as isEmptyString, empty_isEmptyWeakMap as isEmptyWeakMap, empty_isEmptyWeakSet as isEmptyWeakSet, empty_isNil as isNil };
}

/**
 * 布尔值工具函数
 */
/**
 * 将值转换为布尔值
 * @param value - 要转换的值
 * @returns 布尔值
 * @example
 * toBoolean('true') // true
 * toBoolean('false') // false
 * toBoolean(1) // true
 * toBoolean(0) // false
 * toBoolean(null) // false
 * toBoolean(undefined) // false
 */
declare const toBoolean: (value: unknown) => boolean;
/**
 * 检查值是否为真值
 * @param value - 要检查的值
 * @returns 是否为真值
 * @example
 * isTruthy(true) // true
 * isTruthy(1) // true
 * isTruthy('test') // true
 * isTruthy([]) // true
 * isTruthy({}) // true
 * isTruthy(false) // false
 * isTruthy(0) // false
 * isTruthy('') // false
 * isTruthy(null) // false
 * isTruthy(undefined) // false
 */
declare const isTruthy: (value: unknown) => boolean;
/**
 * 检查值是否为假值
 * @param value - 要检查的值
 * @returns 是否为假值
 * @example
 * isFalsy(false) // true
 * isFalsy(0) // true
 * isFalsy('') // true
 * isFalsy(null) // true
 * isFalsy(undefined) // true
 * isFalsy(true) // false
 * isFalsy(1) // false
 * isFalsy('test') // false
 * isFalsy([]) // false
 * isFalsy({}) // false
 */
declare const isFalsy: (value: unknown) => boolean;

declare const boolean_isFalsy: typeof isFalsy;
declare const boolean_isTruthy: typeof isTruthy;
declare const boolean_toBoolean: typeof toBoolean;
declare namespace boolean {
  export { boolean_isFalsy as isFalsy, boolean_isTruthy as isTruthy, boolean_toBoolean as toBoolean };
}

/**
 * Promise 工具函数
 */
/**
 * 延迟执行
 * @param ms - 延迟时间（毫秒）
 * @returns Promise
 * @example
 * delay(1000).then(() => console.log('1秒后执行'))
 */
declare const delay: (ms: number) => Promise<void>;
/**
 * 超时处理
 * @param promise - Promise 对象
 * @param ms - 超时时间（毫秒）
 * @returns Promise
 * @example
 * timeout(fetch('https://api.example.com'), 5000)
 *   .then(response => response.json())
 *   .catch(error => console.error('请求超时'))
 */
declare const timeout: <T>(promise: Promise<T>, ms: number) => Promise<T>;
/**
 * 重试执行
 * @param fn - 要执行的函数
 * @param retries - 重试次数
 * @param delay - 重试延迟（毫秒）
 * @returns Promise
 * @example
 * retry(() => fetch('https://api.example.com'), 3, 1000)
 *   .then(response => response.json())
 *   .catch(error => console.error('重试失败'))
 */
declare const retry: <T>(fn: () => Promise<T>, retries: number, delay: number) => Promise<T>;
/**
 * 并发控制
 * @param tasks - 任务数组
 * @param limit - 并发限制
 * @returns Promise
 * @example
 * const tasks = [
 *   () => fetch('https://api1.example.com'),
 *   () => fetch('https://api2.example.com'),
 *   () => fetch('https://api3.example.com')
 * ];
 * concurrent(tasks, 2).then(results => console.log(results))
 */
declare const concurrent: <T>(tasks: (() => Promise<T>)[], limit: number) => Promise<T[]>;
/**
 * 防抖
 * @param fn - 要执行的函数
 * @param ms - 延迟时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * const debouncedFn = debounce(() => console.log('执行'), 1000);
 * debouncedFn();
 * debouncedFn();
 * // 1秒后只执行一次
 */
declare const debounce: <T extends (...args: any[]) => any>(fn: T, ms: number) => ((...args: Parameters<T>) => void);
/**
 * 节流
 * @param fn - 要执行的函数
 * @param ms - 间隔时间（毫秒）
 * @returns 节流后的函数
 * @example
 * const throttledFn = throttle(() => console.log('执行'), 1000);
 * throttledFn();
 * throttledFn();
 * // 1秒内只执行一次
 */
declare const throttle: <T extends (...args: any[]) => any>(fn: T, ms: number) => ((...args: Parameters<T>) => void);
/**
 * 包装 Promise
 * @param promise - Promise 对象
 * @returns 包装后的 Promise
 * @example
 * wrap(Promise.resolve(1))
 *   .then(([error, result]) => {
 *     if (error) console.error(error);
 *     else console.log(result);
 *   })
 */
declare const wrap: <T>(promise: Promise<T>) => Promise<[Error | null, T | null]>;
/**
 * 包装异步函数
 * @param fn - 异步函数
 * @returns 包装后的函数
 * @example
 * const wrappedFn = wrapAsync(async () => {
 *   const response = await fetch('https://api.example.com');
 *   return response.json();
 * });
 * const [error, result] = await wrappedFn();
 */
declare const wrapAsync: <T extends (...args: any[]) => Promise<any>>(fn: T) => ((...args: Parameters<T>) => Promise<[Error | null, ReturnType<T> | null]>);
/**
 * 创建可取消的 Promise
 * @returns 可取消的 Promise 和取消函数
 * @example
 * const [promise, cancel] = cancellable();
 * promise.then(() => console.log('完成'));
 * cancel();
 */
declare const cancellable: <T>() => [Promise<T>, (reason?: any) => void];
/**
 * 创建可取消的异步函数
 * @param fn - 异步函数
 * @returns 可取消的异步函数
 * @example
 * const cancellableFetch = cancellableAsync(async () => {
 *   const response = await fetch('https://api.example.com');
 *   return response.json();
 * });
 * const [promise, cancel] = cancellableFetch();
 * promise.then(result => console.log(result));
 * cancel();
 */
declare const cancellableAsync: <T>(fn: () => Promise<T>) => () => [Promise<T>, (reason?: any) => void];

declare const promise_cancellable: typeof cancellable;
declare const promise_cancellableAsync: typeof cancellableAsync;
declare const promise_concurrent: typeof concurrent;
declare const promise_debounce: typeof debounce;
declare const promise_delay: typeof delay;
declare const promise_retry: typeof retry;
declare const promise_throttle: typeof throttle;
declare const promise_timeout: typeof timeout;
declare const promise_wrap: typeof wrap;
declare const promise_wrapAsync: typeof wrapAsync;
declare namespace promise {
  export { promise_cancellable as cancellable, promise_cancellableAsync as cancellableAsync, promise_concurrent as concurrent, promise_debounce as debounce, promise_delay as delay, promise_retry as retry, promise_throttle as throttle, promise_timeout as timeout, promise_wrap as wrap, promise_wrapAsync as wrapAsync };
}

/**
 * 转义正则表达式中的特殊字符
 * @param str - 需要转义的字符串
 * @returns 转义后的字符串
 * @example
 * ```ts
 * escapeRegExp('.*+?^${}()|[]\\') // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
 * ```
 */
declare const escapeRegExp: (str: string) => string;
/**
 * 创建正则表达式对象
 * @param pattern - 正则表达式模式
 * @param flags - 正则表达式标志
 * @returns 正则表达式对象
 * @example
 * ```ts
 * createRegExp('test', 'gi') // /test/gi
 * ```
 */
declare const createRegExp: (pattern: string, flags?: string) => RegExp;
/**
 * 获取所有匹配结果
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果数组
 * @example
 * ```ts
 * matchAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
 * ```
 */
declare const matchAll: (str: string, regexp: RegExp) => RegExpMatchArray[];
/**
 * 替换所有匹配项
 * @param str - 要替换的字符串
 * @param regexp - 正则表达式
 * @param replacement - 替换内容
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1') // 'word1 word2 word3'
 * ```
 */
declare const replaceAll: (str: string, regexp: RegExp, replacement: string) => string;
/**
 * 按正则表达式分割字符串
 * @param str - 要分割的字符串
 * @param regexp - 正则表达式
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * split('test1,test2;test3', /[,;]/) // ['test1', 'test2', 'test3']
 * ```
 */
declare const split: (str: string, regexp: RegExp) => string[];
/**
 * 测试字符串是否匹配正则表达式
 * @param str - 要测试的字符串
 * @param regexp - 正则表达式
 * @returns 是否匹配
 * @example
 * ```ts
 * test('test123', /\d+/) // true
 * test('test', /\d+/) // false
 * ```
 */
declare const test: (str: string, regexp: RegExp) => boolean;
/**
 * 执行正则表达式匹配
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果
 * @example
 * ```ts
 * exec('test123', /(\d+)/) // ['123', '123']
 * ```
 */
declare const exec: (str: string, regexp: RegExp) => RegExpExecArray | null;
/**
 * 执行所有正则表达式匹配
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配结果
 * @example
 * ```ts
 * execAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
 * ```
 */
declare const execAll: (str: string, regexp: RegExp) => RegExpExecArray[];
/**
 * 返回匹配结果
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果
 * @example
 * ```ts
 * match('test123', /(\d+)/) // ['123', '123']
 * ```
 */
declare const match: (str: string, regexp: RegExp) => RegExpMatchArray | null;
/**
 * 返回匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配位置
 * @example
 * ```ts
 * search('test123', /\d+/) // 4
 * search('test', /\d+/) // -1
 * ```
 */
declare const search: (str: string, regexp: RegExp) => number;
/**
 * 替换匹配项
 * @param str - 要替换的字符串
 * @param regexp - 正则表达式
 * @param replacement - 替换内容
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replace('test123', /(\d+)/, '456') // 'test456'
 * ```
 */
declare const replace: (str: string, regexp: RegExp, replacement: string) => string;
/**
 * 获取正则表达式的所有捕获组
 * @param regexp - 正则表达式
 * @returns 捕获组数组
 * @example
 * ```ts
 * getCaptureGroups(/test-(\\d+)-(\\w+)/) // ['$1', '$2']
 * ```
 */
declare const getCaptureGroups: (regexp: RegExp) => string[];
/**
 * 获取正则表达式的所有标志
 * @param regexp - 正则表达式
 * @returns 标志数组
 * @example
 * ```ts
 * getFlags(/test/gi) // ['g', 'i']
 * ```
 */
declare const getFlags: (regexp: RegExp) => string[];
/**
 * 检查正则表达式是否包含指定标志
 * @param regexp - 正则表达式
 * @param flag - 要检查的标志
 * @returns 是否包含标志
 * @example
 * ```ts
 * hasFlag(/test/gi, 'g') // true
 * hasFlag(/test/gi, 'm') // false
 * ```
 */
declare const hasFlag: (regexp: RegExp, flag: string) => boolean;
/**
 * 添加正则表达式标志
 * @param regexp - 正则表达式
 * @param flag - 要添加的标志
 * @returns 新的正则表达式
 * @example
 * ```ts
 * addFlag(/test/, 'g') // /test/g
 * ```
 */
declare const addFlag: (regexp: RegExp, flag: string) => RegExp;
/**
 * 移除正则表达式标志
 * @param regexp - 正则表达式
 * @param flag - 要移除的标志
 * @returns 新的正则表达式
 * @example
 * ```ts
 * removeFlag(/test/gi, 'i') // /test/g
 * ```
 */
declare const removeFlag: (regexp: RegExp, flag: string) => RegExp;
/**
 * 获取正则表达式的源字符串
 * @param regexp - 正则表达式
 * @returns 源字符串
 * @example
 * ```ts
 * getSource(/test/) // 'test'
 * ```
 */
declare const getSource: (regexp: RegExp) => string;
/**
 * 获取正则表达式的完整字符串表示
 * @param regexp - 正则表达式
 * @returns 完整字符串表示
 * @example
 * ```ts
 * toString(/test/gi) // '/test/gi'
 * ```
 */
declare const toString: (regexp: RegExp) => string;
/**
 * 克隆正则表达式
 * @param regexp - 正则表达式
 * @returns 新的正则表达式
 * @example
 * ```ts
 * clone(/test/gi) // /test/gi
 * ```
 */
declare const clone: (regexp: RegExp) => RegExp;
/**
 * 合并多个正则表达式
 * @param patterns - 正则表达式数组
 * @param flags - 正则表达式标志
 * @returns 合并后的正则表达式
 * @example
 * ```ts
 * combine([/\d+/, /\w+/], 'g') // /(\d+)|(\w+)/g
 * ```
 */
declare const combine: (patterns: RegExp[], flags?: string) => RegExp;
/**
 * 获取正则表达式的匹配次数
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配次数
 * @example
 * ```ts
 * countMatches('test1 test2 test3', /\w+(\d+)/g) // 3
 * ```
 */
declare const countMatches: (str: string, regexp: RegExp) => number;
/**
 * 获取正则表达式的第一个匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 第一个匹配位置
 * @example
 * ```ts
 * firstMatchIndex('test123', /\d+/) // 4
 * ```
 */
declare const firstMatchIndex: (str: string, regexp: RegExp) => number;
/**
 * 获取正则表达式的最后一个匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 最后一个匹配位置
 * @example
 * ```ts
 * lastMatchIndex('test123', /\d+/) // 4
 * ```
 */
declare const lastMatchIndex: (str: string, regexp: RegExp) => number;
/**
 * 获取正则表达式的所有匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置
 * @example
 * ```ts
 * allMatchIndices('test1 test2 test3', /\w+(\d+)/g) // [0, 6, 12]
 * ```
 */
declare const allMatchIndices: (str: string, regexp: RegExp) => number[];
/**
 * 获取正则表达式的所有匹配范围
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围
 * @example
 * ```ts
 * allMatchRanges('test1 test2 test3', /\w+(\d+)/g) // [[0, 5], [6, 11], [12, 17]]
 * ```
 */
declare const allMatchRanges: (str: string, regexp: RegExp) => [number, number][];
/**
 * 获取正则表达式的所有匹配文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配文本
 * @example
 * ```ts
 * allMatchTexts('test1 test2 test3', /\w+(\d+)/g) // ['test1', 'test2', 'test3']
 * ```
 */
declare const allMatchTexts: (str: string, regexp: RegExp) => string[];
/**
 * 获取正则表达式的所有捕获组值
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有捕获组值
 * @example
 * ```ts
 * allCaptureGroups('test1 test2 test3', /\w+(\d+)/g) // [['1'], ['2'], ['3']]
 * ```
 */
declare const allCaptureGroups: (str: string, regexp: RegExp) => string[][];
/**
 * 获取正则表达式的所有命名捕获组
 * @param regexp - 正则表达式
 * @returns 所有命名捕获组
 * @example
 * ```ts
 * getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // ['year', 'month', 'day']
 * ```
 */
declare const getNamedCaptureGroups: (regexp: RegExp) => string[];
/**
 * 获取正则表达式的所有命名捕获组值
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有命名捕获组值
 * @example
 * ```ts
 * allNamedCaptureGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ year: '2023', month: '01', day: '01' }]
 * ```
 */
declare const allNamedCaptureGroups: (str: string, regexp: RegExp) => Array<Record<string, string>>;
/**
 * 获取正则表达式的所有匹配位置和文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和文本
 * @example
 * ```ts
 * allMatchPositions('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, text: 'test1' }, { index: 6, text: 'test2' }, { index: 12, text: 'test3' }]
 * ```
 */
declare const allMatchPositions: (str: string, regexp: RegExp) => Array<{
    index: number;
    text: string;
}>;
/**
 * 获取正则表达式的所有匹配范围和文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和文本
 * @example
 * ```ts
 * allMatchRangesWithText('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, text: 'test1' }, { start: 6, end: 11, text: 'test2' }, { start: 12, end: 17, text: 'test3' }]
 * ```
 */
declare const allMatchRangesWithText: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    text: string;
}>;
/**
 * 获取正则表达式的所有匹配位置和捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和捕获组
 * @example
 * ```ts
 * allMatchPositionsWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, groups: ['1'] }, { index: 6, groups: ['2'] }, { index: 12, groups: ['3'] }]
 * ```
 */
declare const allMatchPositionsWithGroups: (str: string, regexp: RegExp) => Array<{
    index: number;
    groups: string[];
}>;
/**
 * 获取正则表达式的所有匹配范围和捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和捕获组
 * @example
 * ```ts
 * allMatchRangesWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, groups: ['1'] }, { start: 6, end: 11, groups: ['2'] }, { start: 12, end: 17, groups: ['3'] }]
 * ```
 */
declare const allMatchRangesWithGroups: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    groups: string[];
}>;
/**
 * 获取正则表达式的所有匹配位置和命名捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和命名捕获组
 * @example
 * ```ts
 * allMatchPositionsWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ index: 0, groups: { year: '2023', month: '01', day: '01' } }]
 * ```
 */
declare const allMatchPositionsWithNamedGroups: (str: string, regexp: RegExp) => Array<{
    index: number;
    groups: Record<string, string>;
}>;
/**
 * 获取正则表达式的所有匹配范围和命名捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和命名捕获组
 * @example
 * ```ts
 * allMatchRangesWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ start: 0, end: 10, groups: { year: '2023', month: '01', day: '01' } }]
 * ```
 */
declare const allMatchRangesWithNamedGroups: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    groups: Record<string, string>;
}>;

declare const regexp_addFlag: typeof addFlag;
declare const regexp_allCaptureGroups: typeof allCaptureGroups;
declare const regexp_allMatchIndices: typeof allMatchIndices;
declare const regexp_allMatchPositions: typeof allMatchPositions;
declare const regexp_allMatchPositionsWithGroups: typeof allMatchPositionsWithGroups;
declare const regexp_allMatchPositionsWithNamedGroups: typeof allMatchPositionsWithNamedGroups;
declare const regexp_allMatchRanges: typeof allMatchRanges;
declare const regexp_allMatchRangesWithGroups: typeof allMatchRangesWithGroups;
declare const regexp_allMatchRangesWithNamedGroups: typeof allMatchRangesWithNamedGroups;
declare const regexp_allMatchRangesWithText: typeof allMatchRangesWithText;
declare const regexp_allMatchTexts: typeof allMatchTexts;
declare const regexp_allNamedCaptureGroups: typeof allNamedCaptureGroups;
declare const regexp_clone: typeof clone;
declare const regexp_combine: typeof combine;
declare const regexp_countMatches: typeof countMatches;
declare const regexp_createRegExp: typeof createRegExp;
declare const regexp_escapeRegExp: typeof escapeRegExp;
declare const regexp_exec: typeof exec;
declare const regexp_execAll: typeof execAll;
declare const regexp_firstMatchIndex: typeof firstMatchIndex;
declare const regexp_getCaptureGroups: typeof getCaptureGroups;
declare const regexp_getFlags: typeof getFlags;
declare const regexp_getNamedCaptureGroups: typeof getNamedCaptureGroups;
declare const regexp_getSource: typeof getSource;
declare const regexp_hasFlag: typeof hasFlag;
declare const regexp_lastMatchIndex: typeof lastMatchIndex;
declare const regexp_match: typeof match;
declare const regexp_matchAll: typeof matchAll;
declare const regexp_removeFlag: typeof removeFlag;
declare const regexp_replace: typeof replace;
declare const regexp_replaceAll: typeof replaceAll;
declare const regexp_search: typeof search;
declare const regexp_split: typeof split;
declare const regexp_test: typeof test;
declare const regexp_toString: typeof toString;
declare namespace regexp {
  export { regexp_addFlag as addFlag, regexp_allCaptureGroups as allCaptureGroups, regexp_allMatchIndices as allMatchIndices, regexp_allMatchPositions as allMatchPositions, regexp_allMatchPositionsWithGroups as allMatchPositionsWithGroups, regexp_allMatchPositionsWithNamedGroups as allMatchPositionsWithNamedGroups, regexp_allMatchRanges as allMatchRanges, regexp_allMatchRangesWithGroups as allMatchRangesWithGroups, regexp_allMatchRangesWithNamedGroups as allMatchRangesWithNamedGroups, regexp_allMatchRangesWithText as allMatchRangesWithText, regexp_allMatchTexts as allMatchTexts, regexp_allNamedCaptureGroups as allNamedCaptureGroups, regexp_clone as clone, regexp_combine as combine, regexp_countMatches as countMatches, regexp_createRegExp as createRegExp, regexp_escapeRegExp as escapeRegExp, regexp_exec as exec, regexp_execAll as execAll, regexp_firstMatchIndex as firstMatchIndex, regexp_getCaptureGroups as getCaptureGroups, regexp_getFlags as getFlags, regexp_getNamedCaptureGroups as getNamedCaptureGroups, regexp_getSource as getSource, regexp_hasFlag as hasFlag, regexp_lastMatchIndex as lastMatchIndex, regexp_match as match, regexp_matchAll as matchAll, regexp_removeFlag as removeFlag, regexp_replace as replace, regexp_replaceAll as replaceAll, regexp_search as search, regexp_split as split, regexp_test as test, regexp_toString as toString };
}

/**
 * 错误处理工具函数
 */
/**
 * 创建自定义错误类
 * @param name - 错误名称
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 自定义错误实例
 * @example
 * createError('ValidationError', 'Invalid input', 'E001')
 */
declare class CustomError extends Error {
    code?: string | undefined;
    constructor(name: string, message: string, code?: string | undefined);
}
/**
 * 创建验证错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 验证错误实例
 * @example
 * createValidationError('Invalid input', 'E001')
 */
declare const createValidationError: (message: string, code?: string) => CustomError;
/**
 * 创建业务错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 业务错误实例
 * @example
 * createBusinessError('Operation failed', 'E002')
 */
declare const createBusinessError: (message: string, code?: string) => CustomError;
/**
 * 创建网络错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 网络错误实例
 * @example
 * createNetworkError('Connection failed', 'E003')
 */
declare const createNetworkError: (message: string, code?: string) => CustomError;
/**
 * 创建权限错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 权限错误实例
 * @example
 * createPermissionError('Access denied', 'E004')
 */
declare const createPermissionError: (message: string, code?: string) => CustomError;
/**
 * 创建资源错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 资源错误实例
 * @example
 * createResourceError('Resource not found', 'E005')
 */
declare const createResourceError: (message: string, code?: string) => CustomError;
/**
 * 检查是否为自定义错误
 * @param error - 错误对象
 * @returns 是否为自定义错误
 * @example
 * isCustomError(new CustomError('Test', 'test')) // true
 * isCustomError(new Error('test')) // false
 */
declare const isCustomError: (error: unknown) => error is CustomError;
/**
 * 检查是否为验证错误
 * @param error - 错误对象
 * @returns 是否为验证错误
 * @example
 * isValidationError(createValidationError('test')) // true
 * isValidationError(new Error('test')) // false
 */
declare const isValidationError: (error: unknown) => error is CustomError;
/**
 * 检查是否为业务错误
 * @param error - 错误对象
 * @returns 是否为业务错误
 * @example
 * isBusinessError(createBusinessError('test')) // true
 * isBusinessError(new Error('test')) // false
 */
declare const isBusinessError: (error: unknown) => error is CustomError;
/**
 * 检查是否为网络错误
 * @param error - 错误对象
 * @returns 是否为网络错误
 * @example
 * isNetworkError(createNetworkError('test')) // true
 * isNetworkError(new Error('test')) // false
 */
declare const isNetworkError: (error: unknown) => error is CustomError;
/**
 * 检查是否为权限错误
 * @param error - 错误对象
 * @returns 是否为权限错误
 * @example
 * isPermissionError(createPermissionError('test')) // true
 * isPermissionError(new Error('test')) // false
 */
declare const isPermissionError: (error: unknown) => error is CustomError;
/**
 * 检查是否为资源错误
 * @param error - 错误对象
 * @returns 是否为资源错误
 * @example
 * isResourceError(createResourceError('test')) // true
 * isResourceError(new Error('test')) // false
 */
declare const isResourceError: (error: unknown) => error is CustomError;
/**
 * 获取错误堆栈信息
 * @param error - 错误对象
 * @returns 错误堆栈信息
 * @example
 * getErrorStack(new Error('test'))
 */
declare const getErrorStack: (error: Error) => string;
/**
 * 获取错误消息
 * @param error - 错误对象
 * @returns 错误消息
 * @example
 * getErrorMessage(new Error('test')) // 'test'
 */
declare const getErrorMessage: (error: unknown) => string;
/**
 * 获取错误代码
 * @param error - 错误对象
 * @returns 错误代码
 * @example
 * getErrorCode(createCustomError('Test', 'test', 'E001')) // 'E001'
 */
declare const getErrorCode: (error: unknown) => string | undefined;
/**
 * 获取错误名称
 * @param error - 错误对象
 * @returns 错误名称
 * @example
 * getErrorName(new Error('test')) // 'Error'
 */
declare const getErrorName: (error: unknown) => string;

type error_CustomError = CustomError;
declare const error_CustomError: typeof CustomError;
declare const error_createBusinessError: typeof createBusinessError;
declare const error_createNetworkError: typeof createNetworkError;
declare const error_createPermissionError: typeof createPermissionError;
declare const error_createResourceError: typeof createResourceError;
declare const error_createValidationError: typeof createValidationError;
declare const error_getErrorCode: typeof getErrorCode;
declare const error_getErrorMessage: typeof getErrorMessage;
declare const error_getErrorName: typeof getErrorName;
declare const error_getErrorStack: typeof getErrorStack;
declare const error_isBusinessError: typeof isBusinessError;
declare const error_isCustomError: typeof isCustomError;
declare const error_isNetworkError: typeof isNetworkError;
declare const error_isPermissionError: typeof isPermissionError;
declare const error_isResourceError: typeof isResourceError;
declare const error_isValidationError: typeof isValidationError;
declare namespace error {
  export { error_CustomError as CustomError, error_createBusinessError as createBusinessError, error_createNetworkError as createNetworkError, error_createPermissionError as createPermissionError, error_createResourceError as createResourceError, error_createValidationError as createValidationError, error_getErrorCode as getErrorCode, error_getErrorMessage as getErrorMessage, error_getErrorName as getErrorName, error_getErrorStack as getErrorStack, error_isBusinessError as isBusinessError, error_isCustomError as isCustomError, error_isNetworkError as isNetworkError, error_isPermissionError as isPermissionError, error_isResourceError as isResourceError, error_isValidationError as isValidationError };
}

/**
 * Symbol 工具函数
 */
/**
 * 创建唯一的 Symbol
 * @param description - Symbol 描述
 * @returns 唯一的 Symbol
 * @example
 * createSymbol('test') // Symbol('test')
 */
declare const createSymbol: (description?: string) => symbol;
/**
 * 创建全局唯一的 Symbol
 * @param key - Symbol 键名
 * @returns 全局唯一的 Symbol
 * @example
 * createGlobalSymbol('test') // Symbol.for('test')
 */
declare const createGlobalSymbol: (key: string) => symbol;
/**
 * 获取 Symbol 的描述
 * @param sym - Symbol 对象
 * @returns Symbol 描述
 * @example
 * getSymbolDescription(Symbol('test')) // 'test'
 */
declare const getSymbolDescription: (sym: symbol) => string | undefined;
/**
 * 获取 Symbol 的键名
 * @param sym - Symbol 对象
 * @returns Symbol 键名
 * @example
 * getSymbolKey(Symbol.for('test')) // 'test'
 */
declare const getSymbolKey: (sym: symbol) => string | undefined;
/**
 * 检查是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
declare const isSymbol: (value: unknown) => value is symbol;
/**
 * 检查是否为全局 Symbol
 * @param sym - Symbol 对象
 * @returns 是否为全局 Symbol
 * @example
 * isGlobalSymbol(Symbol.for('test')) // true
 * isGlobalSymbol(Symbol('test')) // false
 */
declare const isGlobalSymbol: (sym: symbol) => boolean;
/**
 * 创建 Symbol 迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 迭代器
 * @example
 * createSymbolIterator(Symbol('test'))
 */
declare const createSymbolIterator: (sym: symbol) => Iterator<symbol>;
/**
 * 创建 Symbol 异步迭代器
 * @param sym - Symbol 对象
 * @returns Symbol 异步迭代器
 * @example
 * createSymbolAsyncIterator(Symbol('test'))
 */
declare const createSymbolAsyncIterator: (sym: symbol) => AsyncIterator<symbol>;
/**
 * 创建 Symbol 生成器
 * @param sym - Symbol 对象
 * @returns Symbol 生成器
 * @example
 * createSymbolGenerator(Symbol('test'))
 */
declare function createSymbolGenerator(sym: symbol): Generator<symbol>;
/**
 * 创建 Symbol 异步生成器
 * @param sym - Symbol 对象
 * @returns Symbol 异步生成器
 * @example
 * createSymbolAsyncGenerator(Symbol('test'))
 */
declare function createSymbolAsyncGenerator(sym: symbol): AsyncGenerator<symbol>;
/**
 * 创建 Symbol 数组
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 数组
 * @example
 * createSymbolArray(['test1', 'test2']) // [Symbol('test1'), Symbol('test2')]
 */
declare const createSymbolArray: (descriptions: string[]) => symbol[];
/**
 * 创建全局 Symbol 数组
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 数组
 * @example
 * createGlobalSymbolArray(['test1', 'test2']) // [Symbol.for('test1'), Symbol.for('test2')]
 */
declare const createGlobalSymbolArray: (keys: string[]) => symbol[];
/**
 * 创建 Symbol 映射
 * @param descriptions - Symbol 描述数组
 * @returns Symbol 映射
 * @example
 * createSymbolMap(['test1', 'test2']) // { test1: Symbol('test1'), test2: Symbol('test2') }
 */
declare const createSymbolMap: (descriptions: string[]) => Record<string, symbol>;
/**
 * 创建全局 Symbol 映射
 * @param keys - Symbol 键名数组
 * @returns 全局 Symbol 映射
 * @example
 * createGlobalSymbolMap(['test1', 'test2']) // { test1: Symbol.for('test1'), test2: Symbol.for('test2') }
 */
declare const createGlobalSymbolMap: (keys: string[]) => Record<string, symbol>;

declare const symbol_createGlobalSymbol: typeof createGlobalSymbol;
declare const symbol_createGlobalSymbolArray: typeof createGlobalSymbolArray;
declare const symbol_createGlobalSymbolMap: typeof createGlobalSymbolMap;
declare const symbol_createSymbol: typeof createSymbol;
declare const symbol_createSymbolArray: typeof createSymbolArray;
declare const symbol_createSymbolAsyncGenerator: typeof createSymbolAsyncGenerator;
declare const symbol_createSymbolAsyncIterator: typeof createSymbolAsyncIterator;
declare const symbol_createSymbolGenerator: typeof createSymbolGenerator;
declare const symbol_createSymbolIterator: typeof createSymbolIterator;
declare const symbol_createSymbolMap: typeof createSymbolMap;
declare const symbol_getSymbolDescription: typeof getSymbolDescription;
declare const symbol_getSymbolKey: typeof getSymbolKey;
declare const symbol_isGlobalSymbol: typeof isGlobalSymbol;
declare const symbol_isSymbol: typeof isSymbol;
declare namespace symbol {
  export { symbol_createGlobalSymbol as createGlobalSymbol, symbol_createGlobalSymbolArray as createGlobalSymbolArray, symbol_createGlobalSymbolMap as createGlobalSymbolMap, symbol_createSymbol as createSymbol, symbol_createSymbolArray as createSymbolArray, symbol_createSymbolAsyncGenerator as createSymbolAsyncGenerator, symbol_createSymbolAsyncIterator as createSymbolAsyncIterator, symbol_createSymbolGenerator as createSymbolGenerator, symbol_createSymbolIterator as createSymbolIterator, symbol_createSymbolMap as createSymbolMap, symbol_getSymbolDescription as getSymbolDescription, symbol_getSymbolKey as getSymbolKey, symbol_isGlobalSymbol as isGlobalSymbol, symbol_isSymbol as isSymbol };
}

/**
 * BigInt 工具函数
 */
/**
 * 创建 BigInt
 * @param value - 要转换的值
 * @returns BigInt 值
 * @example
 * createBigInt(123) // 123n
 * createBigInt('123') // 123n
 */
declare const createBigInt: (value: number | string) => bigint;
/**
 * 检查是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(123n) // true
 * isBigInt(123) // false
 */
declare const isBigInt: (value: unknown) => value is bigint;
/**
 * 检查是否为有效的 BigInt
 * @param value - 要检查的值
 * @returns 是否为有效的 BigInt
 * @example
 * isValidBigInt(123n) // true
 * isValidBigInt('123') // true
 * isValidBigInt('abc') // false
 */
declare const isValidBigInt: (value: unknown) => boolean;
/**
 * 将 BigInt 转换为字符串
 * @param value - BigInt 值
 * @param radix - 进制
 * @returns 字符串
 * @example
 * bigIntToString(123n) // '123'
 * bigIntToString(123n, 16) // '7b'
 */
declare const bigIntToString: (value: bigint, radix?: number) => string;
/**
 * 将字符串转换为 BigInt
 * @param value - 字符串
 * @param radix - 进制
 * @returns BigInt 值
 * @example
 * stringToBigInt('123') // 123n
 * stringToBigInt('7b', 16) // 123n
 */
declare const stringToBigInt: (value: string, radix?: number) => bigint;
/**
 * 获取 BigInt 的绝对值
 * @param value - BigInt 值
 * @returns 绝对值
 * @example
 * bigIntAbs(-123n) // 123n
 */
declare const bigIntAbs: (value: bigint) => bigint;
/**
 * 获取 BigInt 的符号
 * @param value - BigInt 值
 * @returns 符号（1、0 或 -1）
 * @example
 * bigIntSign(123n) // 1
 * bigIntSign(0n) // 0
 * bigIntSign(-123n) // -1
 */
declare const bigIntSign: (value: bigint) => number;
/**
 * 获取 BigInt 的位数
 * @param value - BigInt 值
 * @returns 位数
 * @example
 * bigIntLength(123n) // 3
 */
declare const bigIntLength: (value: bigint) => number;
/**
 * 检查 BigInt 是否为偶数
 * @param value - BigInt 值
 * @returns 是否为偶数
 * @example
 * isBigIntEven(123n) // false
 * isBigIntEven(124n) // true
 */
declare const isBigIntEven: (value: bigint) => boolean;
/**
 * 检查 BigInt 是否为奇数
 * @param value - BigInt 值
 * @returns 是否为奇数
 * @example
 * isBigIntOdd(123n) // true
 * isBigIntOdd(124n) // false
 */
declare const isBigIntOdd: (value: bigint) => boolean;
/**
 * 检查 BigInt 是否为质数
 * @param value - BigInt 值
 * @returns 是否为质数
 * @example
 * isBigIntPrime(17n) // true
 * isBigIntPrime(18n) // false
 */
declare const isBigIntPrime: (value: bigint) => boolean;
/**
 * 获取 BigInt 的平方根
 * @param value - BigInt 值
 * @returns 平方根
 * @example
 * bigIntSqrt(16n) // 4n
 * bigIntSqrt(17n) // 4n
 */
declare const bigIntSqrt: (value: bigint) => bigint;
/**
 * 获取 BigInt 的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * bigIntPow(2n, 3n) // 8n
 */
declare const bigIntPow: (base: bigint, exponent: bigint) => bigint;
/**
 * 获取 BigInt 的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * bigIntGcd(12n, 18n) // 6n
 */
declare const bigIntGcd: (a: bigint, b: bigint) => bigint;
/**
 * 获取 BigInt 的最小公倍数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最小公倍数
 * @example
 * bigIntLcm(12n, 18n) // 36n
 */
declare const bigIntLcm: (a: bigint, b: bigint) => bigint;

declare const bigint_bigIntAbs: typeof bigIntAbs;
declare const bigint_bigIntGcd: typeof bigIntGcd;
declare const bigint_bigIntLcm: typeof bigIntLcm;
declare const bigint_bigIntLength: typeof bigIntLength;
declare const bigint_bigIntPow: typeof bigIntPow;
declare const bigint_bigIntSign: typeof bigIntSign;
declare const bigint_bigIntSqrt: typeof bigIntSqrt;
declare const bigint_bigIntToString: typeof bigIntToString;
declare const bigint_createBigInt: typeof createBigInt;
declare const bigint_isBigInt: typeof isBigInt;
declare const bigint_isBigIntEven: typeof isBigIntEven;
declare const bigint_isBigIntOdd: typeof isBigIntOdd;
declare const bigint_isBigIntPrime: typeof isBigIntPrime;
declare const bigint_isValidBigInt: typeof isValidBigInt;
declare const bigint_stringToBigInt: typeof stringToBigInt;
declare namespace bigint {
  export { bigint_bigIntAbs as bigIntAbs, bigint_bigIntGcd as bigIntGcd, bigint_bigIntLcm as bigIntLcm, bigint_bigIntLength as bigIntLength, bigint_bigIntPow as bigIntPow, bigint_bigIntSign as bigIntSign, bigint_bigIntSqrt as bigIntSqrt, bigint_bigIntToString as bigIntToString, bigint_createBigInt as createBigInt, bigint_isBigInt as isBigInt, bigint_isBigIntEven as isBigIntEven, bigint_isBigIntOdd as isBigIntOdd, bigint_isBigIntPrime as isBigIntPrime, bigint_isValidBigInt as isValidBigInt, bigint_stringToBigInt as stringToBigInt };
}

/**
 * Q-Utils 工具函数库
 *
 * 一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数。
 * 按功能分类，可按需引入。
 *
 * @packageDocumentation
 */

declare const qUtils: {
    array: typeof array;
    browser: typeof browser;
    color: typeof color;
    date: typeof date;
    dom: typeof dom;
    file: typeof file;
    func: typeof func;
    network: typeof network;
    number: typeof number;
    object: typeof object;
    storage: typeof storage;
    string: typeof string;
    type: typeof type;
    empty: typeof empty;
    boolean: typeof boolean;
    promise: typeof promise;
    regexp: typeof regexp;
    error: typeof error;
    symbol: typeof symbol;
    bigint: typeof bigint;
};

export { array, bigint, boolean, browser, color, date, qUtils as default, dom, empty, error, file, func, network, number, object, promise, regexp, storage, string, symbol, type };
