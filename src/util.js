/**
 * Mix properties into target object.
 *
 * @param {Object} target
 * @param {Object} mixin
 */

export function mixin (target, mixin) {
  for (var key in mixin) {
    if (target[key] !== mixin[key]) {
      target[key] = mixin[key]
    }
  }
}

/**
 * Object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

export function  isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

export function isArray(obj) {
  return Array.isArray(obj)
}
export function augment(target, proto) {
  target.__proto__ = proto
}
//使 属性不能枚举，不能 Object.keys() 找到
export   function define(obj, key, val) {
  Object.defineProperty(obj, key, {
    value        : val,
    enumerable   : false,
    writable     : true,
    configurable : true
  })
}


export function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
