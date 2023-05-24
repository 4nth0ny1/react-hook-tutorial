import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // 1. useEffect without dependencies. this will run everytime the state changes.
  // useEffect(() => {
  //   document.title = `${count} new messages!`;
  // });

  // 2. useEffect with an empty array dependency. this will only run the first time it is rendered and will not change with state changes. This is used when wanting to render data from an api.
  // useEffect(() => {
  //   document.title = `${count} new messages!`;
  // }, []);

  // 3. useEffect with variables. This will run when the variable changes. In this case, I only want to change the state when
  // const [otherCount, setOtherCount] = useState(5);

  // useEffect(() => {
  //   document.title = `${otherCount} new messages!`;
  // }, [otherCount]);

  // clean up function
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log("Run useEffect", count);

    return () => {
      console.log("Clean up", newCount);
    };
  });

  return (
    <div>
      <h2>useState Counter</h2>
      <div>New Count: {newCount}</div>
      <br></br>
      <br></br>
      {/* <button onClick={() => setOtherCount(otherCount + 5)}>5+</button> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      {/* <div>Other Count: {otherCount}</div> */}
      <button onClick={() => setCount(count - 1)}>+</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Counter;
