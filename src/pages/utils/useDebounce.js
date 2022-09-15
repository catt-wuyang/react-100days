import React, { useRef } from "react";

export default function useDebounce(fn, delay = 500, isNow = false) {
  const timer = useRef(null);

  return (...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (isNow) {
      let now = !timer.current;
      timer.current = setTimeout(() => {
        timer.current = null;
      }, delay);
      if (now) {
        fn.call(this, ...args);
      }
    } else {
      timer.current = setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    }
  };
}
