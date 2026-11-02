import { useState, type ChangeEvent } from "react";

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return { value, handleInputChange };
}

export default useInput;
