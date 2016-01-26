

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */


export default class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }
  notify(){
    this.subs.forEach(sub=>sub.update())
  }
  depend(){
    Dep.target.addDep(this)
  }
}

//Dep.target  的是watcher
Dep.target = null
