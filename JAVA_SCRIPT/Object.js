// This key word depends on parent object

// var obj1={
//     name:"shafi",
//     fun:function hello(){
//         console.log(this.name)
//     }
// }
// obj1.fun()

var obj={
    name:"sak",
    fun:function hello(){
        console.log(this.name)
    }
}
obj.fun()
// ------------------------------------
// redeclare the obj values
// eg--2
// var obj={
//     name:"shaik",
//     age:23,
//     getName:function(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// var out=obj.getName;

// var obj2={
//     name:"shakeer",
//     age:22,out
// }
// obj2.out();

// --------------------------------------------------


