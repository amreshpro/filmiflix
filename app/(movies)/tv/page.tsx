"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import Movie from "@/components/MovieCard";
import Shimmer from "./Shimmer";
import Loader from "@/components/Loader";
import fetcher from "@/lib/fetcher";

// Define TypeScript types (optional)
interface TVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  // Add other relevant fields here
}

interface TVShowResponse {
  page: number;
  total_pages: number;
  results: TVShow[];
}

// Async function to fetch TV shows with infinite scroll
async function movieFetcher({ pageParam = 1 }): Promise<TVShowResponse> {
  const response = await fetcher("/discover/tv", { page: pageParam });
  return response.data || response;
}

export default function TVShows() {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
  } = useInfiniteQuery<TVShowResponse>({
    queryKey: ["tv"],
    queryFn: movieFetcher,
    getNextPageParam: (lastPage) => {
      // Determine the next page to load
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });

  // Handle loading state
  if (isLoading) return <Shimmer />;

  // Handle error state
  if (error) return <h1 className="text-red-500">{(error as Error).message}</h1>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-wrap px-4 my-2">
      <h1 className="text-xl w-fit px-4 py-4 outline">TV Series</h1>
      <div className="movies flex gap-8 justify-center flex-wrap py-8">
        {data?.pages?.flatMap((page) =>
          page?.results.map((tv: TVShow) => (
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
