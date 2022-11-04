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
// LET IS STORE IN TEMPORAL DEAD ZONE IN MEMORY ALLOCATED PHASE,IT MEANS TEMPORARY STORING AREA 
//REDECLARE NOT POSSIBLE ONLY RE-ASSING WILL BE POSSIBLE

// let a=10;
// a=100;//reassing
// a=50;
// console.log(a);

// function helo(){

// }
// helo();




// function lets(){
//     let b=30;
//     console.log(b);

// }
// lets()

// let b=30;
// function lets(){
//     console.log(b);
// }
// lets()
// ----------------
// function lets(){
// let b=30;
// }
// console.log(b);//clg out side the function so Refrence error 
// lets()
// --------------------------------------

// CONST --SAME AS LET IT IS ALSO A TEMPORAL DEAD ZONE IN MEMORY ALLOCATED PHASE, BUT REDECLARE RE-ASSIGN IS NOT POSSIBLE IT IS MORE STRICT  

// const a=100;
// const a//Syntex error
// console.log(a);

// const b=30;
// b=40;
// console.log(b);//TypeError;

