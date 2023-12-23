import './style.css'; 
const NameCard = (props) => {
  const { name, age, gender } = props;

  // Xác định màu nền dựa trên gender
  let backgroundColor;
  if (gender === "male") {
      backgroundColor = "blue";
  } else {
      backgroundColor = "red";
  }

  return (
      <div className="card" style={{ backgroundColor }}>
          <div className="name">Name: {name}</div>
          <div className="age">Age: {age}</div>
          <div className="gender">Gender: {gender}</div>
      </div>
  );
};
export default NameCard;
