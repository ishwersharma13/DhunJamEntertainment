import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/login");
    }
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button id="submitButton" onClick={handleClick}>
                Admin login
            </button>
        </div>
    );
}
