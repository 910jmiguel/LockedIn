"use client";
import Controls from "@/components/Controls";
import Timer from "@/components/Timer";
import { useState, useEffect } from "react";
import { setInterval, clearInterval } from "timers";

const durations = {
  lockin: 25,
  shortBreak: 5,
  longBreak: 15,
};

export default function Home() {
  const [mode, setMode] = useState<TimerState>("lockin"); // by default it is at work
  const [time, setTime] = useState(durations.lockin * 60); // initializes the timer to 25 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false); // by default it will not run

  const changeMode = (newMode: TimerState) => {
    setMode(newMode);
    setTime(durations[newMode] * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const countdownInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdownInterval); // stop when reached to 0
          return 0;
        }
        return prevTime - 1; // reduce by 1 second
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isRunning]); 

  return (
    <div className="text-center font-sans">
      <h1 className="text-4xl font-bold">LockedIn</h1>
      <h4 className="text-2xl font-bold">Pomodoro Timer</h4>
      <Timer mode={mode} minutes={Math.floor(time / 60)} seconds={time % 60} />
      <Controls
        isRunning={isRunning}
        setMode={changeMode}
        startTimer={() => setIsRunning(true)}
        pauseTimer={() => setIsRunning(false)}
        resetTimer={() => setTime(durations[mode] * 60)}
      />
    </div>
  );
}
