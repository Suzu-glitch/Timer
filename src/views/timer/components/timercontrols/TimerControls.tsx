import Button from "../../../../components/button/Button";

type TimerControlsProps = {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

function TimerControls({ onStart, onPause, onReset }: TimerControlsProps) {
  return (
    <div className="timer-controls">
      <Button label="Start" onClick={onStart} />
      <Button label="Pause" onClick={onPause} />
      <Button label="Reset" onClick={onReset} />
    </div>
  );
}

export default TimerControls;
