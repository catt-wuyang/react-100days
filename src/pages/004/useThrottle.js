import React, { useRef } from "react";

export default function useThrottle(fn, delay) {
  const timer = useRef(null);

  return (...args) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = null;
        fn.call(this, ...args);
      }, delay);
    }
  };
}
