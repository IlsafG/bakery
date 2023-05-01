import React from "react";
import "./About.css";
import Carousel from "../Common/Carousel/Carousel";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  return (
    <section id="about" className="about">
      <div className="pageWraper">
        <h2 className="title">{t("about.title")}</h2>
        <p>
          <Carousel
            items={[
              t("about.s1"),
              t("about.s2"),
              t("about.s3"),
              t("about.s4"),
              t("about.s5"),
              t("about.s6"),
              t("about.s7"),
            ]}
            interval={9000} // время в миллисекундах
          />
        </p>
      </div>
    </section>
  );
}

export default About;
