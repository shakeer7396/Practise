import React, { useEffect, useState } from 'react';

const ApiFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=45&_page=${page}`)
        .then((res)=> res.json())
        .then((data)=> {
            setData(data)
        setLoading(false);
        })
        .catch((err)=> console.log("Error fetching data",err));

    },[page]);
  return (
    <div style={{ marginTop: "40px", padding: "20px", border: "1px solid black", borderRadius: "10px", width: "400px", margin: "auto", backgroundColor: "lightblue", textAlign:"start" }}>
        <h2 style={{textAlign:"center"}}>API Data Fetch</h2>
        {loading ? <p>Loading</p> : ( 
            <ul>
                {data.map((item) =>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        )}
        <button disable={page===1} onClick={()=> setPage(page-1)}>⬅️ Previous</button>
        <button onclick={()=> setPage(page + 1)}>Next ➡️</button>

    </div>
  )
}

export default ApiFetch