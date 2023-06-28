import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeader = {
  "x-rapidapi-key": process.env.REACT_APP_FOOTBALL_KEY,
  "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
};

const createRequest = (url) => ({
  url,
  headers: apiHeader,
});

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-football-v1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getMatches: builder.query({
      query: (id) => createRequest(`/v3/fixtures?league=${id}&next=40`),
    }),

    getDefaultMatches: builder.query({
      query: () => createRequest(`/v3/fixtures?league=39&next=40`),
    }),

    getEndedMatches: builder.query({
      query: (id) => createRequest(`/v3/fixtures?league=${id}&last=40`),
    }),
    getLiveMatches: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=106`
        ),
    }),

    getMatchInfo: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`
        ),
    }),

    getClubInfo: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`
        ),
    }),

    getClubLeague: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/leagues?team=${id}`
        ),
    }),
    
    getClubStatistics: builder.query({
      query: ({league, id}) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=2022&team=${id}`
        ),
    }),

    getClubMatches: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&team=${id}&last=10`
        ),
    }),

    getClubNextMatches: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&team=${id}&next=10`
        ),
    }),
    
    getPredictions: builder.query({
      query: (id) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${id}`
        ),
    }),

    getSearch: builder.query({
      query: (name) =>
        createRequest(
          `https://api-football-v1.p.rapidapi.com/v3/teams?search=${name}`
        ),
    }),

    
  }),

  

  
});

export const {
  useGetClubNextMatchesQuery,
  useGetSearchQuery,
  useGetClubMatchesQuery,
  useGetClubStatisticsQuery,
  useGetClubLeagueQuery,
  useGetMatchesQuery,
  useGetEndedMatchesQuery,
  useGetLiveMatchesQuery,
  useGetMatchInfoQuery,
  useGetDefaultMatchesQuery,
  useGetClubInfoQuery,
  useGetPredictionsQuery,
} = footballApi;
