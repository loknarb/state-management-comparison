import React, { useState } from "react";
import "../styles/App.css";
import PrimaryButton from "./PrimaryButtons";
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
      <PrimaryButton>Submit</PrimaryButton>
    </form>
  );
};

export default Input;
