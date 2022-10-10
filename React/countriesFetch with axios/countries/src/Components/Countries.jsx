import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./Countries.module.css";
const Countries = () => {
   const [data,setData]=useState([])

//    const getData=()=>{
//     axios.get("https://restcountries.com/v2/all")
//     .then((r)=>{
//         setData(r.data)
//     })
//    }

//    useEffect(()=>{
//     getData()
//    },[])
    const getData=async()=>{
        let res=await fetch("https://restcountries.com/v2/all")
        let datas=await res.json()
        setData(datas)
        console.log(datas)
    }
    useEffect(()=>{
        getData()
    },[])
   
   
  return (
    <div>
        <h1> Countries</h1>
        <div className={styles.container}>
            {data?.map((el)=>{
                return(
                    <div key={el.id} className={styles.box}>
                    <div>
                        <img className={styles.image} src={el.flags.png}/>
                        </div>
                    <p>Name: {el.name}</p>
                    <p>Population: {el.population}</p>
                    <p>Region: {el.region}</p>
                    </div>
                )
            })}
        </div>
       </div>
  )
}

export default Countries