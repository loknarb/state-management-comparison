import { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
import Box from "./Box";
import List from "./List";
import { ListItem, Payload, Todo } from "./types";
const MockData: ListItem[] = [
  {
    name: "Ocean Eyes",
  },
  {
    name: "Mine",
  },
  {
    name: "Forgot about Dre",
  },
  {
    name: "Gods Plan",
  },
];
// const Body = ({ title }: { title: string }) => {
//   return <h5>{title}</h5>;
// };
const todoReducer= (todos: Todo[], action: ActionTypes) => {

}

function App() {
  const onListClickHandler = useCallback((item: ListItem) => {
    alert(item.name);
  }, []);
  const [payload, setPayload] = useState<Payload | null>(null);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setPayload(data));
  }, []);
  const [todos, dispatch] = useReducer(todoReducer. [])
  return (
    <div className="App">
      {/* <header className="App-header">Hello</header> */}
      {/* <Body title="Body Title" /> */}
      <Box>{JSON.stringify(payload)}</Box>
      <List items={MockData} onClick={onListClickHandler} />
    </div>
  );
}

export default App;
