type TimerProps = {
  mode: TimerState;
  minutes: number;
  seconds: number;
};

const Timer = ({ mode, minutes, seconds }: TimerProps) => {

  const modeNames: Record<TimerProps["mode"], string> = {
    work: "Time to focus!",
    shortBreak: "Short Break",
    longBreak: "Long Break",
  };

  const formatTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // formats the time, and changes digits if < 10

  return (
    <div>
      <h4>{modeNames[mode]}</h4>
      <h2>{formatTime}</h2>
    </div>
  );
};

export default Timer;
