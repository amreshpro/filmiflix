"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

import Movie from "@/components/MovieCard";
import Shimmer from "./Shimmer";
import Loader from "@/components/Loader";
import fetcher from "@/lib/fetcher";



async function movieFetcher({ pageParam = 1 }) {
  const response = fetcher("/discover/tv", { page: pageParam }).then((res) => {
    return res.data || res;
  });

  return response;
}

export default function Movies() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery({
      queryKey: ["tv"],
      queryFn: movieFetcher,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    });

  if (isLoading) return <Shimmer />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-wrap px-4 my-2">
      <h1 className="text-xl w-fit px-4  py-4 outline">Movies</h1>
      <div className="movies flex gap-8 justify-center flex-wrap  py-8">
        {data?.pages?.map((movieItem: any) => {
          return movieItem.results.map((tv: any) => {
            return (
              <Link href={`/tv/${tv.id}`} key={tv.id}>
                <Movie {...tv} />
              </Link>
            );
          });
        })}
      </div>
      {isFetchingNextPage ? (
        <Loader />
      ) : (
        <button
          className="btn bg-slate-700 px-4 py-2 rounded-lg my-4"
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </div>
  );
}
