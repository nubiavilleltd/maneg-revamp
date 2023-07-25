import {Link} from 'react-router-dom';
import './eventCard.scss';

interface EventCardProps {
    title: string;
    eventId: number;
    imgSrc: string;
}
function EventCard(props: EventCardProps) {
    const {title, eventId, imgSrc} = props;

    return (
        <>
            <Link to={`/event/${eventId}`} style={{textDecoration: 'none'}}>
                <main className='eventCard'>
                    <img src={imgSrc} alt='img' />
                    <div className='cardInfo'>
                        <h4 style={{color: 'black'}}>{title}</h4>
                        <p
                            style={{
                                fontSize: '0.8rem',
                                color: 'black',
                                paddingTop: '0.5em',
                                paddingBottom: '0.5em',
                            }}
                        >
                            Click to read more
                        </p>
                    </div>
                </main>
            </Link>
        </>
    );
}

export default EventCard;
