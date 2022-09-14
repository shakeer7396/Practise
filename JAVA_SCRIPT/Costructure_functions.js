//Constructor functions are used in create  objects in java scrtipt

// multiple objects use karna haito constructor function ko use karna behtar hai 
// isko use karne function ke baad vala name starting ka Captial hona like function Hello()

function Person(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
}

person1=new Person("shaik",22,"male")
console.log(person1)

person2=new Person("sana",20,"female")
console.log(person2)

person3=new Person("nasir",20,"male")
console.log(person3)