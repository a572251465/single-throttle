# single-throttle
## description
----- Reasons for choosing single throttle -----
1. single-xxx series plugin each plugin does only one thing
2. the plugin size is less than 1k
3. Parameter penetration can be performed
4. High configuration policy

## options
1. options
   1. <options.func> parameter func mast be a function. the function be throttle function
      1. 参数func 必须是一个函数，这个函数是节流掉调用的函数
   2. options.wait parameter wait Indicates the frequency and time of calling the function, default time 300ms
      1. 参数wait 表示调用函数的频率时间，默认值是300毫秒
   3. options.isFast parameter isFast Indicates whether to execute the function immediately, default value true
      1. 参数isFast 表示是否立即调用函数，默认值是true
2. options be a object or function, if options be a object, follow rule 1, but if options is function, replace the parameter options.func, other parameter is default value
   1. 参数options是一个对象 或是 函数，如果参数是一个对象，规则参照1. 但是如果是一个函数，直接替代options.func，其余的参数选择默认值
3. results
   1. after calling then function, results a function
      1. 调用函数后，返回值是一个函数
## example for
```
example1:
const throttle = require('single-throttle')
const options = {
   func: () => {},
   wait: 1000,
   isFast: false
}
const resultFun = throttle(options)

example2:
const throttle = require('single-throttle')
const resultFun = throttle(() => {})
```
## install
```
npm install single-throttle --save
yarn add single-throttle --save
```
## contact me
[GitHub](https://github.com/a572251465/single-throttle)