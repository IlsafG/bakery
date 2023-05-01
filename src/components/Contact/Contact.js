import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
// import Cat from "../Common/Cat/Cat";

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="contact">
      <h2>{t("contacts.Tit")}</h2>
      <p>
        {t("contacts.Sv")} {t("contacts.Tl")}; Email: info@vkusnaytina.ru
      </p>
      {/* <Cat /> */}
    </section>
  );
}

export default Contact;
