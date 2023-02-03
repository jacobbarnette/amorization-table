import { configureStore } from "@reduxjs/toolkit";
import mortgageReducer from "../features/mortgageSlice";
export const store = configureStore({
  reducer: {
    mortgage: mortgageReducer,
  },
});
