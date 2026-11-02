type TimerDisplayProps = {
  timeLeft: string;
};

function TimerDisplay({ timeLeft }: TimerDisplayProps) {
  return (
    <h1 className="timer-display">
      Time left:
      <br />
      {timeLeft}s
    </h1>
  );
}

export default TimerDisplay;
