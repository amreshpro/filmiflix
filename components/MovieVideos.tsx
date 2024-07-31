import React from "react";
import VideoBox from "./VideoBox";

export default function MovieVideos({
  data,
}: {
  data: { key: string; name: string }[];
}) {
  if (data.length == 0) return "";

  return (
    <div>
      <div className="related-videos mt-4">
        <h1 className="text-2xl mb-4 px-2 ">Movie Related Videos</h1>
        <div className="official-videos flex justify-start sm:justify-center sm:gap-2 gap-4 flex-wrap">
          {data
            .slice(0, 5)
            .map((video: { key: string; name: string }, i: number) => {
              return (
                <VideoBox
                  {...video}
                  name={video.name}
                  videoKey={video.key}
                  key={"videoboxmapkey" + i}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
