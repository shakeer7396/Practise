var count=100;
function clousers(){
    var name="hello"
    return function(){
        console.log(name)
        console.log(count)
    }

}
var res=clousers();
res()