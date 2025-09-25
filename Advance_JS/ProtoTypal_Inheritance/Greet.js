// Every object in JavaScript has a prototype. A prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.

// React components are classes/functions but use prototypes internally.
//

function person(name, age) {
this.name = name;
this.age = age;
}

person.prototype.greet = function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

const person1 = new person("Sadik", 30);
console.log(person1.greet());

const person2 = new person("John", 25);
console.log(person2.greet());