import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';

const VerificationForm = ({ showVerificationForm, closeVerificationForm }) => {
    const [documentDay, setDocumentDay] = useState('');
    const [documentMonth, setDocumentMonth] = useState('');
    const [documentYear, setDocumentYear] = useState('');

    const handleDayInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        const limitedValue = numericValue.slice(0, 2);
        const finalValue = limitedValue <= 12 ? limitedValue : '12';
        setDocumentDay(finalValue);
    };
    const handleMonthInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        const limitedValue = numericValue.slice(0, 2);
        const finalValue = limitedValue <= 31 ? limitedValue : '31';
        setDocumentMonth(finalValue);
    };
    const handleYearInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        const limitedValue = numericValue.slice(0, 4);
        const finalValue = limitedValue <= 2006 ? limitedValue : '2006';
        setDocumentYear(finalValue);
    };

    const sendVerificationData = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    return (
        <div
            id="VerificationLayout"
            className={styles.VerificationForm}
            onClick={closeVerificationForm}
        >
            <form onSubmit={(e) => sendVerificationData(e)}>
                <div>
                    <br />
                    <div>1. Insert your data</div>
                    <div>2. Verification pending</div>
                    <div>3. You're verified</div>
                </div>
                <div>
                    <br />
                    <label htmlFor="verificationName">
                        <p>Name</p>
                        <input
                            type="text"
                            name="verificationName"
                            placeholder="Name"
                        />
                    </label>
                    <label htmlFor="verificationName">
                        <p>Surname</p>
                        <input
                            type="text"
                            name="verificationName"
                            placeholder="Surname"
                        />
                    </label>
                    <label htmlFor="verificationName">
                        <p>Last name</p>
                        <input
                            type="text"
                            name="verificationName"
                            placeholder="Last name"
                        />
                    </label>
                    <br />
                    <label htmlFor="documentDay">
                        <p>Day</p>
                        <input
                            type="text"
                            value={documentDay}
                            onChange={handleDayInputChange}
                            placeholder="Day"
                            name="documentDay"
                        />
                    </label>
                    <label htmlFor="documentMonth">
                        <p>Month</p>
                        <input
                            type="text"
                            value={documentMonth}
                            onChange={handleMonthInputChange}
                            placeholder="Birth month"
                            name="documentMonth"
                        />
                    </label>
                    <label htmlFor="documentYear">
                        <p>Year</p>
                        <input
                            type="text"
                            value={documentYear}
                            onChange={handleYearInputChange}
                            placeholder="Birth year"
                            name="documentYear"
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
            {/* <button
                        id="closeVerificationFormButton"
                        onClick={closeVerificationForm}
                        className={styles.closeFormButton}
                    >
                        <IoCloseSharp id="closeButtonSvg" />
                    </button> */}
        </div>
    );
};

export default VerificationForm;
