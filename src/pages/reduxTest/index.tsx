import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  decrement,
  fetchContent,
  incrementByAmount,
  selectCount,
} from "@/store/slices/counterSlice";
import { Box, Button, Typography } from "@mui/material";

const reduxTest = () => {
  //   const count = useAppSelector((state) => state.counter.value);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h3">{count}</Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        <Button
          variant="contained"
          sx={{ mr: 3 }}
          onClick={() => {
            return dispatch(decrement());
          }}
        >
          decrement
        </Button>
        <Button
          variant="contained"
          sx={{ mr: 3 }}
          onClick={() => {
            return dispatch(incrementByAmount(100));
          }}
        >
          increment
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(fetchContent());
          }}
        >
          fetch
        </Button>
      </Box>
    </Box>
  );
};
export default reduxTest;
