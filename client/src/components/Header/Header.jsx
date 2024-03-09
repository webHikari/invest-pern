import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { IoExitOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import VerificationButton from '../Verification/VerificationButton';
import Payment from '../Payment/Payment';
import Withdraw from '../Withdraw/Withdraw';

const Header = ({ name, setAuth, verified, role }) => {
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    };

    return (
        <div className={styles.Header}>
            <div>
                {verified ? null : <VerificationButton />}
                <Payment />
                <Withdraw />
            </div>
            <div></div>
            <div>
                <p>Your role is: {role}</p>
                <div className={styles.UserName}>
                    <FaRegUser />
                    {name}
                </div>

                <button
                    className={styles.CircleButton}
                    onClick={(e) => logout(e)}
                >
                    <IoExitOutline />
                </button>
            </div>
        </div>
    );
};

export default Header;
