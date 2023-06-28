import { createSlice } from "@reduxjs/toolkit";

export const sport = createSlice({
  name: "sportName",
  initialState: {
    sportName: "football",
  },

  reducers: {
    selectSport: (state, action) => {
      state.sportName = action.payload;
    },
  },
});

export const { selectSport } = sport.actions;

export default sport.reducer;
