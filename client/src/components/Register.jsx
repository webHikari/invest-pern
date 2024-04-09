import React, { useState } from 'react';
import styles from './styles/Register.module.css';
import { Link } from 'react-router-dom';
import URL from './Configuration'
const Register = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: '',
    });

    const { email, password, name } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, email, password };

            const response = await fetch(
                URL() + 'auth/register',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                }
            );

            const parseRes = await response.json();
            localStorage.setItem('token', parseRes.token);
            setAuth(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                />
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">Login</Link>
        </>
    );
};

export default Register;
