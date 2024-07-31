/* eslint-disable @next/next/no-img-element */
"use client";

import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import fetchData from "@/lib/fetchData";
import KeyValueText from "@/components/KeyValueText";
import MovieVideos from "@/components/MovieVideos";
import StarCast from "@/components/StarCast";
import ImagePoster from "@/components/ImagePoster";
import Loading from "@/app/loading";


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



type MovieDetailsType = {
  movies: {};
  credits: {
    cast: [];
    crew: [];
  };
  videos: [];
};

export default function DetailsOfTV() {
  const router = useParams();
  const [loading, setLoading] = useState(false);
  const [allMovieDetails, setAllMovieDetails] = useState<MovieDetailsType>({
    movies: {},
    credits: {
      cast: [],
      crew: [],
    },
    videos: [],
  });

  useEffect(() => {
    setLoading(true);
    fetchData(`/movie/${router?.movieId}`).then((data) => {
      setAllMovieDetails((prev) => {
        return { ...prev, movies: data.data };
      });
      setLoading(false);
    });
    fetchData(`/movie/${router?.movieId}/credits`).then((data) => {
      setAllMovieDetails((prev) => {
        prev.credits.cast = data.data.cast;
        prev.credits.crew = data.data.crew;
        return prev;
      });
      setLoading(false);
    });
    fetchData(`/movie/${router?.movieId}/videos`).then((data) => {
      setAllMovieDetails((prev) => {
        return { ...prev, videos: data.data.results };
      });
      setLoading(false);
    });
  }, [router?.movieId]);

  if (loading) return <Loading />;

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
  }: MoviePropTypes = allMovieDetails.movies;

  const WriterNameArray = allMovieDetails?.credits?.crew?.filter(
    (item: any) => {
      return item.known_for_department == "Writing";
    }
  );

  const DirectorNameArray = allMovieDetails?.credits?.crew?.filter(
    (item: any) => {
      return item.known_for_department == "Directing";
    }
  );

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
      <StarCast data={allMovieDetails.credits?.cast} />
      {/* movie releated videos */}
      <MovieVideos data={allMovieDetails?.videos} />
    </div>
  );
}
