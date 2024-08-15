"use client";
import Carousel from "@/components/Carousel";

import HeroShimmer from "./HeroShimmer";
import useMovieDetails from "@/lib/useMovieDetails";

export default function Hero() {
  const queries = [
    {
      queryKey: "movieDataDay",
      endpoint: `/trending/movie/day`,
      params: { page: 1 },
    },
    {
      queryKey: "TVDataDay",
      endpoint: `/trending/tv/day`,
      params: { page: 1 },
    },
    {
      queryKey: "movieDataWeek",
      endpoint: `/trending/movie/week`,
      params: { page: 1 },
    },
    {
      queryKey: "tvDataWeek",
      endpoint: `/trending/tv/week`,
      params: { page: 1 },
    },
  ];
  const MovieResults = useMovieDetails(queries);


const MovieDataDay =MovieResults[0]?.data?.results
const TVDataDay =MovieResults[1]?.data?.results
const MovieDataWeek =MovieResults[2]?.data?.results
const TVDataWeek =MovieResults[3]?.data?.results

console.log(MovieResults[1].data?.results)


  return (
    <div className="hero my-5 flex flex-col items-center text-center ">
      <h1 className="px-2 mx-2 text-xl mb-5 mt-2 font-bold outline">
        Movie of the Day
      </h1>
      <div className="movie-day">
        <Carousel data={MovieDataDay} />
      </div>

      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline">
        TV Show of the Day
      </h1>
      <div className="tv-day">
        <Carousel data={TVDataDay} />
      </div>

      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline">
        Movie of the Week
      </h1>
      <div className="tv-week">
        <Carousel data={MovieDataWeek} />
      </div>
      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline ">
        TV Show of the Week
      </h1>
      <div className="tv-week">
        <Carousel data={TVDataWeek} />
      </div>
    </div>
  );
}
