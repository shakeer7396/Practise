import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products?limit=50")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error : {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {data.map((el) => (
                    <div
                        key={el.id}
                        style={{ border: "2px solid blue", padding: "20px" }}
                    >
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

export default Axios;
