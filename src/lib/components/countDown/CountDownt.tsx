import react, { useEffect, useState } from "react";
import moment from "moment";
const precisePlugin = require("moment-precise-range-plugin");
// @ts-ignore
const CountDownt = (props) => {
  const [timeEnd, setTimeEnd] = useState({
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
  });
  useEffect(() => {
    let countDown = setInterval(() => {
      // @ts-ignore
      let { timeTillDate } = props;
      const then = moment(timeTillDate, "YYYY-MM-DD h:mm:ss");
      const now = moment().format("YYYY-MM-DD h:mm:ss");
      // @ts-ignore
      const countdown = moment.preciseDiff(now, then, true);
      const day = countdown.days;
      const hours = countdown.hours;
      const minutes = countdown.minutes;
      const seconds =
        countdown.seconds < 10 ? "0" + countdown.seconds : countdown.seconds;
      setTimeEnd({
        day,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => {
      if (countDown) {
        clearInterval(countDown);
      }
    };
  });

  return (
    <div className="countdown">
      <span
        className="js-countdown"
        data-timer="516400"
        data-labels=" Days  , Hour , Mint ,Seco"
      >
        <div aria-hidden="true" className="countdown__timer">
          <span className="countdown__item">
            <span className="countdown__value countdown__value--0 js-countdown__value--0">
              {timeEnd.day}
            </span>
            <span className="countdown__label">:</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--1 js-countdown__value--1">
              {timeEnd.hours}
            </span>
            <span className="countdown__label">:</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--2 js-countdown__value--2">
              {timeEnd.minutes}
            </span>
            <span className="countdown__label">:</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--3 js-countdown__value--3">
              {timeEnd.seconds}
            </span>
            <span className="countdown__label"></span>
          </span>
        </div>
      </span>
    </div>
  );
};
export default CountDownt;
