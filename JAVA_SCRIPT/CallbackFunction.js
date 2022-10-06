// function main(a,b,callback){
//     var sum=a+b
//     callback(sum)
// }
// function multi(sum){
//     console.log("multiply",sum*3)
// }
// main(5,5,multi)
// -----------------------------------------------------------
function out(a,b,operate){
var sum=a+b;
operate(sum)
}

function mult(sum){
console.log("mult",sum*10)
}

out(10,5,mult)