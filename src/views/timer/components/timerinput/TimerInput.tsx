import Input from "../../../../components/input/Input";

function TimerInput() {
  return (
    <div className="timer-input">
      <label className="timer-input__label" htmlFor="timeInput">
        Zeit festlegen:
      </label>
      <Input id="timeInput" placeholder="0" />
    </div>
  );
}

export default TimerInput;
