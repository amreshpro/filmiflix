"use client";

import SliderBox from "@/components/SliderBox";

const ZERO_FILL_ARRAY = new Array(6).fill(0);

export default function HeroShimmer() {
  return (
    <div className=" hero mt-5 flex flex-col items-center text-center ">
      <SliderBox data={ZERO_FILL_ARRAY} title="Movie of the Day" />
      <SliderBox data={ZERO_FILL_ARRAY} title="TV of the Day" />
      <SliderBox data={ZERO_FILL_ARRAY} title="Movie of the Week" />
      <SliderBox data={ZERO_FILL_ARRAY} title="TV of the Week" />
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
