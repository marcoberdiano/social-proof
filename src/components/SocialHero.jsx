import Card from "./Card";
import Rating from "./Rating";
import {data} from '../data/data';
const SocialHero = () => {
    return ( 
        <div className="social-hero-container">

            <div className="row1">
                <div className="social-hero-left">
                    <h1 className="title">10,000+ of our users love our products.</h1>
                    <p className="subtitle">
                        We only provide great products combined with excellent customer service.
                        See what our satisfied customers are saying about our services.
                    </p>
                </div>
                <div className="social-hero-right">
                    <Rating text='Rated 5 Stars in Reviews'/>
                    <div className="rating1"><Rating text='Rated 5 Stars in Report Guru'/></div>
                    <div className="rating2"><Rating text='Rated 5 Stars in BestTech'/></div>
                </div>
            </div>

            <div className="row2">
                {data.map((person, index) =>
                    <div key={index} className={"card"+index}>   
                        <Card avatar={person.avatar} name = {person.name} status = {person.status} comment = {person.comment}/>
                    </div> 
                )}
            </div>
   
        </div>
     );
}
 
export default SocialHero;