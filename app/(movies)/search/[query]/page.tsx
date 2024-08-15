"use client";
// import fetchMovies from "@/lib/fetchMovies";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

import Link from "next/link";
import Movie from "@/components/MovieCard";
import fetcher from "@/lib/fetcher";

export default function SearchList() {
  const router = useParams<{ query: string }>();
  console.log(router);
  const [searchText, setSearchText] = useState(router?.query);
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchHandler = () => {
    console.log(searchText);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("value: " + searchText);
      async function getSearchedData() {
        setIsLoading(true);
        const res = await fetcher(`/search/multi?query=${searchText}`);
        setIsLoading(false);
        return res.data;
      }

      getSearchedData().then((res) => {
        setSearchedData(res?.results);
        console.log(res);
      });
    }, 700);

    return () => clearTimeout(timer);
  }, [searchText]);

  if (isLoading) return <Shimmer />;
  if (!router?.query) return <h1>Not found anything</h1>;

  return (
    <div>
      {router?.query && (
        <h1 className="mx-2 px-2 mt-5  text-lg font-bold">
          You searched for &quot;{router?.query.split("%20").join(" ")}&quot;
        </h1>
      )}

      <div className="container flex flex-wrap gap-6 px-2 justify-center my-4 ">
        {searchedData?.length == 0 ? (
          <h1 className="text-xl">No Results Found</h1>
        ) : (
          searchedData?.map((movie: any) => {
            return (
              <Link href={`/${movie?.media_type}/${movie.id}`} key={movie.id}>
                <Movie {...movie} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
