import React, { useEffect, useState } from 'react';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = ({}) => {
    return (
        <div className={styles.showCryptoCurrencies}>
            <div className={styles.CryptoCurrenciesText}>Crypto Currencies</div>
        </div>
    );
};

export default CryptoCurrencies;
