import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className=' w-screen h-screen text-3xl flex justify-center items-center' >
      <AiOutlineLoading3Quarters className='animate-spin'/>
    </div>
  )
}

