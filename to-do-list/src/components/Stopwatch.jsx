import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getMilliseconds = `0${((time % 1000) / 10).toFixed(0)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h2>⏱️ Stopwatch</h2>
      <div className="time">{formatTime(time)}</div>
      <div className="stopwatch controls gap-3">
        <button onClick={handleStartPause} className="btn-primary">
          {isActive ? '⏸ Pause' : '▶ Start'}
        </button>
        <button onClick={handleReset} className="btn-primary">
          🔄 Reset
        </button>
        <button onClick={handleLap} className="btn-primary">
          📍 Lap
        </button>
      </div>
      {laps.length > 0 && (
        <div className="stopwatch laps">
          <h3>🏁 Laps</h3>
          <ul className="space-y-2 mt-3">
            {laps.map((lap, index) => (
              <li key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg font-mono border-l-4 border-blue-500">
                <span>Lap {index + 1}</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{formatTime(lap)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;