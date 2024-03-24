import React from 'react';
import UserDocument from './UserDocument'

const User = ({ data }) => {
  return (
    <div>
      <h2>User</h2>
      <p>ФИО: {data.surname} {data.firstname} {data.lastname}</p>
      <p>Дата рождения: {data.birthday}.{data.birthmonth}.{data.birthyear}</p>
      <p>Серия и номер: {data.document_id}</p>
      <UserDocument document={data.document1}/>
      <UserDocument document={data.document2}/>
    </div>
  );
};

export default User;
