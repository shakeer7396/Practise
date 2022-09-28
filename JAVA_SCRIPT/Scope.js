// GlobalScope-this scope acesses the variables global or inside a function 
// var dis="hello" 
// function check(){
//     console.log(dis)
// }
// check()
// ----------------------------------------------------------------
// functional Scope
// function awesomeFunction(){
//     var a = 2;
//     var multiplyBy2 = function(){
//       console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written    inside the same function
//     }
//     multiplyBy2(); 
//   }
// //   console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
  
//   awesomeFunction()
// -------------------------------------------------------
// Block Scope
// similarly is same as const we are using only inside a function some block of the VideoColorSpace
{
    let obj="hello"
    console.log(obj)//its working inside the block
}

for(let i=0;i<5;i++){
}
console.log(i)//its came error because its in out side the block