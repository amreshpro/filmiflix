"use client";

import HeroShimmer from "./HeroShimmer";
import useMovieDetails from "@/lib/useMovieDetails";
import SliderBox from "@/components/SliderBox";
import { useMemo } from "react";

export default function Hero() {
  const queries = useMemo(
    () => [
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
    ],
    []
  );

  const MovieResults = useMovieDetails(queries);

  const MovieDataDay = MovieResults[0]?.data?.results;
  const TVDataDay = MovieResults[1]?.data?.results;
  const MovieDataWeek = MovieResults[2]?.data?.results;
  const TVDataWeek = MovieResults[3]?.data?.results;

  const isLoading =
    MovieResults.some((result) => result.isLoading);

  const isError =
    MovieResults.some((result) => result.isError);

  if (isLoading) return <HeroShimmer />;
  if (isError) return <div>Error loading data...</div>;

  return (
    <div className="hero">
      <SliderBox data={MovieDataDay} title="Movie of the Day" />
      <SliderBox data={TVDataDay} title="TV of the Day" />
      <SliderBox data={MovieDataWeek} title="Movie of the Week" />
      <SliderBox data={TVDataWeek} title="TV of the Week" />
    </div>
  );
}
