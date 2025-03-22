/**
 * 动画计算相关函数
 * @packageDocumentation
 */


/**
 * 线性插值计算（使用 range.ts 中的实现）
 */

/**
 * 缓动函数
 * @param t - 时间（0-1）
 * @param type - 缓动类型
 * @returns 缓动后的值
 * @example
 * ease(0.5, 'linear') // 0.5
 * ease(0.5, 'easeIn') // 0.25
 */
export function ease(t: number, type: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' = 'linear'): number {
  switch (type) {
    case 'linear':
      return t;
    case 'easeIn':
      return t * t;
    case 'easeOut':
      return t * (2 - t);
    case 'easeInOut':
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    default:
      return t;
  }
}

/**
 * 弹簧动画
 * @param t - 时间（0-1）
 * @param options - 弹簧选项
 * @param options.tension - 张力，默认为170
 * @param options.friction - 摩擦力，默认为26
 * @returns 弹簧动画值
 * @example
 * spring(0.5) // 0.5
 * spring(0.5, { tension: 200, friction: 20 }) // 0.5
 */
export function spring(t: number, options: {
  tension?: number;
  friction?: number;
} = {}): number {
  const {
    tension = 170,
    friction = 26
  } = options;

  const damping = Math.sqrt(4 * tension * friction);
  const frequency = Math.sqrt(tension) / (2 * Math.PI);
  const decay = Math.exp(-damping * t / (2 * friction));

  return 1 - decay * Math.cos(2 * Math.PI * frequency * t);
}

/**
 * 贝塞尔曲线
 * @param t - 时间（0-1）
 * @param p0 - 起点
 * @param p1 - 控制点1
 * @param p2 - 控制点2
 * @param p3 - 终点
 * @returns 贝塞尔曲线上的点
 * @example
 * bezier(0.5, 0, 0.5, 0.5, 1) // 0.5
 */
export function bezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const oneMinusT = 1 - t;
  const oneMinusTSquared = oneMinusT * oneMinusT;
  const oneMinusTCubed = oneMinusTSquared * oneMinusT;
  const tSquared = t * t;
  const tCubed = tSquared * t;

  return (
    oneMinusTCubed * p0 +
    3 * oneMinusTSquared * t * p1 +
    3 * oneMinusT * tSquared * p2 +
    tCubed * p3
  );
}

/**
 * 映射范围（使用 range.ts 中的实现）
 */