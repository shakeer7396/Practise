import "../styles/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img
                    src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f436.svg"
                    alt="puppy-love"
                    id="puppy-logo"
                />
                <div className="branding">PUPPY LOVE</div>
            </div>

            <div className="nav-links-container">
                <Link to="/">Home</Link>
                <Link to="/">Puppy</Link>
                <Link to="/search">Search</Link>
            </div>
        </div>
    );
}
