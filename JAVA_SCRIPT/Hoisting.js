// Hoisting is a default behaviour of js it means you intialize the value at top of the console,then your gave below declaration the console it be printed-->hoisting send the declaration to top of the console same as function outside and block scope also ex-->


// x=100;
// console.log(x)
// var x;

// function hello(){
//     y=100
//     console.log(y)
// }
// let y;
// hello()

p=100;
console.log(p);
var p;

function check(){
    q=50;
    console.log(q)
}
let q;
check()

x=100;
console.log(x);
 var x;

 function get(){
  y=200;
  console.log(y)

 }
 get()
 

//-------------------------------------
// get();
// function get(){
//     x=100;
//     console.log("hello",x)
//     var x;
// }

// a=100;
// console.log(a)
// var a;
// --------------------------

// Hoisting initialization are not supported only variable declaration are supported like you declare above console and initialize below console it will undefined

// var x;
// console.log(x)

// x=100;
// console.log(x)

// ----------------------
// function get(){
//    var x;
// console.log(x)
// x=100; 
// }
// get();

//WIPRO INTERVIEW QUESTION WHAT IS THE OUT PUT BELLOW
// function code(){
//     a=10;
//     let b=50;
// }
// code();

// console.log(a)
// a=15;// IT WILL BE PRINTED OR NOT
// console.log(b);


