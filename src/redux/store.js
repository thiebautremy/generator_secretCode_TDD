import { configureStore } from "@reduxjs/toolkit";
import javanais from "./javanaisSlice";
import romanNumber from "./romanNumberSlice";

export const store = configureStore({
  reducer: {
    javanais,
    romanNumber,
  },
});
