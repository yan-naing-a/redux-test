import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CounterState {
  isLoading: boolean;
  value: number;
  data: object;
  error: Error | null;
}

const initialState: CounterState = {
  isLoading: false,
  value: 0,
  data: {},
  error: null,
};

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = response.json();
    return data;
  }
);

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
    incrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as Error;
    });
  },
});

/* export const selectCount = (state: RootState) => {
  return state.counter.value;
}; */
export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
