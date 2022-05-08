// import { useCallback, useEffect, useReducer, useState } from "react";
import { useReducer } from "react";
import "../styles/App.css";
// import Box from "./Box";
import Input from "./Input";
import List from "./List";
import { v4 as uuid } from "uuid";
// import { ListItem, Payload, Todo, ActionType } from "./types";
import { Todo, ActionType } from "../types/types";
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), text: action.text, completed: false }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_CHECK":
      let copyState = state.slice();
      let updatedTodo: Todo;
      const i = copyState.findIndex(({ id: copyStateId }) => copyStateId === action.id);
      if (copyState[i].completed === true) {
        updatedTodo = {
          id: state[i].id,
          text: state[i].text,
          completed: false,
        };
      } else {
        updatedTodo = {
          id: state[i].id,
          text: state[i].text,
          completed: true,
        };
      }
      copyState[i] = updatedTodo;
      return [...copyState];
  }
};

function App() {
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
      <List items={todos} onDelete={removeTodoHandler} onCheck={checkButtonHandler} />
      {/* <header className="App-header">Hello</header> */}
      {/* <Body title="Body Title" /> */}
      {/* <Box>{JSON.stringify(payload)}</Box> */}
      {/* <List items={todos} onClick={onListClickHandler} onDelete={removeTodoHandler} /> */}
    </div>
  );
}

export default App;
