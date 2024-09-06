import React, { useEffect, useState } from "react";
import "../App.css";
import { Button } from "@mui/material";
export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Stopwatch</h1>
            <h2>{formatTime(time)}</h2>

            <Button
              onClick={() => setIsRunning(true)}
              style={{ marginRight: "10px" }}
              variant="contained" color="success"
            >
              Start
            </Button>
            <Button
              onClick={() => setIsRunning(false)}
              style={{ marginRight: "10px" }}
              variant="contained" color="success"
            >
              Stop
            </Button>
            <Button
              onClick={() => {
                setTime(0);
                setIsRunning(false);
              }}
              variant="contained" color="success"
            >
              Reset
            </Button>
          </div>
        </header>
      </div>
    </>
  );
}
