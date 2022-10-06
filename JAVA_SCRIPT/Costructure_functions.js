//Constructor functions are used in create  objects in java scrtipt

// multiple objects use karna haito constructor function ko use karna behtar hai 
// isko use karne function ke baad vala name starting ka Captial hona like function Hello() && new Person (function name se pehle new word lena compulsory declare karte jab )

// old class function
// function Person(name,age,gender){
// this.name=name;
// this.age=age;
// this.gender=gender;
// }

// Person.prototype.city="pune"

// let person1=new Person("shaik",22,"male")
// console.log(person1)

// let person2=new Person("sana",20,"female")
// console.log(person2)

// let person3=new Person("nasir",20,"male")
// console.log(person3)

function Person(name,age,roll){
    this.name=name,
    this.age=age,
    this.roll=roll
}

let p1=new Person("shaik",22,14)
console.log(p1)



class People{
    constructor(name,age,gender){
        this.name=name,
        this.age=age,
        this.gender=gender
    }
}

var opt1=new People("shaik",22,"male")
console.log(opt1)
// ------------------------------------------------------
// ES6 class functions

// class Person{
//     constructor(name,age,gender){
//         this.name=name,
//         this.age=age,
//         this.gender=gender;
//     }
// }

// let person1= new Person("shaik",22,"male")
// console.log(person1)