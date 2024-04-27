//Accessing array elements
// let cars = ["bmw", "volvo", "honda"];
// console.log(cars);
// console.log(cars[0][1]);
// console.log(cars[0],cars[2]);

// Write code to check if the array contains the target element
// const numbers = [2, 4, 6, 8, 10];
// const target = 6;
// const findingTarget=numbers.includes(target);
// console.log("findingTarget",findingTarget)

// const numbers = [2, 4, 6, 8, 10];
// let target = 4;
// let found=false;

// for(var i=0;i<=numbers.length;i++){
//     if(numbers[i]==target){
//         found=true
//         break;
//     }
// }
// if(found){
//     console.log("Target is there")
// }
// else{
//     console.log("Target is not there")
// }


// Array Length Property
// As the name suggests, the length property retrieves the length of the array. 
// let cars = ["bmw", "volvo", "honda"];
// let len = cars.length;
// console.log(len);
// The length of the cars array is stored in the variable len. You can view the output on the console. 


// Accessing the Last Array Element
//Since cars.length retrieves the length of the array, and since arrays use zero-based indexing, the index of the last element is one minus the length.
// let cars = ["bmw", "volvo", "honda"];
// let last=cars[cars.length-1];
// console.log(last);

// Loop Over the Array Items
//Method-1
// You can also loop over an array in case you need to access multiple elements from the array at once. We use the forEach method for this, which calls a function once for each element in an array. 
// let cars = ["bmw", "volvo", "honda"];
// cars.forEach((item,index)=>{
//     console.log(item,index);
// })

//Method-2
// for(var i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// The code above displays the name of the cars and their corresponding indices on the console


// toString() 
// The toString() method returns a string relating to the number. The only parameter it takes is the base index. 

// let list_Number = [2,4,6,8,10]
//             for(let x=0;x<list_Number.length;x++){
//                    let y = list_Number[x]
//                 //    console.log(y);
//                 console.log(y.toString(2))
//             }

// // The code above converted every item in the array to its corresponding binary string. The output is shown below: 
// // elements-console
// toString()


// Push()
// The push method is used to push the elements into an existing array. The push() method mutates the array. 
// let cars = ["bmw", "volvo", "honda"];
// cars.push("Audi")
// console.log(cars);
// The new array element “Audi” is pushed at the end of the array. 


// Unshift()
// This method is used to add elements to the front of the array and increases the index of every element by one.
// let cars = ["bmw", "volvo", "honda"];
// cars.unshift("Toyota")
// console.log(cars);


// Pop()
// This method is used to pop the last element from the array. 
// let cars = ["bmw", "volvo", "honda"];
// cars.pop()
// console.log(cars);

// As per the above logic, the last element “” is deleted from the array. 


// Shift()
// This method is the opposite of unshift, and it removes the first element of the array. This method shifts all the elements, reducing the indexes of every element by one.
// let cars = ["bmw", "volvo", "honda"];
// cars.shift();
// console.log(cars);

// The code above must return our original array with three elements. 


// Slice()
// The slice() method cuts the array and returns a shallow copy of a portion of an array into a new array object. It takes in two parameters: begin and end. The array is sliced from the index specified as begin till the end index (end index excluded). The original array will not be modified.
// If the end parameter is unspecified, the entire array from the begin index is sliced. 

// let cars= ["Tayota","Maruthi","Benz","Kiya","Honda","Audi"];
// let cars2=cars.slice(3);
// console.log(cars2)
// // [ 'Kiya', 'Honda', 'Audi' ]

// let cars = ["Toyota", "bmw", "volvo", "honda","Audi"];
// let cars2 = cars.slice(1)
// console.log(cars2);
// // [ 'bmw', 'volvo', 'honda', 'Audi' ]

// let cars = ["Toyota", "bmw", "volvo", "honda","Audi"];
// let cars2 = cars.slice(0,3)
// console.log(cars2);
// // [ 'Toyota', 'bmw' ]


// Since the end parameter is excluded, the array element at index four is excluded. The output is shown below: 
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 2); // newArray = [2, 3], array = [1, 2, 3, 4, 5]
console.log(newArray)


// // Concat()
// // The concat() method is used to merge two or more arrays into a single one. 

// let cars = ["bmw", "volvo", "honda"];
// let bikes = ["yamaha", "suzuki", "royal enfield"];
// let vehicles = cars.concat(bikes);
// console.log(vehicles);

// // The array bikes is merged with the array cars to the following output:
// //[ 'bmw', 'volvo', 'honda', 'yamaha', 'suzuki', 'royal enfield' ]


// Sort () 
// As the name suggests, this method is used to sort the array. By default, it sorts the array in ascending order. 

// let list = [3,2,6,1,5,4,8,7];
// list.sort()
// console.log(list);

// // [ 1, 2, 3, 4, 5, 6, 7, 8 ]


// // Reverse()
// // To reverse the order of elements in an array, we use the reverse() method. When reverse is used after the sort() method, you get the values in descending order. 

// let list_Number = [3,2,6,1,5,4,8,7];
// list_Number.sort();
// list_Number.reverse();
// console.log(list_Number);

// //[ 8, 7, 6, 5, 4, 3, 2, 1 ]


// .map()
// The map() method is used to create a new array from an existing one by applying a function to each of the elements of the first array. It does not change the original array. 

// let num1=[1,2,3,4,5,6];

// function multi(value){
//     return value*2;
// }
// let num2=num1.map(multi);
// console.log(num2)

// for(var i=1;i<=num1.length;i++){
// console.log(i*2)
// }

// //[ 2, 4, 6, 8, 10, 12 ]

// // num1.map(function(el){
// //     console.log(el*2);
// // })

// // 2
// // 4
// // 6
// // 8
// // 10


// .filter
// The filter() method takes each element from an array and applies a conditional statement against it. If this condition is true, the element gets pushed to the output array. If the condition is false, the element does not get pushed to the output array. 

// let num1 = [2, 3, 4, 5, 6,7,8];
// function check(value){
//     return value>4;
// }
// let num2 =num1.filter(check);
// console.log(num2)

// for(var i=1;i<=num1.length;i++){
//     if(i>4){
//         console.log(i)
//     }
// }

// All array elements greater than four will be pushed on to the output array num3
// [ 5, 6, 7 ]

// ODD CHECK
// let num2 = [1,2,3,4,5,6,7,8];
//METHOD-1
// let num3 =num2.filter(function(el){
//     return el%2==1
// })
// console.log(num3)
// METHOD-2
// function odd(el){
//     return el%2==1
// }
// num3=num2.filter(odd);
// console.log(num3)
//METHOD-3
// for(var i=1;i<=num2.length;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//Even check
// let num4 = num1.filter(function(el){
//     return el%2==0;
// })
// console.log(num4)

// for(var i=1;i<=num2.length;i++){
//         if(i%2==1){
//             console.log(i)
//         }
//     }



// .reduce
// The reduce() method reduces an array of values to just one value. The reduce function is run on each element of the array to get the single output value. This method does not reduce the original array.

// let num1 = [1,2, 3, 4, 5, 6, 7];

// function count(acc,el){
//     return acc+el;
// }
// let num2=num1.reduce(count);
// console.log(num2);
//28

// let arr=[1,2,3,4,5,6,7];

// let arr2=arr.reduce(function(acc,el){
//     return acc+el;
// })
// console.log(arr2)
//28

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log("The sum of the array elements is: " + sum);


// The sum of the array is calculated and reduced to a single value., and this value is stored in the output array num4. 

//array to string
// var arr= [1,2,3,4,5]
//     var bag="";
//     for(var i=0;i<arr.length;i++){
//       if(arr[i]<0){
//         bag+=arr[i]=0;
//       }
//       else{
//         bag+=arr[i]
//       }
//     }
//     console.log(bag)

//REMOVE DUPLICATES
// var arr=[1,2,2,4,3,3,5,6,6]
// var uniqArr=arr.filter((item,index)=>arr.indexOf(item)===index);
// console.log(uniqArr);

// var arr=[1,2,2,4,3,3,5,6,6]
// var unarr=Array.from(new Set(arr));
// console.log(unarr)

// var arr=[1,2,2,4,3,3,5,6,6];
// let newArr=arr.filter((item,index)=>arr.indexOf(item)===index);
// let output=newArr.sort()
// console.log(output);
  
  