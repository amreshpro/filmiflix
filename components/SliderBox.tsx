import React from "react";
import Carousel from "./Carousel";

export default function SliderBox({
  data,
  title,
}: {
  data: any;
  title: string;
}) {
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <h1 className="text-xl text-center w-fit px-4  py-4 outline">{title}</h1>
      
      <Carousel data={data} />
    </div>
  );
}
