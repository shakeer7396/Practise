import React, { useEffect, useState } from 'react'

const Data = () => {
    const [user,setUser]=useState([])
    const [post,setPost]=useState({
        name:"",
        age:"",
        username:""
    })
    

    const getUser=()=>{
        fetch("http://localhost:3001/getUsers").then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setUser(data)
        })
    }
    useEffect(()=>{
        getUser()
    },[])
    console.log(user)

    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPost({...post,[name]:value})
    }
    const handleClick =()=>[
        
        fetch ("http://localhost:3001/createUser",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",},

        body: JSON.stringify(post)
        })
    ]
  return (
    <>
    <div>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="age" onChange={handleChange} />
        <input type="text" name="username" onChange={handleChange}/>
        <button type='submit' value='submit' onClick={handleClick}>Submit</button>

    </div>
    <div>
        {
            user.length && user.map((el,index)=>(
                <div key={index+1}>
                    <p>{el.name}</p>
                    <p>{el.age} </p>
                    <p>{el.username} </p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Data