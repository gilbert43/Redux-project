import React ,{useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Your count is {count}</h1>
      <button onClick={(e) =>setCount(count+1)}>Increment</button>
      <button onClick={(e) =>setCount(count-1)}>Decrement</button>
      <button onClick={(e) =>setCount(0)}>Reset</button>
            
        </div>
    )
}

export default Counter
