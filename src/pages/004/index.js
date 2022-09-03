import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

const Opt = function () {
  const [count, setCount] = useState(0);

  const changeHandle = useDebounce(
    () => {
      let newCount = count + 1;
      setCount(newCount);
    },
    500,
    true
  );

  const onSearch = useDebounce((e) => {
    console.log("搜索", e.target.value);
  }, 500);

  const onScroll = useThrottle(() => {
    console.log("scroll");
  }, 500);

  useEffect(() => {
    const scrollBlock = document.getElementById("scrollBlock");
    scrollBlock.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="block">
        <input className="input" placeholder="请输入" onChange={onSearch} />
      </div>
      <div className="block">
        <div className="area" onMouseMove={changeHandle}>
          {count}
        </div>
      </div>
      <div className="block">
        <div className="scroll-area" id="scrollBlock">
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default Opt;
