// var explanation:- var is a local scope and global scope varible. 
//exp-1
console.log(x)//output: undefined because of hoisting. 
var x=10;

// var variable is hoisted to the top of the scope but not initialized. So, it gives undefined when we try to access it before initialization.

//exp-2
var a=20;
function test(){
    console.log("var calling Inside function test, a =", a);
    //output: var calling Inside function test, a = 20
    var b=30;
    console.log("var calling Inside function test, b =", b);
    //output: var calling Inside function test, b = 30
}
test();
console.log("var calling Outside function variable, a =", a);
// output: var calling Outside function variable, a = 20
console.log("var calling Outside function variable, b =", b);
// output: Uncaught ReferenceError: b is not defined because var b is a local variable and cannot be accessed outside the function test.


// let explanation:- let is a block scope varible. It is only accessible within the block means function, loop, if statements etc.

// exp-1
console.log(y); 
let y=10;
// output: Uncaught ReferenceError: Cannot access 'y' before initialization because let variable is not hoisted like var and cannot be accessed before initialization.

// exp-2
let c=20;
function test2(){
    console.log("let calling Inside function test2, c =", c);
    //output: let calling Inside function test2, c = 20
    let d=30;
    console.log("let calling Inside function test2, d =", d);
    //output: let calling Inside function test2, d = 30
}
test2();
console.log("let calling Outside function variable, c =", c);
// output: let calling Outside function variable, c = 20
console.log("let calling Outside function variable, d =", d);
// output: Uncaught ReferenceError: d is not defined because let d is a block scope variable and cannot be accessed outside the function test2.


// const explanation:- const is also a block scope variable. It is used to declare a constant variable which cannot be reassigned. It must be initialized at the time of declaration.