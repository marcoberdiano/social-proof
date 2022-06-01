import {ReactComponent as Start} from '../images/icon-star.svg';

const Rating = ({text}) => {
    return ( 
        <div className="rating-container">
            <div>
                <Start/> <Start/> <Start/> <Start/> <Start/>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
     );
}
 
export default Rating;