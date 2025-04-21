import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Total count is : {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrements</button>
    </>
  );
}

export default Counter;
