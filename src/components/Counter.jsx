import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>useState Counter</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>+</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Counter;
