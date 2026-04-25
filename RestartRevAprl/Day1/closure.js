//Closure is a function that has access to the parent scope, even after the parent function has closed. It allows the inner function to access and manipulate variables from the outer function, creating a persistent state.

function Outer(){
    var count = 0;
   return function Inner(){
       count++;
        console.log(count);
    }
}
const fn=Outer();
fn();
fn();

