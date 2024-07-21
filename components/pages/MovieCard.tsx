import { MOVIE_GENRES } from "@/constants/GENRES";
import LazyImage from "./LazyImage";
import Rating from "./Rating";
import dayjs from "dayjs";


const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

type MovieCardPropType = {
  adult: boolean;
  original_title: string;
  title: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  genre_ids: number[];
  name: string;
  vote_average: number;
};

export default function MovieCard(props: MovieCardPropType) {
  const {
    adult,
    original_title,
    title,
    poster_path,
    release_date,
    first_air_date,
    genre_ids,
    name,
    vote_average,
  } = props;

  return (
    <div className="sticky w-60  overflow-hidden">
      <LazyImage
        src={`${IMAGE_BASE_URL}/${poster_path}`}
        alt="Movie Poster"
        className=" h-72 w-full rounded-xl"
        width={100}
        heigth={288}
      />
      <div className="content  px-2 py-2">
        <h1 className="font-bold ">{original_title ?? title ?? name}</h1>
        <p>{dayjs(release_date || first_air_date).format("MMM D, YYYY")}</p>

        <div className="rating absolute top-8 ">
          {vote_average && <Rating rating={vote_average} />}
        </div>
        <h1 className="absolute text-red-500 font-bold ">
          {adult ? "18+" : ""}
        </h1>

        <div className="genres-list absolute top-8 right-2">
          {genre_ids?.map((_, i) => {
            if (genre_ids[i] === MOVIE_GENRES[i].id)
              return (
                <h2
                  className=" w-fit m-1 text-sm bg-black bg-opacity-50 text-white rounded-xl px-1 py-0.5"
                  key={i}
                >
                  {MOVIE_GENRES[i]?.name}
                </h2>
              );
          })}
        </div>
      </div>
    </div>
  );
}
