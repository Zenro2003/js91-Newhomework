import React from 'react';

const MyProfile = ({ name, email, phone, gender, dateOfBirth }) => {
  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <strong>Name: Vũ Lê Huy</strong> {name}
      </div>
      <div>
        <strong>Email: vulehuy0102@gmail.com</strong> {email}
      </div>
      <div>
        <strong>Phone: 0369217613</strong> {phone}
      </div>
      <div>
        <strong>Gender: Male</strong> {gender}
      </div>
      <div>
        <strong>Date of Birth: 01/02/2003</strong> {dateOfBirth}
      </div>
    </div>
  );
};

export default MyProfile;
