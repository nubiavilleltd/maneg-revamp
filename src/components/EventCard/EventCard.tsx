import eventImg from "../../assets/event-img.png";
import "./eventCard.scss";

function EventCard() {
  return (
    <>
      <main className="eventCard">
        <img src={eventImg} alt="img" />
        <div className="cardInfo">
          <h4>Food Hunt Lagos</h4>
          <a href="#">Click to read more</a>
        </div>
      </main>
    </>
  );
}

export default EventCard;
