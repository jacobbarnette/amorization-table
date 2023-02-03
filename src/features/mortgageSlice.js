import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interestSum: 0,
  principalSum: 0,
};

export const mortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    addInterestSum: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        interestSum: action.payload,
      };
    },
  },
});

export const { addInterestSum } = mortgageSlice.actions;
export default mortgageSlice.reducer;
