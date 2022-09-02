import "./style.css";
import React, { useCallback, useEffect, useRef, useState } from "react";

const useDebounce = function (fn, delay = 500, dep = [], isNow = false) {
  const timer = useRef(null);

  return useCallback((...args) => {
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
  }, dep);
};

const Opt = function () {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    onSearch(value);
  }, [value]);

  const onSearch = useDebounce((value) => {
    console.log("搜索", value);
  }, 500);

  const changeHandle = useDebounce(
    () => {
      let newCount = count + 1;
      setCount(newCount);
    },
    500,
    [count],
    true
  );

  return (
    <div>
      <input
        className="input"
        value={value}
        placeholder="请输入"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="area" onMouseMove={() => changeHandle()}>
        {count}
      </div>
    </div>
  );
};

export default Opt;
