import React, { useState, useEffect, useRef, useCallback } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const ref = useRef(count);

  const fetch = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setCount(142);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch();

    // ref.current = count;
    // setTimeout(() => {
    //   console.log(count);
    //   console.log(ref.current); // current lastest count
    // }, 2000);

    return () => console.log("clean", count);
  }, [fetch]);

  function onChangeCount(type) {
    const prevCount = count;
    if (prevCount === 0 && type === "sub") return;
    const newCount = type === "plus" ? prevCount + 1 : prevCount - 1;
    setCount(newCount);
  }

  // ref.current display prev count value
  return (
    <div>
      {!loading ? (
        <div>
          <div>count:{count}</div>
          <div>prevCount:{ref.current}</div>
          <button onClick={(type) => onChangeCount("plus")}>+</button>
          <button onClick={(type) => onChangeCount("sub")}>-</button>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Counter;
