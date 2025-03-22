/**
 * 序列化表单数据
 * @param form - 表单元素
 * @returns 表单数据对象
 */
export declare function serializeForm(form: HTMLFormElement): Record<string, string>;
/**
 * 重置表单
 * @param form - 表单元素
 */
export declare function resetForm(form: HTMLFormElement): void;
/**
 * 禁用表单
 * @param form - 表单元素
 */
export declare function disableForm(form: HTMLFormElement): void;
/**
 * 启用表单
 * @param form - 表单元素
 */
export declare function enableForm(form: HTMLFormElement): void;
/**
 * 获取表单字段值
 * @param field - 表单字段元素
 * @returns 字段值
 */
export declare function getFormFieldValue(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string;
/**
 * 设置表单字段值
 * @param field - 表单字段元素
 * @param value - 字段值
 */
export declare function setFormFieldValue(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: string): void;
//# sourceMappingURL=form.d.ts.map