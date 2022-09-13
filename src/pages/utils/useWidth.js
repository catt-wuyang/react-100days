import React, { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

function ResponsiveComponnet() {
  const width = useWindowWidth();
  return <p>window width is {width}</p>;
}

export default ResponsiveComponnet;
