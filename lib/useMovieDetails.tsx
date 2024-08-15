"use client"

import { useQueries } from "@tanstack/react-query";
import fetcher from "./fetcher";

interface TVQuery {
  queryKey: string;
  endpoint: string;
  params?: Record<string, any>;
}

// Custom hook to fetch multiple TV show data from TMDB API
export default function useMovieDetails(queries: TVQuery[])  {
  const queryResults = useQueries({
    queries: queries.map((query) => ({
      queryKey: [query.queryKey],
      queryFn: async () => {
        const response = await fetcher(query.endpoint, query.params);
        return response.data;
      },
    })),
  });

  return queryResults;
};