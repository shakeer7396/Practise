//Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

var obj={
    name:"shaik",
    age:22,
    gender:"male",
    city:"ATP"
}

let {name,age,gender,city}=obj
console.log(name+" "+age);


// var arr=["shaik","shakeer",22]

// var[fname,lname,age]=arr;

// console.log(arr[1]);
// console.log(lname)