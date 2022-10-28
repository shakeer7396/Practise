//var --ITS ACCESS RE-DECLARE AND RE-ASSING THE VALUE 
// IT USE GLOBALLY
// var a=10;
// // console.log(a)
// var a=100;
// console.log(a)

// var b=40;
// function vars(){
//     console.log(b)
// }
// vars()
// ---------------------------------------Working
// showing RefrenceError 
// function vars(){
//     var b=40;  
// }
// console.log(b)
// vars()
//------------------------------------------------------------------
// LET
// LET IS STORE IN TEMPORAL DEAD ZONE ,IT MEANS TEMPORARY STORING AREA 
//REDECLARE NOT POSSIBLE ONLY RE-ASSING WILL BE POSSIBLE

// let a=10;
// a=100;//reassing
// console.log(a);

// function lets(){
//     let b=30;
//     console.log(b);

// }
// lets()

// ----------------
let b=30;

function lets(){
    console.log(b);

}
lets()
