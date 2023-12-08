import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CounterState {
  isLoading: boolean;
  value: number;
  data: object;
}

const initialState: CounterState = {
  isLoading: false,
  value: 0,
  data: {},
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
