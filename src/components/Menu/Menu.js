import React from "react";
import "./Menu.css";
import Carousel from "../Common/PictureSlider/PictureSlider";

// var followMouse = document.createElement("div");
// followMouse.style.position = "absolute";
// followMouse.style.width = "10px";
// followMouse.style.height = "10px";
// followMouse.style.backgroundColor = "white";
// followMouse.style.borderRadius = "50%";

// document.body.appendChild(followMouse);

// document.onmousemove = function (e) {
//   followMouse.style.left = e.clientX - 5 + "px";
//   followMouse.style.top = e.clientY - 5 + "px";
// };

function Menu() {
  return (
    <section id="menu" className="menu">
      <Carousel />
      <a href="#" className="btn">
        Заказать
      </a>
    </section>
  );
}

export default Menu;
