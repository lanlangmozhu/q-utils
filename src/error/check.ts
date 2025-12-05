/**
 * 错误检查工具函数
 * @packageDocumentation
 */

import { CustomError } from './create';

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

