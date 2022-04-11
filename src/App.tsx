import './App.css';
import Box from './Box';
const Body = ({title}: {title: string}) => {
  return (
    <h5>{title}</h5>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <Body title="Body Title"/>
      <Box>Children Here</Box>
    </div>
  );
}

export default App;
