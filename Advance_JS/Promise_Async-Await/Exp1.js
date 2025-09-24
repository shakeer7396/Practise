//Promise is a way to handle asyncronous operation in js
//Promise is a object that represents the eventual completion or failure of an asynchronous operation and its resulting value
//Promise is in pending state when it is created
//Promise is in fulfilled state when the asynchronous operations is completed successfully
//Promise is in rejected state when the asyncronous operation is failed
//Promise is used to avoid callback hell and make the code more readable and maintainable

//Promise is created using the Promise constructor which takes a function as an argument
//The function takes two arguments resolve and reject which are used to change the state of the promise
let promise = new Promise(function(resolve, reject){
    let a=10;   
    let b=20;
    let sum = a+b;  
    if(sum==30){
        resolve("Promise is resolved");  //if the operation is successful
    }
    else{
        reject("Promise is rejected");  //if the operation is failed
    }
});

//To handle the promise we use then() and catch() methods
//then() method is called when the promise is resolved
//catch() method is called when the promise is rejected     
promise.then(function(message){
    console.log(message);  //output is Promise is resolved
}).catch(function(message){
    console.log(message);
})


// let promise = new Promise(function(resolve,reject){
//     let a=100;
//     let b=20;
//     let sub =a-b;
//     if(sub==70){
//         resolve("Promise is resolved");
//     }
//     else{
//         reject("Promise is rejected");
//     }
// });


// promise.then(function(message){
//     console.log(message);
// })
// .catch(function(message){
//     console.log(message);
// });