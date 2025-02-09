import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/src/entities/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
