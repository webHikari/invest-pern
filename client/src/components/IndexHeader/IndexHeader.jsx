import {useEffect, useState} from 'react';
import URL from '../Configuration.jsx'

import styles from './IndexHeader.module.css';

import {Link, NavLink} from 'react-router-dom';

export default function IndexHeader() {

    const [name, setName] = useState('');

    // Fetch data for variables
    const getData = async () => {
        try {
            const response = await fetch(URL() + 'dashboard', {
                method: 'GET',
                headers: { token: localStorage.token },
            });

            const parseRes = await response.json();

            // Set data xd
            setName(parseRes[0].user_name);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    });

    return(
             <header>
                <nav>
                    <div className={styles.header_logo}>
                        <div className={styles.header_true_logo}>
                            <img src="/icons/logo.svg" alt="" />
                        </div>
                        <div className={styles.header_wrapper}>
                            <h4>КурсКапитал</h4>
                        </div>
                    </div>
                    <div className={styles.header_links}>
                        <NavLink
                            to="/" 
                            className={({isActive}) => isActive ? styles.header_link + ' ' + styles.header_link_active : styles.header_link} 
                        >
                            Главная
                        </NavLink>
                        <NavLink 
                          to="/about" 
                          className={({isActive}) => isActive ? styles.header_link + ' ' + styles.header_link_active : styles.header_link} 
                        >
                            О нас
                        </NavLink>
                        <NavLink 
                          to="/warranty"
                          className={({isActive}) => isActive ? styles.header_link + ' ' + styles.header_link_active : styles.header_link} 
                        >
                            Гарантии
                        </NavLink>
                        <a href="#" className={styles.header_link}>
                            Ставки
                        </a>
                        <a href="#" className={styles.header_link}>
                            Инвестиции
                        </a>
                    </div>
                    <div className={styles.header_auth}>
                        { name ? 
                          (<Link 
                            to="/dashboard"
                            classname={styles.header_button + ' ' + styles.header_button_auth}
                          >
                            <img src="/icons/user.svg" alt="" />
                            {name}
                          </Link>) 
                            : (
                            <>
                            <Link to="/login" className={styles.header_button}>
                                Войти
                            </Link>
                            <Link
                                to="/register"
                                className={
                                    styles.header_button +
                                    ' ' +
                                    styles.header_button_auth
                                }
                                >
                                <img src="/icons/user.svg" alt="" />
                                Создать аккаунт
                            </Link>
                            </>
                          )}
                    </div>
                </nav>
            </header>

  );
}
