import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';

const VerificationForm = ({ showVerificationForm, closeVerificationForm }) => {
    const [inputs, setInputs] = useState({
        firstname: '',
        surname: '',
        lastname: '',
        documentMonth: '',
        documentDay: '',
        documentYear: '',
    });

    const {
        firstname,
        surname,
        lastname,
        documentMonth,
        documentDay,
        documentYear,
    } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === 'documentDay') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 2);
            finalValue = limitedValue <= 12 ? limitedValue : '12';
        } else if (name === 'documentMonth') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 2);
            finalValue = limitedValue <= 31 ? limitedValue : '31';
        } else if (name === 'documentYear') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 4);
            finalValue = limitedValue <= 2006 ? limitedValue : '2006';
        }

        setInputs({ ...inputs, [name]: finalValue });
    };  

    const sendVerificationData = async (e) => {
        e.preventDefault();
        try {
            const body = { ...inputs };

            const response = await fetch('http://localhost:3000/verification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const parseRes = await response.json();
            console.log(parseRes);
        } catch (err) {
            console.error(err.message);
        }
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
                            name="firstname"
                            placeholder="Name"
                            value={firstname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <label htmlFor="verificationSurname">
                        <p>Surname</p>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={surname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <label htmlFor="verificationLastName">
                        <p>Last name</p>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            value={lastname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <br />
                    <label htmlFor="documentDay">
                        <p>Day</p>
                        <input
                            type="text"
                            value={documentDay}
                            onChange={(e) => onChange(e)}
                            placeholder="Day"
                            name="documentDay"
                        />
                    </label>
                    <label htmlFor="documentMonth">
                        <p>Month</p>
                        <input
                            type="text"
                            value={documentMonth}
                            onChange={(e) => onChange(e)}
                            placeholder="Birth month"
                            name="documentMonth"
                        />
                    </label>
                    <label htmlFor="documentYear">
                        <p>Year</p>
                        <input
                            type="text"
                            value={documentYear}
                            onChange={(e) => onChange(e)}
                            placeholder="Birth year"
                            name="documentYear"
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default VerificationForm;
