import React, { useState, useCallback } from 'react';


function UseCallback() {
  const [count, setCount] = useState(0);

  // define the callback function using useCallback
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}


export default UseCallback;