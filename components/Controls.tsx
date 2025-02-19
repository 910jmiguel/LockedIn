type ControlsProps = {
  isRunning: boolean;
  setMode: (mode: TimerState) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const Controls = ({ isRunning, setMode, startTimer, pauseTimer, resetTimer }: ControlsProps) => {
  return (
    <div>
      {/*Mode Buttons*/}
      <div>
        <button onClick={() => setMode("lockin")} className="px-4 py-4">Lock-In</button>
        <button onClick={() => setMode("shortBreak")} className="px-4 py-4">Short Break</button>
        <button onClick={() => setMode("longBreak")} className="px-4 py-4">Long Break</button>
      </div>

      {/*Timer Buttons*/}
      <div>
        <button onClick={isRunning ? pauseTimer : startTimer} className="px-4">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="px-4">Reset</button>
      </div>
    </div>
  )
}

export default Controls