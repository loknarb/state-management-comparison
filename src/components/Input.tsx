import React, { useState } from "react";
import "../styles/App.css";
import PrimaryButton from "./PrimaryButtons";
import { useTypedDispatch } from "./hooks/useReduxHook";
import { addTodo } from "../stores/todo-slice";
const Input: React.FunctionComponent = () => {
  const dispatch = useTypedDispatch();
  // const { addTodo } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setInputValue(newValue);
  };
  const submitTodo = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputValue?.trim() !== "" && inputValue !== null) {
      dispatch(addTodo(inputValue));
      // addTodo(inputValue);

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
