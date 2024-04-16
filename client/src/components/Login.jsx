import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import URL from './Configuration';

import IndexHeader from './IndexHeader/IndexHeader.jsx';

import styles from './styles/Login.module.css'

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };

            const response = await fetch(URL() + 'auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const parseRes = await response.json();
            localStorage.setItem('token', parseRes.token);
            setAuth(true)
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <IndexHeader />
            <div className={styles.Wrapper}>
                <div className={styles.emptyLine} />
                <form onSubmit={onSubmitForm}>
                    <h2>Login</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                    <button className={styles.LoginButton}>Submit</button>
                </form>
            </div>
            <div className={styles.border}></div>
        </div>
    );
};

export default Login;
