import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login({logIn}) {

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setSubmit] = useState(true)

    function handleLoginSubmit(event) {
        event.preventDefault();
        logIn(email, password)
        console.log('submitted')
    }

    function handleChangePassword(event) {
        const {value} = event.target;
        setPassword(prevState => prevState = value);
        handleSubmit(email, value);
    }

    function handleChangeEmail(event) {
        const { value } = event.target;
        setEmail(prevState => prevState = value)
        handleSubmit(value, password)
    }

    function handleSubmit(email, password) {
        if (email !== '' && password !== '') {
            setSubmit((prevState => prevState = false))
        }
    }

    return (
        <div className={css(styles.Body)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor='email'>email</label>
                <input
                id='email'
                name='email'
                type='text'
                onChange={handleChangeEmail}
                ></input>
                <label htmlFor='password'>password</label>
                <input
                id='password'
                name='password'
                type='password'
                onChange={handleChangePassword}
                ></input>
                <button type="submit" disabled={enableSubmit}>OK</button>
            </form>
        </div>
    )
}