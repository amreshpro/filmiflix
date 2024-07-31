import React from "react";

export default function Shimmer() {
  return (
    <div className=" flex flex-col justify-center  gap-4 ">
      <div className="flex justify-center gap-4">
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
      </div>
      <div className="flex justify-center gap-4">
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
      </div>
      <div className="flex justify-center gap-4">
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
        <MovieSkelton />
      </div>
    </div>
  );
}

const MovieSkelton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-2  ">
      <div className="h-72 w-60  bg-secondary rounded-lg"></div>
      <div className="content w-60 bg-secondary rounded-lg"></div>
    </div>
  );
};
