import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verification from './Verification/Verification';
import Balance from './Balance/Balance';
import Holding from './Holding/Holding';
import Header from './Header/Header';
import History from './History/History';
import CryptoCurrencies from './CryptoCurrencies/CryptoCurrencies';
import styles from './styles/Dashboard.module.css';
import Bet from './Bet/Bet';

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
            setName(parseRes[0].user_name);
            setBalance(parseRes[0].user_balance);
            setVerified(parseRes[0].verified);
            setRole(parseRes[0].user_role);
            setHolding(parseRes[0].user_holding);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
        notify();
    });

    return (
        <div className={styles.mainContainer}>
            <Header
                setAuth={setAuth}
                verified={verified}
                name={name}
                role={role}
            />
            <h1>Dashboard</h1>
            <div className={styles.dashboardContainer}>
                <Balance balance={balance} />
                <Holding holding={holding} />
                <History />
            </div>
            <div className={styles.dashboardContainer2}>
                <CryptoCurrencies />
                <Bet />
                <Verification verified={verified} />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                theme="dark"
            />
        </div>
    );
};

export default Dashboard;
