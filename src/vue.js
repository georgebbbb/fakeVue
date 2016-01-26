import Observer from './observer'
import Vue from './instance/vue'


const v = new Vue({
  data:{
    a:1,
    b:{
      c:3
    }
  }
})


v.$watch("a",()=>console.log("哈哈"))

setTimeout(()=>{
  v.a = 4
  
},1000)
