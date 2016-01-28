import Watcher from '../watcher'
import {observe} from "../observer"

export default class Vue {
  constructor (options={}) {
    //这里简化了。。其实要merge
    this.$options=options
    //这里简化了。。其实要区分的
    let data = this._data=this.$options.data
    Object.keys(data).forEach(key=>this._proxy(key))
    observe(data,this)

  }


  $watch(expOrFn, cb, options){
    new Watcher(this, expOrFn, cb)
  }

  _proxy(key) {

    var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return self._data[key]
      },
      set: function proxySetter (val) {
        self._data[key] = val
      }
    })
  }


}
