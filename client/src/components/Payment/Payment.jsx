import React, { useState, useEffect } from 'react';
import styles from './Payment.module.css';
import { GoPlus } from "react-icons/go";

const Payment = () => {
    return (
        <button className={styles.PaymentButton} onClick={() => {}}>
            <GoPlus />
            Payment
        </button>
    );
};

export default Payment;
