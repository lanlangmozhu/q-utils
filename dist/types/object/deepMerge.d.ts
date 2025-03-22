/**
 * 深度合并对象的选项接口
 */
export interface DeepMergeOptions {
    /**
     * 数组合并模式
     * - 'replace': 替换模式（默认）
     * - 'concat': 连接模式
     * - 'merge': 合并模式
     */
    arrayMode?: 'replace' | 'concat' | 'merge';
    /**
     * 是否克隆源对象
     */
    clone?: boolean;
    /**
     * 自定义合并函数
     */
    customMerge?: (key: string, target: any, source: any) => any;
}
/**
 * 深度合并对象
 * @param target - 目标对象
 * @param source - 源对象
 * @param rest - 其他对象和选项
 * @returns 合并后的对象
 */
export declare function deepMerge<T extends Record<string, any>>(target?: T | Record<string, any>, source?: Partial<T> | Record<string, any>, ...rest: Array<Partial<T> | Record<string, any> | DeepMergeOptions>): T;
//# sourceMappingURL=deepMerge.d.ts.map