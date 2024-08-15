import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
  return (
    <div className='text-4xl'>
      <AiOutlineLoading3Quarters className='animate-spin'/>
    </div>
  )
}

