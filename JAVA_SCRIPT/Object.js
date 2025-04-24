// This key word depends on parent object

// var obj1={
//     name:"shafi",
//     fun:function hello(){
//         console.log(this.name)
//     }
// }
// obj1.fun()

// let obj1 = {
//     name: "Shafi",
//     age: 24,
//     fun:function hello(){
//         console.log(this.name, this.age)
//     }
// }
// obj1.fun();


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

// let obj={
//     name:"shaik",
//     age:21,
//     fun:function test(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// let res=obj.fun
// let obj2={
//     name:"nasir",
//     age:20,
//     res,
// }

// obj2.res();
// --------------------------------------------------
//delete any  one in this obj
// let obj={
//     name:"shaik",
//     age:22,
//     city:"ATP",
// }
// delete obj.city;
// console.log(obj);

// adding new values in obj 

// let obj={
//     name:"shaik"
// }
// obj.age=22
// Object.assign(obj,{city:"atp"})
// console.log(obj)


