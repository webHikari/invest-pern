import React, { useEffect, useState } from 'react';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = ({}) => {
    const [USDCurr, setUSDCurr] = useState('');
    const [BTCCurr, setBTCCurr] = useState('');
    const [EURCurr, setEURCurr] = useState('');

    const getEURCurr = async () => {
        try {
            const response = await fetch(
                'https://api.coinbase.com/v2/exchange-rates?currency=EUR'
            );
            const parseRes = await response.json();
            setEURCurr(parseFloat(parseRes.data.rates.RUB).toFixed(2));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getUSDCurr = async () => {
        try {
            const response = await fetch(
                'https://api.coinbase.com/v2/exchange-rates?currency=USD'
            );
            const parseRes = await response.json();
            setUSDCurr(parseFloat(parseRes.data.rates.RUB).toFixed(2));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getBTCCurr = async () => {
        try {
            const response = await fetch(
                'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
            );

            const parseRes = await response.json();
            setBTCCurr(parseFloat(parseRes.data.rates.USD).toFixed(2));
        } catch (err) {
            console.error(err.message);
        }
    };

    getBTCCurr()
    getEURCurr()
    getUSDCurr()


    return (
        <div className={styles.showCryptoCurrencies}>
            <div className={styles.CryptoCurrenciesText}><h4>Currencies rate</h4></div>
            <div className={styles.CryptoCurrenciesContainer}>
                <div className={styles.CryptoCurrency}>
                    <h4>BTC exchange rate: <span>${BTCCurr}</span></h4>
                </div>
                <div className={styles.CryptoCurrency}>
                    <h4>USD exchange rate: <span>₽{USDCurr}</span></h4>
                </div>
                <div className={styles.CryptoCurrency}>
                    <h4>EUR exchange rate: <span>₽{EURCurr}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default CryptoCurrencies;
