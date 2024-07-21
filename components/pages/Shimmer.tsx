import React from "react";

export default function Shimmer() {
  return <div className=" flex justify-center flex-wrap gap-4 ">
{/* {
    Array(10)?.map((_,i:number)=>{
        return <MovieSkelton key={"shimmerskelton"+i}/>
    })
} */}

<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>
<MovieSkelton/>

  </div>;
}

const MovieSkelton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-2  ">
     <div className="h-72 w-60  bg-gray-100 rounded-lg">
     </div>
     <div className="content w-60 bg-gray-200 rounded-lg"></div>
    </div>
  );
};
