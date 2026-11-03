import { useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import TimerInput from "./components/timerinput/TimerInput";
import TimerDisplay from "./components/timerdisplay/TimerDisplay";
import TimerControls from "./components/timercontrols/TimerControls";

const INTERVAL_MS = 10;
const MS_PER_SECOND = 1000;

function Timer() {
  const { value, handleInputChange } = useInput("");
  const [timeLeftMs, setTimeLeftMs] = useState(0);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  function stopInterval() {
    if (intervalIdRef.current !== null) {
      window.clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }

  function startTimer() {
    const startDurationMs =
      timeLeftMs > 0 ? timeLeftMs : Number(value) * MS_PER_SECOND;

    if (startDurationMs <= 0 || intervalIdRef.current !== null) {
      return;
    }

    const endTimeMs = Date.now() + startDurationMs;
    setTimeLeftMs(startDurationMs);

    intervalIdRef.current = window.setInterval(() => {
      const remainingMs = endTimeMs - Date.now();

      if (remainingMs <= 0) {
        setTimeLeftMs(0);
        stopInterval();
        return;
      }

      setTimeLeftMs(remainingMs);
    }, INTERVAL_MS);
  }

  function pauseTimer() {
    stopInterval();
  }

  function resetTimer() {
    stopInterval();
    setTimeLeftMs(Number(value) * MS_PER_SECOND);
  }

  const timeLeft = (timeLeftMs / MS_PER_SECOND).toFixed(3);

  return (
    <main className="timer">
      <TimerInput value={value} onChange={handleInputChange} />
      <TimerDisplay timeLeft={timeLeft} />
      <TimerControls
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </main>
  );
}

export default Timer;
