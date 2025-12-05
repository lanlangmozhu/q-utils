/**
 * 错误创建工具函数
 * @packageDocumentation
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

