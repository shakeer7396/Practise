import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [username,usernameupdate]=useState("")
    const [password,passwordupdate]=useState("")

    const ProcedingLogin =(e)=>{
        e.preventDefault()
        if(validate()){

            fetch("http://localhost:2040/auth/"+username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp)
            }).catch((err)=>{
                alert("Failed")
            })

        }
    }

    const validate=()=>{
        let result=true;
        if(username === '' || username === null){
             result=false;
             alert("please Enter UserName")   
        }
        if(password === '' || password === null){
            result=false;
            alert("please Enter Password")   
       }
        return result;
    }
  return (
    <div>
        <form action="" onSubmit={ProcedingLogin}>
    <div>
        <h2>User Login</h2>
    </div>
    <div>
        <label htmlFor="">User Name</label>
        <input type="text" value={username} onChange={e=>usernameupdate(e.target.value)} />
    </div>
    <div>
        <label htmlFor="">User Password</label>
        <input type="text" value={password} onChange={e=>passwordupdate(e.target.value)}  />
    </div>
    <div>
    <button type="submit">Login</button>
    <br />

    <Link to={'/signup'}>New User</Link>
    </div>
        </form>
    </div>
  )
}

export default LoginPage