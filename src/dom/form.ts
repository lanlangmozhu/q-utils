/**
 * 序列化表单数据
 * @param form - 表单元素
 * @returns 表单数据对象
 */
export function serializeForm(form: HTMLFormElement): Record<string, string> {
  const formData = new FormData(form);
  const data: Record<string, string> = {};
  
  formData.forEach((value, key) => {
    data[key] = value.toString();
  });
  
  return data;
}

/**
 * 重置表单
 * @param form - 表单元素
 */
export function resetForm(form: HTMLFormElement): void {
  form.reset();
}

/**
 * 禁用表单
 * @param form - 表单元素
 */
export function disableForm(form: HTMLFormElement): void {
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    element.setAttribute('disabled', 'disabled');
  }
}

/**
 * 启用表单
 * @param form - 表单元素
 */
export function enableForm(form: HTMLFormElement): void {
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    element.removeAttribute('disabled');
  }
}

/**
 * 获取表单字段值
 * @param field - 表单字段元素
 * @returns 字段值
 */
export function getFormFieldValue(
  field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
): string {
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    return field.checked ? field.value : '';
  }
  return field.value;
}

/**
 * 设置表单字段值
 * @param field - 表单字段元素
 * @param value - 字段值
 */
export function setFormFieldValue(
  field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  value: string
): void {
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    field.checked = value === field.value;
  } else {
    field.value = value;
  }
} 