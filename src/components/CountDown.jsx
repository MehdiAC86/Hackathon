import { useState, useEffect } from "react";
import "../assets/Style/countDown.css";

function CountDown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("December 25, 2023 00:00:00").getTime();
      const today = new Date().getTime();

      const timeDiff = endDate - today;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
    };

    setInterval(countdown, 1000);
  }, []);

  return (
    <>
      <div className="countdown">
        <div>
          <h1 className="counter">{days}</h1>
          <h2 className="counter">Days</h2>
        </div>
        <div>
          <h1 className="counter">{hours}</h1>
          <h2 className="counter">Hours</h2>
        </div>
        <div>
          <h1 className="counter">{minutes}</h1>
          <h2 className="counter">Minutes</h2>
        </div>
        <div>
          <h1 className="counter">{seconds}</h1>
          <h2 className="counter">Seconds</h2>
        </div>
      </div>
    </>
  );
}

export default CountDown;
