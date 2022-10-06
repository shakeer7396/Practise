//Eventloop
// Its single Thread read one line at a time its not a right-way to stop the loop in below

// var count=0;
// var a=true;
// setInterval(()=>{
//     if(a){
//     console.log(count++)

//     }
// },200)
// setTimeout(()=>{
//     a=false;
// },2000)




// right-way are given below 

let add=0;
let timer=setInterval(()=>{
    console.log(add++)

},200)

setTimeout(()=>{
    clearInterval(timer)

},2000)



// var count=0;
// let check=setInterval(()=>{
//     console.log(count++);
// },200)

// setTimeout(()=>{
//     clearInterval(check)
// },3000)


