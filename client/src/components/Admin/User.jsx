import React from 'react';

const User = ({ data }) => {
  return (
    <div>
      <h2>User</h2>
      <p>ФИО: {data.surname} {data.firstname} {data.lastname}</p>
      <p>Дата рождения: {data.birthday}.{data.birthmonth}.{data.birthyear}</p>
      <p>Серия и номер: {data.document_id}</p>
      <p>Document 1: {data.document1}</p>
      <p>Document 2: {data.document2}</p>
    </div>
  );
};

export default User;
