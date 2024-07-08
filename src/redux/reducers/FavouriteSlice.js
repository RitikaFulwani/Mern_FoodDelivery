import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "success",
  data:[]
};

const Favourite = createSlice({
  name: "Select_row",
  initialState,
  reducers: {
    storeRowData: (state, action) => {
      state.data=action.payload.data
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  
  },
});

export const { storeRowData,  } = Favourite.actions;

export default Favourite.reducer;
