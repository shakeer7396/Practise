//Eventloop
// Its single Thread read one line at a time its not a right-way to stop the loop in below

// var count=0;
// var a=true;
// setTimeout(()=>{
//     a=false;
// },2000)

// setInterval(()=>{
//     if(a){
//     console.log(count++)

//     }
// },200)


// right-way are given below 

let count1=0;
let out=setInterval(()=>{
    console.log(count1++)
},200)
setTimeout(()=>{
    clearInterval(out)
    
},3000)


// var count=0;
// let check=setInterval(()=>{
//     console.log(count++);
// },200)

// setTimeout(()=>{
//     clearInterval(check)
// },3000)


