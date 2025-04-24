// function x() {
//     var i = 1;
//     setTimeout(function() {
//     console.log(i);
//     }, 3000);
//     console.log("This is Hari");
//    }
//    x();
// function set(){
//     setTimeout(()=>{
//     for(var i=1;i<=5;i++){
// console.log(i);
//     }
//     },3000)
    
//     }

// set();


function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
            console.log("dekh")
        },i*2000)
    }
console.log("this is trail")
    
}

x()