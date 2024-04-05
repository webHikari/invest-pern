import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';
import VerificationForm from './VerificationForm';


const Verification = ({ verified, notify }) => {
    const [showVerificationForm, setShowVerificationForm] = useState(false);

    const clickHandler = () => {
        setShowVerificationForm(!showVerificationForm);
    };
    
    const closeVerificationForm = (e) => {
        const VerificationLayout =
        document.getElementById('VerificationLayout');
        if (e.target === VerificationLayout) {
            setShowVerificationForm(false);
        }
    };


    return (
        <>
            <div
                className={styles.VerificationContainer}
                onClick={clickHandler}
            >
                <div className={styles.VerificationText}>
                    <h4>{verified ? 'Verified' : 'Not verified'}</h4>
                </div>
            </div>
            {showVerificationForm ? (
                verified ? null : 
                <VerificationForm
                    showVerificationForm={showVerificationForm}
                    closeVerificationForm={closeVerificationForm}
                />
            ) : null}
        </>
    );
};

export default Verification;
