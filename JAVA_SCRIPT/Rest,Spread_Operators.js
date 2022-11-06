
// ***Note- Key differences between rest parameter and spread operator:

// (Rest parameter is used to take  number of arguments and turns them into an array.Rest parameter is used in function declaration.) 

//   Spread operator takes an array or an object and spreads it. the spread operator is used in function calls.



// Rest_Operator
//This operstor is use in parametrs(...array)-->Number of arguments can be converted into arr while using rest_operator

// It provides an improved way of handling the parameters of a function.
// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
// Any number of arguments will be converted into an array using the rest parameter.
// It also helps in extracting all or some parts of the arguments.
// Rest parameters can be used by applying three dots (...) before the parameters.

// function res(...args){
//     for(var i=0;i<args.length;i++){
//     }
//     console.log(args[2])

// }
// res(1,2,3,4)

function res(...args){
    for(var i=0;i<args.length;i++){

    }
    console.log(args[3]);
}
 res(1,2,3,4,5)

// function sumoff(...args){
//     var sum=0;
//     var i=0;
//     while(i<args.length){
//         sum+=args[i];
//         i++;
//     }
//     console.log(sum)
// }
// sumoff(10,20,30)
//   -----------------------------------------------------------------------------------------
//   function addAllArgs(...args){
//     let sumOfArgs = 0;
//     let i = 0;
//     while(i < args.length){
//       sumOfArgs += args[i];
//       i++;
//     }
//     console.log(sumOfArgs);
//   }
  
//   addAllArgs(6, 5, 7, 99); // Returns 117
//   addAllArgs(1, 3, 4); // Returns 8

// function add(...args){
// var sum=0;
// var i=0;
// while(i<args.length){
//     sum+=args[i]
//     i++
// }
// console.log(sum)
// }
// add(6,5,7,99)
// add(10,20,30)

// function rest(...args){
//     var sum=0;
//     var i=0;
//     while(i<args.length){
//         sum+=args[i];
//         i++;
//     }
//     console.log(sum);
// }
// rest(10,15,20)

// -----------------------------------------------------------------------

// Spread Operator
//This operator is used for merging or adding 2& more than  arrays or objects 
// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];

// console.log(...arr1,...arr2)

var obj1={
    name:"shakeer",
    age:22,
    place:"Kanekal"
}
var obj2={
    quali:"degree",
    grade:80
}

var obj3={
    ...obj1,...obj2
}
console.log(obj3)


// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];

// console.log(...arr1,...arr2)
