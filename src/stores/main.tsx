import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
const main = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof main.getState>;
