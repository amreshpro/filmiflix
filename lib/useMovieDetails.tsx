"use client"

import { useQueries } from "@tanstack/react-query";
import fetcher from "./fetcher";

interface TVQuery {
  queryKey: string;
  endpoint: string;
  params?: Record<string, any>;
}

export default function useMovieDetails(queries: TVQuery[])  {
  const queryResults = useQueries({
    queries: queries.map((query) => ({
      queryKey: [query.queryKey],
      queryFn: async () => {
        const response = await fetcher(query.endpoint, query.params);
        console.log("response",response)
        return response;
      },
    })),
  });

  return queryResults;
};
