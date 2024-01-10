import { useEffect, useState } from "react";
import "./Clock.css";
import moment from "moment";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className="block">
      <div className="hour">{currentTime.format("HH:mm:ss")}</div>
    </div>
  );
};

export default Clock;
