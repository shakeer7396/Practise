import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./Countries.module.css";
const Countries = () => {
   const [data,setData]=useState([])
   const [filter,setFilter]=useState('')
   const [sort,SetSort]=useState('')

   const getData =async()=>{
    axios.get("https://restcountries.com/v2/all")
    .then((r)=>{
        setData(r.data)
    })
   }

   useEffect(()=>{
    getData()
   },[])
   console.log(data);

   
   //ANOTHER PROCESSES OF FETCHING DATA
    // const getData=async()=>{
    //     let res=await fetch("https://restcountries.com/v2/all")
    //     let list=await res.json()
    //     setData(list)
    //     console.log(list);
    // }

    // useEffect(()=>{
    //     getData()
    // },[])

    const handleFilter =(e)=>{
        setFilter(e.target.value)
        axios.get(`https://restcountries.com/v2/region/${e.target.value}`)
        .then((r)=>{
            setData(r.data)
        })
    }
   


    const handleSort =()=>{

    }
   
   
  return (
    <div>
        <h1> Countries</h1>
        <div className={styles.top}>
            <div className={styles.filter}>
            <select name="" id="" value={filter} onChange={handleFilter}>
                <option value="">Filter By Country</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>

            </select>
            </div>
            <div className={styles.sort}>
            <select name="" id="" value={sort} onChange={handleSort}>
                <option value="">Sort By Population</option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
            </select>
            </div>
        </div>
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