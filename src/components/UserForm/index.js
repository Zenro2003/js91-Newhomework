import React, { useState } from 'react';

const UserForm = ({ onFormSubmit }) => {
        // Do người dùng nhập nên giá trị ban đầu là rỗng
    // Riêng gender là giới tính nên để mặt định là male
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');

    const handleSubmit = () => {
        // Kiểm tra xem có giá trị nhập vào hay không
        if (name.trim() === '' || age.trim() === '') {
            alert('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        // Mục đích của hành động này là thông báo cho component cha (ở đây là App) về việc có một user mới được thêm vào.
        onFormSubmit({ name, age: parseInt(age), gender });

        // reset lại form để khi thêm người dùng ko cần xóa bỏ dữ liệu cũ
        setName('');
        setAge('');
        setGender('male');
    };

    return (
        <div>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Age: </label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div>
                <label>Gender: </label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UserForm;