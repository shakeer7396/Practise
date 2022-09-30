

var a=100;
function out(){
    var b=50;
    function insd(){
        var c=30
        console.log(a);
        console.log(b);
        console.log(c);
    }
    return insd
}
var res=out();
res();
console.log(res)