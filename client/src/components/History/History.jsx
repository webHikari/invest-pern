import React, { useEffect, useState } from 'react';
import styles from './History.module.css';
import HistoryGraph from './HistoryGraph';


const History = ({  }) => {
    return (
            <div className={styles.showHistory}>
                <div className={styles.HistoryText}><h4>History</h4></div>
                <HistoryGraph />
            </div>
    );
};

export default History;
