import "../styles/App.css";
import { TodosProvider } from "./context/todoContext";
import Input from "./Input";
import List from "./List";

function App() {
  return (
    <div className="App">
      <TodosProvider initialTodo={[]}>
        <Input />
        <List />
      </TodosProvider>
    </div>
  );
}

export default App;
