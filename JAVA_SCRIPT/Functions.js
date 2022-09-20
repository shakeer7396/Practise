// Immediate Invoke func
// (function check(){
//     console.log("hello")
// })();
// ---------------------------


// HOF
// function inside function invoke or call
// eg:-

// Currying Function

// this function we a changing the arguments with multiple functions also call seperately

// function add(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c)
//         }
//     }
// }
// add(2)(3)(5)
// -----------------------------------------
// arrow function =>
// this function is introduced in Es6 version
function add(a,b){
    console.log(a+b)
}
add(5,5)//normal

// var add=(a,b)=>{
//    return a+b;
// }
// console.log(add(5,5))

// const mult=(a,b)=>{
//     return (a+b)*5
// }
// console.log(mult(5,5))

