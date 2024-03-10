import React, { useState, useEffect } from 'react';
import styles from './Verification.module.css';
import VerificationForm from './VerificationForm';
import { BiCheck } from 'react-icons/bi';

const VerificationButton = () => {
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const clickHandler = () => {
    setShowVerificationForm(!showVerificationForm);
  };

  const closeVerificationForm = () => {
    setShowVerificationForm(false);
  };

  return (
    <>
      <button
        className={styles.VerificationButton}
        onClick={clickHandler}
      >
        <BiCheck />
        Verification
      </button>
      {showVerificationForm ? (
        <VerificationForm
          showVerificationForm={showVerificationForm}
          closeVerificationForm={closeVerificationForm}
        />
      ) : null}
    </>
  );
};

export default VerificationButton;
