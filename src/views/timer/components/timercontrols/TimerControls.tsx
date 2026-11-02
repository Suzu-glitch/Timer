import Button from "../../../../components/button/Button";

type TimerControlsProps = {
  onStart: () => void;
};

function TimerControls({ onStart }: TimerControlsProps) {
  return (
    <div className="timer-controls">
      <Button label="Start" onClick={onStart} />
      <Button label="Pause" />
      <Button label="Reset" />
    </div>
  );
}

export default TimerControls;
