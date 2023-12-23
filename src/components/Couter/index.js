import { useState } from "react";

const Counter = () => {
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  const handleClickIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClickReduce= () => {
    if (count > 0)
    setCount(count - 1);
   
  };
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleClickIncrease}>+</button>
      <button onClick={handleClickReduce}>-</button>
    </div>
  );
};

export default Counter;