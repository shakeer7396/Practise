// var arr=[3,6,9,1,4,2]

// var odd=function(el,index){
//     return el%2==1
// }

// var even=function(el,index){
//     return el%2==0
// }
// var sum=function(acc,el){
//     return acc+el
// }

// var output=arr.filter(odd).reduce(sum)
// // console.log(output)

// var output1=arr.filter(even).reduce(sum)
// // console.log(output)

// var diff=output-output1;
// console.log(diff)


//  function hello(message){

//     console.log(this.name+" "+message)
//  }

//  var obj={
//     name:"shaik",
//  }

//   hello.apply(obj,["good"])


//apply method
  function helo(message){
    console.log(this.name+" "+message)
  }

  var obj={
    name:"shaik"
  }

  helo.apply(obj,["you want more practise"])

//bind method
// var details={
//     bike:function(brand,num){
//         console.log(this.name+" "+brand+" "+num)
//     }
// }

// var obj={
//     name:"rider"
// }
// var out=details.bike.bind(obj,"bullet",4561)
// out()
// function getData(complete){
//     return new Promise(function(resolve,reject){
//         console.log("please wait")

//         setTimeout(()=>{
//             if(complete){
//                 resolve("good")
//             }
//             else{
//                 reject("bad")
//             }
//         },3000)
//     })
// }
 
// let fulfil=(res)=>{
//     console.log(res)
// }
// let not_fulfil=(err)=>{
//     console.log(err)
// }

// getData(true)
// .then(fulfil).catch(not_fulfil)