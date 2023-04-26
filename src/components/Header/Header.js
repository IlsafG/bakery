import React, { useState, useEffect } from "react";
import "./Header.scss";

// document.documentElement.style.setProperty("--scrollY", window.scrollY);

// if (10 < window.scrollY < 409) {
//   document.documentElement.style.setProperty("--isFixed", "relative");
//   document.documentElement.style.setProperty("--isTop", "true");
//   alert("z nen");
// } else {
//   document.documentElement.style.setProperty("--isFixed", "sticky");
//   document.documentElement.style.setProperty("--isTop", "false");
// }

// var root = document.querySelector(":root");
// var rootStyles = getComputedStyle(root);
// var scrollY = rootStyles.getPropertyValue("--isTop");
// // root.style.setProperty("--scrollY", 20);
// alert(scrollY);

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <h1>Пекарня "Вкуснятина"</h1>
        <nav>
          <ul>
            <li>
              <a href="#hero">Главная</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#menu">Меню</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
