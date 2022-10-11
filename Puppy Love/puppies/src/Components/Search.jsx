import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/search.css"

export default function Search() {
    const [query, setQuery] = useState("");
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/puppy/${query}`, { replace: true });
    }
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter breed to search" id="search-query" onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" value="Search" id="search-btn" />
            </form>
        </div>
    )
}