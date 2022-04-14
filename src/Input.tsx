import React, { useState } from "react";
import "./App.css";
const Input: React.FunctionComponent<{ onAdd: (text: string) => void }> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setInputValue(newValue);
  };
  const submitTodo = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputValue?.trim() !== "" && inputValue !== null) {
      onAdd(inputValue);

      setInputValue("");
    }
  };
  return (
    <form onSubmit={submitTodo}>
      <input type="test" onChange={onChange} value={inputValue} />
      <button className="btn-green">Submit</button>
    </form>
  );
};

export default Input;
