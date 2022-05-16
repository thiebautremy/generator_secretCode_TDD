import { configureStore } from "@reduxjs/toolkit";
import updatePhrases from "./phrasesSlice";

export const store = configureStore({
  reducer: {
    phrases: updatePhrases,
  },
});
