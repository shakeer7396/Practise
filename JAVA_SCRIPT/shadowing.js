//Shadowing means if we declare a variable in globally and next declare same variable in block scope it takes block scope declaration only it is called shadowing

var a=40;

{
    var a=50;
console.log("block-"+a)
}
console.log("global-"+a);