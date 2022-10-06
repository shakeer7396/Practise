//The  for of statement creates a loop itrating over itrable objects

var chek=["a","b","c",10];

for(value of chek){
    console.log(value,"\n")
}

// -----------------------------------------------
// 
// For in loop 
// it implements [isko obj print karne spl se banaye hai] obj printing 

var obj={
    firstname:"shaik",
    secondname:"shakeer",
    age:22
}
for(let key in obj){
    console.log(key + ":" + obj[key])
}