import "./App.css";
import Box from "./Box";
import List from "./List";
const MockData = [
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
      <List>{MockData}</List>
    </div>
  );
}

export default App;
