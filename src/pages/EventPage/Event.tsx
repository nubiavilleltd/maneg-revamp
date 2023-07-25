import EventCard from '../../components/EventCard/EventCard';
import arrow from '/assets/arrow-down.png';
import './event.scss';
import eventData from './eventData';

function Event() {
    return (
        <div className='eventContainer'>
            {/* Nav component */}
            <div>
                <div className='eventHeader'>
                    <div>
                        <h4>Latest Events</h4>
                    </div>
                    <div className='filterSection'>
                        <p>Filter By</p>
                        <div>
                            <img src={arrow} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='eventCardContainer'>
                    {eventData.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            time={event.time}
                            location={event.location}
                            eventId={event.id}
                            imgSrc={event.imgSrc}
                            imgSrc2={event.imgSrc2}
                        />
                    ))}
                </div>
            </div>
            {/* footer component */}
        </div>
    );
}

export default Event;
