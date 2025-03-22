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
export class CustomError extends Error {
  constructor(
    name: string,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = name;
  }
}

/**
 * 创建验证错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 验证错误实例
 * @example
 * createValidationError('Invalid input', 'E001')
 */
export const createValidationError = (message: string, code?: string): CustomError => 
  new CustomError('ValidationError', message, code);

/**
 * 创建业务错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 业务错误实例
 * @example
 * createBusinessError('Operation failed', 'E002')
 */
export const createBusinessError = (message: string, code?: string): CustomError => 
  new CustomError('BusinessError', message, code);

/**
 * 创建网络错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 网络错误实例
 * @example
 * createNetworkError('Connection failed', 'E003')
 */
export const createNetworkError = (message: string, code?: string): CustomError => 
  new CustomError('NetworkError', message, code);

/**
 * 创建权限错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 权限错误实例
 * @example
 * createPermissionError('Access denied', 'E004')
 */
export const createPermissionError = (message: string, code?: string): CustomError => 
  new CustomError('PermissionError', message, code);

/**
 * 创建资源错误
 * @param message - 错误信息
 * @param code - 错误代码
 * @returns 资源错误实例
 * @example
 * createResourceError('Resource not found', 'E005')
 */
export const createResourceError = (message: string, code?: string): CustomError => 
  new CustomError('ResourceError', message, code);

/**
 * 检查是否为自定义错误
 * @param error - 错误对象
 * @returns 是否为自定义错误
 * @example
 * isCustomError(new CustomError('Test', 'test')) // true
 * isCustomError(new Error('test')) // false
 */
export const isCustomError = (error: unknown): error is CustomError => 
  error instanceof CustomError;

/**
 * 检查是否为验证错误
 * @param error - 错误对象
 * @returns 是否为验证错误
 * @example
 * isValidationError(createValidationError('test')) // true
 * isValidationError(new Error('test')) // false
 */
export const isValidationError = (error: unknown): error is CustomError => 
  isCustomError(error) && error.name === 'ValidationError';

/**
 * 检查是否为业务错误
 * @param error - 错误对象
 * @returns 是否为业务错误
 * @example
 * isBusinessError(createBusinessError('test')) // true
 * isBusinessError(new Error('test')) // false
 */
export const isBusinessError = (error: unknown): error is CustomError => 
  isCustomError(error) && error.name === 'BusinessError';

/**
 * 检查是否为网络错误
 * @param error - 错误对象
 * @returns 是否为网络错误
 * @example
 * isNetworkError(createNetworkError('test')) // true
 * isNetworkError(new Error('test')) // false
 */
export const isNetworkError = (error: unknown): error is CustomError => 
  isCustomError(error) && error.name === 'NetworkError';

/**
 * 检查是否为权限错误
 * @param error - 错误对象
 * @returns 是否为权限错误
 * @example
 * isPermissionError(createPermissionError('test')) // true
 * isPermissionError(new Error('test')) // false
 */
export const isPermissionError = (error: unknown): error is CustomError => 
  isCustomError(error) && error.name === 'PermissionError';

/**
 * 检查是否为资源错误
 * @param error - 错误对象
 * @returns 是否为资源错误
 * @example
 * isResourceError(createResourceError('test')) // true
 * isResourceError(new Error('test')) // false
 */
export const isResourceError = (error: unknown): error is CustomError => 
  isCustomError(error) && error.name === 'ResourceError';

/**
 * 获取错误堆栈信息
 * @param error - 错误对象
 * @returns 错误堆栈信息
 * @example
 * getErrorStack(new Error('test'))
 */
export const getErrorStack = (error: Error): string => 
  error.stack || '';

/**
 * 获取错误消息
 * @param error - 错误对象
 * @returns 错误消息
 * @example
 * getErrorMessage(new Error('test')) // 'test'
 */
export const getErrorMessage = (error: unknown): string => 
  error instanceof Error ? error.message : String(error);

/**
 * 获取错误代码
 * @param error - 错误对象
 * @returns 错误代码
 * @example
 * getErrorCode(createCustomError('Test', 'test', 'E001')) // 'E001'
 */
export const getErrorCode = (error: unknown): string | undefined => 
  isCustomError(error) ? error.code : undefined;

/**
 * 获取错误名称
 * @param error - 错误对象
 * @returns 错误名称
 * @example
 * getErrorName(new Error('test')) // 'Error'
 */
export const getErrorName = (error: unknown): string => 
  error instanceof Error ? error.name : 'UnknownError'; 