import React, { useEffect, useState } from 'react';
import styles from './Bet.module.css';

const Bet = ({}) => {
    return (
        <div className={styles.showBet}>
            <div className={styles.BetText}>Current bet</div>
            <div className={styles.BetValue}>5% per week</div>
        </div>
    );
};

export default Bet;
