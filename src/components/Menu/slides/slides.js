import React from "react";
import s from "./slides.module.scss";
import PictureSlides from "../../Common/PictureSlider/PictureSlider";

export const slides = [
  {
    content: (
      <div>
        <div className={s.title}>Хлеб</div>
        <div className={s.content}>
          <p>gdvabaerge</p>
        </div>
      </div>
    ),
  },
  { content: <div>Булочки </div> },
  { content: <div>Пироги </div> },
  { content: <div>Тарты </div> },
  { content: <div>Печенье </div> },
  { content: <div>Чизкейки </div> },
  { content: <div>Бисквиты </div> },
];
