# 字符串工具函数

## 目录结构

```typescript
src/string/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础操作（包含：基础操作、统计、分割合并）
├── transform.ts   // 转换操作
├── substring.ts   // 截取和填充
├── search.ts      // 查找和替换
├── format.ts      // 清理和格式化
├── validate.ts    // 验证
├── encode.ts      // 编码和解码
├── compare.ts     // 比较
└── uuid.ts        // ID生成
```

## 基础操作 (basic.ts)

### isEmpty
判断字符串是否为空。

```typescript
isEmpty(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果字符串为空（空字符串、null 或 undefined），返回 true
- 否则返回 false

**示例：**
```typescript
isEmpty('') // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('hello') // false
```

### isNotEmpty
判断字符串是否不为空。

```typescript
isNotEmpty(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果字符串不为空，返回 true
- 否则返回 false

**示例：**
```typescript
isNotEmpty('hello') // true
isNotEmpty('') // false
isNotEmpty(null) // false
isNotEmpty(undefined) // false
```

### length
获取字符串长度。

```typescript
length(str: string): number
```

**参数：**
- `str`: 要获取长度的字符串

**返回值：**
- 字符串的长度
- 如果输入无效，返回 0

**示例：**
```typescript
length('hello') // 5
length('') // 0
length(null) // 0
length(undefined) // 0
```

### reverse
反转字符串。

```typescript
reverse(str: string): string
```

**参数：**
- `str`: 要反转的字符串

**返回值：**
- 反转后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
reverse('hello') // 'olleh'
reverse('') // ''
reverse(null) // ''
reverse(undefined) // ''
```

### repeat
重复字符串。

```typescript
repeat(str: string, times: number): string
```

**参数：**
- `str`: 要重复的字符串
- `times`: 重复次数

**返回值：**
- 重复后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
repeat('hello', 3) // 'hellohellohello'
repeat('', 3) // ''
repeat('hello', 0) // ''
repeat(null, 3) // ''
repeat(undefined, 3) // ''
```

## 转换操作 (transform.ts)

### capitalize
将字符串首字母大写。

```typescript
capitalize(str: string): string
```

**参数：**
- `str`: 要转换的字符串

**返回值：**
- 首字母大写的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
capitalize('hello') // 'Hello'
capitalize('world') // 'World'
capitalize('') // ''
capitalize(null) // ''
capitalize(undefined) // ''
```

### capitalizeWords
将字符串中每个单词的首字母大写。

```typescript
capitalizeWords(str: string): string
```

**参数：**
- `str`: 要转换的字符串

**返回值：**
- 每个单词首字母大写的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
capitalizeWords('hello world') // 'Hello World'
capitalizeWords('hello-world') // 'Hello-World'
capitalizeWords('') // ''
capitalizeWords(null) // ''
capitalizeWords(undefined) // ''
```

### camelize
将字符串转换为驼峰命名。

```typescript
camelize(str: string): string
```

**参数：**
- `str`: 要转换的字符串

**返回值：**
- 驼峰命名的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
camelize('hello-world') // 'helloWorld'
camelize('hello_world') // 'helloWorld'
camelize('hello.world') // 'helloWorld'
camelize('') // ''
camelize(null) // ''
camelize(undefined) // ''
```

### dasherize
将字符串转换为短横线命名。

```typescript
dasherize(str: string): string
```

**参数：**
- `str`: 要转换的字符串

**返回值：**
- 短横线命名的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
dasherize('helloWorld') // 'hello-world'
dasherize('HelloWorld') // 'hello-world'
dasherize('hello_world') // 'hello-world'
dasherize('') // ''
dasherize(null) // ''
dasherize(undefined) // ''
```

### toNumber
将字符串转换为数字。

```typescript
toNumber(str: string, defaultValue: number = 0): number
```

**参数：**
- `str`: 要转换的字符串
- `defaultValue`: 转换失败时的默认值

**返回值：**
- 转换后的数字
- 如果转换失败，返回默认值

**示例：**
```typescript
toNumber('123') // 123
toNumber('1.23') // 1.23
toNumber('-123') // -123
toNumber('abc') // 0
toNumber('abc', -1) // -1
toNumber(null) // 0
toNumber(undefined) // 0
```

### toBoolean
将字符串转换为布尔值。

```typescript
toBoolean(str: string): boolean
```

**参数：**
- `str`: 要转换的字符串

**返回值：**
- 转换后的布尔值
- 如果输入无效，返回 false

**示例：**
```typescript
toBoolean('true') // true
toBoolean('false') // false
toBoolean('') // false
toBoolean(null) // false
toBoolean(undefined) // false
```

## 截取和填充 (substring.ts)

### truncate
截断字符串。

```typescript
truncate(str: string, length: number, suffix: string = '...'): string
```

**参数：**
- `str`: 要截断的字符串
- `length`: 截断长度
- `suffix`: 截断后添加的后缀

**返回值：**
- 截断后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
truncate('Hello World', 8) // 'Hello...'
truncate('Hello World', 8, '...') // 'Hello...'
truncate('Hello World', 20) // 'Hello World'
truncate('', 5) // ''
truncate(null, 5) // ''
truncate(undefined, 5) // ''
```

### padStart
在字符串开头填充。

```typescript
padStart(str: string, length: number, char: string = ' '): string
```

**参数：**
- `str`: 要填充的字符串
- `length`: 目标长度
- `char`: 填充字符

**返回值：**
- 填充后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
padStart('123', 5, '0') // '00123'
padStart('123', 5) // '  123'
padStart('123', 3) // '123'
padStart('', 3, '0') // '000'
padStart(null, 5, '0') // ''
padStart(undefined, 5, '0') // ''
```

### padEnd
在字符串结尾填充。

```typescript
padEnd(str: string, length: number, char: string = ' '): string
```

**参数：**
- `str`: 要填充的字符串
- `length`: 目标长度
- `char`: 填充字符

**返回值：**
- 填充后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
padEnd('123', 5, '0') // '12300'
padEnd('123', 5) // '123  '
padEnd('123', 3) // '123'
padEnd('', 3, '0') // '000'
padEnd(null, 5, '0') // ''
padEnd(undefined, 5, '0') // ''
```

### left
获取字符串左侧指定数量的字符。

```typescript
left(str: string, length: number): string
```

**参数：**
- `str`: 要处理的字符串
- `length`: 要获取的字符数量

**返回值：**
- 左侧指定数量的字符
- 如果输入无效，返回空字符串

**示例：**
```typescript
left('Hello World', 5) // 'Hello'
left('Hello', 10) // 'Hello'
left('', 5) // ''
left(null, 5) // ''
left(undefined, 5) // ''
```

### right
获取字符串右侧指定数量的字符。

```typescript
right(str: string, length: number): string
```

**参数：**
- `str`: 要处理的字符串
- `length`: 要获取的字符数量

**返回值：**
- 右侧指定数量的字符
- 如果输入无效，返回空字符串

**示例：**
```typescript
right('Hello World', 5) // 'World'
right('Hello', 10) // 'Hello'
right('', 5) // ''
right(null, 5) // ''
right(undefined, 5) // ''
```

### isChinese
检查字符串是否包含中文字符。

```typescript
isChinese(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果包含中文字符，返回 true
- 否则返回 false

**示例：**
```typescript
isChinese('你好') // true
isChinese('Hello') // false
isChinese('你好World') // true
isChinese('') // false
isChinese(null) // false
isChinese(undefined) // false
```

## 查找和替换 (search.ts)

### indexOf
查找子字符串在字符串中的位置。

```typescript
indexOf(str: string, searchStr: string, fromIndex: number = 0): number
```

**参数：**
- `str`: 要搜索的字符串
- `searchStr`: 要查找的子字符串
- `fromIndex`: 开始搜索的位置

**返回值：**
- 子字符串的位置，如果未找到返回 -1
- 如果输入无效，返回 -1

**示例：**
```typescript
indexOf('Hello World', 'World') // 6
indexOf('Hello World', 'World', 7) // -1
indexOf('Hello World', '') // 0
indexOf('', 'World') // -1
indexOf(null, 'World') // -1
indexOf(undefined, 'World') // -1
```

### replace
替换字符串中的子字符串。

```typescript
replace(str: string, searchStr: string, replaceStr: string): string
```

**参数：**
- `str`: 要处理的字符串
- `searchStr`: 要替换的子字符串
- `replaceStr`: 替换后的字符串

**返回值：**
- 替换后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
replace('Hello World', 'World', 'JavaScript') // 'Hello JavaScript'
replace('Hello World', 'World', '') // 'Hello '
replace('', 'World', 'JavaScript') // ''
replace(null, 'World', 'JavaScript') // ''
replace(undefined, 'World', 'JavaScript') // ''
```

### replaceAll
替换字符串中所有匹配的子字符串。

```typescript
replaceAll(str: string, searchStr: string, replaceStr: string): string
```

**参数：**
- `str`: 要处理的字符串
- `searchStr`: 要替换的子字符串
- `replaceStr`: 替换后的字符串

**返回值：**
- 替换后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
replaceAll('Hello World World', 'World', 'JavaScript') // 'Hello JavaScript JavaScript'
replaceAll('Hello World', 'World', '') // 'Hello '
replaceAll('', 'World', 'JavaScript') // ''
replaceAll(null, 'World', 'JavaScript') // ''
replaceAll(undefined, 'World', 'JavaScript') // ''
```

### includes
检查字符串是否包含子字符串。

```typescript
includes(str: string, searchStr: string): boolean
```

**参数：**
- `str`: 要检查的字符串
- `searchStr`: 要查找的子字符串

**返回值：**
- 如果包含子字符串，返回 true
- 否则返回 false

**示例：**
```typescript
includes('Hello World', 'World') // true
includes('Hello World', '') // true
includes('', 'World') // false
includes(null, 'World') // false
includes(undefined, 'World') // false
```

### startsWith
检查字符串是否以指定前缀开头。

```typescript
startsWith(str: string, prefix: string): boolean
```

**参数：**
- `str`: 要检查的字符串
- `prefix`: 要检查的前缀

**返回值：**
- 如果以指定前缀开头，返回 true
- 否则返回 false

**示例：**
```typescript
startsWith('Hello World', 'Hello') // true
startsWith('Hello World', 'World') // false
startsWith('Hello World', '') // true
startsWith('', 'Hello') // false
startsWith(null, 'Hello') // false
startsWith(undefined, 'Hello') // false
```

### endsWith
检查字符串是否以指定后缀结尾。

```typescript
endsWith(str: string, suffix: string): boolean
```

**参数：**
- `str`: 要检查的字符串
- `suffix`: 要检查的后缀

**返回值：**
- 如果以指定后缀结尾，返回 true
- 否则返回 false

**示例：**
```typescript
endsWith('Hello World', 'World') // true
endsWith('Hello World', 'Hello') // false
endsWith('Hello World', '') // true
endsWith('', 'World') // false
endsWith(null, 'World') // false
endsWith(undefined, 'World') // false
```

## 清理和格式化 (format.ts)

### trim
去除字符串两端的空白字符。

```typescript
trim(str: string): string
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 处理后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
trim('  Hello World  ') // 'Hello World'
trim('Hello World') // 'Hello World'
trim('') // ''
trim(null) // ''
trim(undefined) // ''
```

### trimLeft
去除字符串左端的空白字符。

```typescript
trimLeft(str: string): string
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 处理后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
trimLeft('  Hello World') // 'Hello World'
trimLeft('Hello World') // 'Hello World'
trimLeft('') // ''
trimLeft(null) // ''
trimLeft(undefined) // ''
```

### trimRight
去除字符串右端的空白字符。

```typescript
trimRight(str: string): string
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 处理后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
trimRight('Hello World  ') // 'Hello World'
trimRight('Hello World') // 'Hello World'
trimRight('') // ''
trimRight(null) // ''
trimRight(undefined) // ''
```

### normalizeSpace
规范化字符串中的空白字符。

```typescript
normalizeSpace(str: string): string
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 处理后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
normalizeSpace('  Hello   World  ') // 'Hello World'
normalizeSpace('Hello World') // 'Hello World'
normalizeSpace('') // ''
normalizeSpace(null) // ''
normalizeSpace(undefined) // ''
```

### format
格式化字符串。

```typescript
format(template: string, ...args: any[]): string
```

**参数：**
- `template`: 模板字符串
- `args`: 要替换的参数

**返回值：**
- 格式化后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
format('Hello {0} World', 'JavaScript') // 'Hello JavaScript World'
format('Hello {0} {1}', 'JavaScript', 'World') // 'Hello JavaScript World'
format('') // ''
format(null) // ''
format(undefined) // ''
```

## 验证 (validate.ts)

### isNumeric
检查字符串是否为数字。

```typescript
isNumeric(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果是数字，返回 true
- 否则返回 false

**示例：**
```typescript
isNumeric('123') // true
isNumeric('1.23') // true
isNumeric('-123') // true
isNumeric('abc') // false
isNumeric('') // false
isNumeric(null) // false
isNumeric(undefined) // false
```

### isAlpha
检查字符串是否只包含字母。

```typescript
isAlpha(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果只包含字母，返回 true
- 否则返回 false

**示例：**
```typescript
isAlpha('Hello') // true
isAlpha('Hello123') // false
isAlpha('Hello World') // false
isAlpha('') // false
isAlpha(null) // false
isAlpha(undefined) // false
```

### isAlphanumeric
检查字符串是否只包含字母和数字。

```typescript
isAlphanumeric(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果只包含字母和数字，返回 true
- 否则返回 false

**示例：**
```typescript
isAlphanumeric('Hello123') // true
isAlphanumeric('Hello') // true
isAlphanumeric('123') // true
isAlphanumeric('Hello World') // false
isAlphanumeric('') // false
isAlphanumeric(null) // false
isAlphanumeric(undefined) // false
```

### isEmail
检查字符串是否为有效的邮箱地址。

```typescript
isEmail(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果是有效的邮箱地址，返回 true
- 否则返回 false

**示例：**
```typescript
isEmail('test@example.com') // true
isEmail('test.name@example.co.uk') // true
isEmail('test@example') // false
isEmail('') // false
isEmail(null) // false
isEmail(undefined) // false
```

### isUrl
检查字符串是否为有效的 URL。

```typescript
isUrl(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果是有效的 URL，返回 true
- 否则返回 false

**示例：**
```typescript
isUrl('https://example.com') // true
isUrl('http://example.com') // true
isUrl('ftp://example.com') // true
isUrl('example.com') // false
isUrl('') // false
isUrl(null) // false
isUrl(undefined) // false
```

### isPhone
检查字符串是否为有效的手机号码。

```typescript
isPhone(str: string): boolean
```

**参数：**
- `str`: 要检查的字符串

**返回值：**
- 如果是有效的手机号码，返回 true
- 否则返回 false

**示例：**
```typescript
isPhone('13812345678') // true
isPhone('138-1234-5678') // true
isPhone('138 1234 5678') // true
isPhone('12345678') // false
isPhone('') // false
isPhone(null) // false
isPhone(undefined) // false
```

## 编码和解码 (encode.ts)

### encodeUrl
对字符串进行 URL 编码。

```typescript
encodeUrl(str: string): string
```

**参数：**
- `str`: 要编码的字符串

**返回值：**
- URL 编码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
encodeUrl('Hello World') // 'Hello%20World'
encodeUrl('你好世界') // '%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'
encodeUrl('') // ''
encodeUrl(null) // ''
encodeUrl(undefined) // ''
```

### decodeUrl
对 URL 编码的字符串进行解码。

```typescript
decodeUrl(str: string): string
```

**参数：**
- `str`: 要解码的字符串

**返回值：**
- 解码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
decodeUrl('Hello%20World') // 'Hello World'
decodeUrl('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C') // '你好世界'
decodeUrl('') // ''
decodeUrl(null) // ''
decodeUrl(undefined) // ''
```

### encodeBase64
对字符串进行 Base64 编码。

```typescript
encodeBase64(str: string): string
```

**参数：**
- `str`: 要编码的字符串

**返回值：**
- Base64 编码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
encodeBase64('Hello World') // 'SGVsbG8gV29ybGQ='
encodeBase64('你好世界') // '5L2g5aW95LiW55WM'
encodeBase64('') // ''
encodeBase64(null) // ''
encodeBase64(undefined) // ''
```

### decodeBase64
对 Base64 编码的字符串进行解码。

```typescript
decodeBase64(str: string): string
```

**参数：**
- `str`: 要解码的字符串

**返回值：**
- 解码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
decodeBase64('SGVsbG8gV29ybGQ=') // 'Hello World'
decodeBase64('5L2g5aW95LiW55WM') // '你好世界'
decodeBase64('') // ''
decodeBase64(null) // ''
decodeBase64(undefined) // ''
```

### encodeHtml
对字符串进行 HTML 编码。

```typescript
encodeHtml(str: string): string
```

**参数：**
- `str`: 要编码的字符串

**返回值：**
- HTML 编码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
encodeHtml('<div>Hello World</div>') // '&lt;div&gt;Hello World&lt;/div&gt;'
encodeHtml('&quot;Hello&quot;') // '&amp;quot;Hello&amp;quot;'
encodeHtml('') // ''
encodeHtml(null) // ''
encodeHtml(undefined) // ''
```

### decodeHtml
对 HTML 编码的字符串进行解码。

```typescript
decodeHtml(str: string): string
```

**参数：**
- `str`: 要解码的字符串

**返回值：**
- 解码后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
decodeHtml('&lt;div&gt;Hello World&lt;/div&gt;') // '<div>Hello World</div>'
decodeHtml('&amp;quot;Hello&amp;quot;') // '&quot;Hello&quot;'
decodeHtml('') // ''
decodeHtml(null) // ''
decodeHtml(undefined) // ''
```

## 分割和合并 (split.ts)

### split
将字符串分割为数组。

```typescript
split(str: string, separator: string): string[]
```

**参数：**
- `str`: 要分割的字符串
- `separator`: 分隔符

**返回值：**
- 分割后的字符串数组
- 如果输入无效，返回空数组

**示例：**
```typescript
split('Hello World', ' ') // ['Hello', 'World']
split('Hello,World', ',') // ['Hello', 'World']
split('Hello World', '') // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
split('', ',') // ['']
split(null, ',') // []
split(undefined, ',') // []
```

### join
将字符串数组合并为字符串。

```typescript
join(arr: string[], separator: string): string
```

**参数：**
- `arr`: 要合并的字符串数组
- `separator`: 分隔符

**返回值：**
- 合并后的字符串
- 如果输入无效，返回空字符串

**示例：**
```typescript
join(['Hello', 'World'], ' ') // 'Hello World'
join(['Hello', 'World'], ',') // 'Hello,World'
join(['Hello'], ' ') // 'Hello'
join([], ' ') // ''
join(null, ' ') // ''
join(undefined, ' ') // ''
```

### splitByLength
将字符串按指定长度分割。

```typescript
splitByLength(str: string, length: number): string[]
```

**参数：**
- `str`: 要分割的字符串
- `length`: 分割长度

**返回值：**
- 分割后的字符串数组
- 如果输入无效，返回空数组

**示例：**
```typescript
splitByLength('Hello World', 5) // ['Hello', ' Worl', 'd']
splitByLength('Hello', 2) // ['He', 'll', 'o']
splitByLength('', 2) // []
splitByLength(null, 2) // []
splitByLength(undefined, 2) // []
```

### splitLines
将字符串按行分割。

```typescript
splitLines(str: string): string[]
```

**参数：**
- `str`: 要分割的字符串

**返回值：**
- 分割后的字符串数组
- 如果输入无效，返回空数组

**示例：**
```typescript
splitLines('Hello\nWorld') // ['Hello', 'World']
splitLines('Hello\r\nWorld') // ['Hello', 'World']
splitLines('Hello\rWorld') // ['Hello', 'World']
splitLines('') // []
splitLines(null) // []
splitLines(undefined) // []
```

## 统计 (stats.ts)

### count
统计子字符串在字符串中出现的次数。

```typescript
count(str: string, searchStr: string): number
```

**参数：**
- `str`: 要搜索的字符串
- `searchStr`: 要查找的子字符串

**返回值：**
- 子字符串出现的次数
- 如果输入无效，返回 0

**示例：**
```typescript
count('Hello World World', 'World') // 2
count('Hello World', '') // 0
count('', 'World') // 0
count(null, 'World') // 0
count(undefined, 'World') // 0
```

### frequency
统计字符串中每个字符出现的频率。

```typescript
frequency(str: string): Record<string, number>
```

**参数：**
- `str`: 要统计的字符串

**返回值：**
- 字符频率对象
- 如果输入无效，返回空对象

**示例：**
```typescript
frequency('Hello') // { 'H': 1, 'e': 1, 'l': 2, 'o': 1 }
frequency('') // {}
frequency(null) // {}
frequency(undefined) // {}
```

### getNumbers
从字符串中提取数字。

```typescript
getNumbers(str: string): number[]
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 提取的数字数组
- 如果输入无效，返回空数组

**示例：**
```typescript
getNumbers('Hello 123 World 456') // [123, 456]
getNumbers('1.23 -456') // [1.23, -456]
getNumbers('') // []
getNumbers(null) // []
getNumbers(undefined) // []
```

### getLetters
从字符串中提取字母。

```typescript
getLetters(str: string): string[]
```

**参数：**
- `str`: 要处理的字符串

**返回值：**
- 提取的字母数组
- 如果输入无效，返回空数组

**示例：**
```typescript
getLetters('Hello 123 World') // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
getLetters('123') // []
getLetters('') // []
getLetters(null) // []
getLetters(undefined) // []
```

## 比较 (compare.ts)

### compare
比较两个字符串。

```typescript
compare(str1: string, str2: string): number
```

**参数：**
- `str1`: 第一个字符串
- `str2`: 第二个字符串

**返回值：**
- 如果 str1 < str2，返回 -1
- 如果 str1 = str2，返回 0
- 如果 str1 > str2，返回 1
- 如果输入无效，返回 0

**示例：**
```typescript
compare('Hello', 'World') // -1
compare('World', 'Hello') // 1
compare('Hello', 'Hello') // 0
compare('', '') // 0
compare(null, 'World') // 0
compare(undefined, 'World') // 0
```

### compareIgnoreCase
忽略大小写比较两个字符串。

```typescript
compareIgnoreCase(str1: string, str2: string): number
```

**参数：**
- `str1`: 第一个字符串
- `str2`: 第二个字符串

**返回值：**
- 如果 str1 < str2，返回 -1
- 如果 str1 = str2，返回 0
- 如果 str1 > str2，返回 1
- 如果输入无效，返回 0

**示例：**
```typescript
compareIgnoreCase('Hello', 'world') // -1
compareIgnoreCase('World', 'hello') // 1
compareIgnoreCase('Hello', 'hello') // 0
compareIgnoreCase('', '') // 0
compareIgnoreCase(null, 'World') // 0
compareIgnoreCase(undefined, 'World') // 0
```

### equals
检查两个字符串是否相等。

```typescript
equals(str1: string, str2: string): boolean
```

**参数：**
- `str1`: 第一个字符串
- `str2`: 第二个字符串

**返回值：**
- 如果字符串相等，返回 true
- 否则返回 false

**示例：**
```typescript
equals('Hello', 'Hello') // true
equals('Hello', 'World') // false
equals('', '') // true
equals(null, 'World') // false
equals(undefined, 'World') // false
```

### equalsIgnoreCase
忽略大小写检查两个字符串是否相等。

```typescript
equalsIgnoreCase(str1: string, str2: string): boolean
```

**参数：**
- `str1`: 第一个字符串
- `str2`: 第二个字符串

**返回值：**
- 如果字符串相等（忽略大小写），返回 true
- 否则返回 false

**示例：**
```typescript
equalsIgnoreCase('Hello', 'hello') // true
equalsIgnoreCase('Hello', 'World') // false
equalsIgnoreCase('', '') // true
equalsIgnoreCase(null, 'World') // false
equalsIgnoreCase(undefined, 'World') // false
```

### similarity
计算两个字符串的相似度。

```typescript
similarity(str1: string, str2: string): number
```

**参数：**
- `str1`: 第一个字符串
- `str2`: 第二个字符串

**返回值：**
- 相似度（0-1 之间的数字）
- 如果输入无效，返回 0

**示例：**
```typescript
similarity('Hello', 'Hello') // 1
similarity('Hello', 'World') // 0
similarity('Hello', 'Hallo') // 0.8
similarity('', '') // 1
similarity(null, 'World') // 0
similarity(undefined, 'World') // 0
```

## ID 生成 (uuid.ts)

### uuid
生成 UUID。

```typescript
uuid(): string
```

**返回值：**
- 生成的 UUID

**示例：**
```typescript
uuid() // '123e4567-e89b-12d3-a456-426614174000'
```

### randomId
生成随机 ID。

```typescript
randomId(length: number = 8, options: { prefix?: string; charset?: string } = {}): string
```

**参数：**
- `length`: ID 长度
- `options`: 配置选项
  - `prefix`: 前缀
  - `charset`: 字符集

**返回值：**
- 生成的随机 ID

**示例：**
```typescript
randomId() // 'a1b2c3d4'
randomId(10) // 'a1b2c3d4e5'
randomId(8, { prefix: 'user_' }) // 'user_a1b2c3d4'
randomId(8, { charset: '0123456789' }) // '12345678'
``` 