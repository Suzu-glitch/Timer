import Button from "../../../../components/button/Button";

type TimerControlsProps = {
  onStart: () => void;
  onPause: () => void;
};

function TimerControls({ onStart, onPause }: TimerControlsProps) {
  return (
    <div className="timer-controls">
      <Button label="Start" onClick={onStart} />
      <Button label="Pause" onClick={onPause} />
      <Button label="Reset" />
    </div>
  );
}

export default TimerControls;
