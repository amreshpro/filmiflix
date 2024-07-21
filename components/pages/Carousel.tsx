"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

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
};

type CarouselPropType = {
  data: MovieCardPropType[];
};

export default function Carousel({ data }: CarouselPropType) {
    const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  return (
    <div className="slider flex px-2">
      <button onClick={scrollLeft} className="text-2xl">
        <FaCircleChevronLeft />
      </button>
      <div
        ref={containerRef}
        className="container flex gap-4  overflow-x-scroll snap-mandatory snap-x px-4  "
      >
        {data?.map((item) => {
          return (
            <Link href={`/movies/${item?.id}`} key={item?.id}>
              <MovieCard {...item} />
            </Link>
          );
        })}
      </div>
      <button onClick={scrollRight} className="text-2xl">
        <FaChevronCircleRight />
      </button>
    </div>
  );
}
