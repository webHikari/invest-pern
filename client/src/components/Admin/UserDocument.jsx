import React, { useState } from 'react';
import styles from './Admin.module.css';

const User = ({ document }) => {
    const [fileURL, setFileURL] = useState(null);

    const getUserDocument = async () => {
        try {
            const fetchData = await fetch(
                'http://localhost:3000/admin/getdocument',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        document: document,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        token: localStorage.token,
                    },
                }
            );
            const blobData = await fetchData.blob();
            const url = URL.createObjectURL(blobData);
            setFileURL(url);
        } catch (error) {
            console.error(error);
            // Handle any fetch-related errors
        }
    };

    return (
        <div onClick={getUserDocument} className={styles.document}>
            {fileURL ? <img src={fileURL} alt="Document" /> : <h2>Get document</h2>}
        </div>
    );
};

export default User;
