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
函数名称|函数用途|参数说明|返回值
---|:-:|---|----
formatDate()|格式化时间戳|sec: number // 需要处理的时间戳<br>format?: string // 格式化后的样式 默认值: 'y-m-d h:i'|string
getType()|判断数据类型| data: any // 需要被判断的数据|string
store.set()|往 localStorage、sessionStorage 或 cookie中存储数据|key: string // 键名<br>value: any // 要保存的值<br>options?: { expireDays?: 7, type?: 'localStorage' } // type可选值： 'localStorage, sessionStorage, cookie'|boolean
store.get()|取出数据|key: string // 要取出的键名<br>type?: 'localStorage' // type可选值： 'localStorage, sessionStorage, cookie'|string
store.remove()|删除数据|key: string // 要删除的键名<br>type?: 'localStorage' // type可选值： 'localStorage, sessionStorage, cookie'|boolean


## store代码示例
```javascript
import { store } from '@axmine/helper'
/**
  注： store.set() 方法第三个参数是 options = { expireDays: 7 type: 'localStorage' }
  a. 当 type 为 'sessionStorage' 时， expireDays 不会生效
  b. 当 type 为 'localStorage' 时， expireDays <= 0 代表数据不会过期
*/
// 1. 在 localStorage 中存储，获取，移除数据
store.set('user': 'john') // return: true // 默认 7 天有效
// store.set('user': 'john', { expireDays: 0 }) // 若不主动删除，则永久有效
// store.set('user': 'john', { expireDays: 30 }) // 30 天内数据不会失效
store.get('user') // return: 'john'
store.remove('user') // return: true

// 2. 在 sessionStorage 中存储，获取，移除数据，网页被关闭时数据则失效
store.set('token': 'abad123lkdfivailkolq90912', { type: 'sessionStorage' }) // return: true
store.get('token', type: 'sessionStorage') // return: 'abad123lkdfivailkolq90912'
store.remove('token', type: 'sessionStorage') // return: true

// 3. 在 cookie 中存储，获取，移除数据
store.set('token': 'abad123lkdfivailkolq90912', { type: 'cookie' }) // return: true  默认七天有效
// store.set('token': 'abad123lkdfivailkolq90912', { expireDays: 30, type: 'cookie' }) // 30 天内数据不会失效
store.get('token', type: 'cookie') // return: 'abad123lkdfivailkolq90912'
store.remove('token', type: 'cookie') // return: true
```

## License

MIT
