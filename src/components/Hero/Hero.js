import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="rectangle">
        <h2>Добро пожаловать в нашу пекарню!</h2>
        <p>
          Мы предлагаем свежую выпечку, приготовленную с любовью и заботой о
          качестве.
        </p>
        <a href="#menu" className="btn">
          Заказать
        </a>
      </div>
    </section>
  );
}

export default Hero;
