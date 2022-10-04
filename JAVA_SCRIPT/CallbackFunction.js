function main(a,b,callback){
    var sum=a+b
    callback(sum)
}
function multi(sum){
    console.log("multiply",sum*3)
}
main(5,5,multi)
// -----------------------------------------------------------
function back(a,b,operate){
let sum=a+b;
operate(sum)
}
function mult(sum){
    console.log("mult",sum*2)
}
back(5,10,mult)