/* eslint-disable @next/next/no-img-element */
import LazyImage from "./LazyImage";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

type CastPropType = {
  character:string;
  name:string;
  profile_path:string;
};
const CastProfile = (props:CastPropType) => {
  const { character='Not Known', name='Not Known', profile_path='' } = props;
  const ImageURL = profile_path ? `${IMAGE_BASE_URL+"/"+profile_path}` : "/profile-placeholder.jpg"


  return (
    <div className="w-36 ">
      <img
        src={ImageURL}
        alt="cast profile"
        className="sm:w-24 sm:h-24 w-36 h-36  object-cover rounded-full"
      />
      <h1>{name}</h1>
      <h2 className="text-gray-600">{character}</h2>
    </div>
  );
};
export default CastProfile;