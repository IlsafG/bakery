import React, { useState, useEffect } from "react";
import "./PictureSlider.scss";
import Swiper from "swiper";
import "swiper/css";

const Carousel = ({ images }) => {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1,
  });
  return (
    <div class="page-wrap">
      <div id="home-slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-one">
              <div class="swiper-image" data-swiper-parallax-y="-20%">
                <div class="swiper-image-inner swiper-image-left swiper-image-one">
                  <h1 className="Title">
                    A <span class="emphasis">Breath</span>. <br />
                    <span>Of Fresh Air.</span>
                  </h1>
                  <p>Chapter I, page XV</p>
                </div>
              </div>
              <div class="swiper-image" data-swiper-parallax-y="35%">
                <div class="swiper-image-inner swiper-image-right swiper-image-two">
                  <p class="paragraph">
                    A Prophet sat in the market-place and told the fortunes of
                    all who cared to engage his services. Suddenly there came
                    running up one who told him that his house had been broken
                    into by thieves, and that they had made off with everything
                    they could lay hands on.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-two">
              <div class="swiper-image" data-swiper-parallax-y="-20%">
                <div class="swiper-image-inner swiper-image-left swiper-image-three">
                  <h1 className="Title">
                    The <span class="emphasis">Drop</span>. <br />
                    <span>Of Eternal life.</span>
                  </h1>
                  <p>Chapter II, page VII</p>
                </div>
              </div>
              <div class="swiper-image" data-swiper-parallax-y="35%">
                <div class="swiper-image-inner swiper-image-right swiper-image-four">
                  <p class="paragraph">
                    A thirsty Crow found a Pitcher with some water in it, but so
                    little was there that, try as she might, she could not reach
                    it with her beak, and it seemed as though she would die of
                    thirst within sight of the remedy.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-three">
              <div class="swiper-image" data-swiper-parallax-y="-20%">
                <div class="swiper-image-inner swiper-image-left swiper-image-five">
                  <h1 className="Title">
                    A <span class="emphasis">Sense</span>. <br />
                    <span>Of Things to Come.</span>
                  </h1>
                  <p>Chapter III, page XI</p>
                </div>
              </div>
              <div class="swiper-image" data-swiper-parallax-y="35%">
                <div class="swiper-image-inner swiper-image-right swiper-image-six">
                  <p class="paragraph">
                    Every man carries Two Bags about with him, one in front and
                    one behind, and both are packed full of faults. The Bag in
                    front contains his neighbours’ faults, the one behind his
                    own. Hence it is that men do not see their own faults, but
                    never fail to see those of others.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;