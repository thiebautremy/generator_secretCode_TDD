import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numericNumber: "",
  romanNumber: "",
};

export const romanNumber = createSlice({
  name: "romanNumber",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateNumericNumber: (state, action) => {
      state.numericNumber = action.payload;
    },
    updateRomanNumber: (state, action) => {
      state.romanNumber = action.payload;
    },
  },
});

export const { updateNumericNumber, updateRomanNumber, updateJavanisedPhrase } =
  romanNumber.actions;

// export const selectCount = (state) => state.counter.value;

export default romanNumber.reducer;
