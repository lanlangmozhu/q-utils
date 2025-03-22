import {
  escapeRegExp,
  createRegExp,
  matchAll,
  replaceAll,
  split,
  test,
  exec,
  execAll,
  match,
  search,
  replace,
  getCaptureGroups,
  getFlags,
  hasFlag,
  addFlag,
  removeFlag,
  getSource,
  toString,
  clone,
  combine,
  countMatches,
  firstMatchIndex,
  lastMatchIndex,
  allMatchIndices,
  allMatchRanges,
  allMatchTexts,
  allCaptureGroups,
  getNamedCaptureGroups,
  allNamedCaptureGroups,
  allMatchPositions,
  allMatchRangesWithText,
  allMatchPositionsWithGroups,
  allMatchRangesWithGroups,
  allMatchPositionsWithNamedGroups,
  allMatchRangesWithNamedGroups
} from '../../src/regexp';

describe('正则表达式工具函数', () => {
  describe('escapeRegExp', () => {
    it('应该正确转义特殊字符', () => {
      expect(escapeRegExp('.*+?^${}()|[]\\')).toBe('\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
    });

    it('应该处理普通字符串', () => {
      expect(escapeRegExp('hello')).toBe('hello');
    });
  });

  describe('createRegExp', () => {
    it('应该创建正则表达式对象', () => {
      const regexp = createRegExp('test', 'gi');
      expect(regexp).toBeInstanceOf(RegExp);
      expect(regexp.source).toBe('test');
      expect(regexp.flags).toBe('gi');
    });

    it('应该处理没有标志的情况', () => {
      const regexp = createRegExp('test');
      expect(regexp.flags).toBe('');
    });
  });

  describe('matchAll', () => {
    it('应该返回所有匹配结果', () => {
      const results = matchAll('test1 test2 test3', /\w+(\d+)/g);
      expect(results).toEqual([
        ['test1', '1'],
        ['test2', '2'],
        ['test3', '3']
      ]);
    });

    it('应该处理没有匹配的情况', () => {
      const results = matchAll('test', /\d+/g);
      expect(results).toEqual([]);
    });
  });

  describe('replaceAll', () => {
    it('应该替换所有匹配项', () => {
      expect(replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1'))
        .toBe('word1 word2 word3');
    });

    it('应该处理没有匹配的情况', () => {
      expect(replaceAll('test', /\d+/g, 'number'))
        .toBe('test');
    });
  });

  describe('split', () => {
    it('应该按正则表达式分割字符串', () => {
      expect(split('test1,test2;test3', /[,;]/))
        .toEqual(['test1', 'test2', 'test3']);
    });

    it('应该处理空字符串', () => {
      expect(split('', /[,;]/))
        .toEqual(['']);
    });
  });

  describe('test', () => {
    it('应该测试字符串是否匹配', () => {
      expect(test('test123', /\d+/)).toBe(true);
      expect(test('test', /\d+/)).toBe(false);
    });
  });

  describe('exec', () => {
    it('应该执行正则表达式匹配', () => {
      const result = exec('test123', /(\d+)/);
      expect(result).toEqual(['123', '123']);
    });

    it('应该处理没有匹配的情况', () => {
      const result = exec('test', /(\d+)/);
      expect(result).toBeNull();
    });
  });

  describe('execAll', () => {
    it('应该返回所有匹配结果', () => {
      const results = execAll('test1 test2 test3', /\w+(\d+)/g);
      expect(results).toEqual([
        ['test1', '1'],
        ['test2', '2'],
        ['test3', '3']
      ]);
    });
  });

  describe('match', () => {
    it('应该返回匹配结果', () => {
      const result = match('test123', /(\d+)/);
      expect(result).toEqual(['123', '123']);
    });

    it('应该处理没有匹配的情况', () => {
      const result = match('test', /(\d+)/);
      expect(result).toBeNull();
    });
  });

  describe('search', () => {
    it('应该返回匹配位置', () => {
      expect(search('test123', /\d+/)).toBe(4);
      expect(search('test', /\d+/)).toBe(-1);
    });
  });

  describe('replace', () => {
    it('应该替换匹配项', () => {
      expect(replace('test123', /(\d+)/, '456'))
        .toBe('test456');
    });
  });

  describe('getCaptureGroups', () => {
    it('应该返回所有捕获组', () => {
      expect(getCaptureGroups(/test-(\d+)-(\w+)/))
        .toEqual(['$1', '$2']);
    });
  });

  describe('getFlags', () => {
    it('应该返回所有标志', () => {
      expect(getFlags(/test/gi))
        .toEqual(['g', 'i']);
    });
  });

  describe('hasFlag', () => {
    it('应该检查是否包含指定标志', () => {
      expect(hasFlag(/test/gi, 'g')).toBe(true);
      expect(hasFlag(/test/gi, 'm')).toBe(false);
    });
  });

  describe('addFlag', () => {
    it('应该添加标志', () => {
      const regexp = addFlag(/test/, 'g');
      expect(regexp.flags).toBe('g');
    });
  });

  describe('removeFlag', () => {
    it('应该移除标志', () => {
      const regexp = removeFlag(/test/gi, 'i');
      expect(regexp.flags).toBe('g');
    });
  });

  describe('getSource', () => {
    it('应该返回源字符串', () => {
      expect(getSource(/test/)).toBe('test');
    });
  });

  describe('toString', () => {
    it('应该返回字符串表示', () => {
      expect(toString(/test/gi)).toBe('/test/gi');
    });
  });

  describe('clone', () => {
    it('应该克隆正则表达式', () => {
      const original = /test/gi;
      const cloned = clone(original);
      expect(cloned).not.toBe(original);
      expect(cloned.source).toBe(original.source);
      expect(cloned.flags).toBe(original.flags);
    });
  });

  describe('combine', () => {
    it('应该组合多个正则表达式', () => {
      const regexp = combine([/test/, /\d+/], 'gi');
      expect(regexp.source).toBe('(test)|(\\d+)');
      expect(regexp.flags).toBe('gi');
    });
  });

  describe('countMatches', () => {
    it('应该计算匹配次数', () => {
      expect(countMatches('test1 test2 test3', /\w+(\d+)/g)).toBe(3);
    });
  });

  describe('firstMatchIndex', () => {
    it('应该返回第一个匹配的位置', () => {
      expect(firstMatchIndex('test123', /\d+/)).toBe(4);
    });
  });

  describe('lastMatchIndex', () => {
    it('应该返回最后一个匹配的位置', () => {
      expect(lastMatchIndex('test123 test456', /\d+/)).toBe(13);
    });
  });

  describe('allMatchIndices', () => {
    it('应该返回所有匹配的位置', () => {
      expect(allMatchIndices('test123 test456', /\d+/g))
        .toEqual([4, 13]);
    });
  });

  describe('allMatchRanges', () => {
    it('应该返回所有匹配的范围', () => {
      expect(allMatchRanges('test123 test456', /\d+/g))
        .toEqual([[4, 7], [13, 16]]);
    });
  });

  describe('allMatchTexts', () => {
    it('应该返回所有匹配的文本', () => {
      expect(allMatchTexts('test123 test456', /\d+/g))
        .toEqual(['123', '456']);
    });
  });

  describe('allCaptureGroups', () => {
    it('应该返回所有捕获组', () => {
      expect(allCaptureGroups('test123 test456', /(\d+)/g))
        .toEqual([['123', '123'], ['456', '456']]);
    });
  });

  describe('getNamedCaptureGroups', () => {
    it('应该返回命名捕获组', () => {
      expect(getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})/))
        .toEqual(['year', 'month']);
    });
  });

  describe('allNamedCaptureGroups', () => {
    it('应该返回所有命名捕获组', () => {
      const result = allNamedCaptureGroups(
        '2023-01 2024-02',
        /(?<year>\d{4})-(?<month>\d{2})/g
      );
      expect(result).toEqual([
        { year: '2023', month: '01' },
        { year: '2024', month: '02' }
      ]);
    });
  });

  describe('allMatchPositions', () => {
    it('应该返回所有匹配的位置和文本', () => {
      const result = allMatchPositions('test123 test456', /\d+/g);
      expect(result).toEqual([
        { index: 4, text: '123' },
        { index: 13, text: '456' }
      ]);
    });
  });

  describe('allMatchRangesWithText', () => {
    it('应该返回所有匹配的范围和文本', () => {
      const result = allMatchRangesWithText('test123 test456', /\d+/g);
      expect(result).toEqual([
        { start: 4, end: 7, text: '123' },
        { start: 13, end: 16, text: '456' }
      ]);
    });
  });

  describe('allMatchPositionsWithGroups', () => {
    it('应该返回所有匹配的位置和捕获组', () => {
      const result = allMatchPositionsWithGroups('test123 test456', /(\d+)/g);
      expect(result).toEqual([
        { index: 4, groups: ['123', '123'] },
        { index: 13, groups: ['456', '456'] }
      ]);
    });
  });

  describe('allMatchRangesWithGroups', () => {
    it('应该返回所有匹配的范围和捕获组', () => {
      const result = allMatchRangesWithGroups('test123 test456', /(\d+)/g);
      expect(result).toEqual([
        { start: 4, end: 7, groups: ['123', '123'] },
        { start: 13, end: 16, groups: ['456', '456'] }
      ]);
    });
  });

  describe('allMatchPositionsWithNamedGroups', () => {
    it('应该返回所有匹配的位置和命名捕获组', () => {
      const result = allMatchPositionsWithNamedGroups(
        '2023-01 2024-02',
        /(?<year>\d{4})-(?<month>\d{2})/g
      );
      expect(result).toEqual([
        { index: 0, groups: { year: '2023', month: '01' } },
        { index: 8, groups: { year: '2024', month: '02' } }
      ]);
    });
  });

  describe('allMatchRangesWithNamedGroups', () => {
    it('应该返回所有匹配的范围和命名捕获组', () => {
      const result = allMatchRangesWithNamedGroups(
        '2023-01 2024-02',
        /(?<year>\d{4})-(?<month>\d{2})/g
      );
      expect(result).toEqual([
        { start: 0, end: 7, groups: { year: '2023', month: '01' } },
        { start: 8, end: 15, groups: { year: '2024', month: '02' } }
      ]);
    });
  });

  describe('allMatchPositionsWithGroups', () => {
    it('应该返回所有匹配位置和捕获组', () => {
      expect(allMatchPositionsWithGroups('test1 test2 test3', /\w+(\d+)/g)).toEqual([
        { index: 0, groups: ['1'] },
        { index: 6, groups: ['2'] },
        { index: 12, groups: ['3'] }
      ]);
    });

    it('应该在没有匹配时返回空数组', () => {
      expect(allMatchPositionsWithGroups('test', /\d+/g)).toEqual([]);
    });
  });

  describe('allMatchRangesWithGroups', () => {
    it('应该返回所有匹配范围和捕获组', () => {
      expect(allMatchRangesWithGroups('test1 test2 test3', /\w+(\d+)/g)).toEqual([
        { start: 0, end: 5, groups: ['1'] },
        { start: 6, end: 11, groups: ['2'] },
        { start: 12, end: 17, groups: ['3'] }
      ]);
    });

    it('应该在没有匹配时返回空数组', () => {
      expect(allMatchRangesWithGroups('test', /\d+/g)).toEqual([]);
    });
  });

  describe('allMatchPositionsWithNamedGroups', () => {
    it('应该返回所有匹配位置和命名捕获组', () => {
      expect(allMatchPositionsWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/))
        .toEqual([{
          index: 0,
          groups: { year: '2023', month: '01', day: '01' }
        }]);
    });

    it('应该在没有匹配时返回空数组', () => {
      expect(allMatchPositionsWithNamedGroups('test', /(?<year>\d{4})/g)).toEqual([]);
    });
  });

  describe('allMatchRangesWithNamedGroups', () => {
    it('应该返回所有匹配范围和命名捕获组', () => {
      expect(allMatchRangesWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/))
        .toEqual([{
          start: 0,
          end: 10,
          groups: { year: '2023', month: '01', day: '01' }
        }]);
    });

    it('应该在没有匹配时返回空数组', () => {
      expect(allMatchRangesWithNamedGroups('test', /(?<year>\d{4})/g)).toEqual([]);
    });
  });
}); 