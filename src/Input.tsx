import React, { useState } from "react";
import { Todo } from "../src/types";
const Input: React.FunctionComponent<{ onAdd: (text: string) => void }> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<Todo["text"] | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setInputValue(newValue);
  };
  const submitTodo = (e: React.FormEvent<HTMLElement>) => {
    console.log(e);
    if (inputValue?.trim() !== "" && inputValue !== null) {
      onAdd(inputValue);
    }
  };
  return (
    <form onSubmit={submitTodo}>
      <input onChange={onChange} />
      <button />
    </form>
  );
};

export default Input;
