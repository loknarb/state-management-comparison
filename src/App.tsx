import "./App.css";
import Box from "./Box";
import List from "./List";
import { ListItem } from "./types";
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
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <Body title="Body Title" />
      <Box>Children Here</Box>
      <List items={MockData}></List>
    </div>
  );
}

export default App;
