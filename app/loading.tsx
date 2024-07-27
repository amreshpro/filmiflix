import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className=' w-screen h-screen text-3xl flex justify-center items-center' >
      <AiOutlineLoading3Quarters className='animate-spin'/>
    </div>
  )
}

export default Loading