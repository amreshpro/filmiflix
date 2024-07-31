
export default function Shimmer() {
  return (
    <div className='flex gap-4 justify-center flex-wrap px-4'>
{
  Array(10).fill("nothing").map((_,i)=>{
    return <SkeltonCard key={i}/>
  })
}
    </div>
  );
}


import React from 'react'

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
  )
}
