
// function getData(){
//     let data=false;
//     let Promise=(resolve,reject) =>{
//         if(!data){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     }
// }


// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data please wait")
//         setTimeout(()=>{
//             if(complete){
//                 resolve("success");
//             }
//             else{
//                 reject("sorry")
//             }
//         },3000)
//     })
// }

// let onfulfil =(result)=>{
//     console.log(result)
// }
// let onReject=(error)=>{
//     console.log(error)
// }

// prom(true).then(onfulfil).catch(onReject)


function prob(complete){
    return new Promise(function(resolve,reject){
    console.log("data loading  wait")
        setTimeout(()=>{
            if(!complete){
                resolve("Right")
            }
            else{
                reject("Wrong")
            }
        },3000)
    })
    
}

let fulfil=(result)=>{
    console.log(result)
}
let reject = (error)=>{
    console.log(error)
}

prob(true).then(fulfil).catch(reject);

// function getresult(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("Please wait checking")
//         var c=a*b;
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`your ans is ${c}`)
//             }
//             else{
//                 reject('Failed')
//             }
//         },3000)
//     })
// }

// getresult(10,5)
// .then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})

// function operation(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("please wait data loading")

//       let  mult=a*b;
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`your result is-${mult}`)
//             }
//             else{
//                 reject("some thing wrong ")
//             }
//         },3000)
//     })
// }

// operation(2,50)
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})
