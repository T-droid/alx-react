import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
    const styles = StyleSheet.create({
        Body: {
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            backgroundColor: 'lightgrey',
            borderRadius: '10px'
        }
    })
    return (
        <div className={css(styles.Body)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>email</label>
            <input id='email' name='email' type='text'></input>
            <label htmlFor='password'>password</label>
            <input id='password' name='password' type='password'></input>
            <button>OK</button>
        </div>
    )
}