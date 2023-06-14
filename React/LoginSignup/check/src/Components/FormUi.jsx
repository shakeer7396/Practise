import React, { useEffect, useState } from 'react'

const FormUi = () => {
    const [mapData,setmapData] =useState([]);

    const getData=async()=>{
        let res = await fetch("http://localhost:2040/posts")
        let data=await res.json();
        console.log(data)
        setmapData(data);
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h2>Form UI</h2>
    {mapData.map((el,index)=>{
        return(
            <div key={el.id}>

            <h1><span>{`${el.id} - `}</span>{el.user}</h1>
            <h2>{el.age}</h2>
            </div>
        )
    })}

    </div>
  )
}

export default FormUi