import React, { useState, useEffect } from "react";
import "./WorkoutTimer.css"; // Import the CSS file
import { Button } from "antd";
import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const WorkoutTimer = () => {
  const [workoutTime, setWorkoutTime] = useState(20);
  const [restTime, setRestTime] = useState(10);
  const [totalTime, setTotalTime] = useState(10 * 60);
  const [timeLeft, setTimeLeft] = useState(workoutTime);
  const [isWorkout, setIsWorkout] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [totalTimeLeft, setTotalTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (!running || elapsedTime >= totalTimeLeft) return;

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

  const resetTimer = () => {
    setRunning(false);
    setElapsedTime(0);
    setTimeLeft(workoutTime);
    setTotalTimeLeft(totalTime);
    setIsWorkout(true);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="countdown-container">
      <div className="input-group">
        <h1>Workout timer tool</h1>
        <div className="vertical-controls">
          <div>
            <label>Workout Time (s): </label>
            <input
              type="number"
              value={workoutTime}
              onChange={(e) => setWorkoutTime(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Rest Time (s): </label>
            <input
              type="number"
              value={restTime}
              onChange={(e) => setRestTime(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Total Time (min): </label>
            <input
              type="number"
              value={totalTime / 60}
              onChange={(e) => setTotalTime(Number(e.target.value) * 60)}
            />
          </div>
        </div>
      </div>
      <div className={`circle ${isWorkout ? "workout" : "rest"}`}>
        {timeLeft}s
      </div>
      <div className="status">
        {isWorkout ? "Workout Time 💪" : "Rest Time 😴"}
      </div>
      <div className="total-time">
        Total Time Left: {formatTime(totalTimeLeft)}
      </div>
      <div className="controls">
        <Button
          icon={<RightCircleOutlined />}
          variant="solid"
          color="blue"
          onClick={toggleTimer}
        >
          {running ? "Pause" : "Start"}
        </Button>
        <Button
          icon={<CloseCircleOutlined />}
          iconPosition="start"
          danger
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default WorkoutTimer;
