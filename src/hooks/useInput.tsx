import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
