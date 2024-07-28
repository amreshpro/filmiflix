import Image from "next/image"
import { useEffect, useState } from "react"

const placeholderImage='/movie-placeholder.jpg'

type ImageTypes={
    src:string,
    alt:string,
    className:string,
    width?:number,
    heigth?:number,
}

export default function LazyImage({src='',alt="image-poster",className=''}:ImageTypes) {
 
 const [imgSrc, setImgSrc] = useState(placeholderImage)

useEffect(()=>{
if(src){
    setImgSrc(src)
}
},[imgSrc, src])

    return (
    <Image
    src={imgSrc}
    alt={alt}
    className={className}
 width={100}
 height={100}
    />
  )
}