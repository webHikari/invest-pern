import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';

const Balance = ({ balance }) => {
    return (
        <div className={styles.BalanceContainer}>
            <div className={styles.BalanceText}>Balance</div>
            <div className={styles.BalanceValue}>${balance}</div>
        </div>
    );
};

export default Balance;
