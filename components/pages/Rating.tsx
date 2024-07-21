import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type PropsRatingType={
rating:number
}
const Rating = (props:PropsRatingType) => {
    const { rating } = props;
    return (
        <div className="w-12 h-12 bg-white rounded-full font-bold">
            <CircularProgressbar
                value={rating}
                minValue={0}
                maxValue={10}
                text={`${rating?.toFixed(1)}`}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
                    textColor: '#0c296b',
                    textSize: '28px',
                })}
            />
        </div>
    );
};
export default Rating;