"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import Shimmer from "./Shimmer";
import Loader from "@/components/Loader";
import fetcher from "@/lib/fetcher";

interface TVShow {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}

interface TVShowsResponse {
  page: number;
  total_pages: number;
  results: TVShow[];
}

async function tvShowFetcher({ pageParam = 1 }): Promise<TVShowsResponse> {
  const response = await fetcher("/discover/tv", { page: pageParam });
  return response.data || response;
}

export default function TVShowsPage() {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv"],
    queryFn: tvShowFetcher,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <Shimmer />;
  if (error) return <div className="text-red-500">{error.message}</div>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-wrap px-4 my-2">
      <h1 className="text-xl w-fit px-4 py-4 outline">TV Shows</h1>
      <div className="movies flex gap-8 justify-center flex-wrap py-8">
        {data?.pages?.flatMap((tvItem: TVShowsResponse) =>
          tvItem.results.map((tv: TVShow) => (
            <Link href={`/tv/${tv.id}`} key={tv.id}>
              <MovieCard {...tv} />
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
        <div className="text-gray-500 my-4">No more TV Shows to load.</div>
      )}
    </div>
  );
}
