import React, { useState } from "react";
import "../styles/App.css";
import useTodos from "./hooks/useZustandHook";
import PrimaryButton from "./PrimaryButtons";
// import { useTypedDispatch } from "./hooks/useReduxHook";
// import { addTodo } from "../stores/todo-slice";
const Input: React.FunctionComponent = () => {
  const { addTodo } = useTodos((state) => state);
  // const dispatch = useTypedDispatch();
  // const { addTodo } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setInputValue(newValue);
  };
  const submitTodo = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputValue?.trim() !== "" && inputValue !== null) {
      // dispatch(addTodo(inputValue));
      // addTodo(inputValue);
      // * zustand
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <form
      style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0.5rem" }}
      onSubmit={submitTodo}>
      <input
        style={{ height: "23px", margin: "0.25rem" }}
        type="test"
        onChange={onChange}
        value={inputValue}
      />
      <PrimaryButton style={{ margin: "0.25rem" }}>Submit</PrimaryButton>
    </form>
  );
};

export default Input;
