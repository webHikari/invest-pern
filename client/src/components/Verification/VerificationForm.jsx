import React, { useEffect, useState } from 'react';
import styles from './Verification.module.css';
import { AiOutlineUpload } from 'react-icons/ai';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';
import URL from '../Configuration'

const VerificationForm = ({ showVerificationForm, closeVerificationForm }) => {
    const [inputs, setInputs] = useState({
        firstname: '',
        surname: '',
        lastname: '',
        documentMonth: '',
        documentDay: '',
        documentYear: '',
        documentSerial: '',
        documentCount: '',
        documentFile1: '',
        documentFile2: '',
    });

    const [inputFile1Handle, setInputFile1Handle] = useState(false);
    const [inputFile2Handle, setInputFile2Handle] = useState(false);

    const {
        firstname,
        surname,
        lastname,
        documentMonth,
        documentDay,
        documentYear,
        documentFile1,
        documentFile2,
        documentSerial,
        documentCount,
    } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === 'documentDay') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 2);
            finalValue = limitedValue <= 12 ? limitedValue : '31';
        } else if (name === 'documentMonth') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 2);
            finalValue = limitedValue <= 12 ? limitedValue : '12';
        } else if (name === 'documentYear') {
            const numericValue = value.replace(/[^0-9]/g, '');
            const limitedValue = numericValue.slice(0, 4);
            finalValue = limitedValue <= 2006 ? limitedValue : '2006';
        } else if (name === 'documentFile2') {
            setInputFile2Handle(true);
        } else if (name === 'documentFile1') {
            setInputFile1Handle(true);
        } else if (name === 'documentSerial') {
            const numericValue = value.replace(/[^0-9]/g, '');
            finalValue = numericValue.slice(0, 4);
        } else if (name === 'documentCount') {
            const numericValue = value.replace(/[^0-9]/g, '');
            finalValue = numericValue.slice(0, 6);
        }
        setInputs({ ...inputs, [name]: finalValue });
    };

    const sendVerificationData = async (e) => {
        const {
            firstname,
            surname,
            lastname,
            documentMonth,
            documentDay,
            documentYear,
            documentSerial,
            documentCount,
        } = inputs;

        e.preventDefault();
        try {
            const body = {
                firstname,
                surname,
                lastname,
                documentMonth,
                documentDay,
                documentYear,
                documentSerial,
                documentCount,
            };

            const response = await fetch(URL() + 'verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.token,
                },
                body: JSON.stringify(body),
            });
            const parseRes = await response.json();
            console.log(parseRes);

            localStorage.setItem('handle_form', true);

            if ([firstname, surname, lastname, documentMonth, documentDay, documentYear, documentSerial, documentCount].every(Boolean)) {
                document.querySelector("#VerificationLayout").click()
            }

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
                    <h2>Верификация</h2>
                    <div>
                        <div>
                            <AiOutlineUpload />
                            Отправка данных
                        </div>
                    </div>
                    <div>
                        <div>
                            <MdOutlineLibraryAddCheck />
                            Процесс верификации
                        </div>
                    </div>
                    <div>
                        <div>
                            <BiCheck />
                            Принятие решения
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <h3 className={styles.formSplitter}>Ваше ФИО</h3>
                    <label htmlFor="verificationName">
                        <p>Имя</p>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Имя"
                            value={firstname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <label htmlFor="verificationSurname">
                        <p>Фамилия</p>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Фамилия"
                            value={surname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <label htmlFor="verificationLastName">
                        <p>Отчество</p>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Отчество"
                            value={lastname}
                            onChange={(e) => onChange(e)}
                        />
                    </label>
                    <h3 className={styles.formSplitter}>Дата рождения</h3>
                    <label htmlFor="documentDay">
                        <p>День</p>
                        <input
                            type="text"
                            value={documentDay}
                            onChange={(e) => onChange(e)}
                            placeholder="День"
                            name="documentDay"
                        />
                    </label>
                    <label htmlFor="documentMonth">
                        <p>Месяц</p>
                        <input
                            type="text"
                            value={documentMonth}
                            onChange={(e) => onChange(e)}
                            placeholder="Месяц"
                            name="documentMonth"
                        />
                    </label>
                    <label htmlFor="documentYear">
                        <p>Год</p>
                        <input
                            type="text"
                            value={documentYear}
                            onChange={(e) => onChange(e)}
                            placeholder="Год"
                            name="documentYear"
                        />
                    </label>
                    <h3 className={styles.formSplitter}>
                        Серия и номер документа
                    </h3>
                    <label htmlFor="documentSerial">
                        <p>Серия</p>
                        <input
                            type="text"
                            value={documentSerial}
                            onChange={(e) => onChange(e)}
                            placeholder="Серия"
                            name="documentSerial"
                        />
                    </label>
                    <label htmlFor="documentCount">
                        <p>Номер</p>
                        <input
                            type="text"
                            value={documentCount}
                            onChange={(e) => onChange(e)}
                            placeholder="Номер"
                            name="documentCount"
                        />
                    </label>
                    <h3 className={styles.formSplitter}>Сканы документов</h3>
                    <p>Разворот паспорта</p>
                    <label
                        htmlFor="documentFile1"
                        className={
                            inputFile1Handle ? styles.successfulUpload : null
                        }
                    >
                        <p>
                            {inputFile1Handle ? documentFile1 : 'Выберите файл'}
                        </p>
                        <input
                            type="file"
                            name="documentFile1"
                            id="documentFile1"
                            value={documentFile1}
                            onChange={async (e) => {
                                onChange(e);
                                const file = e.target.files[0];
                                const formdata = new FormData();
                                formdata.append('documentFile1', file); // modified key to match server-side naming
                                console.log(formdata);

                                try {
                                    // added try-catch for fetch request
                                    const fileUpload = await fetch(
                                        URL() + 'verification/documents1',
                                        {
                                            method: 'POST',
                                            body: formdata,
                                            headers: {
                                                token: localStorage.token,
                                            },
                                        }
                                    );

                                    const parseFileUpload =
                                        await fileUpload.json();
                                    console.log(parseFileUpload);
                                } catch (error) {
                                    console.error(error);
                                    // Handle any fetch-related errors
                                }
                            }}
                        />
                    </label>
                    <p>Страница с пропиской</p>
                    <label
                        htmlFor="documentFile2"
                        className={
                            inputFile2Handle ? styles.successfulUpload : null
                        }
                    >
                        <p>
                            {inputFile2Handle ? documentFile2 : 'Выберите файл'}
                        </p>
                        <input
                            type="file"
                            name="documentFile2"
                            id="documentFile2"
                            value={documentFile2}
                            onChange={async (e) => {
                                onChange(e);
                                const file = e.target.files[0];
                                const formdata = new FormData();
                                formdata.append('documentFile2', file); // modified key to match server-side naming
                                console.log(formdata);

                                try {
                                    // added try-catch for fetch request
                                    const fileUpload = await fetch(
                                        URL() + 'verification/documents2',
                                        {
                                            method: 'POST',
                                            body: formdata,
                                            headers: {
                                                token: localStorage.token,
                                            },
                                        }
                                    );

                                    const parseFileUpload =
                                        await fileUpload.json();
                                    console.log(parseFileUpload);
                                } catch (error) {
                                    console.error(error);
                                    // Handle any fetch-related errors
                                }
                            }}
                        />
                    </label>
                    <br />
                    <button type="submit">Отправить</button>
                    <br />
                </div>
            </form>
        </div>
    );
};

export default VerificationForm;
