import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phraseToChange: "",
  stringToAdd: "ja",
  javanisedPhrase: "",
};

export const javanais = createSlice({
  name: "javanais",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updatePhrase: (state, action) => {
      state.phraseToChange = action.payload;
    },
    updateStringToAdd: (state, action) => {
      state.stringToAdd = action.payload;
    },
    updateJavanisedPhrase: (state, action) => {
      state.javanisedPhrase = action.payload;
    },
  },
});

export const { updatePhrase, updateStringToAdd, updateJavanisedPhrase } =
  javanais.actions;

// export const selectCount = (state) => state.counter.value;

export default javanais.reducer;
