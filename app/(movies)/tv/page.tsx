"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

import Movie from "@/components/MovieCard";
import Shimmer from "./Shimmer";
import Loader from "@/components/Loader";
import fetcher from "@/lib/fetcher";

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  first_air_date: string;
  genre_ids: number[];
  vote_average: number;
}

interface TVShowResponse {
  page: number;
  total_pages: number;
  results: TVShow[];
}
type FetchTVShowsParams = {
  pageParam?: number; // Optional parameter for pagination
};



// Fetch function
const fetchTVShows = async ({ pageParam = 1 }:FetchTVShowsParams): Promise<TVShowResponse> => {
  try {
    const response = await fetcher("/discover/tv", { page: pageParam });
    return response.data || response;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw error; // Make sure to throw error so React Query can handle it
  }
};

export default function TVShows() {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
  } = useInfiniteQuery<TVShowResponse, Error>({
    queryKey: ["tv"],
    queryFn: fetchTVShows,
    initialPageParam:1,
    getNextPageParam: (lastPage):number | undefined => {
      // Check if there are more pages
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined; // No more pages
    },
  });

  if (isLoading) return <Shimmer />;
  if (error) return <div className="text-red-500">{(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-wrap px-4 my-2">
      <h1 className="text-xl w-fit px-4 py-4 outline">TV Series</h1>
      <div className="movies flex gap-8 justify-center flex-wrap py-8">
        {data?.pages.flatMap((page:any) =>
          page.results.map((tv:TVShow) => (
            <Link href={`/tv/${tv.id}`} key={tv.id}>
              <Movie {...tv} />
            </Link>
          ))
        )}
      </div>
      {isFetchingNextPage ? (
        <Loader />
      ) : hasNextPage ? (
        <button
          className="btn bg-slate-700 px-4 py-2 rounded-lg my-4"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          Load More
        </button>
      ) : (
        <div className="text-gray-500 my-4">No more TV shows to load.</div>
      )}
    </div>
  );
}
