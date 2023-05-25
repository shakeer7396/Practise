//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

// class Car{
//     constructor(name){
//         this.brand=name
//     }
// }

// const myCar=new Car("Ford")
// console.log(myCar.brand)


//METHODS IN CLASS

class Car {
    constructor(name){
        this.brand=name
    }
    present(){
        return "I have a " +this.brand
    }
}
const mycar =new Car("Ford");

console.log(mycar.present())