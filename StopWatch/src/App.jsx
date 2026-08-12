
import React, { useEffect, useState } from "react";
import "../src/App.css";
function App() {
  const [isRunning, setIsRunning] = useState(true);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <>
      <div className="stopwatch">  
        <h1>Stopwatch</h1>
        <h2>Time: {time} seconds</h2>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>

    </>
  );
}

export default App;

