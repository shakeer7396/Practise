
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
            if(complete){
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