import useInput from "../../hooks/useInput";
import TimerInput from "./components/timerinput/TimerInput";
import TimerDisplay from "./components/timerdisplay/TimerDisplay";
import TimerControls from "./components/timercontrols/TimerControls";

function Timer() {
  const { value, handleInputChange } = useInput("");

  console.log(value);

  return (
    <main className="timer">
      <TimerInput value={value} onChange={handleInputChange} />
      <TimerDisplay />
      <TimerControls />
    </main>
  );
}

export default Timer;
