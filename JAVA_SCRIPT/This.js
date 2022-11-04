// var obj={
//     fname:"shaik",
//     lname:"shakeer",
//     fun:function(){
//         return this.fname
//     }
  
// }
// console.log(obj.fun());

var check={
    fname:"shaik",
    lname:"shakeer",
    fun:function(){
       return this.fname+" "+this.lname
    }
}
console.log(check.fun())