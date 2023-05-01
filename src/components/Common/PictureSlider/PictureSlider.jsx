import React, { useState } from "react";
import "./PictureSlider.scss";
import "../../Menu/slides/slides.module.scss";
import { useTranslation } from "react-i18next";

// onClick = alert("dsds");

const Slide = ({ content, active }) => (
  <div className={`slide ${active ? "activeSlide" : ""}`}>{content}</div>
);

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t, i18n } = useTranslation();

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const handleClick = (index) => {
    setCurrentSlide(index);
  };
  // alert(currentSlide);
  const slides = [
    {
      content: (
        <div>
          <div
            style={{
              display: 0 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t1")}
          </div>
          <div
            style={{
              display: 0 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t1")}</p>
                    <img src="/img/hleb.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P1")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 1 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t2")}
          </div>
          <div
            style={{
              display: 1 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t2")}</p>
                    <img src="/img/kru.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P2")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 2 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t3")}
          </div>
          <div
            style={{
              display: 2 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t3")}</p>
                    <img src="/img/pr.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 3 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t4")}
          </div>
          <div
            style={{
              display: 3 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t4")}</p>
                    <img src="/img/Ta.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 4 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t5")}
          </div>
          <div
            style={{
              display: 4 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t5")}</p>
                    <img src="/img/Pe.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P5")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 5 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t6")}
          </div>
          <div
            style={{
              display: 5 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t6")}</p>
                    <img src="/img/Ke.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P6")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 6 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t7")}
          </div>
          <div
            style={{
              display: 6 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t7")}</p>
                    <img src="/img/Ch.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P7")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div
            style={{
              display: 7 === currentSlide ? "none" : "flex",
            }}
            className="titleS"
          >
            {t("PS.t8")}
          </div>
          <div
            style={{
              display: 7 === currentSlide ? "flex" : "none",
            }}
            className="content"
          >
            <div
              className="image-parlax"
              ontouchstart="this.NameList.toggle('hover');"
            >
              <div className="image-container">
                <div
                  className="front-side"
                  style={{
                    backgroundImage: 'url("/public/img/hero.jpg")',
                  }}
                >
                  <div className="inner">
                    <p>{t("PS.t8")}</p>
                    <img src="/img/dr.png" />
                  </div>
                </div>
                <div className="back-side">
                  <div className="inner">
                    <p>{t("PS.P8")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    currentSlide,
    (
      <div className="slider">
        <div className="arrow" onClick={handlePreviousSlide}>
          <img
            style={{
              width: "50px",
            }}
            src="/img/arrow.svg"
          />
        </div>
        <div className="slides">
          {slides.map((slide, index) => (
            <span onClick={() => handleClick(index)}>
              <Slide
                key={index}
                content={slide.content}
                active={index === currentSlide}
              />
            </span>
          ))}
          <button
            onClick={() => {
              alert(t("PS.al"));
            }}
          >
            {t("PS.B")}
          </button>
        </div>
        <div className="arrow" onClick={handleNextSlide}>
          <img
            style={{
              width: "50px",
              transform: "scale(-1, 1)",
            }}
            src="/img/arrow.svg"
          />
        </div>
      </div>
    )
  );
};
export default Slider;
