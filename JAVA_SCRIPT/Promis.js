
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


// function getData(complete){
//     return new Promise(function(resolve,reject){
//         console.log("please wait");
//         setTimeout(()=>{
//             if(complete){
//                 resolve("yah")
//             }
//             else{
//                 reject("No")
//             }
//         },2000)
//     })
// }

// let fulfil=(t)=>{
//     console.log(t)
// }
// let rej=(f)=>{
//     console.log(f)
// }
// getData(true).then(fulfil).catch(rej)


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
function getresult(a,b){
    return new Promise(function(res,rej){
        console.log("wait a movement")
        c=a+b;
        setTimeout(()=>{
            if(a,b){
                res(`wait ${c}`)
            }
            else{
                rej("ot wait")
            }
        },3000)
    })
}
getresult(10,20).then((out)=>{console.log(out)})
.catch((err)=>{console.log(err)})
// function getSome(yes){
//     return new Promise(function(res,rej){
//         console.log("please wait loading");
//         setTimeout(()=>{
//             if(yes){
//                 res("successful")
//             }
//             else{
//                 rej("unsuccessful")
//             }
//         },3000)
//     })
// }
// let check =(out)=>{
//     console.log(out)
// }
// let checked =(err)=>{
//     console.log(err)
// }

// getSome(true).then(check).catch(checked)