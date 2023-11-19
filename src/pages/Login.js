import React, { useState } from "react";
import { noAuth } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const [data, setData] = useState({
        username: "DJ@4",
        password: "Dhunjam@2023",
    });
    const navigate = useNavigate();

    const fetchData = () => {
        noAuth({
            method: "post",
            url: "https://stg.dhunjam.in/account/admin/login",
            data: data,
        }).then((res) => {
            if(res?.response==="Success"){
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("id", res?.data?.id);
            navigate("/admin");} else {toast.error('login failed. Try again!')}
            console.log("res", res);
        });
    };

    return (
        <div id="login">
            <h1>Venue Admin Login</h1>
            <div>
                <input
                className="input"
                    id="name"
                    placeholder="name"
                    value={data.username}
                    onChange={(e) => {
                        setData((prevData) => ({
                            ...prevData,
                            username: e.target.value,
                        }));
                    }}
                ></input>
            </div>
            <div>
                <input
                className="input"
                    id="password"
                    type="password"
                    placeholder="password"
                    value={data.password}
                    onChange={(e) => {
                        setData((prevData) => ({
                            ...prevData,
                            password: e.target.value,
                        }));
                    }}
                ></input>
            </div>
            <button id="submitButton" onClick={fetchData}>
                Login
            </button>
            <p>New Registration?</p>
        </div>
    );
}
