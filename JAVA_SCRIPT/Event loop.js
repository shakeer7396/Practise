//Eventloop
// Its single Thread read one line at a time its not a right-way to stop the loop in below



// var count=0;
// let a=true;

// setInterval(()=>{
//     if(a){
//     console.log(count++)

//     }
// },200)


// setTimeout(()=>{
//     a=false
// },2000)





// right-way are given below 

// let add=0;
// let timer=setInterval(()=>{
//     console.log(add++)

// },200)

// setTimeout(()=>{
//     clearInterval(timer)

// },2000)



function one(){
    console.log("This is event loop check")
}
function two(){
    one()
}
function three(){
    two()
}
three()


// var count=0;
// let check=setInterval(()=>{
//     console.log(count++);
// },200)

// setTimeout(()=>{
//     clearInterval(check)
// },3000)


//EVENT BUBBLING OR CAPTURING
//bubbling propagates from the innermost to outtermost ,capturing propagates outer to inner --gave event listener to child all ansisters will be invoked in this method is called evb 

{/* <div grandparant>
<div parent>
    <div child>

    </div>
</div>
</div> */}

