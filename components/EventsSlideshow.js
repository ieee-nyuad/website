import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import { EventsList } from "./EventsList.js";

import styles from "./EventsSlideshow.module.css";
import "react-slideshow-image/dist/styles.css";

const EventsSlideshow = () => {
  const slideRef = useRef();
  const [currSlide, setCurrSlide] = useState(0);

  const gotoslide = (i) => {
    setCurrSlide(i);
    slideRef.current.goTo(i);
  };

  const slidesList = EventsList.filter((event) => {
    let eventMonth = -1;
    switch (event.month) {
      case "January":
        eventMonth = 0;
        break;
      case "February":
        eventMonth = 1;
        break;
      case "March":
        eventMonth = 2;
        break;
      case "April":
        eventMonth = 3;
        break;
      case "May":
        eventMonth = 4;
        break;
      case "June":
        eventMonth = 5;
        break;
      case "July":
        eventMonth = 6;
        break;
      case "August":
        eventMonth = 7;
        break;
      case "September":
        eventMonth = 8;
        break;
      case "October":
        eventMonth = 9;
        break;
      case "November":
        eventMonth = 10;
        break;
      case "December":
        eventMonth = 11;
        break;
    }
    const eventDate = new Date(event.year, eventMonth, event.day);
    return new Date(Date.now() - 86400000) < eventDate;
  }).map((event, index) => (
    <div className={styles.slide_overlay} key={index}>
      <div className={styles.slide}>
        <div className={styles.event_text}>
          <h3 className={styles.event_title}>{event.title}</h3>
          {event.month + " "}
          {event.day + ", "}
          {event.year}
          <br /> <br />
          <div className={styles.event_presentor}>{event.presentor}</div>
          {event.uni}
          <br /> <br />
          <a className={styles.eventlink} href={event.eventlink} target="blank">
            More Details...
          </a>
        </div>
        <img className={styles.event_img} src={event.imagelink} />
      </div>
    </div>
  ));

  const indicators = slidesList.map((_, index) => (
    <button
      className={styles.indicator}
      onClick={() => gotoslide(index)}
      key={index}
      style={{
        backgroundColor: currSlide == index && "rgba(255, 255, 255, 1)",
        color: currSlide == index && "#000",
        border: currSlide == index && "2px #000 solid"
      }}
    >
      {index + 1}
    </button>
  ));

  const slideProperties = {
    ref: slideRef,
    autoplay: false,
    transitionDuration: 250,
    onChange: (previous, next) => {
      setCurrSlide(next);
    }
  };

  return (
    <div className={styles.container}>
      <h2>UPCOMING SEMINARS</h2>
      <Slide {...slideProperties}>{slidesList}</Slide>
      <ul className={styles.indicators}>{indicators}</ul>
    </div>
  );
};

export default EventsSlideshow;
