//The  for of statement creates a loop itrating over itrable objects

// var chek=["a","b","c",10];

// for(value of chek){
//     console.log(value,"\n")
// }

var check=['1','2','3','4'];
for(value of check){
    console.log(value,'\n')
}

// -----------------------------------------------
// 
// For in loop 
// it implements [isko obj print karne spl se banaye hai] obj printing 

// var obj={
//     name:"shaik",
//     age:22
// }

// for(var key in obj){
//     console.log(key+" "+obj[key])
// }

var obj={
    name:"shaik",
    age:22
}

for(var key in obj){
    console.log(key+" "+obj[key])
}