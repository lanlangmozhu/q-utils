# Date 工具函数

## 目录结构

```typescript
src/date/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础操作
├── format.ts      // 格式化
├── calculation.ts // 日期计算
├── calendar.ts    // 日历相关
├── lunar.ts       // 农历相关
├── range.ts       // 日期范围
├── special.ts     // 特殊日期
├── statistics.ts  // 统计分析
├── time.ts        // 时间相关
└── timezone.ts    // 时区相关
```

## 功能说明

### 基础操作 (basic.ts)
- `isDate`: 判断是否为日期
- `isValidDate`: 判断是否为有效日期
- `isLeapYear`: 判断是否为闰年
- `getDaysInMonth`: 获取月份天数
- `getFirstDayOfMonth`: 获取月份第一天

### 格式化 (format.ts)
- `formatDate`: 格式化日期
- `formatTime`: 格式化时间
- `formatDateTime`: 格式化日期时间
- `formatRelative`: 相对时间格式化

### 日期计算 (calculation.ts)
- `addDays`: 添加天数
- `addMonths`: 添加月份
- `addYears`: 添加年份
- `subtractDays`: 减少天数
- `subtractMonths`: 减少月份
- `subtractYears`: 减少年份

### 日历相关 (calendar.ts)
- `generateCalendarMonth`: 生成日历月份数据
- `generateCalendarWeek`: 生成日历周数据
- `getCalendarGrid`: 获取日历网格数据
- `getWeekNumber`: 获取周数

### 农历相关 (lunar.ts)
- `getLunarDate`: 获取农历日期
- `getLunarYear`: 获取农历年份
- `getLunarMonth`: 获取农历月份
- `getLunarDay`: 获取农历日

### 日期范围 (range.ts)
- `getDateRange`: 获取日期范围
- `isInRange`: 判断日期是否在范围内
- `getOverlapDays`: 获取重叠天数
- `getDateDifference`: 获取日期差值

### 特殊日期 (special.ts)
- `getHoliday`: 获取节假日
- `isHoliday`: 判断是否为节假日
- `getWorkday`: 获取工作日
- `isWorkday`: 判断是否为工作日

### 统计分析 (statistics.ts)
- `getWorkingDays`: 获取工作日数量
- `getDatesBetween`: 获取两个日期之间的所有日期
- `getDateFrequency`: 获取日期频率
- `getDateDistribution`: 获取日期分布

### 时间相关 (time.ts)
- `getTimeString`: 获取时间字符串
- `getTimeStamp`: 获取时间戳
- `getTimeDifference`: 获取时间差
- `getTimeComponents`: 获取时间组件

### 时区相关 (timezone.ts)
- `convertTimezone`: 转换时区
- `getTimezoneOffset`: 获取时区偏移
- `getLocalTime`: 获取本地时间
- `getUTCTime`: 获取UTC时间

## 使用示例

```typescript
import { 
  formatDate, 
  addDays, 
  getWorkingDays,
  getLunarDate 
} from '@qh5-utils/date';

// 日期格式化
const formatted = formatDate(new Date(), 'YYYY-MM-DD');

// 日期计算
const nextWeek = addDays(new Date(), 7);

// 工作日计算
const workdays = getWorkingDays(new Date(), addDays(new Date(), 30));

// 农历日期
const lunar = getLunarDate(new Date());
```

## 注意事项

1. 日期计算考虑时区问题
2. 农历转换支持1900-2100年
3. 节假日数据需要定期更新
4. 性能考虑：大量日期计算时建议使用缓存

## 更新记录

- 2024-03-21: 重构目录结构，优化功能分类
- 2024-03-20: 添加日历和统计分析相关方法
- 2024-03-19: 添加农历和时区相关方法 