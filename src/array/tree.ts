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
export function arrayToTree<T extends { [key: string]: any }>(
  arr: T[] | null | undefined,
  options: {
    idKey?: string;
    parentKey?: string;
    childrenKey?: string;
  } | null | undefined = {}
): (T & { [key: string]: any })[] {
  const {
    idKey = 'id',
    parentKey = 'parentId',
    childrenKey = 'children'
  } = options || {};

  if (!Array.isArray(arr)) {
    return [];
  }

  const map = new Map<string | number, T & { [key: string]: any }>();
  const result: (T & { [key: string]: any })[] = [];

  arr.forEach(item => {
    map.set(item[idKey], { ...item });
  });

  arr.forEach(item => {
    const node = map.get(item[idKey])!;
    const parentId = item[parentKey];

    if (parentId === null || parentId === undefined) {
      result.push(node);
    } else {
      const parent = map.get(parentId);
      if (parent) {
        if (!parent[childrenKey]) {
          (parent as any)[childrenKey] = [];
        }
        (parent as any)[childrenKey].push(node);
      }
    }
  });

  return result;
}

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
export function treeToArray<T extends { [key: string]: any }>(
  tree: (T & { [key: string]: any })[] | null | undefined,
  options: {
    idKey?: string;
    parentKey?: string;
    childrenKey?: string;
  } | null | undefined = {}
): T[] {
  const {
    idKey = 'id',
    parentKey = 'parentId',
    childrenKey = 'children'
  } = options || {};

  if (!Array.isArray(tree)) {
    return [];
  }

  const result: T[] = [];

  function traverse(nodes: (T & { [key: string]: any })[], parentId: string | number | null = null) {
    nodes.forEach(node => {
      const { [childrenKey]: children, ...rest } = node;
      result.push({
        ...rest,
        [parentKey]: parentId
      } as T);

      if (children && Array.isArray(children) && children.length > 0) {
        traverse(children as (T & { [key: string]: any })[], node[idKey]);
      }
    });
  }

  traverse(tree);
  return result;
}

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
export function findTreeNode<T extends { [key: string]: any }>(
  tree: (T & { [key: string]: any })[] | null | undefined,
  predicate: (node: T & { [key: string]: any }) => boolean,
  options: {
    childrenKey?: string;
  } | null | undefined = {}
): (T & { [key: string]: any }) | undefined {
  const { childrenKey = 'children' } = options || {};

  if (!Array.isArray(tree)) {
    return undefined;
  }

  for (const node of tree) {
    if (predicate(node)) {
      return node;
    }

    const children = node[childrenKey];
    if (children && Array.isArray(children) && children.length > 0) {
      const found = findTreeNode(children as (T & { [key: string]: any })[], predicate, options);
      if (found) {
        return found;
      }
    }
  }

  return undefined;
}

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
export function filterTree<T extends { [key: string]: any }>(
  tree: (T & { [key: string]: any })[] | null | undefined,
  predicate: (node: T & { [key: string]: any }) => boolean,
  options: {
    childrenKey?: string;
  } | null | undefined = {}
): (T & { [key: string]: any })[] {
  const { childrenKey = 'children' } = options || {};

  if (!Array.isArray(tree)) {
    return [];
  }

  return tree
    .filter(predicate)
    .map(node => {
      const children = node[childrenKey];
      if (children && Array.isArray(children) && children.length > 0) {
        return {
          ...node,
          [childrenKey]: filterTree(children as (T & { [key: string]: any })[], predicate, options)
        };
      }
      return node;
    });
} 