import { createSlice } from "@reduxjs/toolkit";

export const competition = createSlice({
  name: "competitionId",
  initialState: {
    competitionId: "",
  },

  reducers: {
    selectCompetition: (state, action) => {
      state.competitionId = action.payload;
    },
  },
});

export const { selectCompetition } = competition.actions;

export default competition.reducer;
