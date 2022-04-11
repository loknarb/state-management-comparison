import { useCallback, useState } from "react";
import "./App.css";
// import Box from "./Box";
import List from "./List";
import { ListItem, Payload } from "./types";
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
const Body = ({ title }: { title: string }) => {
  return <h5>{title}</h5>;
};

function App() {
  const onListClickHandler = useCallback((item: ListItem) => {
    alert(item.name);
  }, []);
  const [payload, setPayload] = useState<Payload | null>(null);
  return (
    <div className="App">
      {/* <header className="App-header">Hello</header> */}
      {/* <Body title="Body Title" /> */}
      {/* <Box>Children Here</Box> */}
      <List items={MockData} onClick={onListClickHandler} />
    </div>
  );
}

export default App;
