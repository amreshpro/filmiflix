"use client";
import Loading from "@/app/loading";
import { useQuery } from "@tanstack/react-query";
import Movie from "@/components/MovieCard";
import Link from "next/link";
import fetchData from "@/lib/fetchData";
import Shimmer from "./Shimmer";


export default function Movies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      return fetchData("/discover/movie");
    },
  });

  if (isLoading) return <Shimmer />;
  if (error) return <h1>{error.message}</h1>;


  return (
    <div className="flex gap-4 justify-center flex-wrap px-4">
      <h1 className="text-xl px-4  py-4 outline">Movies</h1>
      <div className="movies flex gap-8 justify-center flex-wrap  py-8">
        {data?.data?.results?.map((movie: any) => {
          return (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <Movie {...movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
