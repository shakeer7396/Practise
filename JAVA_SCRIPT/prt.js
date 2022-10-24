

// var a=100;
// function out(){
//     var b=50;
//     function insd(){
//         var c=30
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     return insd
// }
// var res=out();
// res();

// sum of both given array index values and print a new array

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13,14,7]));

function Arrays_sum(arr1, arr2){
  var result = "";
  var sum = 0;
  var i=0;

 while (sum < arr1.length && sum < arr2.length) {
    result+=arr1[sum] + arr2[sum]+" ";
    sum++;
  }

 if (sum === arr1.length) {
    for (var i = sum; i < arr2.length; i++) {
      result+=arr2[i]+" ";
    }
  } 
  else{
  for (var i = sum; i< arr1.length; i++) {
      result+=arr1[i]+" ";
    }
  }
  return result;
}


