import React, { useState, useEffect } from 'react';
import styles from './Verification.module.css';
import { BiCheck } from 'react-icons/bi';

const VerificationButton = () => {
    return (
        <button className={styles.VerificationButton} onClick={() => {}}>
            <BiCheck />
            Verification
        </button>
    );
};

export default VerificationButton;
