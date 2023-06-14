import React,{useState} from 'react'
import FormUi from './FormUi';
const Form = () => {
    const [formData,setFormdata]=useState({})
    const handleChange=(e)=>{
        const inputName=e.target.name;
        setFormdata({
            ...formData,
            [inputName]:e.target.value
        })      
    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        let res=await fetch("http://localhost:2040/posts",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData),
        })
        let data =await res.json()
        alert("data added successfully")
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit}>
            <div>
    <label>Name</label>
    <input type="text" name='user' placeholder='Enter Name' onChange={handleChange} />
    <label>Age</label>
    <input type="number" name="age" placeholder='Enter Age' onChange={handleChange}  />
    </div>
    <div>
        <input type="submit" name="submit" />
    </div>
        </form>
        <FormUi />
    </div>
  )
}

export default Form