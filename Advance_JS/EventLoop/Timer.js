// Event loop is somthing that is used to handle asynchronous operations in java script.
// Event loop is a single thread that runs in the background and continuously checks the call stack and the task queue
// If the call stack is empty, the event loop takes the first task from the task queue and pushes it to the call stack for execution
// This way, java script can handle multiple operations concurrently without blocking the main thread


// exp-1

// Its single Thread read one line at a time its not a right-way to stop the loop in below

let count=0;
let Timer= setInterval(()=>{
console.log(count++);
},200);

setTimeout(()=>{
    clearInterval(Timer);
},2000);

// setInterval----------------------
// setInterval taken two parameter first is function and second is time in ms 
// setInterval(()=>{},200)  // it will run infinite time after every 200ms
// it is mostly used to create a timer or clock
// It will run after every 200ms until we stop it by using clearInterval() method

// clearInterval----------------------
// clearInterval() method is used to stop the setInterval() method
// clearInterval() method takes the id of the setInterval() method as a parameter which is returned by the setInterval() method

// setTimeout----------------------
// setTimeout taken two parameter first is function and second is time in ms
// setTimeout(()=>{},2000)  // it will run only once after 2000ms   
// It is mostly used to create a delay in the execution of the code


// In react these are used in useEffect hook to create a timer or clock or to create a delay in the execution of the code

// exp-2
// function one(){
//     console.log("This is event loop check")
// }
// function two(){
//     one()
// }
// function three(){
//     two()
// }
// three()
// In the above example when we call the function three() it will call the function two() and then it will call the function one() and then it will print the message in the console
// This is how the call stack works in java script
// Call stack is a data structure that stores the function calls in a stack format
// When a function is called it is added to the top of the stack and when the function is completed it is removed from the stack
// This is how the event loop works in java script
// Event loop continuously checks the call stack and the task queue
// If the call stack is empty it takes the first task from the task queue and pushes it to the call stack for execution
// This way java script can handle multiple operations concurrently without blocking the main thread