//IN CONSOLE REFRENCE ERROR CAME IN CONSOLE NEXT CONSOLE OUTPUT IS NOT EXECUTED BECAUSE OF REFERENCE ERROR. REFERENCE ERROR MEANS WE ARE TRYING TO ACCESS A VARIABLE WHICH IS NOT DECLARED OR NOT INITIALIZED YET.

// // var explanation:- var is a local scope and global scope varible. redeclaration and reassigning is possible with var. It is function scope variable. It is hoisted to the top of the scope.
// // var x= 10; redeclare var x=20; reassign var x=30; reassign var x=40; reassign

// //exp-1
// console.log(x)//output: undefined because of hoisting. 
// var x=10;

// // var variable is hoisted to the top of the scope but not initialized. So, it gives undefined when we try to access it before initialization.

// //exp-2
// var a=20;
// function test(){
//     console.log("var calling Inside function test, a =", a);
//     //output: var calling Inside function test, a = 20
//     var b=30;
//     console.log("var calling Inside function test, b =", b);
//     //output: var calling Inside function test, b = 30
// }
// test();
// console.log("var calling Outside function variable, a =", a);
// // output: var calling Outside function variable, a = 20
// console.log("var calling Outside function variable, b =", b);
// // output: Uncaught ReferenceError: b is not defined because var b is a local variable and cannot be accessed outside the function test.
//-------------------------------------

// // let explanation:- let is a block scope varible. It is only accessible within the block means function, loop, if statements etc.
// // let variable reenitialization is not possible but reassignment is possible. It is not hoisted to the top of the scope like var and cannot be accessed before initialization. 

// // exp-1
// console.log(y); 
// let y=10;
// // output: Uncaught ReferenceError: Cannot access 'y' before initialization because let variable is not hoisted like var and cannot be accessed before initialization.

// // exp-2
// let c=20;
// function test2(){
//     console.log("let calling Inside function test2, c =", c);
//     //output: let calling Inside function test2, c = 20
//     let d=30;
//     console.log("let calling Inside function test2, d =", d);
//     //output: let calling Inside function test2, d = 30
// }
// test2();
// console.log("let calling Outside function variable, c =", c);
// // output: let calling Outside function variable, c = 20
// console.log("let calling Outside function variable, d =", d);
// // output: Uncaught ReferenceError: d is not defined because let d is a block scope variable and cannot be accessed outside the function test2.
//-------------------------------------

// const explanation:- const is also a block scope variable. It is used to declare a constant variable which cannot be reassigned. It must be initialized at the time of declaration.
// const variable is not hoisted to the top of the scope like var and cannot be accessed before initialization.

// exp-1
console.log(z); 
const z=10;
// output: Uncaught ReferenceError: Cannot access 'z' before initialization because const variable is not hoisted like var and cannot be accessed before initialization.

// exp-2
const e=20;
function test3(){
    console.log("const calling Inside function test3, e =", e); 
    //output: const calling Inside function test3, e = 20
    const f=30;
    console.log("const calling Inside function test3, f =", f);
    //output: const calling Inside function test3, f = 30
}
test3();

console.log("const calling Outside function variable, e =", e);
// output: const calling Outside function variable, e = 20
console.log("const calling Outside function variable, f =", f);
// output: Uncaught ReferenceError: f is not defined because const f is a block scope variable and cannot be accessed outside the function test3.   