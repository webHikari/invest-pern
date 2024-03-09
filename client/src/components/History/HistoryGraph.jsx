import React, { useState } from 'react';
import styles from './HistoryGraph.module.css';

function HistoryGraph() {
    const [mondayHeight, setMondayHeight] = useState('100%');
    const [tuesdayHeight, setTuesdayHeight] = useState('50%');
    const [wednesdayHeight, setWednesdayHeight] = useState('60%');
    const [thursdayHeight, setThursdayHeight] = useState('70%');
    const [fridayHeight, setFridayHeight] = useState('80%');
    const [saturdayHeight, setSaturdayHeight] = useState('90%');
    const [sundayHeight, setSundayHeight] = useState('100%');

    return (
        <>
            <div className={styles.GraphContainer}>
                <div
                    className={styles.GraphColumn}
                    style={{ height: mondayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: tuesdayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: wednesdayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: thursdayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: fridayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: saturdayHeight }}
                ></div>
                <div
                    className={styles.GraphColumn}
                    style={{ height: sundayHeight }}
                ></div>
            </div>
            <div className={styles.WeekRow}>
                <div className={styles.WeekDay}>Mon</div>
                <div className={styles.WeekDay}>Tue</div>
                <div className={styles.WeekDay}>Wed</div>
                <div className={styles.WeekDay}>Thu</div>
                <div className={styles.WeekDay}>Fri</div>
                <div className={styles.WeekDay}>Sat</div>
                <div className={styles.WeekDay}>Sun</div>
            </div>
        </>
    );
}

export default HistoryGraph;

// ... somewhere else, render it ...
// <BarGraph />
