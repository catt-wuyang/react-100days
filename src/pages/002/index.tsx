import "./style.css";
import React, { useState, useEffect, useRef } from "react";

const CountDown = ({ maxCount = 10 }) => {
  const [isRuning, setIsRuning] = useState(false);
  const [second, setSecond] = useState(maxCount);

  const timer = useRef(0);

  useEffect(() => {
    if (isRuning) {
      timer.current = window.setInterval(() => {
        if (second === 1) {
          setIsRuning(false);
          clearInterval(timer.current);
        }
        setSecond((preSecond) => preSecond - 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isRuning, second]);

  function reset() {
    setSecond(maxCount);
    setIsRuning(false);
  }

  return (
    <div className="mw-640">
      <h2 className="countdown-h2">倒计时: {second}</h2>
      <button className="countdown-btn" onClick={() => setIsRuning(!isRuning)}>
        {isRuning ? "pause" : "start"}
      </button>
      {!isRuning ? (
        <button className="countdown-btn" onClick={reset}>
          reset
        </button>
      ) : null}
    </div>
  );
};

export default CountDown;
