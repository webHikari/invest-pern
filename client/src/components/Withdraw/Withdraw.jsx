import React, { useState, useEffect } from 'react';
import styles from './Withdraw.module.css';
import { BsCurrencyDollar } from 'react-icons/bs';

const Withdraw = () => {
    return (
        <button className={styles.WithdrawButton} onClick={() => {}}>
            <BsCurrencyDollar />
            Withdraw
        </button>
    );
};

export default Withdraw;
