//Constructor functions are used in create  objects in java scrtipt

// multiple objects use karna haito constructor function ko use karna behtar hai 
// isko use karne function ke baad vala name starting ka Captial hona like function Hello() && new Person (function name se pehle new word lena compulsory declare karte jab )

// old class function
function Person(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
}

Person.prototype.city="pune"

let person1=new Person("shaik",22,"male")
console.log(person1)

let person2=new Person("sana",20,"female")
console.log(person2)

let person3=new Person("nasir",20,"male")
console.log(person3)

// function Person(name,age,roll){
//     this.name=name,
//     this.age=age,
//     this.roll=roll
// }

// let p1=new Person("shaik",22,14)
// console.log(p1)

function Circle2(radius){
    this.radius=radius
}
const circle=new Circle2(4)
console.log(circle);



// ------------------------------------------------------
// ES6 class functions

// class Check{
//     constructor(name,age,city){
//         this.name=name,
//         this.age=age,
//         this.city=city
//     }
// }
// let out=new Check("shaik",22,"Atp")
// console.log(out);

// class People{
//     constructor(name,age,gender){
//         this.name=name,
//         this.age=age,
//         this.gender=gender
//     }
// }

// var opt1=new People("shaik",22,"male")
// console.log(opt1)
