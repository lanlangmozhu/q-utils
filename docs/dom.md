# DOM 操作工具函数

q-utils 提供了一系列常用的 DOM 操作工具函数，用于简化日常 Web 开发中的 DOM 操作。

## 元素选择

### querySelector

选择 DOM 元素的简便方法。

```typescript
import { querySelector, querySelectorAll } from 'q-utils/dom';

// 选择单个元素
const header = querySelector('#header');

// 选择多个元素
const buttons = querySelectorAll('.btn');
buttons.forEach(button => {
  // 处理每个按钮
});
```

## CSS 类操作

### addClass / removeClass / toggleClass / hasClass

简化 CSS 类名操作。

```typescript
import { addClass, removeClass, toggleClass, hasClass } from 'q-utils/dom';

// 添加类
addClass(element, 'active');
addClass(element, ['visible', 'important']); // 添加多个类

// 移除类
removeClass(element, 'hidden');
removeClass(element, ['disabled', 'loading']); // 移除多个类

// 切换类
toggleClass(element, 'expanded'); // 如果有则移除，如果没有则添加
toggleClass(element, 'dark-mode', prefersDarkMode); // 根据条件添加或移除

// 检查是否有类
if (hasClass(element, 'enabled')) {
  // 执行操作
}
```

## 样式操作

### getStyle / setStyle

获取和设置元素样式。

```typescript
import { getStyle, setStyle, setStyles, getStyleNumber } from 'q-utils/dom';

// 获取样式
const color = getStyle(element, 'color');
const width = getStyleNumber(element, 'width'); // 返回数字，去除单位

// 设置单个样式
setStyle(element, 'color', 'red');

// 批量设置样式
setStyles(element, {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '4px'
});
```

## 元素位置

### getDomPosition

获取元素的位置信息。

```typescript
import { getDomPosition } from 'q-utils/dom';

const position = getDomPosition(element);
console.log(`
  相对视口位置: (${position.left}, ${position.top})
  绝对位置: (${position.absoluteLeft}, ${position.absoluteTop})
  尺寸: ${position.width} x ${position.height}
`);
```

## 元素创建和操作

### createElement / insertAfter / insertBefore

创建和插入 DOM 元素。

```typescript
import { createElement, insertAfter, insertBefore } from 'q-utils/dom';

// 创建元素
const card = createElement('div', {
  className: 'card',
  text: '这是卡片内容',
  styles: {
    padding: '16px',
    margin: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  attributes: {
    'data-id': '123',
    'aria-label': '信息卡片'
  },
  events: {
    click: () => console.log('卡片被点击')
  }
});

// 插入到参考元素之后
insertAfter(card, referenceElement);

// 插入到参考元素之前
insertBefore(newElement, referenceElement);
```

## 事件处理

### on / off / once

事件监听器管理。

```typescript
import { on, off, once } from 'q-utils/dom';

// 添加事件监听
const handleClick = (e) => console.log('按钮被点击', e);
on(button, 'click', handleClick);

// 添加事件监听并指定选项
on(element, 'scroll', handleScroll, { passive: true });

// 移除事件监听
off(button, 'click', handleClick);

// 只执行一次的事件监听
once(button, 'click', () => {
  console.log('这个处理函数只会执行一次');
});
```

## 滚动控制

### scrollTo

平滑滚动到指定位置。

```typescript
import { scrollTo } from 'q-utils/dom';

// 滚动到页面顶部
scrollTo(window, { top: 0 });

// 滚动到特定位置并执行回调
scrollTo(window, {
  top: 1000,
  behavior: 'smooth',
  callback: () => console.log('滚动完成')
});

// 滚动容器元素
const container = document.querySelector('.scroll-container');
scrollTo(container, {
  top: 500,
  left: 0,
  duration: 800 // 自定义滚动持续时间（毫秒）
});
``` 