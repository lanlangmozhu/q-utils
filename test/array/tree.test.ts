import {
  arrayToTree,
  treeToArray,
  findTreeNode,
  filterTree
} from '../../src/array/tree';

describe('Tree Operations', () => {
  const sampleArray = [
    { id: 1, parentId: null, name: 'Root' },
    { id: 2, parentId: 1, name: 'Child 1' },
    { id: 3, parentId: 1, name: 'Child 2' },
    { id: 4, parentId: 2, name: 'Grandchild 1' }
  ];

  const sampleTree = [
    {
      id: 1,
      name: 'Root',
      children: [
        {
          id: 2,
          name: 'Child 1',
          children: [
            { id: 4, name: 'Grandchild 1' }
          ]
        },
        { id: 3, name: 'Child 2' }
      ]
    }
  ];

  describe('arrayToTree', () => {
    test('应该正确将数组转换为树结构', () => {
      const result = arrayToTree(sampleArray);
      expect(result).toEqual(sampleTree);
    });

    test('应该使用自定义键名进行转换', () => {
      const customArray = [
        { nodeId: 1, parentNodeId: null, name: 'Root' },
        { nodeId: 2, parentNodeId: 1, name: 'Child 1' }
      ];
      const result = arrayToTree(customArray, {
        idKey: 'nodeId',
        parentKey: 'parentNodeId',
        childrenKey: 'nodes'
      });
      expect(result).toEqual([
        {
          nodeId: 1,
          name: 'Root',
          nodes: [
            { nodeId: 2, name: 'Child 1' }
          ]
        }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(arrayToTree([])).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(arrayToTree(null as any)).toEqual([]);
      expect(arrayToTree(undefined as any)).toEqual([]);
    });
  });

  describe('treeToArray', () => {
    test('应该正确将树结构转换为数组', () => {
      const result = treeToArray(sampleTree);
      expect(result).toEqual(sampleArray);
    });

    test('应该使用自定义键名进行转换', () => {
      const customTree = [
        {
          nodeId: 1,
          name: 'Root',
          nodes: [
            { nodeId: 2, name: 'Child 1' }
          ]
        }
      ];
      const result = treeToArray(customTree, {
        idKey: 'nodeId',
        parentKey: 'parentNodeId',
        childrenKey: 'nodes'
      });
      expect(result).toEqual([
        { nodeId: 1, parentNodeId: null, name: 'Root' },
        { nodeId: 2, parentNodeId: 1, name: 'Child 1' }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(treeToArray([])).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(treeToArray(null as any)).toEqual([]);
      expect(treeToArray(undefined as any)).toEqual([]);
    });
  });

  describe('findTreeNode', () => {
    test('应该正确查找树节点', () => {
      const result = findTreeNode(sampleTree, node => node.id === 2);
      expect(result).toEqual({
        id: 2,
        name: 'Child 1',
        children: [
          { id: 4, name: 'Grandchild 1' }
        ]
      });
    });

    test('应该使用自定义子节点键名查找', () => {
      const customTree = [
        {
          id: 1,
          name: 'Root',
          nodes: [
            { id: 2, name: 'Child 1' }
          ]
        }
      ];
      const result = findTreeNode(customTree, node => node.id === 2, {
        childrenKey: 'nodes'
      });
      expect(result).toEqual({ id: 2, name: 'Child 1' });
    });

    test('应该正确处理未找到节点的情况', () => {
      const result = findTreeNode(sampleTree, node => node.id === 999);
      expect(result).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(findTreeNode(null as any, node => node.id === 1)).toBeUndefined();
      expect(findTreeNode(undefined as any, node => node.id === 1)).toBeUndefined();
    });
  });

  describe('filterTree', () => {
    test('应该正确过滤树结构', () => {
      const result = filterTree(sampleTree, node => node.id !== 2);
      expect(result).toEqual([
        {
          id: 1,
          name: 'Root',
          children: [
            { id: 3, name: 'Child 2' }
          ]
        }
      ]);
    });

    test('应该使用自定义子节点键名过滤', () => {
      const customTree = [
        {
          id: 1,
          name: 'Root',
          nodes: [
            { id: 2, name: 'Child 1' }
          ]
        }
      ];
      const result = filterTree(customTree, node => node.id !== 2, {
        childrenKey: 'nodes'
      });
      expect(result).toEqual([
        {
          id: 1,
          name: 'Root',
          nodes: []
        }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(filterTree([], node => node.id !== 1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(filterTree(null as any, node => node.id !== 1)).toEqual([]);
      expect(filterTree(undefined as any, node => node.id !== 1)).toEqual([]);
    });
  });
}); 