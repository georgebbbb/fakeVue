import Watcher from '../watcher'
import {observe} from "../../observer"

class Vue {
  constructor (options={}) {


    //这里简化了。。其实要merge
    this.$options=options
    //这里简化了。。其实要区分的
    let data = this._data=this.$options.data
    observe(data,this)

  }


  $watch(expOrFn, cb, options){
    new Watcher(this, expOrFn, cb)
  }

}
