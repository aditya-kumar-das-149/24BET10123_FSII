import React, { useState, useEffect } from 'react';

const FocusMode = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleFocusMode = () => {
    setIsActive(!isActive);
    if (isActive) {
      setIsRunning(false);
      setTime(0);
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`focus-mode ${isActive ? 'active' : ''}`}>
      <h2>🎯 Focus Mode</h2>
      <button onClick={toggleFocusMode} className="btn-primary mt-4">
        {isActive ? '✕ Exit Focus Mode' : '▶ Enter Focus Mode'}
      </button>
      {isActive && (
        <div className="focus-mode timer">
          <h3>{formatTime(time)}</h3>
          <div className="flex gap-3 flex-wrap justify-center">
            <button onClick={startTimer} className={`btn-primary ${isRunning ? 'opacity-50' : ''}`}>▶ Start</button>
            <button onClick={pauseTimer} className={`btn-primary ${!isRunning ? 'opacity-50' : ''}`}>⏸ Pause</button>
            <button onClick={resetTimer} className="btn-primary">🔄 Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusMode;