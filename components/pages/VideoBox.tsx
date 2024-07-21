import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player/youtube";

export default function VideoBox({videoKey,name}:{videoKey:string,name:string}) {
 

  const [isPopupShow, setIsPopupShow] = useState(false);
  return (
    <div className="video-container">
      <div className="video-box  w-60 h-60 ">
        <div
          onClick={() => setIsPopupShow(true)}
          className="video-thumbnail rounded-xl overflow-hidden relative border "
        >
          <img
            src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}
            alt="thumbnail"
            className="w-full h-full"
          />

          <button className="absolute top-10 right-24 ">
            <FaPlay className="text-5xl text-[#24a5fc]" />
          </button>
        </div>
        <h1 className="px-1 ">{name}</h1>
      </div>

      {isPopupShow && (
        <div className="z-50 flex flex-col justify-center items-center fixed w-full h-96 left-1 bottom-4 ">
          <button
            className="absolute left-40 -top-10 "
            onClick={() => setIsPopupShow(false)}
          >
            <IoClose className="bg-[#e50914] text-4xl  text-white" />
          </button>
          <div className="player w-[70vw] h-[70vh]  sm:w-full  sm:h-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}
