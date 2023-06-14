// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'

// const SignupPage = () => {
//     const [formData,setFormdata]=useState({})
//     const navigate=useNavigate()

//     const handleChange=(e)=>{
//         const inputName=e.target.name;
//         setFormdata({
//             ...formData,
//             [inputName]:e.target.value
//         })      
//     }
//     const handleSubmit =async(e)=>{
//         // e.preventDefault()
//         let res=await fetch("http://localhost:2040/auth",{
//             method:"POST",
//             headers:{"content-type":"application/json"},
//             body:JSON.stringify(formData),
//         })
//         let data =await res.json()
//         alert("data added successfully")
        
//         console.log(data)
//     }
//   return (
//     <div style={{textAlign:"center"}}>
//         <form onSubmit={handleSubmit}>
//             <div>
//     <label>Name</label>
//     <input type="email" name='email' placeholder='Enter email' onChange={handleChange} />
//     <label>Age</label>
//     <input type="password" name="password" placeholder='Enter password' onChange={handleChange}  />
//     </div>
//     <div>
//         <input type="submit" name="submit" />
//     </div>
//         </form>
//     </div>
//   )
// }

// export default SignupPage;

import React from 'react'

const SignupPage = () => {
  return (
    <div>SignupPage</div>
  )
}

export default SignupPage