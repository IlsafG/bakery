import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section id="hero" className="hero">
      <div className="rectangle">
        <h2>{t("hero.h2")}</h2>
        <p>{t("hero.disk")}</p>
        <a href="#menu" className="btn">
          {t("hero.order")}
        </a>
      </div>
    </section>
  );
}

export default Hero;
