function divide(sum){
    console.log(Math.floor(sum/2))
}
function multiply(sum){
    console.log(sum*2);
}
function head(n1,n2,operation){
    var sum=n1+n2//first add karne k baad vupar k functions me jaata hai 
    operation(sum);
}
head(3,3,divide);
head(5,5,multiply);