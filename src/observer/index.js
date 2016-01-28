import {def} from "../util"
import Dep from "./dep"



export default class  Observer{
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    this.walk(value)
  }
  //递归。。让每个字属性可以observe
  walk(value){
    Object.keys(value).forEach(key=>this.convert(key,value[key]))
  }
  convert(key, val){
    defineReactive(this.value, key, val)
  }
}




export function defineReactive (obj, key, val) {
  var dep = new Dep()
  var childOb = observe(val)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: ()=>{
      // 说明这是watch 引起的
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return val
    },
    set:newVal=> {
      var value =  val
      if (newVal === value) {
        return
      }
      val = newVal
      childOb = observe(newVal)
      dep.notify()
    }
  })
}


export function observe (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}
