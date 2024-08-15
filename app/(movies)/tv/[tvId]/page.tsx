"use client";

import React from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

import Loading from "@/app/loading";
import ImagePoster from "@/components/ImagePoster";
import KeyValueText from "@/components/KeyValueText";
import MovieVideos from "@/components/MovieVideos";
import StarCast from "@/components/StarCast";
import useMovieDetails from "@/lib/useMovieDetails";

type MoviePropTypes = {
  poster_path?: string;
  title?: string;
  genres?: { id: number; name: string }[];
  overview?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  vote_average?: number;
  tagline?: string;
  release_date?: string;
  status?: string;
  runtime?: number;
};

const TVShowsComponent: React.FC = () => {
  const { tvId } = useParams();
  const queries = [
    { queryKey: "tvData", endpoint: `/tv/${tvId}`, params: { page: 1 } },
    {
      queryKey: "tvCredits",
      endpoint: `/tv/${tvId}/credits`,
      params: { page: 1 },
    },
    {
      queryKey: "tvVideos",
      endpoint: `/tv/${tvId}/videos`,
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


  const TvData = data[0];
  const TvCredit = data[1];
  const TvVideos = data[2].results ?? [];



  const {
    poster_path,
    title,
    genres,
    overview,
    number_of_episodes,
    number_of_seasons,
    vote_average,
    tagline,
    release_date,
    status,
    runtime,
  }: MoviePropTypes = TvData;

  const WriterNameArray = TvCredit?.crew?.filter((item: any) => {
    return item.known_for_department == "Writing";
  });

  const DirectorNameArray = TvCredit?.crew?.filter((item: any) => {
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

          <div className="mt-2 status flex flex-col sm:flex-wrap gap-3 ">
            {/* status */}
            <KeyValueText title="Status" value={status} />

            {/* release date */}
            <KeyValueText
              title="Release Date"
              value={dayjs(release_date).format("MMM D, YYYY") ?? "unknown"}
            />
            {/* total season */}
            <KeyValueText title="Total Season" value={number_of_seasons} />

            {/* total episode */}
            <KeyValueText title="Total Episodes" value={number_of_episodes} />
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
      <StarCast data={TvCredit?.cast} />
      {/* movie releated videos */}
      <MovieVideos data={TvVideos} />
      </div>
        );
};

export default TVShowsComponent;
