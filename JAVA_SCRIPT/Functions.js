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

function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}
add(2)(3)(5)