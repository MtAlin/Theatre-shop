import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product";

export const store = configureStore({
  reducer: {
    counter: productReducer,
  },
});
