import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./todos";
export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
