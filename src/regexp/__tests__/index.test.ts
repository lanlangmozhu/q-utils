import {
  escapeRegExp,
  createRegExp,
  clone,
  matchAll,
  exec,
  execAll,
  replace,
  replaceAll,
  search,
  test,
  split,
  getFlags,
  hasFlag,
  addFlag,
  removeFlag,
  getCaptureGroups,
  allCaptureGroups,
  getNamedCaptureGroups,
  allNamedCaptureGroups
} from '@/regexp';

describe('RegExp Utils', () => {
  describe('basic', () => {
    it('should escape special characters', () => {
      expect(escapeRegExp('.*+?^${}()|[]\\')).toBe('\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
    });

    it('should create RegExp from pattern and flags', () => {
      const regexp = createRegExp('test', 'gi');
      expect(regexp.source).toBe('test');
      expect(regexp.flags).toContain('g');
      expect(regexp.flags).toContain('i');
    });

    it('should clone RegExp', () => {
      const original = /test/gi;
      const cloned = clone(original);
      expect(cloned.source).toBe(original.source);
      expect(cloned.flags).toBe(original.flags);
      expect(cloned).not.toBe(original);
    });
  });

  describe('match', () => {
    it('should get all matches', () => {
      const matches = matchAll('test1 test2 test3', /\w+(\d+)/g);
      expect(matches.length).toBe(3);
      expect(matches[0][0]).toBe('test1');
    });

    it('should exec regexp', () => {
      const result = exec('test123', /(\d+)/);
      expect(result).not.toBeNull();
      expect(result?.[0]).toBe('123');
    });

    it('should exec all matches', () => {
      // Note: execAll requires global flag to work correctly, otherwise it will loop infinitely
      const regexp = new RegExp('\\w+(\\d+)', 'g');
      const results = execAll('test1 test2 test3', regexp);
      expect(results.length).toBe(3);
    });
  });

  describe('replace', () => {
    it('should replace first match', () => {
      const result = replace('test123', /(\d+)/, '456');
      expect(result).toBe('test456');
    });

    it('should replace all matches', () => {
      // replaceAll adds 'g' flag automatically, so we don't need to pass it
      const result = replaceAll('test1 test2 test3', /\w+(\d+)/, 'word$1');
      expect(result).toContain('word1');
      expect(result).toContain('word2');
      expect(result).toContain('word3');
    });
  });

  describe('search', () => {
    it('should return search position', () => {
      expect(search('test123', /\d+/)).toBe(4);
      expect(search('test', /\d+/)).toBe(-1);
    });

    it('should test if string matches', () => {
      expect(test('test123', /\d+/)).toBe(true);
      expect(test('test', /\d+/)).toBe(false);
    });

    it('should split string by regexp', () => {
      const result = split('test1,test2;test3', /[,;]/);
      expect(result).toEqual(['test1', 'test2', 'test3']);
    });
  });

  describe('flags', () => {
    it('should get flags', () => {
      const flags = getFlags(/test/gi);
      expect(flags).toContain('g');
      expect(flags).toContain('i');
    });

    it('should check if flag exists', () => {
      expect(hasFlag(/test/gi, 'g')).toBe(true);
      expect(hasFlag(/test/gi, 'm')).toBe(false);
    });

    it('should add flag', () => {
      const regexp = addFlag(/test/, 'g');
      expect(hasFlag(regexp, 'g')).toBe(true);
    });

    it('should remove flag', () => {
      const regexp = removeFlag(/test/gi, 'i');
      expect(hasFlag(regexp, 'g')).toBe(true);
      expect(hasFlag(regexp, 'i')).toBe(false);
    });
  });

  describe('groups', () => {
    it('should get capture groups', () => {
      const groups = getCaptureGroups(/test-(\d+)-(\w+)/);
      expect(groups.length).toBe(2);
      expect(groups).toContain('$1');
      expect(groups).toContain('$2');
    });

    it('should get all capture groups', () => {
      // Note: allCaptureGroups requires global flag to work correctly, otherwise it will loop infinitely
      const regexp = new RegExp('\\w+(\\d+)', 'g');
      const groups = allCaptureGroups('test1 test2 test3', regexp);
      expect(groups.length).toBe(3);
      expect(groups[0]).toEqual(['1']);
    });

    it('should get named capture groups', () => {
      const groups = getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
      expect(groups).toContain('year');
      expect(groups).toContain('month');
      expect(groups).toContain('day');
    });

    it('should get all named capture groups', () => {
      // Note: allNamedCaptureGroups requires global flag to work correctly, otherwise it will loop infinitely
      const regexp = new RegExp('(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})', 'g');
      const groups = allNamedCaptureGroups('2023-01-01', regexp);
      expect(groups.length).toBeGreaterThan(0);
      if (groups.length > 0) {
        expect(groups[0]).toHaveProperty('year');
        expect(groups[0]).toHaveProperty('month');
        expect(groups[0]).toHaveProperty('day');
      }
    });
  });
});

