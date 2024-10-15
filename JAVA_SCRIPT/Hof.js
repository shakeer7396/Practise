

var arr=[1,2,3,4,5,6,7];

let odd=function(el,acc){
    return el%2==1
}
let addO=function(acc,el){
    return acc+el;
}
let even=function(el,acc){
    return el%2==0;
}
let addE=function(acc,el){
    return acc+el;
}
let odout=arr.filter(odd).reduce(addO);
let evout=arr.filter(even).reduce(addE);
console.log(odout);
console.log(evout);


// // find even values
//  var arr=[1,2,3,4,5,6];
// var checkEven=function(el,acc){
//     return el%2==0;
// }
// var out=arr.filter(checkEven)
// console.log(out)

// Print Even only
// var arr=[1,2,3,4,5,6,7];
// var even=function(el,acc){
//     return(el%2==0)
// }
// let output=arr.filter(even)
// console.log(output)

// var arr=[1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
    
// }
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var evenNumbers = [];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenNumbers.push(arr[i]);
//     }
// }
// console.log(evenNumbers);

// var arr=[1,2,3,4,5,6,7,8];
// var box=[];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         box.push(arr[i])
//     }
// }
// console.log(box.join(" "));

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var evenNumbers = [];
// function filterAndPrintEvenNumbers(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i]);
//         }
//     }
//     console.log(evenNumbers);
// }
// filterAndPrintEvenNumbers(arr);



// // multiply values
// var arr=[1,2,3,4,5];
// let bag="";
// arr.forEach(function(el){
//     bag+=el*2+" "

// })
// console.log(bag.trim())

//  var arr1=[1,2,3,4,5];
// arr1.forEach(function(el,acc){
//     console.log(el*2)
// })
// // product of all the numbers
// var arr=[1,2,3,4]
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
// var arr=[1,2,3,4,5,6,7,8,9,10,20];
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
// var arr=["Apple", "Windows", "Linux", "Kindle", "Quiz"];
// var len=function(el,acc,index){
//     return el.length;
// }
// var odd=function(el,acc){
//     return el%2==1;
// }
// var sum=function(acc,el){
//     return acc+el;
// }
// var out=arr.map(len).filter(odd).reduce(sum);
// console.log(out)


//PRINT 1 - 100 NUMBERS;
 
// for(var i=1;i<=100;i++){
// console.log(i)
// }

// Array(100).fill( ).map( (_,i) => console.log( i + 1 ) );



