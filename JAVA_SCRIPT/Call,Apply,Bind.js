// Call()

// this method using another objects values,
// eg- ek place me hoko dusre place me bulaneka

// function calling(){
//     console.log(this.name+" "+this.age)
// }

// var obj={
//     name:"shaik",
//     age:23
// }

// calling.call(obj)

// function calling(){
//     console.log("hello " + this.name)
// }

// var obj={
//     name:"shakeer",
// }
// calling.call(obj)

// output-hello shakeer
// -------------------------------------------
// call() method allows an object to use the method (function) of another object.
// it accepts arguments also

// var person1={
//     name:"shaik",
//     age:22,
//     getDetails:function(){
//         console.log(this.name+" "+this.age)
//     }
// }
// var person2={
//     name:"Shakeer",
//     age:23
// }
// person1.getDetails.call(person2);
// ---------------------------------------------------
// Apply()
//the apply method similar to the call method ,the difference is call method takes arguments seperately,but apply method takes an arguments with arrays.

// function hello(message){
//     console.log(this.name+" "+this.age+message)
// }

// var obj1={
//     name:"shaik",
//     age:22
// }
// hello.apply(obj1,["male"])

// function check(message){
//     console.log(this.name+" "+this.age+message)
// }
// var person={
//     name:"shaik",
//     age:22
// }
// check.apply(person,[" great"])
// --------------------------------------------------------
// bind()
// bind method return a new function where the this keyword is bounded to the ownerObject
// var bike={
//     details:function(number,brand){
//         console.log(this.name+number+brand)
//     }
// }
// var own={name:"shaik"}
// var check=bike.details.bind(own,12345,"Yamaha")

// check();

// var details={
//     bike:function(brand,num){
//         console.log(this.name+" "+brand+" "+num)
//     }
// }

// var obj2={
//     name:"sarmas"
// }
// var out=details.bike.bind(obj2,"appachi",2345)
// out()
// var check={
//     car:function(brand,number){
//         console.log(this.name+" "+brand+" "+number)
//     }
// }

// var ob={name:"shakeer"}
// var res=check.car.bind(ob,"odi",1234)
// res();

//call

// var obj={
//     name:"shaik",
//     age:22
// }

// function hello(){
//     console.log(this.name+" "+this.age);
// }

// hello.call(obj)

//apply
// function hello(message){
//     console.log(this.name+" "+this.age+" "+message);
// }
// var obj={
//     name:"shaik",
//     age:22
// }
// hello.apply(obj,["Is a Student"])

// //bind

var data={
    bike:function(brand,price){
        console.log(this.name+" "+brand+" "+price);
    }
}
var obj={
    name:"shaik"
}
var out=data.bike.bind(obj,"appachi",30,0000)
out();




