

// var arr=[1,2,3,4,5,6,7];

// let odd=function(el,acc){
//     return el%2==1
// }
// let addO=function(acc,el){
//     return acc+el;
// }
// let even=function(el,acc){
//     return el%2==0;
// }
// let addE=function(acc,el){
//     return acc+el;
// }
// let odout=arr.filter(odd).reduce(addO);
// let evout=arr.filter(even).reduce(addE);
// console.log(odout);
// console.log(evout);


// // find even values
//  var arr=[1,2,3,4,5,6];
// var checkEven=function(el,acc){
//     return el%2==0;
// }
// var out=arr.filter(checkEven)
// console.log(out)


// // multiply values
//  var arr1=[1,2,3,4,5];
// arr1.forEach(function(el,acc){
//     console.log(el*2)
// })



  
//product of all the numbers
//var arr=[1,2,3,4]
// var prod=function(el,acc,index){
//     return el*acc;
// }
// var res=arr.reduce(prod)
// console.log(res)


//Odd sum bellow code
//  var arr=[1,2,3,4,5,6];

// var Odd=function(el,index,arr){
//     return el%2==1;
// }
// var sum=function(acc,el,index){
//     return acc+el;
// }
// var final=arr.filter(Odd).reduce(sum);

// console.log(final);


//Even sum
// var arr=[1,2,3,4,5,6,7,8];
// var even=function(el,index,array){
//     return el%2==0;
// }
// var sum=function(acc,el,index){
//     return acc+el;
// }
// var result=arr.filter(even).reduce(sum);
// console.log(result);


//Multiply and cube
// var arr=[1,2,3,4,5];
// var mult=function(el,index,arra){
//     return el%3==0
// }
// var cube=function(acc,el,index){
//     return acc+(el**3);
// }
// var out=arr.filter(mult).reduce(cube,0)
// console.log(out)


// //Add unlimited  values in arr
// var arr=[1,2,3,4,5,6,7,8,9,10,45];
// var add=function(acc,el){
//     return acc+el;
// }
// var out=arr.reduce(add)
// console.log(out)


// // Given an array of strings print the length of each string
// var arr=["apple", "windows", "ubuntu"];
   
//     let check=arr.map(function(el){
//         return el;
//     })
//     console.log(check)
    

// // Given an array of string generate an array whose first or last character is a
// // Sample Input - ["assignment", "problem", "media", "upload"]
// // Sample Output - ["assignment", "media"]
 //var arr=["apple", "windows", "ubuntu", "cola", "system","ola"];
//  var check=arr.map(function(el,acc,index){
//     if(el[0]=="a"||el[el.length-1]=="a"){
//         console.log(el)
//     }
//  })
    
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8
var arr=["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var len=function(el,acc,index){
    return el.length;
}
var odd=function(el,acc){
    return el%2==1;
}
var sum=function(acc,el){
    return acc+el;
}
var out=arr.map(len).filter(odd).reduce(sum);
console.log(out)


//4 HIGHER ORDER FUNCTIONS 1.MAP, 2.FOREACH, 3.FILTER, 4.REDUCE

//FILTER EVEN ODD CHECK
// //EVEN
// var arr=[1,2,3,4,5,6,7];
// var checkEven=function(el,index){
//    return el%2==0
// }
// var outputE=arr.filter(checkEven);
// console.log(outputE);

// //ODD
// var arr1=[1,2,3,4,5,6,7];
// var checkOdd=function(el,index,acc){
//     return el%2==1;
// }
// var outputOd=arr1.filter(checkOdd);
// console.log(outputOd);


