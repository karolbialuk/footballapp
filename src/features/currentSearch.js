import { createSlice } from "@reduxjs/toolkit";

export const search = createSlice({
  name: "searchId",
  initialState: {
    searchId: "",
  },

  reducers: {
    selectSearch: (state, action) => {
      state.searchId = action.payload;
    },
  },
});

export const { selectSearch} = search.actions;

export default search.reducer;
