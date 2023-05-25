//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

// class Car{
//     constructor(name){
//         this.brand=name
//     }
// }

// const myCar=new Car("Ford")
// console.log(myCar.brand)



//METHODS IN CLASS

// class Car {
//     constructor(name){
//         this.brand=name
//     }
//     present(){
//         return "I have a " +this.brand
//     }
// }
// const mycar =new Car("Ford");

// console.log(mycar.present())



// Class Inheritance
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class

class Car{
    constructor(name){
        this.brand=name;
    }
    present(){
        return "I have a "+this.brand
    }
}
class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model=mod;
    }
    show(){
        return this.present()+", it is a " + this.model
    }
}
const mycar =new Model("Ford","Shift")
console.log(mycar.show())