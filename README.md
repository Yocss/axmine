# @axmine/helper
[![NPM Version][npm-image]][npm-url] [![size-image]][size-url] [![NPM Downloads][downloads-image]][downloads-url]

[size-image]: https://badgen.net/bundlephobia/minzip/@axmine/helper
[size-url]: https://bundlephobia.com/result?p=@axmine/helper
[npm-image]: https://badgen.net/npm/v/@axmine/helper
[npm-url]: https://npmjs.org/package/@axmine/helper
[downloads-image]: https://badgen.net/npm/dt/@axmine/helper
[downloads-url]: https://www.npmjs.com/package/@axmine/helper

自用的js方法收集

## 使用方式

```js
npm i @axmine/helper -S
```

### ES6
```js
import helper from '@axmine/helper'
helper.formatDate(111100000)
```
### CommonJS
```js
var helper = require('@axmine/helper');
helper.formatDate(111100000)
```
### 直接引入
```js
<script src="helper.min.js"></script>
  helper.formatDate(111100000)
```
## 函数说明
函数名称|函数用途|参数说明
---|:-:|---
formatDate|格式化时间戳|sec: Number // 需要处理的时间戳<br>format?: string // 格式化后的样式 默认值: 'y-m-d h:i'
getType|判断数据类型| data: any // 需要被判断的数据


<!-- ## 代码示例 -->

## License

MIT
