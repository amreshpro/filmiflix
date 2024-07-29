"use client";
import Loading from "@/app/loading";
import { fetchMovie } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Movie from "./Movie";

export default function Movies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie"],
    queryFn:  async() => {
     return fetchMovie("/discover/movie");
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;
  
  console.log(data?.results);
  return (
    <div>
      {/* <h1>Movies</h1> */}
      <div className="movies flex gap-8 justify-center flex-wrap  py-8">
        {
          data?.results.map((movie: any,i:number)=>{
            return <Movie  {...movie} key={i}/>
          })
        }

      </div>
    </div>
  );
}
