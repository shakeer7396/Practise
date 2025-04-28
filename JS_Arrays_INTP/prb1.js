// [1]
// ADD ELEMENTS AT THE END. --> .push() --> Add Elements to the end
let arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
// Adds 5 to the end of the array.

// [2]
// REMOVE THE LAST ELEMENT FROM THE ARRAY. --> .pop() --> Remove the last element
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2); //[ 1, 2, 3 ]
// Removes 4 from the array

// [3]
// REMOVE THE FIRST ELEMENT . --> .shift()  -->Remove the first element.
let arr3 = [1, 2, 3, 4];
arr3.shift();
console.log(arr3); // [ 2, 3, 4 ]
//Removes 1 from the start

// [4]
// ADD ELEMENTS AT THE START. --> .unshift()  --> Add elements of the begining
let arr4 = [1, 2, 3, 4];
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3, 4 ]
// Add 0 to the begining of the array

// [5]
// TRANSFORM ARRAY ELEMENTS.  --> .map()  --> Transform elements
let arr5 = [1, 2, 3, 4];
let doubled = arr5.map((x) => x * 2);
console.log(doubled); // [ 2, 4, 6, 8 ]
//Ad

// [6]
// FILTER ARRAY ELEMENTS.  --> .filter()  ==> Select specific elements
let arr6 = [1, 2, 3, 4];
let evenNumbers = arr6.filter((x) => x % 2 == 0);
console.log(evenNumbers); // [ 2, 4 ]

// [7]
// AGGREGATE ARRAY VALUES.  --> .reduce(acc,el,index) --> Aggrigate Array values
let arr7 = [1, 2, 3, 4];
let sum = arr7.reduce((acc, cur) => acc + cur);
console.log(sum); // 10

// [8]
// LOOP THROUGH ARRAY ELEMENTS. --> .forEach()  ==> Loop through elements.
let arr8 = [1, 2, 3, 4];
arr8.forEach((x) => console.log(x));
// 1
// 2
// 3
// 4

// [9]
// FIRST MATCHING ELEMENT. --> .find()  ==> Get the first matching element
let arr9 = [1, 2, 3, 4];
let found = arr9.find((x) => x > 1);
console.log(found); // 2

// [10]
// SORT ARRAY ELEMENTS.  --> .sort()  ==> Sort array elements
let arr10 = [1, 3, 2, 5];
let sort = arr10.sort();
console.log(sort); // [ 1, 2, 3, 5 ]

// [11]
// REVERSE THE ARRAY  --> .reverse()  ==> Reverse the array
let arr11 = [1, 2, 3, 4, 5];
let reverse = arr11.reverse();
console.log(reverse); // [ 5, 4, 3, 2, 1 ]

// [12]
// MERGE TWO ARRAYS.  --> .merge()  ==> Merge Arrays
let arr12 = [1, 2, 3];
let arr13 = [4, 5];
let merged = arr12.concat(arr13);
console.log(merged); // [ 1, 2, 3, 4, 5 ]

// [13]
// GET A SUBARRAY  --> .slice()  ==> Get a Portion of an array
let arr14 = [1, 2, 3, 4, 5];
let part = arr14.slice(1, 4);
console.log(part); // [ 2, 3, 4 ] start from index end from length base

// [14]
// MODIFY AN ARRAY  --> .splice()  ==> Modify Array by adding or removing elements
let arr15 = [1, 2, 3, 4, 5, 6];
let splice = arr15.splice(1, 2, 4);
console.log(splice); // [ 2, 3 ]

//[15]
// FLATTEN NESTED ARRAY  --> .flat()  ==> Flatten Nested Array
let arr16 = [1, [2, 3], [4, 5], 6];
let flattended = arr16.flat();
console.log(flattended); //[ 1, 2, 3, 4, 5, 6 ]
