import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import "../styles/breed.css"

export default function Breed() {
    const { id } = useParams();
    const [breedData, setBreedData] = useState([]);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${id}/images`).then(response => response.json()).then(data => setBreedData(data.message))
    }, [id]);
    return (
        <div className="breed-container">
            <div className="breed-heading">{id}</div>
            <div className="breeds">
                {breedData.map((el, index) => {
                    return (<img src={el} key={index} className="breed-img" alt="breed"></img>)
                })}
            </div>
        </div>
    )
}