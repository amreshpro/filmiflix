import dayjs from "dayjs";
import LazyImage from "@/components/LazyImage";
import Rating from "@/components/Rating";
import { MOVIE_GENRES } from "@/constants/GENRES";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

type MovieCardPropType = {
  adult?: boolean;
  original_title?: string;
  title?: string;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  name?: string;
  vote_average?: number;
};

export default function Movie(props: MovieCardPropType) {
  const {
    adult = false,
    original_title,
    title,
    poster_path = "",
    release_date,
    first_air_date,
    genre_ids = [],
    name,
    vote_average = 0,
  } = props;

  // Determine the movie title
  const movieTitle = original_title || title || name || "Unknown Title";

  // Determine the release date
  const movieReleaseDate = release_date || first_air_date || "";

  // Format the date
  const formattedDate = dayjs(movieReleaseDate).isValid()
    ? dayjs(movieReleaseDate).format("MMM D, YYYY")
    : "Unknown Date";

  // Determine the genres
  const genres = genre_ids.map((id) =>
    MOVIE_GENRES.find((genre) => genre.id === id)
  );

  return (
    <div className="relative w-60 h-[400px] bg-secondary rounded-lg p-2 my-8 overflow-hidden shadow-lg">
      <LazyImage
        src={`${IMAGE_BASE_URL}/${poster_path}`}
        alt={`${movieTitle} Poster`}
        className="h-72 w-full rounded-xl"
        width={100}
        height={288}
      />
      <div className="content px-2 py-2 ">
        <h1 className="text-base">{movieTitle.split(" ").slice(0,5).join(" ")}</h1>
        <p className="text-sm">{formattedDate}</p>

        {vote_average > 0 && (
          <div className="rating absolute top-4">
            <Rating rating={vote_average} />
          </div>
        )}

        {adult && (
          <div className="absolute top-2 left-2 text-red-500 font-bold">
            18+
          </div>
        )}

        <div className="genres-list my-1  flex justify-start items-start flex-wrap gap-1">
          {genres.slice(0,3)?.map((genre, i) => (
            genre && (
              <span
                className="text-[10px] bg-black bg-opacity-50 text-white rounded-xl px-2 py-1"
                key={i}
              >
                {genre.name}
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
