// Hoisting is a default behaviour of js it means you intialize the value in top of the console,then your gave below declaration the console it be printed-->hoisting send the declaration to top of the console same as function outside and block scope also ex-->


// x=100;
// console.log(x);
// var x;

// x=100;
// get();

// function get(){
//     console.log(x);
// }
// var x;
//-------------------------------------
// get();
// function get(){
//     x=100;
//     console.log("hello",x)
//     var x;
// }
// --------------------------

// Hoisting initialization are not supported only variable declaration are supported like you declare above console and initialize below console it will undefined

var x;
console.log(x)

x=100;
console.log(x)

// ----------------------
// function get(){
//    var x;
// console.log(x)
// x=100; 
// }
// get();


