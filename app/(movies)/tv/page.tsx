"use client";
import Loading from "@/app/loading";
import { fetchMovie } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import TV from "./TV";

export default function TVSeries() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tv"],
    queryFn:  async() => {
     return fetchMovie("/discover/tv");
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;
  
  console.log(data?.results);
  return (
    <div>
      <h1>Movies</h1>
      <div className="movies flex gap-8  justify-center flex-wrap py-8 ">
        {
          data?.results.map((tv: any,i:number)=>{
            return <TV  {...tv} key={i}/>
          })
        }

      </div>
    </div>
  );
}
