
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


//Es6 base4d sintex for promise
// var a=12;
// let checkOdd=new Promise((res,rej)=>{
//     if(a%2==1){
//         res("Is odd value")
//     }
//     else{
//         rej("is not odd")
//     }
// })

// checkOdd.then((out)=>console.log(out)).catch((err)=>console.log(err))

var a=21;
let checkEven=new Promise((res,rej)=>{
    if(a%2==0){
        res("Is Even")
    }
    else{
        rej("Is not Even")
    }
})
checkEven.then((ans)=>console.log(ans)).catch((err)=>console.log(err))
// ------------------------------

