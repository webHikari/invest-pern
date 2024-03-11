import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';
import { IoCloseSharp } from 'react-icons/io5';

const VerificationForm = ({ showVerificationForm, closeVerificationForm }) => {
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
                    <div>1. Insert your data</div>
                    <div>2. Verification pending</div>
                    <div>3. You're verified</div>
                </div>
                <div>
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
