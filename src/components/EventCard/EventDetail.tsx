import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import eventData from '../../pages/EventPage/eventData';
import './eventDetail.scss';
import whiteArrow from '/assets/arrow-right.png';
import blackarrow from '/assets/right-black-arrow.png';

const EventDetail: React.FC = () => {
    // Retrieve the event ID from the URL parameter
    const {eventId} = useParams<{eventId: string | undefined}>();
    const eventIdInt = eventId ? parseInt(eventId, 10) : undefined;

    const event = eventId
        ? eventData.find((event) => event.id === eventIdInt)
        : undefined;

    return (
        <div className='eventDetail'>
            {event ? (
                <div>
                    <div className='eventBanner'>
                        <img src={event.imgSrc3} alt='img' />
                    </div>
                    <div className='detailContainer'>
                        <div className='detailText'>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                        <div className='detailImg'>
                            <div>
                                {' '}
                                <img src={event.imgSrc2} />
                            </div>
                        </div>
                    </div>
                    <div className='timeLocation'>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                        <div className='eventRegister'>
                            <button>
                                REGISTER FOR THE EVENT{' '}
                                <img
                                    className='whiteArrow'
                                    src={whiteArrow}
                                    alt='img'
                                />
                            </button>
                        </div>
                    </div>
                    <Link to='/event' className='eventGallery'>
                        <span>View Event Gallery</span>
                        <img
                            className='blackArrow'
                            src={blackarrow}
                            alt='img'
                        />
                    </Link>
                </div>
            ) : (
                <div className='notFound'>Event not found!</div>
            )}
        </div>
    );
};

export default EventDetail;
