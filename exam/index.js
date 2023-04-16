
// import React, { useEffect, useState } from"react";


// //https://jsonplaceholder.typicode.com/todos/1
// const Hello =()=>{
//     const [state,setState]=useState(0)
//     const getData=async()=>{
//         let res=axios.get("https://jsonplaceholder.typicode.com/todos/1")
//         let data=await(res.json)
//     }
    

    


//     return(

//         <>
//     <div>
//         <button onClick={()=>setState(state+1)}>Inc</button>
//         <button onClick={()=>setState(state-1)}>Red</button>
//     </div>

//         </>
//     )
// }
// export default Hello;




// let p1=new Person("shaik",23)
// console.log(p1)

// function Person(first,age){
//     this.firstName=first;
//     this.age=age;
// }
// const myDetails=newPerson("shaik",23);
// const myFriend=newPerson("raj",23);

// let question = true;
//  if (question === false)
//   console.log(0) 
//   else console.log(10);

const app=require("express") ()

const Middleware1=(req, res, next) => { console.log('Middleware 1'); next();

}

const Middleware2= (req, res, next) => { console.log('Middleware 2'); next()
}
const findthereq=(req, res, next) => { console.log('Middleware 3');
 next()
}

app.use(Middleware1);

app.get("/", Middleware2, (req, res)=>{

console.log("I am get req") 
res.send("hello")
 })

app.listen(8000)

// what is the output