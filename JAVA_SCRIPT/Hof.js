
/*
//FILTER 77 REDUCE METHODS
//1. Printing Even numbers using forloop
var arr=[1,2,3,4,5,6,7];

for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}
//output is 
// 2
// 4
// 6

//Printing Even numbers using filter method

let even = function(el,acc,index){  //(parameters are element,accumulater,index)
    return el%2==0;
}
let output = arr.filter(even);
console.log(output);  //output is [2, 4, 6]


*/

/*
//Empty array using for storing even number and print the value

var arr=[1,2,3,4,5,6,7,8];
var box=[];
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        box.push(arr[i])
    }
}
console.log(box.join(" ")); // Using join for converting array to string output ( 2 4 6 )
*/

/*
//Function method using for printing even values

var evenNumbers = [];
function filterAndPrintEvenNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    console.log(evenNumbers);
}
filterAndPrintEvenNumbers([1, 2, 3, 4, 5, 6, 7]);  //output is [ 2, 4, 6 ]

*/

/*
// 2. Finding Even numbers and Add them using forloop

var arr=[1,2,3,4,5,6,7];

var sum=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        sum+=arr[i]
    }
}
console.log(sum);

// Finding Even numbers and Add them using filter and reduce methods

//Filter pre-function for filtering Even numbers in the arr
let even =function(el,acc){  //you just change acc,el places it changes to ODD 
    return el%2==0;
} 
//Reduce pre-function for add and giving single output
let Evadd =function(acc,el){
    return acc+el;
}

let output = arr.filter(even).reduce(Evadd); // Assigning the pre- functions values with a variable
console.log(output); // Printing the output
*/


//3. Finding Even numbers and Add them && Finding Odd numbers and Add them

//var arr=[1,2,3,4,5,6,7];
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



// 4.  product of all the numbers

// var arr=[1,2,3,4]
// var prod=function(el,acc,index){
//     return el*acc;
// }
// var res=arr.reduce(prod)
// console.log(res)  //output is 24


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



//5. Multiply and cube

// var arr=[1,2,3,4,5];
// var mult=function(el,index,arra){
//     return el%3==0   //output [ 3 ]
// }
// var cube=function(acc,el,index){
//     return acc+(el**3);  //3*3*3 =27
// }
// var out=arr.filter(mult).reduce(cube,0); returning array so use 0 as an index
// console.log(out)  //output is 27


// 6. Add unlimited  values in arr

// var arr=[1,2,3,4,5,6,7,8,9,10,20];
// var add=function(acc,el){
//     return acc+el;
// }
// var out=arr.reduce(add)
// console.log(out)


/*
//FOREACH  && MAP METHODS
// 7. multiply with 2 all values using forEach method

var arr=[1,2,3,4,5];
let bag="";
arr.forEach(function(el){
    bag+=el*2+" "

})
console.log(bag) //output is 2 4 6 8 10 

 var arr1=[1,2,3,4,5];
arr1.forEach(function(el,acc){
    console.log(el*2)   //output printing line by line 
})

// Print all numbers
var arr2=[1,2,3,4,5,6,7,8,9,10,20];
arr2.forEach(function(el){
    console.log(el)     //output printing line by line 
})
*/

// 8.  Given an array of strings print the length of each string

// var arr=["apple", "windows", "ubuntu"];

//     let check=arr.map(function(el){
//         return el.length;
//     })
//     console.log(check)  //output is [ 5, 7, 6 ]

    

// 9. Given an array of string generate an array whose first or last character is a
//  Sample Input - ["assignment", "problem", "media", "upload"]
//  Sample Output - ["assignment", "media"]

//  var arr=["apple", "windows", "ubuntu", "cola", "system","ola"];
//  var bag="";
//  var check=arr.map(function(el,acc,index){
//     if(el[0]=="a"||el[el.length-1]=="a"){
//         return bag+=el +" ";  //console.log(el) output is printing line by line
//     }
//  })
//  console.log(bag);   //output is apple cola ola
    

// 10. Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8
/*
var arr=["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var len=function(el,acc,index){
    return el.length;       //checking arr[0,1,2,.....] length 
}
var odd=function(el,acc){
    return el%2==1;         //checking Odd String
}
var sum=function(acc,el){
    return acc+el;          //Adding the Odd String length value
}
var out=arr.map(len).filter(odd).reduce(sum);
console.log(out)        //output is 17
*/

//PRINT 1 - 100 NUMBERS;
 
// for(var i=1;i<=100;i++){
// console.log(i)
// }

 Array(100).fill( ).map( (_,i) =>{
console.log( i + 1 ) 
 }) ;



