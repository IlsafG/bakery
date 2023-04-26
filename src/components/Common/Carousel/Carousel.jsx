import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = ({ items, interval }) => {
  const [index, setIndex] = useState(0);
  const [className, setClassName] = useState("rAct");
  const [isVisible, setIsVisible] = useState("fade fade-out");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClassName((prevClassName) => {
        return prevClassName === "lAct" ? "rAct" : "lAct";
      });
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const VisId = setInterval(() => {
      setIsVisible((prevVis) => {
        return prevVis === "fade fade-out" ? "fade fade-in" : "fade fade-out";
      });
    }, 4500);

    return () => clearInterval(VisId);
  }, []);

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    // <div className="com">
    // <div className="leftBlock"></div>
    <div>
      <div className={className}>
        <span className={isVisible}>{items[index]}</span>
      </div>
      <div className="dotes">
        {items.map((item, dotIndex) => (
          <span
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            style={{
              cursor: "pointer",
              margin: "0 5px",
              font_size: index === dotIndex ? "40px" : "20px",
            }}
          >
            &bull;
          </span>
        ))}
      </div>
    </div>
    /* <div className="rightBlock"></div> */
    // </div>
  );
};

export default Carousel;
