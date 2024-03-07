import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ setAuth }) => {
    // Variables for data that will be received

    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [verified, setVerified] = useState('');
    const [role, setRole] = useState('');
    const [holding, setHolding] = useState('');
    


    // Notification
    const notify = () => toast.success("You're welcome, sir!");

    // Fetch data for variables
    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3000/dashboard', {
                method: 'GET',
                headers: { token: localStorage.token },
            });

            const parseRes = await response.json();

            // Set data xd
            setName(parseRes.user_name);
            setBalance(parseRes.user_balance);
            setVerified(parseRes.verified);
            setRole(parseRes.user_role);
        } catch (err) {
            console.error(err.message);
        }
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    };

    useEffect(() => {
        getData();
        notify();
    });

    return (
        <>
            <h1>Dashboard</h1>
            <p>Hello, {name}</p>
            <p>Your balance is: ${balance}</p>
            <p>You are {verified ? 'Verified' : 'Not verified'}</p>
            <p>Your role is: {role}</p>
            <button onClick={(e) => logout(e)}>Logout</button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                theme="dark"
            />
        </>
    );
};

export default Dashboard;
