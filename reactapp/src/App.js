
import './App.css';
import { useState } from 'react';
function App() {
  const [val , setVal] = useState(0);
  const[intervalId , setIntervalId] = useState(null)
  const startCounter = () => {
    clearInterval(intervalId);  // Clear any existing interval
    const id = setInterval(() => {
      setVal(prevVal => prevVal + 1);
    }, 1000);
    setIntervalId(id);
  };
  return (
<div>
  <h2>
    Counter
  </h2>
  <h3>
    {val}
  </h3>
  <button onClick = {startCounter}>Start Counter</button>
</div>
  )
}

export default App;
