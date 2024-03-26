import React, { useEffect, useState } from 'react';
import Verification from './Verification/Verification';
import Balance from './Balance/Balance';
import Holding from './Holding/Holding';
import Header from './Header/Header';
import History from './History/History';
import CryptoCurrencies from './CryptoCurrencies/CryptoCurrencies';
import Bet from './Bet/Bet';
import Admin from './Admin/Admin';

import styles from './styles/Dashboard.module.css';

const Dashboard = ({ setAuth }) => {
    // Variables for data that will be received

    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [verified, setVerified] = useState('');
    const [role, setRole] = useState('');
    const [holding, setHolding] = useState('');

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
    });

    return (
        <div className={styles.mainContainer}>
            {role === 'Admin' ? (
                <>
                    <Header
                        balance={balance}
                        setAuth={setAuth}
                        verified={true}
                        name={name}
                        role={role}
                    />
                    <Admin />
                </>
            ) : (
                <>
                    <Header
                        balance={balance}
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
                </>
            )}
        </div>
    );
};

export default Dashboard;
