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
export declare function arrayToTree<T extends {
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
export declare function treeToArray<T extends {
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
export declare function findTreeNode<T extends {
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
export declare function filterTree<T extends {
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
//# sourceMappingURL=tree.d.ts.map