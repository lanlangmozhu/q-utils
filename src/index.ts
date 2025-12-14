/**
 * qh5-utils 工具函数库
 * 
 * 一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数。
 * 按功能分类，可按需引入。
 * 
 * @packageDocumentation
 */

// 导入模块并重新导出
import * as array from './array';
import * as browser from './browser';
import * as color from './color';
import * as date from './date';
import * as dom from './dom';
import * as file from './file';
import * as func from './function';
import * as network from './network';
import * as number from './number';
import * as object from './object';
import * as storage from './storage';
import * as string from './string';
import * as type from './type';
import * as empty from './empty';
import * as boolean from './boolean';
import * as promise from './promise';
import * as regexp from './regexp';
import * as error from './error';
import * as symbol from './symbol';
import * as bigint from './bigint';

// 命名空间方式导出
export {
    array,
    browser,
    color,
    date,
    dom,
    file,   
    func,
    network,
    number,
    object,
    storage,
    string,
    type,
    empty,
    boolean,
    promise,
    regexp,
    error,
    symbol,
    bigint,
}

// 创建一个包含所有命名空间的对象，作为默认导出
const QH5Utils = {
    array,
    browser,
    color,
    date,
    dom,
    file,   
    func,
    network,
    number,
    object,
    storage,
    string,
    type,
    empty,
    boolean,
    promise,
    regexp,
    error,
    symbol,
    bigint,
};

// 默认导出整个库
export default QH5Utils;

