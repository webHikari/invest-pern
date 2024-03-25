import React from 'react';
import UserDocument from './UserDocument';
import styles from './Admin.module.css';

const User = ({ data }) => {
    const handleVerificationButton = async (action) => {
        try {
            const fetchData = await fetch(
                'http://localhost:3000/admin/verifyUser',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        action: action,
                        user_id: data.user_id,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        token: localStorage.token,
                    },
                }
            );
            const parseFetchData = await fetchData.json();
            console.log(parseFetchData)
        } catch (error) {
            console.error(error);
            // Handle any fetch-related errors
        }
    };

    const handleApproveButton = () => {
        handleVerificationButton('Accept');
    };
    
    const handleDeclineButton = () => {
        handleVerificationButton('Decline');
    };

    return (
        <div className={styles.userContainer}>
            <div className={styles.mainCont}>
                <div className={styles.usernameArea}>
                    <div className={styles.userInfo}>
                        <p>
                            ФИО: {data.surname} {data.firstname} {data.lastname}
                        </p>
                        <p>
                            Дата рождения: {data.birthday}.{data.birthmonth}.
                            {data.birthyear}
                        </p>
                        <p>Серия и номер: {data.document_id}</p>
                    </div>
                    <div className={styles.buttonArea}>
                        <button
                            className={styles.approveButton}
                            onClick={handleApproveButton}
                        >
                            Принять
                        </button>
                        <button
                            className={styles.declineButton}
                            onClick={handleDeclineButton}
                        >
                            Отклонить
                        </button>
                    </div>
                </div>
                <div className={styles.documentArea}>
                    <UserDocument document={data.document1} />
                    <UserDocument document={data.document2} />
                </div>
            </div>
        </div>
    );
};

export default User;
