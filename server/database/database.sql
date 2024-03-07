CREATE DATABASE invest_app;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_balance FLOAT DEFAULT 0,
    user_holding FLOAT DEFAULT 0,
    user_role VARCHAR(255) DEFAULT 'User',
    verified BOOLEAN DEFAULT false,
    user_documents VARCHAR(255) DEFAULT NULL,
    verify_status BOOLEAN DEFAULT false
);

CREATE TABLE history(
    history_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users(user_id),
    history_amount FLOAT NOT NULL,
    history_transaction_type BOOLEAN NOT NULL,
    history_datetime TIMESTAMP DEFAULT current_timestamp,
    history_balance FLOAT NOT NULL
);

