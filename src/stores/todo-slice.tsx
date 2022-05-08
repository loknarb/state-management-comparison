import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { Todo } from "../types/types";
interface TodosSliceState {
  todos: Todo[];
}
const initialState: TodosSliceState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo["text"]>) {
      state.todos = [...state.todos, { id: uuid(), text: action.payload, completed: false }];
    },
    removeTodo(state, action: PayloadAction<Todo["id"]>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    checkTodo(state, action: PayloadAction<Todo["id"]>) {
      let copyState = state.todos.slice();
      let updatedTodo: Todo;
      const i = copyState.findIndex(({ id: copyStateId }) => copyStateId === action.payload);
      if (copyState[i].completed === true) {
        updatedTodo = {
          id: state.todos[i].id,
          text: state.todos[i].text,
          completed: false,
        };
      } else {
        updatedTodo = {
          id: state.todos[i].id,
          text: state.todos[i].text,
          completed: true,
        };
      }
      copyState[i] = updatedTodo;
      state.todos = [...copyState];
      // return [...copyState];
    },
  },
});
export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
