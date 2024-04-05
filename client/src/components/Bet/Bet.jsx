import React, { useEffect, useState } from 'react';
import styles from './Bet.module.css';

const Bet = ({}) => {
    return (
        <div className={styles.showBet}>
            <div className={styles.BetText}><h5>Current bet</h5></div>
            <div className={styles.BetValue}><h5>5% per week</h5></div>
        </div>
    );
};

export default Bet;
