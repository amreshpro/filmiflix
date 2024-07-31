import React from "react";
import CastProfile from "./CastProfile";

type CastPropType = {
  character: string;
  name: string;
  profile_path: string;
};

export default function StarCast({ data = [] }: { data: CastPropType[] }) {
  if (data.length==0) return "";
  return (
    <div className="casting mt-4 px-2  w-full">
     <h1 className="text-2xl mb-4 px-2 ">Star Cast</h1>
      <div className="cast flex sm:justify-center gap-8 sm:gap-4  flex-wrap">
        {data?.slice(0, 5).map((cast: CastPropType, index: number) => {
          return  cast.profile_path && <CastProfile key={"castkey" + index} {...cast} />;
        })}
      </div>
    </div>
  );
}
