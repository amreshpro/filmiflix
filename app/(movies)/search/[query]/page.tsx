"use client";
// import fetchMovies from "@/lib/fetchMovies";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

import Link from "next/link";
import Movie from "@/components/MovieCard";
import fetcher from "@/lib/fetcher";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}

interface MovieResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

export default function SearchList() {
  const router = useParams<{ query: string }>();
  console.log(router);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    error,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["search-key"],
    queryFn: async () => await fetcher(`/search/multi?query=${router.query}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <div className="shimmer flex justify-center items-center text-4xl min-w-screen min-h-screen bg-inherit">
    <Shimmer />
  </div>;
  if (error) return <div className="text-red-500">{error.message}</div>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-wrap px-4 my-2">
      <h1 className="text-xl w-fit px-4 py-4 outline">Your Searched</h1>
      <div className="movies flex gap-8 justify-center flex-wrap py-8">
        {data?.pages?.flatMap((movieItem: MovieResponse) =>
          movieItem.results.map((movie: Movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard {...movie} />
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
        <div className="text-gray-500 my-4">No more movies to load.</div>
      )}
    </div>
  );
}
