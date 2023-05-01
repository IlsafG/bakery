import React, { useState, useEffect } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const [show, setShow] = useState(true);
  const [lan, setlan] = useState("en");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else if (window.scrollY > lastScrollY) {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  const LanF = () => {
    if (lan == "ru") {
      setlan("en");
      changeLanguage("en");
    } else {
      setlan("ru");
      changeLanguage("ru");
    }
  };

  // alert(lan);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  if (typeof window !== "undefined") {
  }

  return (
    <header className={`active ${show && window.scrollY > 98 && "hidden"}`}>
      <div>
        <h1 className="Name">{t("header.h1")}</h1>
        {/* <h1>Пекарня "Вкуснятина"</h1> */}
        <nav>
          <ul>
            <li>
              <div className="innerColor">
                <a href="#hero">{t("header.hero")}</a>
              </div>
            </li>
            <li>
              <div className="innerColor">
                <a href="#about">{t("header.about")}</a>
              </div>
            </li>
            <li>
              <div className="innerColor">
                <a href="#menu">{t("header.menu")}</a>
              </div>
            </li>
            <li>
              <div className="innerColor">
                <a href="#contact">{t("header.contact")}</a>
              </div>
            </li>
            <li onClick={() => LanF()}>
              <div className="lan innerColor">{lan}</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
