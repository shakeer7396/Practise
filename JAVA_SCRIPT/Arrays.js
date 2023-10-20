let cars = ["bmw", "volvo", "honda"];
// console.log(cars);

//Accessing array elements
// console.log(cars[0],cars[2]);

// Array Length Property
// As the name suggests, the length property retrieves the length of the array. 
// let len = cars.length;
// console.log(len);
// The length of the cars array is stored in the variable len. You can view the output on the console. 

// Accessing the Last Array Element
//Since cars.length retrieves the length of the array, and since arrays use zero-based indexing, the index of the last element is one minus the length.
// let last = cars[cars.length - 1];
// console.log(last);

// Loop Over the Array Items
// You can also loop over an array in case you need to access multiple elements from the array at once. We use the forEach method for this, which calls a function once for each element in an array. 

// cars.forEach((item, index, array) => {
//         console.log(item, index);
//       });

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