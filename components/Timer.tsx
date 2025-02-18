import { useState } from "react";

type TimerProps = {
  minutes: number;
  seconds: number;
};

const Timer = ({ minutes, seconds }: TimerProps) => {

  //const [time, setTime] = useState(durations);
  const formatTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

  return (
    <div>
        <h2>{formatTime}</h2>
    </div>
  )
};

export default Timer;