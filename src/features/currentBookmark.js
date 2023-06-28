import { createSlice } from "@reduxjs/toolkit";

export const bookmark = createSlice({
  name: "bookmarks",
  initialState: {
    bookmarks: [],
  },

  reducers: {
    selectBookmark: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});



export const { selectBookmark } = bookmark.actions;

export default bookmark.reducer;
