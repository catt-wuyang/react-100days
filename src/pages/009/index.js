import "./style.css";
import React, { useState } from "react";
import useResize from "./useResize";

function ImageFlow() {
  const [images, setImages] = useState([]);
  const size = useResize();
  console.log(size);

  return (
    <div className="image-flow-wrap">
      {images.map((img, index) => {
        let heighStyle = {
          height: img.height,
        };
        return (
          <img
            key={`img_item_${index}`}
            className="image-item-block"
            src={img.url}
            style={heighStyle}
          />
        );
      })}
    </div>
  );
}

export default ImageFlow;
