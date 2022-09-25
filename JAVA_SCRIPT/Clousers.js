var count=100;
function clousers(){
    var name="hello"
    return function(){
        console.log(name)
        console.log(count)
    }

}
var res=clousers();
res()
// ------------------------------------------------------------------------

// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z=x();
// console.log(z)


//Uses of Closure
// Module Design Pattern, Currying, Functions like once(fun that can be run only once), memoize, maintaining state in async world, setTimeout, iterators...