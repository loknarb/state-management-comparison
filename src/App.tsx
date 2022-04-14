import { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
// import Box from "./Box";
import Input from "./Input";
import List from "./List";
import { ListItem, Payload, Todo, ActionType } from "./types";
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
      return [...state, { id: state.length, text: action.text, completed: false }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
  }
};

function App() {
  const onListClickHandler = useCallback((item: Todo) => {
    alert(item.text);
  }, []);
  // const [payload, setPayload] = useState<Payload | null>(null);
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setPayload(data));
  // }, []);
  const [todos, dispatch] = useReducer(todoReducer, []);
  const addTodoHandler = (text: string) => {
    dispatch({ type: "ADD", text });
  };
  const removeTodoHandler = (id: Todo["id"]) => {
    dispatch({ type: "DELETE", id });
  };
  console.log(todos);
  return (
    <div className="App">
      {/* <header className="App-header">Hello</header> */}
      {/* <Body title="Body Title" /> */}
      <Input onAdd={addTodoHandler} />
      {/* <Box>{JSON.stringify(payload)}</Box> */}
      <List items={todos} onClick={onListClickHandler} onDelete={removeTodoHandler} />
    </div>
  );
}

export default App;
