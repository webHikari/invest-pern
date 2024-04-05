import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Index.module.css';

export default function index() {
    return (
        <>
            <header>
                <nav>
                    <div className={styles.header_logo}>
                        <div className={styles.header_true_logo}>
                            <img src="../src/assets/icons/logo.svg" alt="" />
                        </div>
                        <div className={styles.header_wrapper}>
                            <h4>КурсКапитал</h4>
                        </div>
                    </div>
                    <div className={styles.header_links}>
                        <a
                            href="#"
                            className={
                                styles.header_link +
                                ' ' +
                                styles.header_link_active
                            }
                        >
                            Главная
                        </a>
                        <a href="#" className={styles.header_link}>
                            О нас
                        </a>
                        <a href="#" className={styles.header_link}>
                            Гарантии
                        </a>
                        <a href="#" className={styles.header_link}>
                            Ставки
                        </a>
                        <a href="#" className={styles.header_link}>
                            Инвестиции
                        </a>
                    </div>
                    <div className={styles.header_auth}>
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
                            <img src="../src/assets/icons/user.svg" alt="" />
                            Создать аккаунт
                        </Link>
                    </div>
                </nav>
            </header>
            <main>
                <div className={styles.container}>
                    <div className={styles.particles}></div>
                    <div className={styles.hero}>
                        <div className={styles.hero_blured_cont}>
                            <h1 className={styles.hero_text}>
                                Больше,
                                <br />
                                чем просто
                                <br />
                                инвестиции
                            </h1>
                        </div>
                    </div>
                    <div className={styles.about_cards}>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <h2>Что_то</h2>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <div className={styles.card_column}>
                                    <div>
                                        <h3>10% денег</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Error
                                            ipsum, adipisci voluptatibus aperiam
                                            quo totam quia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <div className={styles.card_column}>
                                    <div>
                                        <h3>1M+ челов</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Error
                                            ipsum, adipisci voluptatibus aperiam
                                            quo totam quia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <div className={styles.card_column}>
                                    <div>
                                        <h3>10M+ чего-то</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Error
                                            ipsum, adipisci voluptatibus aperiam
                                            quo totam quia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <div className={styles.card_column}>
                                    <div>
                                        <h3>1K+ отзывов</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Error
                                            ipsum, adipisci voluptatibus aperiam
                                            quo totam quia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_wrapper}>
                                <h2>Еще что_то</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.green_plus}>
                    <div className={styles.container}></div>
                </div>
                <div className={styles.green_block}>
                    <div className={styles.container}>
                        <h2>Узнайте о нас побольше</h2>
                        <button className={styles.black_button}>О нас</button>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.contact_block}>
                        <h3>Не уверены? Свяжитесь с нами!</h3>
                        <p>
                            Наши специалисты помогут вам определиться в течение
                            10 минут
                        </p>
                        <div className={styles.double_form}>
                            <form action="#" className={styles.contact_form}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Ваше имя"
                                    required
                                />
                                <input
                                    type="text"
                                    name="userphone"
                                    placeholder="E_mail"
                                    required
                                />
                                <textarea
                                    placeholder="Ну, пиши че хотел"
                                    name="text"
                                    required
                                ></textarea>
                                <button type="submit">
                                    Отправить хуйню &nbsp;&nbsp;&nbsp;&nearr;
                                </button>
                            </form>
                            <div className={styles.double_form_text}>
                                <h4>Какой_то заголовок</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Tempora unde, ipsam quis
                                    eum ducimus illo assumenda blanditiis quidem
                                    vero voluptatibus necessitatibus deleniti
                                    maiores eaque dolor fugit non eius cum
                                    similique!
                                </p>
                                <h4>Еще 1 заголовок</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Tempora unde, ipsam quis
                                    eum ducimus illo assumenda blanditiis quidem
                                    vero voluptatibus necessitatibus deleniti
                                    maiores eaque dolor fugit non eius cum
                                    similique!
                                </p>
                                <h4>И еще 1))</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Tempora unde, ipsam quis
                                    eum ducimus illo assumenda blanditiis quidem
                                    vero voluptatibus necessitatibus deleniti
                                    maiores eaque dolor fugit non eius cum
                                    similique!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
