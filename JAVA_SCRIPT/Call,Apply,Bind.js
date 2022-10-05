// Call()

// this method using another objects values,
// eg- ek place me hoko dusre place me bulaneka

// function calling(){
//     console.log("hello"+" "+this.name)
// }
// var obj={
//     name:"shaik",

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

// function calling(message){
//     console.log("hello"+" "+this.name+this.age+message)
// }

// var obj2={
//     name:"shakeer",
//     age:23
// }
// calling.apply(obj2,["Good"])

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

var details={
    bike:function(brand,number){
        console.log(this.name+" "+brand+" "+number)
    }
    
}
var obj={name:"shakeer"}
var out=details.bike.bind(obj,"shine",4562)
out();

// var check={
//     car:function(brand,number){
//         console.log(this.name+" "+brand+" "+number)
//     }
// }

// var ob={name:"shakeer"}
// var res=check.car.bind(ob,"odi",1234)
// res();