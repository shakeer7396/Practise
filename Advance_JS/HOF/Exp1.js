//HOF - Higher Order Function
// A Higher Order Function is a function that takes another function as an argument or returns a function as its result. HOFs are used to abstract or isolate actions, effects, or async flow control using callbacks, promises, or async/await.

//Note: forEach does not return a new array it just iterate over the array and perform the operation on each element
//Map returns a new array with updated values
//Filter returns a new array with filtered values
//Reduce returns a single value by accumulating the values of the array



//Map
let arr=[1,2,3,4,5];
const double= arr.map(n => n*2); //arrow function Single expression there so we are not using return keyword we can use normal function also same output 
console.log(double); //output is [ 2, 4, 6, 8, 10 ]

// map takes a array and return a new array with updated values;


//Filter
let arr1=[1,2,3,4,5,6];
const even = arr1.filter(n => n%2==0);
const odd = arr1.filter(n => n%2!=0); //or n%2==1  // n%2!=0 it means not does not equal to 0
console.log(even); //output is [ 2, 4, 6 ]
console.log(odd); //output is [ 1, 3, 5 ]

//Reduce
let arr2 = [1,2,3,4,5];
const sum = arr2.reduce((acc,n,index) => acc+n,0); //0 is initial value of acc if we not provide it will take first element as acc and second element as n and so on
console.log(sum); //output is 15

//Chaining
let arr3=[1,2,3,4,5,6];
const result = arr3.filter(n => n%2==0).map(n => n*2).reduce((acc,n) => acc+n,0);
console.log(result); //output is 24

//forEach
let arr4=[1,2,3,4,5];
arr4.forEach(n => console.log(n*2)) //output is 2 4 6 8 10











