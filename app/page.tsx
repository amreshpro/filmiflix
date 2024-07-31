"use client"
import Carousel from "@/components/Carousel";
import Shimmer from "../components/Shimmer";
import { useFetch } from "@/lib/useFetch"


export default function Hero() {
  const { data:movieDataDay, loading:loadingMovie} =
    useFetch("/trending/movie/day");
    const { data : TVData, loading:loadingTV} =
    useFetch("/trending/tv/day");

    const { data:movieDataWeek, loading:loadingMovieWeek} =
    useFetch("/trending/movie/week");

    const { data:TVDataWeek, loading:loadingTVWeek} =
    useFetch("/trending/tv/week");
    if(loadingMovie || loadingTV||loadingMovieWeek || loadingTVWeek) return <Shimmer/>

  return <div className="hero mt-5">
    <h1 className="px-2 mx-2 text-xl mb-5 mt-2 font-bold ">Movie of the Day</h1>
    <div className="movie-day">
      <Carousel data={movieDataDay} />
    </div>

    <h1 className="mx-2 px-2 text-xl mb-5 font-bold">TV Show of the Day</h1>
    <div className="tv-day">
      <Carousel data={TVData} />
    </div>

    <h1 className="mx-2 px-2 text-xl mb-5 font-bold">Movie of the Week</h1>
    <div className="tv-week">
      <Carousel data={movieDataWeek} />
    </div> 
      <h1 className="mx-2 px-2 text-xl mb-5 font-bold">TV Show of the Week</h1>
    <div className="tv-week">
      <Carousel data={TVDataWeek} />
    </div>


  </div>
}