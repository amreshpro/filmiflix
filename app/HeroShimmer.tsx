"use client";

const ZERO_FILL_ARRAY = new Array(6).fill(0);



export default function HeroShimmer() {
  return (
    <div className=" hero mt-5 flex flex-col items-center text-center ">
      <h1 className="px-2 mx-2 text-xl mb-5 mt-2 font-bold outline">
        Movie of the Day
      </h1>
      <div className="movie-day container transition-all flex gap-4  overflow-x-scroll no-scrollbar snap-mandatory snap-x px-4 ">
        {ZERO_FILL_ARRAY?.map((item) => {
          return <SkeltonCard key={item.id} />;
        })}
      </div>

      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline">
        TV Show of the Day
      </h1>
      <div className="tv-day container transition-all flex gap-4  overflow-x-scroll no-scrollbar snap-mandatory snap-x px-4">
        {ZERO_FILL_ARRAY?.map((item) => {
          return <SkeltonCard key={item.id} />;
        })}
      </div>

      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline ">
        Movie of the Week
      </h1>
      <div className="tv-week container transition-all flex gap-4  overflow-x-scroll no-scrollbar snap-mandatory snap-x px-4">
        {ZERO_FILL_ARRAY?.map((item) => {
          return <SkeltonCard key={item.id} />;
        })}
      </div>
      <h1 className="mx-2 px-2 text-xl mb-5 font-bold outline">
        TV Show of the Week
      </h1>
      <div className="tv-week container transition-all flex gap-4  overflow-x-scroll no-scrollbar snap-mandatory snap-x px-4">
        {ZERO_FILL_ARRAY?.map((item) => {
          return <SkeltonCard key={item.id} />;
        })}
      </div>
    </div>
  );
}

function SkeltonCard() {
  return (
    <div className="sticky w-60 h-[400px] bg-secondary rounded-lg p-2 px-4 py-4 my-8  overflow-hidden">
      <div className=" h-72 w-full rounded-xl bg-ternary" />
      <div className="content  px-2 py-2">
        <h1 className="font-bold "></h1>
        <p></p>
        <div className="rating absolute top-8 "></div>
      </div>
    </div>
  );
}
