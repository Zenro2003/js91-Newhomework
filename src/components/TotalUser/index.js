import React from 'react';

const TotalUser = ({ users }) => {
  // Tính tổng số users
  const totalUsers = users.length;

  // Tính tổng tuổi của tất cả users
  const totalAge = users.reduce((acc, user) => acc + parseInt(user.age), 0);

  // Tính số lượng male và female
  const maleCount = users.filter(user => user.gender === 'male').length;
  const femaleCount = users.filter(user => user.gender === 'female').length;

  return (
    <div>
      <h2>Total Users: {totalUsers}</h2>
      <p>Total Age: {totalAge}</p>
      <p>Total Male: {maleCount}</p>
      <p>Total Female: {femaleCount}</p>
    </div>
  );
};

export default TotalUser;
