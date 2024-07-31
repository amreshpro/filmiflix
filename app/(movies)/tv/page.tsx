"use client";
import Loading from "@/app/loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import fetchData from "@/lib/fetchData";
import Movie from "@/components/MovieCard";
import Shimmer from "./Shimmer";

export default function TVSeries() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tv"],
    queryFn: async () => {
      return fetchData("/discover/tv");
    },
  });

  if (isLoading) return <Shimmer />;
  if (error) return <h1>{error.message}</h1>;

 
  return (
    <div className="flex gap-4 justify-center flex-wrap px-4">
      <h1 className="text-xl px-4  py-4 outline">TV Series</h1>
      <div className="movies flex gap-8  justify-center flex-wrap py-8 ">
        {data?.data?.results?.map((tv: any) => {
          return (
            <Link href={`/tv/${tv.id}`} key={tv.id}>
              <Movie {...tv} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
