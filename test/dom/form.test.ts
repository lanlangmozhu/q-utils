import {
  serializeForm,
  resetForm,
  disableForm,
  enableForm,
  getFormFieldValue,
  setFormFieldValue
} from '../../src/dom/form';

describe('DOM Form Operations', () => {
  let form: HTMLFormElement;
  let textInput: HTMLInputElement;
  let checkboxInput: HTMLInputElement;
  let selectInput: HTMLSelectElement;
  let textareaInput: HTMLTextAreaElement;

  beforeEach(() => {
    form = document.createElement('form');
    form.id = 'test-form';

    textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.name = 'username';
    textInput.value = 'test-user';
    form.appendChild(textInput);

    checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'isActive';
    checkboxInput.value = 'true';
    checkboxInput.checked = true;
    form.appendChild(checkboxInput);

    selectInput = document.createElement('select');
    selectInput.name = 'role';
    const option1 = document.createElement('option');
    option1.value = 'admin';
    option1.text = 'Admin';
    const option2 = document.createElement('option');
    option2.value = 'user';
    option2.text = 'User';
    selectInput.appendChild(option1);
    selectInput.appendChild(option2);
    selectInput.value = 'admin';
    form.appendChild(selectInput);

    textareaInput = document.createElement('textarea');
    textareaInput.name = 'description';
    textareaInput.value = 'Test description';
    form.appendChild(textareaInput);

    document.body.appendChild(form);
  });

  afterEach(() => {
    document.body.removeChild(form);
  });

  describe('serializeForm', () => {
    test('应该正确序列化表单数据', () => {
      const data = serializeForm(form);
      expect(data).toEqual({
        username: 'test-user',
        isActive: 'true',
        role: 'admin',
        description: 'Test description'
      });
    });

    test('应该处理空表单', () => {
      const emptyForm = document.createElement('form');
      const data = serializeForm(emptyForm);
      expect(data).toEqual({});
    });
  });

  describe('resetForm', () => {
    test('应该重置所有表单字段', () => {
      textInput.value = 'new-value';
      checkboxInput.checked = false;
      selectInput.value = 'user';
      textareaInput.value = 'new description';

      resetForm(form);

      expect(textInput.value).toBe('test-user');
      expect(checkboxInput.checked).toBe(true);
      expect(selectInput.value).toBe('admin');
      expect(textareaInput.value).toBe('Test description');
    });
  });

  describe('disableForm', () => {
    test('应该禁用所有表单字段', () => {
      disableForm(form);
      
      expect(textInput.disabled).toBe(true);
      expect(checkboxInput.disabled).toBe(true);
      expect(selectInput.disabled).toBe(true);
      expect(textareaInput.disabled).toBe(true);
    });
  });

  describe('enableForm', () => {
    test('应该启用所有表单字段', () => {
      disableForm(form);
      enableForm(form);
      
      expect(textInput.disabled).toBe(false);
      expect(checkboxInput.disabled).toBe(false);
      expect(selectInput.disabled).toBe(false);
      expect(textareaInput.disabled).toBe(false);
    });
  });

  describe('getFormFieldValue', () => {
    test('应该获取文本输入框的值', () => {
      expect(getFormFieldValue(textInput)).toBe('test-user');
    });

    test('应该获取复选框的值', () => {
      expect(getFormFieldValue(checkboxInput)).toBe('true');
      checkboxInput.checked = false;
      expect(getFormFieldValue(checkboxInput)).toBe('');
    });

    test('应该获取下拉框的值', () => {
      expect(getFormFieldValue(selectInput)).toBe('admin');
    });

    test('应该获取文本域的值', () => {
      expect(getFormFieldValue(textareaInput)).toBe('Test description');
    });
  });

  describe('setFormFieldValue', () => {
    test('应该设置文本输入框的值', () => {
      setFormFieldValue(textInput, 'new-value');
      expect(textInput.value).toBe('new-value');
    });

    test('应该设置复选框的值', () => {
      setFormFieldValue(checkboxInput, 'true');
      expect(checkboxInput.checked).toBe(true);
      setFormFieldValue(checkboxInput, 'false');
      expect(checkboxInput.checked).toBe(false);
    });

    test('应该设置下拉框的值', () => {
      setFormFieldValue(selectInput, 'user');
      expect(selectInput.value).toBe('user');
    });

    test('应该设置文本域的值', () => {
      setFormFieldValue(textareaInput, 'new description');
      expect(textareaInput.value).toBe('new description');
    });
  });
}); 