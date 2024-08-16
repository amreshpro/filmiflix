"use client";
import Link from "next/link";
import { useRef } from "react";
import MovieCard from "./MovieCard";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";

type MovieCardPropType = {
  id: number;
  adult: boolean;
  original_title: string;
  title: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  genre_ids: number[];
  name: string;
  vote_average: number;
  media_type: string;
};

type CarouselPropType = {
  data: MovieCardPropType[];
};

export default function Carousel({ data }: CarouselPropType) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={scrollLeft}
        className="text-2xl absolute left-4 top-1/2 transform -translate-y-1/2 z-50"
        aria-label="Scroll Left"
      >
        <IoArrowBackCircle className="text-4xl text-green-500 bg-white rounded-full" />
      </button>

      <button
        onClick={scrollRight}
        className="text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
        aria-label="Scroll Right"
      >
        <IoArrowForwardCircleSharp className="text-4xl text-green-500 bg-white rounded-full" />
      </button>

      <div
        ref={containerRef}
        className="w-screen flex gap-4 overflow-x-scroll no-scrollbar snap-mandatory snap-x px-4"
        tabIndex={0}
      >
        {data?.map((item) => (
          <Link href={`/${item?.media_type}/${item?.id}`} key={item?.id}>
            <MovieCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
