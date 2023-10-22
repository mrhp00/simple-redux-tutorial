import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increaseByOne: state => {
      state.value += 1;
    },
    decreaseByOne: state => {
      state.value -= 1;
    },
    setTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {increaseByOne,decreaseByOne,setTo} = counterSlice.actions
export default counterSlice.reducer
