import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';

const Verification = ({ verified }) => {
    return (
        <div className={styles.VerificationContainer}>
            <div className={styles.VerificationText}>{verified ? 'Verified': 'Not verified'}</div>
        </div>
    );
};

export default Verification;
