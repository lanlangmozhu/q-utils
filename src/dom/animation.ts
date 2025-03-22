/**
 * 淡入效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export function fadeIn(
  element: HTMLElement,
  duration: number = 300,
  callback?: () => void
): void {
  element.style.opacity = '0';
  element.style.display = 'block';
  
  const start = performance.now();
  const animate = (currentTime: number) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.opacity = progress.toString();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (callback) {
      callback();
    }
  };
  
  requestAnimationFrame(animate);
}

/**
 * 淡出效果
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export function fadeOut(
  element: HTMLElement,
  duration: number = 300,
  callback?: () => void
): void {
  const start = performance.now();
  const animate = (currentTime: number) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.opacity = (1 - progress).toString();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
      if (callback) {
        callback();
      }
    }
  };
  
  requestAnimationFrame(animate);
}

/**
 * 滑动显示
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export function slideDown(
  element: HTMLElement,
  duration: number = 300,
  callback?: () => void
): void {
  const height = element.scrollHeight;
  element.style.height = '0';
  element.style.display = 'block';
  element.style.overflow = 'hidden';
  
  const start = performance.now();
  const animate = (currentTime: number) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.height = `${height * progress}px`;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.height = 'auto';
      element.style.overflow = 'visible';
      if (callback) {
        callback();
      }
    }
  };
  
  requestAnimationFrame(animate);
}

/**
 * 滑动隐藏
 * @param element - DOM元素
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 动画完成回调
 */
export function slideUp(
  element: HTMLElement,
  duration: number = 300,
  callback?: () => void
): void {
  const height = element.scrollHeight;
  element.style.height = `${height}px`;
  element.style.overflow = 'hidden';
  
  const start = performance.now();
  const animate = (currentTime: number) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.height = `${height * (1 - progress)}px`;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
      element.style.height = 'auto';
      element.style.overflow = 'visible';
      if (callback) {
        callback();
      }
    }
  };
  
  requestAnimationFrame(animate);
}

/**
 * 添加过渡效果
 * @param element - DOM元素
 * @param properties - 需要添加过渡效果的属性
 * @param duration - 过渡持续时间（毫秒）
 * @param timing - 过渡时间函数
 */
export function addTransition(
  element: HTMLElement,
  properties: string | string[],
  duration: number = 300,
  timing: string = 'ease'
): void {
  const props = Array.isArray(properties) ? properties : [properties];
  const transitions = props.map(prop => `${prop} ${duration}ms ${timing}`);
  element.style.transition = transitions.join(', ');
}

/**
 * 移除过渡效果
 * @param element - DOM元素
 */
export function removeTransition(element: HTMLElement): void {
  element.style.transition = '';
} 