import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "../services/footballApi";
import sportReducer from "../features/currentSport";
import competitionReducer from "../features/currentCompetition";
import searchReducer from '../features/currentSearch';
import bookmarkReducer from '../features/currentBookmark';

export default configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    currentSport: sportReducer,
    currentCompetition: competitionReducer,
    currentSearch: searchReducer,
    currentBookmark: bookmarkReducer
  },
});
