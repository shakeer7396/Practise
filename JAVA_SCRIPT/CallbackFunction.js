function head(n1,n2,operation){
    var sum=n1+n2//first add karne k baad vupar k functions me jaata hai 
    operation(sum);
}

function multiply(sum){
    console.log("multiply : ",sum*2);
}

head(5,5,multiply);