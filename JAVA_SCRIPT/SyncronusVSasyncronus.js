// Syncronus 


// Syncronus means Jab tak ek work complete nai hota jab tak next wala nai kar sakte--> it is called syncronus function 

// const fun2=()=>{
//     console.log("Calling fun3")
// }
// const fun1=()=>{
//     console.log("Calling fun1");
//     fun2();
//         console.log("Calling fun2");
//     }
//     fun1();


    
//fun1 k baad fun2 ko call karko vune jara late bolta wait karta fhir vaha si fun1 me aata ye

// -----------------------------------------------------------------------------------------------
// Asyncronus?
// Asyncronus means Jab tak ek work complete nai hota jab tak next wala  kar sakte--> it is called Asyncronus function (sab kaam ko ek hi baar kar sakte)
// const fun2 = ()=>{
//     setTimeout(()=>{
//         console.log("Called fun2 start")
//     },3000)
// }
// const fun1=()=>{
//     console.log("Called fun1 start")
//     fun2();
//     console.log("Called fun1 end")
// }
// fun1();

const fun2 =()=>{
    setTimeout(()=>{
        console.log("f2");
    },3000)
}

const fun1 =()=>{
    console.log("f1");
    fun2();
    console.log("f3")
}
fun1()

// wait kartani fun1 si fun2 jata vune late bolta ina vaha si aako fun1 end karta baad me fun2 ko jaata










