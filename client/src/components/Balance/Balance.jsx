import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';

const Balance = ({ balance }) => {
    return (
        <div className={styles.BalanceContainer}>
            <div className={styles.BalanceText}><h4>Balance</h4></div>
            <div className={styles.BalanceValue}><h4>${balance}</h4></div>
        </div>
    );
};

export default Balance;
