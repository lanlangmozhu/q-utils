/**
 * 错误工具函数
 * @packageDocumentation
 */

import { CustomError } from './create';

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
  error instanceof CustomError ? error.code : undefined;

/**
 * 获取错误名称
 * @param error - 错误对象
 * @returns 错误名称
 * @example
 * getErrorName(new Error('test')) // 'Error'
 */
export const getErrorName = (error: unknown): string => 
  error instanceof Error ? error.name : 'UnknownError';

