// const nums = [4,2,5,1];
// // nums.sort;
// for(var i=0;i<nums.length;i++){
//     for(var j=i+1;j<nums.length;j++){
//         if(nums[i]>nums[j]){
//            var temp= nums[i];
//            nums[i]=nums[j];
//            nums[j]=temp;
//         }
//     }
// }

// nums.forEach(function(el,acc){
//     console.log(el+4)
// })

//They gave

var arr=[1,2,3,4];
var sum=0;
    var count=0;
    
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        count++;
    }
    average=sum/count
    
    console.log(average);