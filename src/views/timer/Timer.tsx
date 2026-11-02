import TimerInput from "./components/timerinput/TimerInput";
import TimerDisplay from "./components/timerdisplay/TimerDisplay";
import TimerControls from "./components/timercontrols/TimerControls";

function Timer() {
  return (
    <main className="timer">
      <TimerInput />
      <TimerDisplay />
      <TimerControls />
    </main>
  );
}

export default Timer;
