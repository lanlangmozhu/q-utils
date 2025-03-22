import { uuid, randomId } from '../../src/string/uuid';

describe('ID Generation Operations', () => {
  describe('uuid', () => {
    it('应该生成有效的 UUID v4', () => {
      const id = uuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('应该生成唯一的 UUID', () => {
      const ids = new Set();
      for (let i = 0; i < 1000; i++) {
        const id = uuid();
        expect(ids.has(id)).toBe(false);
        ids.add(id);
      }
    });
  });

  describe('randomId', () => {
    it('应该生成指定长度的随机ID', () => {
      const id = randomId(8);
      expect(id.length).toBe(8);
      expect(id).toMatch(/^[A-Za-z0-9]{8}$/);
    });

    it('应该使用默认长度生成随机ID', () => {
      const id = randomId();
      expect(id.length).toBe(8);
      expect(id).toMatch(/^[A-Za-z0-9]{8}$/);
    });

    it('应该添加前缀到随机ID', () => {
      const id = randomId(8, { prefix: 'user_' });
      expect(id.length).toBe(13); // 'user_' + 8 characters
      expect(id).toMatch(/^user_[A-Za-z0-9]{8}$/);
    });

    it('应该使用自定义字符集生成随机ID', () => {
      const id = randomId(8, { charset: '0123456789' });
      expect(id.length).toBe(8);
      expect(id).toMatch(/^[0-9]{8}$/);
    });

    it('应该生成唯一的随机ID', () => {
      const ids = new Set();
      for (let i = 0; i < 1000; i++) {
        const id = randomId(8);
        expect(ids.has(id)).toBe(false);
        ids.add(id);
      }
    });
  });
}); 