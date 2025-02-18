import Controls from "@/components/Controls";
import Timer from "@/components/Timer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [mode, setMode] = useState<TimerState>("work"); // by default it is at work
  const [time, setTime] = useState(durations.work * 60); // initializes the timer to 25 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false); // by default it will not run

  const setMode = (newMode: TimerState) => {
    setMode(newMode);
    setTime(durations[newMode] * 60);
    setIsRunning(false);
  }

  const startTimer = () => {
    
  }

  const pauseTimer = () => {

  }

  const resetTimer = () => {

  }

  return (
    <div className="text-center">
      <h1 className="font-sans text-4xl font-bold">Pomodoro Timer</h1>
      <Timer />
      <Controls />
    </div>
  );
}
