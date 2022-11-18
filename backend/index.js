// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/student',(req,res)=>{
//     res.send("Shaik")
//     if(!req.body.email){
//         res.status(404)
//     }
//    const student ={
//     id : student.length+1,
//     name : req.body.name,
//     age : req.body.age,
//     gender : req.body.gender,
//     email :req.body.email,
    
//    }
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const app = express()
const port = 3001



const mongoose = require('mongoose');
const userModel = require('./Models/Users');
const cors = require('cors')
app.use(express.json())
app.use(cors());



mongoose.connect("mongodb+srv://shakeer:shakeer7396@cluster1.srgi8yt.mongodb.net/?retryWrites=true&w=majority")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/getUsers", (req, res)=>{
    userModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})


app.post("/createUser", async(req, res)=>{
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})