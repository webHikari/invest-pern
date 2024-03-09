import React, { useEffect, useState } from 'react';
import styles from './Holding.module.css';

const Holding = ({ holding }) => {
    return (
        <div className={styles.showHolding}>
            <div className={styles.HoldingText}>Holdings</div>
            <div className={styles.HoldingValue}>${holding}</div>
        </div>
    );
};

export default Holding;
