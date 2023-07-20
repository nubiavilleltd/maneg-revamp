import EventCard from "../../components/EventCard/EventCard";
import arrow from "../../assets/arrow-down.png";
import "./event.scss";

function Event() {
  return (
    <div className="eventContainer">
      {/* Nav component */}
      <div>
        <div className="eventHeader">
          <div>
            <h4>Latest Events</h4>
          </div>
          <div className="filterSection">
            <p>Filter By</p>
            <div>
              <img src={arrow} alt="img" />
            </div>
          </div>
        </div>
        <div className="eventCardContainer">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      {/* footer component */}
    </div>
  );
}

export default Event;
