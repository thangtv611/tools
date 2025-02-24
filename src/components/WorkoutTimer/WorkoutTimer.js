import React, { useState, useEffect } from "react";
import "./Countdown.css"; // Import the CSS file

const CountdownTimer = () => {
  const workoutTime = 20; // Workout duration in seconds
  const restTime = 10; // Rest duration in seconds
  const totalTime = 10 * 60; // Total workout session time in seconds

  const [timeLeft, setTimeLeft] = useState(workoutTime);
  const [isWorkout, setIsWorkout] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [totalTimeLeft, setTotalTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (!running || elapsedTime >= totalTime) return;

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else {
        setIsWorkout((prev) => !prev);
        setTimeLeft(isWorkout ? restTime : workoutTime);
      }

      setElapsedTime((prev) => prev + 1);
      setTotalTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft, isWorkout, elapsedTime]);

  const toggleTimer = () => {
    setRunning((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="countdown-container">
      <h1>Workout timer</h1>
      <div className={`circle ${isWorkout ? "workout" : "rest"}`}>
        {timeLeft}s
      </div>
      <div className="status">
        {isWorkout ? "Workout Time 💪" : "Rest Time 😴"}
      </div>
      <div className="total-time">Total Time Left: {formatTime(totalTimeLeft)}</div>
      <button className="start-button" onClick={toggleTimer}>
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default CountdownTimer;
