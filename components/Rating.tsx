

type PropsRatingType = {
  rating: number;
//   className: string;
  variant: string;
};

const VARIANT = {
  NEUTRAL: "bg-yellow-500",
  LOW: "bg-red-500",
  HIGH: "bg-green-600",
  BETTER: "bg-blue-500",
  GOOD: "bg-yellow-700",
};

const Rating = (props: PropsRatingType) => {
  const { rating=5, variant='' } = props;
  console.log(rating);

  return (
   
      <div className={`star p-4 h-16 w-16 bg-yellow-300 text-center text-black text-sm font-bold`} >
        <p className=" m-2  text-sm ">{rating.toFixed(1)}</p>
          </div>
  );
};

Rating.VARIANT = VARIANT;
export default Rating;
