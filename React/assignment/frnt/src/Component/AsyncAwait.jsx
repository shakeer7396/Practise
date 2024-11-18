import React, { useState, useEffect } from "react";

const AsyncAwait = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {data.map((el) => (
                    <div
                        key={el.id}
                        style={{ border: "2px solid purple", padding: "20px" }}>
                        <div>
                            <img src={el.image} alt="check" width="200px" />
                        </div>
                        <h2>Title : {el.title}</h2>
                        <h2>Price : {el.price}</h2>
                        <h3>Descripton : {el.description}</h3>
                    </div>
                ))}
            </div>
        );
    }
};

export default AsyncAwait;
