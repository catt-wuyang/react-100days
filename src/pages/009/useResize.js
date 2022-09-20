import React, { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

function useResize() {
  const [size, setSize] = useState({
    width: "",
    height: "",
  });

  const resizeHandle = useThrottle(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();

    return () => window.removeEventListener("resize", resizeHandle);
  }, []);

  return size;
}

export default useResize;
