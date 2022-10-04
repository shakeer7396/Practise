
//CLOSURE-->CLOSURE IS  A COMBINATION OF FUNCTIONS BUNDLE TOGETHER WITH REFERENCE SURROUNDING  STATE 
//A CLOUSER GIVES YOU ACCESS TO AN OUTER FUNCTION SCOPE FOR AN INNER FUNCTION
// var count=100;
// function clousers(){
//     var name="hello"
//     return function(){
//         console.log(name)
//         console.log(count)
//     }

// }
// var res=clousers();
// res()


var hello=100;
function out(){
    var out=500;
  return function inside(){
        var inside=400;
        console.log(hello);
        console.log(out);
        console.log(inside);
    } 
}
var res=out();
res();

// ------------------------------------------------------------------------



// var Person = function(pname){
//     var name=pname
//     this.getName=function(){
//         return name;
//     }
// }
// var person=new Person("Neelesh")
// console.log(person.getName())


//Uses of Closure
// Module Design Pattern, Currying, Functions like once(fun that can be run only once), memoize, maintaining state in async world, setTimeout, iterators...