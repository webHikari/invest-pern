import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState('');
    
    
    const getName = async () => {
        try {
            const response = await fetch('http://localhost:3000/dashboard', {
                method: 'GET',
                headers: { token: localStorage.token },
            });

            const parseRes = await response.json();

            setName(parseRes.user_name);
        } catch (err) {
            console.error(err.message);
        }
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false)
    };

    useEffect(() => {
        getName();
    });

    return (
        <>
            <h1>Dashboard</h1>
            <p>Hello, {name}</p>
            <button onClick={(e) => logout(e)}>Logout</button>
        </>
    );
};

export default Dashboard;
