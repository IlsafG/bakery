import React from "react";
import "./Menu.css";
import Slider from "../Common/PictureSlider/PictureSlider";
import { slides } from "./slides/slides";
function Menu() {
  return (
    <div>
      <section id="menu" className="menu">
        <Slider />
      </section>
    </div>
  );
}

export default Menu;
