
function fetchUser(){
    return new Promise(resolve => {
        setTimeout(()=> resolve({name: "Shakeel", age:25}),1000) //after 1 second it will return the object
    })
}

//Using async await
//async function always returns a promise
//await can only be used inside an async function
//await makes the code wait until the promise is resolved
//If we don't use await the code will not wait for the promise to resolve and will move to the next line
//If we use await the code will wait for the promise to resolve and then move to the next line 


async function showUser(){
    const user = await fetchUser();
    console.log(user);
    console.log("User name is ",user.name);
    console.log("User age is ",user.age);
}

showUser();


// function fetchData(){
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve({name: "Sai", age: 24});
//         },1000);
//     })
// }

// async function getData(){
// const data = await fetchData();
// console.log(data);
// console.log("Name is ", data.name);
// console.log("Age is ", data.age);
// }
// getData();