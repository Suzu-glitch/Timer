import type { ChangeEvent } from "react";

type InputProps = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ id, placeholder, value, onChange }: InputProps) {
  return (
    <input
      className="input"
      id={id}
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
