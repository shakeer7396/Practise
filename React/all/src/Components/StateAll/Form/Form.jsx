import React, { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            setIsLoggedIn(false);
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format");
            setIsLoggedIn(false);
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setIsLoggedIn(false);
        } else {
            setError("");
            setIsLoggedIn(true);
            alert("Login successful");
        }
    };
    return (
        <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
            <h2>Login Form</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <button type="submit" style={{ width: "100%", padding: "8px" }}>
                    Login
                </button>
            </form>

            {isLoggedIn && (
                <div>
                    <h5>Email:- {email}</h5>
                    <h5>Password:- {password}</h5>
                </div>
            )}
        </div>
    );
};

export default Form;
