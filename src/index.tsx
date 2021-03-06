import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { TodosProvider } from "./components/context/todoContext";
import { Provider } from "react-redux";
import main from "./stores/main";
import App from "./components/App";
import reportWebVitals from "./tests/reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <TodosProvider initialTodo={[]}>
      <Provider store={main}>
        <App />
      </Provider>
    </TodosProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
