// import { useCallback, useEffect, useReducer, useState } from "react";
import { useReducer } from "react";
import "./App.css";
// import Box from "./Box";
import Input from "./Input";
import List from "./List";
import { v4 as uuid } from "uuid";
// import { ListItem, Payload, Todo, ActionType } from "./types";
import { Todo, ActionType } from "./types";
// const MockData: ListItem[] = [
//   {
//     name: "Ocean Eyes",
//   },
//   {
//     name: "Mine",
//   },
//   {
//     name: "Forgot about Dre",
//   },
//   {
//     name: "Gods Plan",
//   },
// ];
// const Body = ({ title }: { title: string }) => {
//   return <h5>{title}</h5>;
// };
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), text: action.text, completed: false }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_CHECK":
      // TODO problems in reducer need index and create brand new object
      const copyState = state.slice();
      const todoItem = state.filter((todo) => todo.id === action.id);

      todoItem[0]["completed"] = !todoItem[0]["completed"];
      // todoItem[0].completed = !todoItem[0].completed
      console.log(todoItem);
      return [...state, ...todoItem];
  }
};

function App() {
  // const onListClickHandler = useCallback((item: Todo) => {
  //   alert(item.text);
  // }, []);
  // const [payload, setPayload] = useState<Payload | null>(null);
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setPayload(data));
  // }, []);
  const [todos, dispatch] = useReducer(todoReducer, []);
  const addTodoHandler = (text: Todo["text"]) => {
    dispatch({ type: "ADD", text });
  };
  const removeTodoHandler = (id: Todo["id"]) => {
    dispatch({ type: "DELETE", id });
  };
  const checkButtonHandler = (id: Todo["id"]) => {
    dispatch({ type: "TOGGLE_CHECK", id });
  };
  return (
    <div className="App">
      <Input onAdd={addTodoHandler} />
      <List
        items={todos}
        onDelete={removeTodoHandler}
        onCheck={checkButtonHandler}
      />
      {/* <header className="App-header">Hello</header> */}
      {/* <Body title="Body Title" /> */}
      {/* <Box>{JSON.stringify(payload)}</Box> */}
      {/* <List items={todos} onClick={onListClickHandler} onDelete={removeTodoHandler} /> */}
    </div>
  );
}

export default App;
