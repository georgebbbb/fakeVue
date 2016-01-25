```JavaScript
var o = {};

//默认值configurable: false,
    // enumerable: false,
    // writable: false,
    // value: null,
    // set: undefined,
    // get: undefined
    //如果第一次没设enumerable，，他就去默认值false。。所以第二次便不可配置了
Object.defineProperty(o, 'name', {

     enumerable: false

});

Object.defineProperty(o, 'name', {

     enumerable: true

});
console.log(o.name);
console.log(Object.getOwnPropertyDescriptor(o, 'name'));

console.log(o);
```JavaScript
