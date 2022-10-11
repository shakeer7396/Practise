import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"

export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json()).then(data => setData(Object.keys(data.message)))
    }, []);
    return <div className="main-container">
        <div className="heading">ALL BREEDS</div>
        <ul className="all-breeds">
            {data.map((el, index) => {
                return (<Link key={index} style={{ textDecoration: "none" }} to={`/puppy/${el}`}><li>{el}</li></Link>)
            })}
        </ul>
    </div >;
}
