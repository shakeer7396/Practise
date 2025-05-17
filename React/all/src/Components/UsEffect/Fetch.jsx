
import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log("No data", err));
    }, [])
    console.log("Api Data",data);
    return (
        <div>
            <h2>Fetching data</h2>
            <div>
                {data.map((el) => (
                    <div key={el.id} style={{ border: "2px solid purple", padding: "20px" }}>
                        <img src={el.image} alt="Error" width="200px" />
                        <h2>Title:- {el.title}</h2>
                        <h3>Price:- {el.price}</h3>
                        <h3>Description:-{el.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fetch