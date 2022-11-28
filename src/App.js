import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    let color = (count > 0) ? "green" : (count < 0) ? "red" :"black";

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count -1);
    const resetCount = () => setCount(0);
  return (
<div className="container">
  <h1>Counter</h1>
  <div style={{ color }} id="count">{count}</div>
  <button onClick={decrement} className= "btn btn-des">DECREASE</button>
  <button onClick={resetCount} className= "btn btn-reset">RESET</button>
  <button onClick={increment} className= "btn btn-ins">INCREASE</button>    
</div>
  )
}

export default App