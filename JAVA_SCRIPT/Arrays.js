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
// You can also loop over an array in case you need to access multiple elements from the array at once. We use the forEach method for this, which calls a function once for each element in an array. 
// let cars = ["bmw", "volvo", "honda"];
// cars.forEach((item,index)=>{
//     console.log(item,index);
// })

for(var i=0;i<cars.length;i++){
    console.log(cars[i]);
}



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
// cars.push("Audi")
// console.log(cars);
// The new array element “Audi” is pushed at the end of the array. 


// Unshift()
// This method is used to add elements to the front of the array and increases the index of every element by one.

// cars.unshift("Toyota")
// console.log(cars);


// Pop()
// This method is used to pop the last element from the array. 

// cars.pop()
// console.log(cars);

// As per the above logic, the last element “” is deleted from the array. 


// Shift()
// This method is the opposite of unshift, and it removes the first element of the array. This method shifts all the elements, reducing the indexes of every element by one.

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
// let cars2 = cars.slice(0,2)
// console.log(cars2);
// // [ 'Toyota', 'bmw' ]

// Since the end parameter is excluded, the array element at index four is excluded. The output is shown below: 


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
// let num2=num1.map(double);
// function double(value){
//     return value * 2
// }
// console.log(num2)
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

// let num1 = [2, 3, 4, 5, 6, 7];
// let num3 = num1.filter(check)
// function check(value){
//   return value > 4
// }
// console.log(num3)

//ODD CHECK
// let num2 = [1,2,3,4,5,6,7,8];
// let num3= num2.filter(function(el,acc){
//     return el%2==0
// })
// console.log(num3);

// All array elements greater than four will be pushed on to the output array num3
// [ 5, 6, 7 ]



// .reduce
// The reduce() method reduces an array of values to just one value. The reduce function is run on each element of the array to get the single output value. This method does not reduce the original array.

// let num1 = [2, 3, 4, 5, 6, 7];
// let num4 = num1.reduce(sum);

// function sum(total, value) {
// return total + value;
//  }
// console.log(num4)
//28

// let arr=[1,2,3,4,5,6,7];

// let arr2=arr.reduce(function(el,acc){
//     return el+acc
// })
// console.log(arr2);
//28


// The sum of the array is calculated and reduced to a single value., and this value is stored in the output array num4. 