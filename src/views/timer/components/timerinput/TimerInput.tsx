import type { ChangeEvent } from "react";
import Input from "../../../../components/input/Input";

type TimerInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function TimerInput({ value, onChange }: TimerInputProps) {
  return (
    <div className="timer-input">
      <label className="timer-input__label" htmlFor="timeInput">
        Zeit festlegen:
      </label>
      <Input id="timeInput" placeholder="0" value={value} onChange={onChange} />
    </div>
  );
}

export default TimerInput;
