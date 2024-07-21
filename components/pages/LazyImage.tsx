import { useEffect, useState } from "react"

const placeholderImage='/movie-placeholder.jpg'

type ImageTypes={
    src:string,
    alt:string,
    className:string,
    width?:number,
    heigth?:number,
}

export default function LazyImage({src,alt="image-poster",className}:ImageTypes) {
 
 const [imgSrc, setImgSrc] = useState(placeholderImage)

useEffect(()=>{
const img = new Image();
img.src=src
img.onload=()=>{
    setImgSrc(src)
}
},[src])

    return (
    <img
    src={imgSrc}
    alt={alt}
    className={className}
 
    />
  )
}