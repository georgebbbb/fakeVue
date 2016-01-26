import Dep from './observer/dep'

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.cb = cb
    this.vm = vm
    //此处简化
    this.getter = expOrFn
    this.value = this.get()
  }
  update(){
    this.run()
  }
  run(){
    const  value = this.get()
    if(value !==this.value){
      this.value = value
      this.cb.call(this.vm)
    }
  }
  addDep(dep){
    dep.addSub(this)
  }
  beforeGet(){
    Dep.target = this
  }
  afterGet(){
    Dep.target = null
  }
  get(){
    this.beforeGet()
    //此处简化。。要区分fuction还是expression
    value = this.vm[this.getter]
    this.afterGet()
    return value
  }
}
