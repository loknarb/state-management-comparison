import { useCallback, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Todo, ActionType } from "../../types/types";
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
    default:
      throw new Error();
  }
};
export const useTodos = (
  initialTodos: Todo[]
): {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  removeTodo: (id: Todo["id"]) => void;
  checkTodo: (id: Todo["id"]) => void;
} => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const addTodo = useCallback((text: Todo["text"]) => {
    dispatch({
      type: "ADD",
      text,
    });
  }, []);

  const removeTodo = useCallback((id: Todo["id"]) => {
    dispatch({
      type: "DELETE",
      id,
    });
  }, []);

  const checkTodo = useCallback((id: Todo["id"]) => {
    dispatch({ type: "TOGGLE_CHECK", id });
  }, []);

  return { todos, addTodo, removeTodo, checkTodo };
};
