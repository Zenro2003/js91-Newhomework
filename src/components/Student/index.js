import React, { useState } from 'react';
import './style.css'; // Import style.css

const Student = () => {
  const [student, setStudent] = useState({
    name: 'John',
    level: 1,
    isActive: true,
  });

  const increaseLevel = () => {
    setStudent(prevStudent => ({
      ...prevStudent,
      level: prevStudent.level + 1,
    }));
  };

  const decreaseLevel = () => {
    if (student.level > 1) {
      setStudent(prevStudent => ({
        ...prevStudent,
        level: prevStudent.level - 1,
      }));
    }
  };

  const changeStatus = () => {
    setStudent(prevStudent => ({
      ...prevStudent,
      isActive: !prevStudent.isActive,
    }));
  };

  const studentClasses = `student ${student.isActive ? 'active' : 'inactive'}`;

  return (
    <div className={studentClasses}>
      <h2>Name: {student.name}</h2>
      <p>Level: {student.level}</p>
      <button onClick={increaseLevel}>Increase</button>
      <button onClick={decreaseLevel} disabled={student.level <= 1}>
        Decrease
      </button>
      <br />
      <button onClick={changeStatus}>
        Change Status ({student.isActive ? 'Active' : 'Inactive'})
      </button>
    </div>
  );
};

export default Student;