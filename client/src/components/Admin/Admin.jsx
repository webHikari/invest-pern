import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import User from './User';
import URL from '../Configuration'

const Admin = () => {
    const [verificationData, setVerificationData] = useState([]);

    const getDataForVerification = async () => {
        try {
            const fetchData = await fetch(
                URL() + 'admin/verification',
                {
                    method: 'POST',
                    body: '',
                    headers: {
                        token: localStorage.token,
                    },
                }
            );
            const parseFetchData = await fetchData.json();
            setVerificationData(parseFetchData);
        } catch (error) {
            console.error(error);
            // Handle any fetch-related errors
        }
    };

    useEffect(() => {
        getDataForVerification();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Admin panel</h1>
            <div className={styles.verificationData}>
                {verificationData.map((data) => (
                        <User
                            key={data.verification_id}
                            data={data}
                        />
                ))}
            </div>
        </div>
    );
};

export default Admin;
