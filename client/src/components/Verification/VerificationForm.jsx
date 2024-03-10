import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';
import { IoCloseSharp } from 'react-icons/io5';

const VerificationForm = ({ showVerificationForm, closeVerificationForm }) => {
    const sendVerificationData = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    return (
        <div className={styles.VerificationForm}>
            <form onSubmit={(e) => sendVerificationData(e)}>
                <input type="text" placeholder="Name" />
                <button
                    onClick={closeVerificationForm}
                    className={styles.closeFormButton}
                >
                    <IoCloseSharp />
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VerificationForm;
