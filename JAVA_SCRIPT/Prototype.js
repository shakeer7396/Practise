function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;


  }
  Person.prototype.nationality = "English";

  
let r1=new Person("shaik","shakeer",23)
console.log(r1)