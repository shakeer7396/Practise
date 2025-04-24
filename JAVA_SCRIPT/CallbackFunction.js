// function main(a,b,callback){
//     var sum=a+b
//     callback(sum)
// }
// function multi(sum){
//     console.log("multiply",sum*3)
// }
// main(5,5,multi)
// -----------------------------------------------------------
function add(a,b,fun){
    let sum=a+b;
    fun(sum)
    console.log(sum);
}
function sub(sum){
    console.log("substraction", sum-2)
}
add(6,4,sub)

// function out(a,b,operate){
// var sum=a+b;
// operate(sum)
// }
// function mult(sum){
// console.log("mult",sum*10)
// }
// out(10,5,mult)

