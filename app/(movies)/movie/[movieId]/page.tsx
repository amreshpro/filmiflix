/* eslint-disable @next/next/no-img-element */
"use client";

import dayjs from "dayjs";
import { useParams } from "next/navigation";
import KeyValueText from "@/components/KeyValueText";
import StarCast from "@/components/StarCast";
import ImagePoster from "@/components/ImagePoster";
import useMovieDetails from "@/lib/useMovieDetails";
import Loading from "@/app/loading";
import MovieVideos from "@/components/MovieVideos";

//types
type MoviePropTypes = {
  poster_path?: string;
  title?: string;
  genres?: { id: number; name: string }[];
  overview?: string;
  vote_average?: number;
  tagline?: string;
  release_date?: string;
  status?: string;
  runtime?: number;
};

export default function DetailsOfMovies() {
  const { movieId } = useParams();
  const queries = [
    {
      queryKey: "movieData",
      endpoint: `/movie/${movieId}`,
      params: { page: 1 },
    },
    {
      queryKey: "movieCredits",
      endpoint: `/movie/${movieId}/credits`,
      params: { page: 1 },
    },
    {
      queryKey: "movieVideos",
      endpoint: `/movie/${movieId}/videos`,
      params: { page: 1 },
    },
  ];
  const results = useMovieDetails(queries);

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  const data = results.map((result) => result.data);
  const error = results.map((result) => result.error);

  if (isLoading) return <Loading />;
  if (isError) {
    return <div>Error: {error.toString()}</div>;
  }

  const MovieData = data[0];
  const MovieCredit = data[1];
  const MovieVideosList = data[2].results ?? [];

  const {
    poster_path = "",
    title,
    genres,
    overview,
    vote_average,
    tagline,
    release_date,
    status,
    runtime,
  }: MoviePropTypes = MovieData;

  const WriterNameArray = MovieCredit?.crew?.filter((item: any) => {
    return item.known_for_department == "Writing";
  });

  const DirectorNameArray = MovieCredit?.crew?.filter((item: any) => {
    return item.known_for_department == "Directing";
  });

  return (
    <div className="container mt-4 px-4 ">
      <div className="details flex justify-evenly gap-2 sm:flex-wrap w-full">
        <ImagePoster poster_path={poster_path} />
        <div className="content w-1/2 sm:w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          {/* tagline */}
          <h2 className="text-xl">{tagline}</h2>

          <p className="mt-2">{overview}</p>

          {/* status */}
          <div className="mt-2 status flex flex-col sm:flex-wrap gap-3 ">
            {/* status */}
            <KeyValueText title="Status" value={status} />

            {/* release date */}
            <KeyValueText
              title="Release Date"
              value={dayjs(release_date).format("MMM D, YYYY") ?? "unknown"}
            />

            {/* runtime */}
            <KeyValueText
              title="Runtime"
              value={`     
                ${Math.floor(runtime! / 60)}h 
                ${runtime! % 60}m`}
            />

            {/* director */}
            <KeyValueText
              title="Directors"
              value={DirectorNameArray?.slice(0, 5)
                .map((item: { name: string }) => {
                  return item.name;
                })
                .join(", ")}
            />

            {/* writer */}
            <KeyValueText
              title="Writers"
              value={WriterNameArray?.slice(0, 5)
                .map((item: any) => {
                  return item?.name ?? "unknown";
                })
                ?.join(", ")}
            />
          </div>
        </div>
      </div>

      {/* cast */}
      <StarCast data={MovieCredit?.cast} />
      {/* movie releated videos */}
      <MovieVideos data={MovieVideosList} />
    </div>
  );
}
