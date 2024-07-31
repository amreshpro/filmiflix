/* eslint-disable @next/next/no-img-element */
import React from 'react'
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

export default function ImagePoster({poster_path=''}) {
  return (
    <div className="movie-details-image sm:w-full">
    {/* image-poster */}
    <img
      src={`${IMAGE_BASE_URL}/${poster_path}`}
      alt="movie poster"
      className="w-80 sm:w-full rounded-lg"
    />
  </div>
  )
}
