import {
  CustomError,
  createValidationError,
  createBusinessError,
  createNetworkError,
  createPermissionError,
  createResourceError,
  isCustomError,
  isValidationError,
  isBusinessError,
  isNetworkError,
  isPermissionError,
  isResourceError,
  getErrorStack,
  getErrorMessage,
  getErrorCode,
  getErrorName
} from '../../src/error';

describe('错误处理工具函数', () => {
  describe('CustomError', () => {
    it('应该正确创建自定义错误实例', () => {
      const error = new CustomError('TestError', 'test message', 'E001');
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('TestError');
      expect(error.message).toBe('test message');
      expect(error.code).toBe('E001');
    });
  });

  describe('createValidationError', () => {
    it('应该正确创建验证错误实例', () => {
      const error = createValidationError('Invalid input', 'E001');
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('ValidationError');
      expect(error.message).toBe('Invalid input');
      expect(error.code).toBe('E001');
    });
  });

  describe('createBusinessError', () => {
    it('应该正确创建业务错误实例', () => {
      const error = createBusinessError('Operation failed', 'E002');
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('BusinessError');
      expect(error.message).toBe('Operation failed');
      expect(error.code).toBe('E002');
    });
  });

  describe('createNetworkError', () => {
    it('应该正确创建网络错误实例', () => {
      const error = createNetworkError('Connection failed', 'E003');
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('NetworkError');
      expect(error.message).toBe('Connection failed');
      expect(error.code).toBe('E003');
    });
  });

  describe('createPermissionError', () => {
    it('应该正确创建权限错误实例', () => {
      const error = createPermissionError('Access denied', 'E004');
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('PermissionError');
      expect(error.message).toBe('Access denied');
      expect(error.code).toBe('E004');
    });
  });

  describe('createResourceError', () => {
    it('应该正确创建资源错误实例', () => {
      const error = createResourceError('Resource not found', 'E005');
      expect(error).toBeInstanceOf(CustomError);
      expect(error.name).toBe('ResourceError');
      expect(error.message).toBe('Resource not found');
      expect(error.code).toBe('E005');
    });
  });

  describe('isCustomError', () => {
    it('应该正确判断是否为自定义错误', () => {
      expect(isCustomError(new CustomError('Test', 'test'))).toBe(true);
      expect(isCustomError(new Error('test'))).toBe(false);
      expect(isCustomError('test')).toBe(false);
    });
  });

  describe('isValidationError', () => {
    it('应该正确判断是否为验证错误', () => {
      expect(isValidationError(createValidationError('test'))).toBe(true);
      expect(isValidationError(new Error('test'))).toBe(false);
      expect(isValidationError('test')).toBe(false);
    });
  });

  describe('isBusinessError', () => {
    it('应该正确判断是否为业务错误', () => {
      expect(isBusinessError(createBusinessError('test'))).toBe(true);
      expect(isBusinessError(new Error('test'))).toBe(false);
      expect(isBusinessError('test')).toBe(false);
    });
  });

  describe('isNetworkError', () => {
    it('应该正确判断是否为网络错误', () => {
      expect(isNetworkError(createNetworkError('test'))).toBe(true);
      expect(isNetworkError(new Error('test'))).toBe(false);
      expect(isNetworkError('test')).toBe(false);
    });
  });

  describe('isPermissionError', () => {
    it('应该正确判断是否为权限错误', () => {
      expect(isPermissionError(createPermissionError('test'))).toBe(true);
      expect(isPermissionError(new Error('test'))).toBe(false);
      expect(isPermissionError('test')).toBe(false);
    });
  });

  describe('isResourceError', () => {
    it('应该正确判断是否为资源错误', () => {
      expect(isResourceError(createResourceError('test'))).toBe(true);
      expect(isResourceError(new Error('test'))).toBe(false);
      expect(isResourceError('test')).toBe(false);
    });
  });

  describe('getErrorStack', () => {
    it('应该正确获取错误堆栈信息', () => {
      const error = new Error('test');
      expect(getErrorStack(error)).toBe(error.stack || '');
    });
  });

  describe('getErrorMessage', () => {
    it('应该正确获取错误消息', () => {
      expect(getErrorMessage(new Error('test'))).toBe('test');
      expect(getErrorMessage('test')).toBe('test');
    });
  });

  describe('getErrorCode', () => {
    it('应该正确获取错误代码', () => {
      expect(getErrorCode(new CustomError('Test', 'test', 'E001'))).toBe('E001');
      expect(getErrorCode(new Error('test'))).toBeUndefined();
      expect(getErrorCode('test')).toBeUndefined();
    });
  });

  describe('getErrorName', () => {
    it('应该正确获取错误名称', () => {
      expect(getErrorName(new Error('test'))).toBe('Error');
      expect(getErrorName(new CustomError('Test', 'test'))).toBe('Test');
      expect(getErrorName('test')).toBe('UnknownError');
    });
  });
}); 