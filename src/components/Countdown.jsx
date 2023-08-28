import { useState, useEffect } from "react";
import { formatDate } from "../assets/functions";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Countdown = () => {
  const { isHomePage, handlePage } = useContext(MyContext);

  const futureDate = new Date(2023, 9, 25);

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = futureDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="countdown-section countdown-section-sign-up">
      <div className="countdown-container">
        <p
          className={`countdown-title ${
            !isHomePage ? "countdown-title-sign-up" : ""
          }`}
        >
          Coming <span>{formatDate(futureDate)}</span>
        </p>
        <div className="countdown-content">
          <div
            className={`countdown-item ${
              !isHomePage ? "countdown-item-sign-up" : ""
            }`}
          >
            <p
              className={`countdown-number ${
                !isHomePage ? "countdown-number-sign-up" : ""
              }`}
            >
              {timeRemaining.days}
            </p>
            <p
              className={`countdown-time ${
                !isHomePage ? "countdown-time-sign-up" : ""
              }`}
            >
              days
            </p>
          </div>
          <div
            className={`countdown-item ${
              !isHomePage ? "countdown-item-sign-up" : ""
            }`}
          >
            <p
              className={`countdown-number ${
                !isHomePage ? "countdown-number-sign-up" : ""
              }`}
            >
              {timeRemaining.hours}
            </p>
            <p
              className={`countdown-time ${
                !isHomePage ? "countdown-time-sign-up" : ""
              }`}
            >
              hours
            </p>
          </div>
          <div
            className={`countdown-item ${
              !isHomePage ? "countdown-item-sign-up" : ""
            }`}
          >
            <p
              className={`countdown-number ${
                !isHomePage ? "countdown-number-sign-up" : ""
              }`}
            >
              {timeRemaining.minutes}
            </p>
            <p
              className={`countdown-time ${
                !isHomePage ? "countdown-time-sign-up" : ""
              }`}
            >
              min
            </p>
          </div>
          <div
            className={`countdown-item ${
              !isHomePage ? "countdown-item-sign-up" : ""
            }`}
          >
            <p
              className={`countdown-number ${
                !isHomePage ? "countdown-number-sign-up" : ""
              }`}
            >
              {timeRemaining.seconds}
            </p>
            <p
              className={`countdown-time ${
                !isHomePage ? "countdown-time-sign-up" : ""
              }`}
            >
              sec
            </p>
          </div>
        </div>
      </div>
      {isHomePage && (
        <button className="btn-one" onClick={() => handlePage(false)}>
          Get Started
        </button>
      )}
    </section>
  );
};
export default Countdown;
