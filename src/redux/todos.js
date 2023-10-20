import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  data: [],
  todo: "",
};

const dataSlice = createSlice({
  
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action);
      state.data.push({ id: state.data.length, todo: action.payload });
      console.log(state.data);
    },
    delTodo: (state, action) => {
      // console.log(action.payload);
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    ediTodo: (state, action) => {
      const { id, todo } = action.payload;
      const items = state.data.find((item) => item.id === id);
      if (items) {
        items.todo = todo;
      }
    },
  },
});
export const { addTodo, delTodo, ediTodo } = dataSlice.actions;
export default dataSlice.reducer;
