import React from "react";
import './Login.css';


export default function Login() {
    return (
        <>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>email</label>
        <input id='email' name='email' type='text'></input>
        <label htmlFor='password'>password</label>
        <input id='password' name='password' type='password'></input>
        <button>OK</button>
        </>
    )
}