import React, { useEffect, useState } from 'react';
import styles from './Holding.module.css';

const Holding = ({ holding }) => {
    return (
        <div className={styles.showHolding}>
            <div className={styles.HoldingText}>
                <h4>Holdings</h4>
            </div>
            <div className={styles.HoldingValue}>
                <h4>${holding}</h4>
            </div>
            <div className={styles.HoldingTextSmall}>
                <h4>Expected profit:</h4>
            </div>
            <div className={styles.HoldingValue}>
                <h4>${holding * 1.07}</h4>
            </div>
        </div>
    );
};

export default Holding;
