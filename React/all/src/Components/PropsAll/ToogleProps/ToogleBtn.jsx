// import React from 'react'

// const ToggleBtn = ({toggleTheme}) => {
//   return (
//     <button onClick={toggleTheme}>ToogleTheme</button>
//   )
// }

// export const ParentToogle = () => {
//     const handleOnToggle =()=>{
//         alert("Toogle Successful")
//     } 
    
//     return (
//      <ToggleBtn toggleTheme ={handleOnToggle}/>
//     )
//   }

  

import React from "react";

const ToogleBtn = ({toogleTheme})=>{

 return <button onClick={toogleTheme}>Toogle Button</button>
} 

export const ParentToogle = () =>{
function OnToogle(){
  alert("Toggle Successful")
}

  return (
  <ToogleBtn toogleTheme={OnToogle} />
  )
};